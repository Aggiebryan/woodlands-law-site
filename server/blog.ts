import seedPosts from '../content/posts.json';
import categories from '../content/categories.json';
import sanitizeHtml from 'sanitize-html';
import { isEditor, type AccessEnv } from './auth';

type Entry = { slug: string; draft: string; published: string | null; revision: number; updated_at: string };
interface Statement { bind(...values: unknown[]): Statement; all<T>(): Promise<{results:T[]}>; first<T>():Promise<T|null>; run():Promise<{meta:{changes:number}}> }
export interface Env extends AccessEnv { DB?: {prepare(sql:string):Statement}; ASSETS: {fetch(request:Request):Promise<Response>} }
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export async function entries(env:Env) { return env.DB ? (await env.DB.prepare('SELECT slug, draft, published, revision, updated_at FROM blog_entries').all<Entry>()).results : []; }
export async function publishedPosts(env:Env) {
 const merged=new Map(seedPosts.map(p=>[p.slug,p]));
 for(const entry of await entries(env)) {if(entry.published)merged.set(entry.slug,JSON.parse(entry.published));else merged.delete(entry.slug);}
 return [...merged.values()].sort((a,b)=>b.date.localeCompare(a.date));
}
export const cleanArticle=(html:string)=>sanitizeHtml(html,{allowedTags:[...sanitizeHtml.defaults.allowedTags,'img','figure','figcaption','h1','h2','span','iframe'],allowedAttributes:{a:['href','title','target','rel'],img:['src','alt','width','height','loading'],iframe:['src','title','width','height','loading','allowfullscreen'], '*':['class'], td:['colspan','rowspan'],th:['colspan','rowspan']},allowedIframeHostnames:['www.youtube.com','www.youtube-nocookie.com'],allowedSchemes:['http','https','mailto','tel'],allowProtocolRelative:false,transformTags:{a:sanitizeHtml.simpleTransform('a',{rel:'noopener noreferrer'})}});
function cleanPost(input:any,slug:string,id:number) {
 if(typeof input?.title?.rendered!=='string'||!input.title.rendered.trim())throw new Error('Enter a title.');
 if(typeof input?.content?.rendered!=='string'||input.content.rendered.length>500000)throw new Error('Article content is invalid or too long.');
 const selected=(Array.isArray(input.categories)?input.categories:[]).filter((id:unknown)=>Number.isInteger(id)&&Object.hasOwn(categories,String(id)));
 if(typeof input.date!=='string'||!Number.isFinite(Date.parse(input.date)))throw new Error('Choose a valid publication date.');
 const safeText=(s:string)=>sanitizeHtml(s,{allowedTags:[],allowedAttributes:{}});
 const post:any={id,slug,date:input.date,title:{rendered:safeText(input.title.rendered).slice(0,250)},excerpt:{rendered:cleanArticle(String(input.excerpt?.rendered||'').slice(0,2000))},content:{rendered:cleanArticle(input.content.rendered)},categories:selected,category_names:selected.map((id:number)=>(categories as Record<string,string>)[id]),_embedded:{}};
 const media=input._embedded?.['wp:featuredmedia']?.[0];
 if(media?.source_url && (/^\/blog-media\/[a-zA-Z0-9._-]+$/.test(media.source_url)||/^\/api\/blog\/media\/[a-f0-9-]+$/.test(media.source_url)||/^https:\/\//.test(media.source_url)))post._embedded['wp:featuredmedia']=[{source_url:media.source_url,alt_text:safeText(String(media.alt_text||''))}];
 const author=input._embedded?.author?.[0]?.name;if(author)post._embedded.author=[{name:safeText(String(author)).slice(0,150)}];
 return post;
}
export async function handleApi(request:Request,env:Env):Promise<Response> {
 const url=new URL(request.url);
 if(url.pathname==='/api/blog/posts' && request.method==='GET')return json(await publishedPosts(env));
 if(url.pathname.startsWith('/api/blog/media/') && request.method==='GET') {
  const id=url.pathname.slice('/api/blog/media/'.length);
  if(!/^[a-f0-9-]{36}$/.test(id)||!env.DB)return json({error:'Image not found'},404);
  const media=await env.DB.prepare('SELECT bytes, content_type FROM blog_media WHERE id = ?').bind(id).first<{bytes:ArrayBuffer|number[];content_type:string}>();
  if(!media)return json({error:'Image not found'},404);
  return new Response(new Uint8Array(media.bytes as ArrayBuffer),{headers:{'Content-Type':media.content_type,'Cache-Control':'public, max-age=31536000, immutable','X-Content-Type-Options':'nosniff'}});
 }
 if(!url.pathname.startsWith('/api/blog/admin'))return json({error:'Not found'},404);
 if(!await isEditor(request,env))return json({error:'Sign in with your @woodlands.law email address.'},403);
 if(!env.DB)return json({error:'Blog storage is awaiting activation.'},503);
 if(url.pathname==='/api/blog/admin/media' && request.method==='POST') {
  if(request.headers.get('Origin')!==url.origin)return json({error:'This request must come from the editor.'},403);
  const type=request.headers.get('Content-Type')||'';
  if(!['image/jpeg','image/png','image/webp'].includes(type))return json({error:'Choose a JPEG, PNG, or WebP image.'},415);
  const buffer=await boundedBody(request,1000000);if(!buffer)return json({error:'Choose an image smaller than 1 MB.'},413);
  const bytes=new Uint8Array(buffer);
  const valid=type==='image/jpeg'?bytes[0]===255&&bytes[1]===216&&bytes[2]===255:type==='image/png'?bytes.slice(0,8).join(',')==='137,80,78,71,13,10,26,10':new TextDecoder().decode(bytes.slice(0,4))==='RIFF'&&new TextDecoder().decode(bytes.slice(8,12))==='WEBP';
  if(!valid)return json({error:'This file is not a supported image.'},400);
  const id=crypto.randomUUID();await env.DB.prepare('INSERT INTO blog_media (id, content_type, bytes, created_at) VALUES (?, ?, ?, ?)').bind(id,type,buffer,new Date().toISOString()).run();
  return json({url:`/api/blog/media/${id}`},201);
 }
 if(url.pathname==='/api/blog/admin' && request.method==='GET') {
  const merged=new Map(seedPosts.map(p=>[p.slug,{post:p,revision:0,published:true,hasDraft:false}]));
  for(const e of await entries(env))merged.set(e.slug,{post:JSON.parse(e.draft),revision:e.revision,published:!!e.published,hasDraft:e.draft!==e.published});
  return json([...merged.values()].sort((a,b)=>b.post.date.localeCompare(a.post.date)));
 }
 if(request.method!=='PUT')return json({error:'Method not allowed'},405);
 if(request.headers.get('Origin')!==url.origin || request.headers.get('Sec-Fetch-Site')==='cross-site')return json({error:'This request must come from the editor.'},403);
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))return json({error:'Expected JSON'},415);
 const bytes=await boundedBody(request,600000);if(!bytes)return json({error:'Article is too large'},413);const body=new TextDecoder().decode(bytes);
 let input:any;try{input=JSON.parse(body);}catch{return json({error:'Invalid request'},400);}
 const slug=input.post?.slug;
 if(typeof slug!=='string'||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)||slug.length>200)return json({error:'Use a short URL containing lowercase letters, numbers, and hyphens.'},400);
 if(!['draft','publish','unpublish'].includes(input.action))return json({error:'Invalid action'},400);
 const existing=await env.DB.prepare('SELECT slug, draft, published, revision, updated_at FROM blog_entries WHERE slug = ?').bind(slug).first<Entry>();
 const seed=seedPosts.find(p=>p.slug===slug);
 if((existing?.revision||0)!==input.revision)return json({error:'This article changed in another session. Reload it before saving.'},409);
 if(!existing && seed && input.post.id!==seed.id)return json({error:'That article URL already exists.'},409);
 let post;try{post=cleanPost(input.post,slug,existing?JSON.parse(existing.draft).id:seed?.id||Date.now());}catch(e){return json({error:(e as Error).message},400);}
 const draft=JSON.stringify(post);const published=input.action==='publish'?draft:input.action==='unpublish'?null:existing?existing.published:seed?JSON.stringify(seed):null;
 const now=new Date().toISOString();
 if(existing) {
  const result=await env.DB.prepare('UPDATE blog_entries SET draft = ?, published = ?, revision = revision + 1, updated_at = ? WHERE slug = ? AND revision = ?').bind(draft,published,now,slug,input.revision).run();
  if(result.meta.changes!==1)return json({error:'This article changed in another session. Reload it before saving.'},409);
 } else {
  const result=await env.DB.prepare('INSERT INTO blog_entries (slug, draft, published, revision, updated_at) VALUES (?, ?, ?, 1, ?) ON CONFLICT(slug) DO NOTHING').bind(slug,draft,published,now).run();
  if(result.meta.changes!==1)return json({error:'That article URL was just saved by another session. Reload the editor.'},409);
 }
 return json({post,revision:input.revision+1,published:!!published,hasDraft:draft!==published});
}
export async function boundedBody(request:Request,limit:number):Promise<ArrayBuffer|null> {
 if(Number(request.headers.get('Content-Length'))>limit)return null;
 const reader=request.body?.getReader();if(!reader)return new ArrayBuffer(0);
 const chunks:Uint8Array[]=[];let length=0;
 while(true){const {done,value}=await reader.read();if(done)break;length+=value.length;if(length>limit){await reader.cancel();return null;}chunks.push(value);}
 const data=new Uint8Array(length);let offset=0;for(const chunk of chunks){data.set(chunk,offset);offset+=chunk.length;}return data.buffer;
}

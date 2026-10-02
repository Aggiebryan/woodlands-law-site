import { Link } from "react-router-dom";
import '../blog-editor.css';
import { blogText as text } from '@/lib/blog-text';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { initialCategories, type WordPressPost } from '@/services/wordPressService';
import { Plus, Save, ArrowUpRight, Bold, Italic, List, ListOrdered } from 'lucide-react';
type Entry={post:WordPressPost;revision:number;published:boolean;hasDraft:boolean};
const BlogEditorPage=()=>{
 const [items,setItems]=useState<Entry[]>([]),[current,setCurrent]=useState<Entry|null>(null),[search,setSearch]=useState(''),[message,setMessage]=useState(''),[busy,setBusy]=useState(false),[dirty,setDirty]=useState(false),[loaded,setLoaded]=useState(false),[access,setAccess]=useState(true);
 const editor=useRef<HTMLDivElement>(null);
 const [preview,setPreview]=useState(false);
 const [pendingAction,setPendingAction]=useState<'publish'|'unpublish'|null>(null);
 const [pendingEntry,setPendingEntry]=useState<Entry|null>(null);
 const [linkOpen,setLinkOpen]=useState(false),[linkUrl,setLinkUrl]=useState('');
 const selectedRange=useRef<Range|null>(null);
 const [previewHtml,setPreviewHtml]=useState('');
 const upload=async(file?:File)=>{
  if(!file||!current)return;
  if(file.size>1000000){setMessage('Choose a JPEG, PNG, or WebP image smaller than 1 MB.');return;}
  setBusy(true);setMessage('Uploading image…');
  try{const response=await fetch('/api/blog/admin/media',{method:'POST',headers:{'Content-Type':file.type},body:file});const data=await response.json();if(!response.ok)throw new Error(data.error||'Image upload failed.');update({_embedded:{...current.post._embedded,'wp:featuredmedia':[{source_url:data.url,alt_text:''}]}});setMessage('Image uploaded. Save the article to keep it.');}catch(error){setMessage((error as Error).message);}finally{setBusy(false);}
 };
 useEffect(()=>{fetch('/api/blog/admin').then(async r=>{if(r.status===403){setAccess(false);throw new Error('Sign in with the authorized editor account.');}if(!r.ok)throw new Error('The editor could not be loaded. Please reload this page.');return r.json();}).then(setItems).catch(e=>setMessage(e.message)).finally(()=>setLoaded(true));},[]);
 useEffect(()=>{const listener=(e:BeforeUnloadEvent)=>{if(dirty){e.preventDefault();e.returnValue='';}};window.addEventListener('beforeunload',listener);return()=>window.removeEventListener('beforeunload',listener);},[dirty]);

 const choose=(entry:Entry,discard=false)=>{if(busy)return;if(dirty&&!discard){setPendingEntry(entry);return;}setPendingEntry(null);setPendingAction(null);setPreview(false);setCurrent(structuredClone(entry));setDirty(false);setMessage('');if(editor.current)editor.current.innerHTML=entry.post.content?.rendered||'';};
 useEffect(()=>{if(editor.current)editor.current.innerHTML=current?.post.content?.rendered||'';},[current?.post.id]);
 const update=(patch:Partial<WordPressPost>)=>{setCurrent(c=>c?{...c,post:{...c.post,...patch}}:null);setDirty(true);};
 const newPost=()=>choose({post:{id:Date.now(),slug:'',date:new Date().toISOString(),title:{rendered:''},excerpt:{rendered:''},content:{rendered:''},categories:[],_embedded:{author:[{name:'The Woodlands Law Firm'}]}},revision:0,published:false,hasDraft:true});
 const save=async(action:'draft'|'publish'|'unpublish',confirmed=false)=>{
  if(!current)return;
  if(action!=='draft'&&!confirmed){setPendingAction(action);return;}
  setPendingAction(null);
  setBusy(true);setMessage('');
  try{const post={...current.post,content:{rendered:editor.current?.innerHTML||''}};const r=await fetch('/api/blog/admin',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({post,revision:current.revision,action})});const data=await r.json();if(!r.ok)throw new Error(data.error||'Could not save the article.');setCurrent(data);setItems(all=>[data,...all.filter(p=>p.post.slug!==data.post.slug)]);setDirty(false);setMessage(action==='publish'?'Article published.':action==='unpublish'?'Article moved to drafts.':'Draft saved. The published article has not changed.');}catch(e){setMessage((e as Error).message);}finally{setBusy(false);}
 };
 const format=(command:string,value?:string)=>{editor.current?.focus();document.execCommand(command,false,value);setDirty(true);};
 return <div className="blog-editor-page">
  <Helmet><title>Blog Editor | The Woodlands Law Firm</title><meta name="robots" content="noindex,nofollow" /></Helmet>
  <header className="editor-heading"><div><p className="editor-kicker">PRIVATE EDITOR</p><h1>Your articles.</h1><p>Write, save drafts, and publish to your website.</p><a href="/cdn-cgi/access/logout" className="underline">Sign out</a></div><Button onClick={newPost} disabled={!loaded||!access}><Plus /> New article</Button></header>
  <p role="status" className="editor-status">{message||(!loaded?'Loading your articles…':dirty?'Unsaved changes':'')}</p>
  {pendingAction&&<div className="editor-confirm" role="alert"><p>{pendingAction==='publish'?'Publish this version for website visitors?':'Remove this article from the public blog and keep it as a draft?'}</p><Button onClick={()=>save(pendingAction,true)}>{pendingAction==='publish'?'Confirm publish':'Confirm move to drafts'}</Button><Button variant="outline" onClick={()=>setPendingAction(null)}>Cancel</Button></div>}
  {pendingEntry&&<div className="editor-confirm" role="alert"><p>Discard unsaved changes and open the other article?</p><Button onClick={()=>choose(pendingEntry,true)}>Discard changes</Button><Button variant="outline" onClick={()=>setPendingEntry(null)}>Keep writing</Button></div>}
  {!access?<a className="firm-button" href="/admin/blog" target="_top">Sign in with your firm email</a>:<div className="editor-layout">
   <aside className="editor-articles"><label htmlFor="article-search">Find an article</label><Input id="article-search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search titles" />
   <div className="article-list">{items.filter(e=>text(e.post.title.rendered).toLowerCase().includes(search.toLowerCase())).map(entry=><button key={entry.post.slug} className={current?.post.slug===entry.post.slug?'selected':''} onClick={()=>choose(entry)}><strong>{text(entry.post.title.rendered)}</strong><span>{entry.published?'Published':'Draft'}{entry.published&&entry.hasDraft?' · Changes saved as draft':''}</span></button>)}</div></aside>
   <section className="editor-document">{!current?<div className="editor-empty"><h2>Select an article or start a new one.</h2><p>Your imported articles are ready to edit. Drafts remain private until you publish.</p></div>:<>
    <div className="editor-document-actions"><span>{current.published?'Published article':'Draft article'}</span><div><Button variant="outline" disabled={busy} onClick={()=>save('draft')}><Save /> Save draft</Button><Button disabled={busy} onClick={()=>save('publish')}>{busy?'Saving…':'Publish'} <ArrowUpRight /></Button></div></div>
    <label htmlFor="post-title">Title</label><Input id="post-title" value={text(current.post.title.rendered)} onChange={e=>{const title=e.target.value;update({title:{rendered:title},...(!current.revision&&!items.some(i=>i.post.id===current.post.id)?{slug:title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}:{} )});}} />
    <label htmlFor="post-slug">Article address</label><Input id="post-slug" disabled={!!current.revision||items.some(i=>i.post.id===current.post.id)} value={current.post.slug} onChange={e=>update({slug:e.target.value})} /><p className="editor-help">/blog/{current.post.slug||'your-article'}{current.revision||items.some(i=>i.post.id===current.post.id)?' · Kept unchanged to preserve existing links.':''}</p>
    <label htmlFor="post-excerpt">Short introduction</label><Textarea id="post-excerpt" value={text(current.post.excerpt.rendered)} onChange={e=>update({excerpt:{rendered:e.target.value}})} />
    <label htmlFor="post-date">Article date</label><Input id="post-date" type="date" value={current.post.date.slice(0,10)} onChange={e=>update({date:e.target.value?e.target.value+'T12:00:00':''})} /><p className="editor-help">This is the displayed article date. Publish makes the article visible immediately.</p>
    <label htmlFor="post-author">Author</label><Input id="post-author" value={current.post._embedded?.author?.[0]?.name||''} onChange={e=>update({_embedded:{...current.post._embedded,author:[{name:e.target.value}]}})} />
    <label htmlFor="post-image">Featured image</label><input id="post-image" type="file" accept="image/jpeg,image/png,image/webp" disabled={busy} onChange={e=>{void upload(e.target.files?.[0]);e.target.value='';}} /><p className="editor-help">JPEG, PNG, or WebP. Maximum 1 MB.</p>
    {current.post._embedded?.['wp:featuredmedia']?.[0]&&<div><img className="editor-image" src={current.post._embedded['wp:featuredmedia'][0].source_url} alt={current.post._embedded['wp:featuredmedia'][0].alt_text||''} /><label htmlFor="image-description">Image description</label><Input id="image-description" value={current.post._embedded['wp:featuredmedia'][0].alt_text||''} onChange={e=>update({_embedded:{...current.post._embedded,'wp:featuredmedia':[{...current.post._embedded['wp:featuredmedia'][0],alt_text:e.target.value}]}})} /><Button variant="outline" onClick={()=>update({_embedded:{...current.post._embedded,'wp:featuredmedia':[]}})}>Remove image from article</Button></div>}
    <fieldset className="editor-categories"><legend>Categories</legend>{Object.entries(initialCategories).map(([id,name])=><label key={id}><Checkbox checked={current.post.categories.includes(Number(id))} onCheckedChange={checked=>update({categories:checked?[...current.post.categories,Number(id)]:current.post.categories.filter(c=>c!==Number(id))})} />{name}</label>)}</fieldset>
    <label id="article-body-label">Article</label><div className="editor-toolbar" role="toolbar" aria-label="Text formatting">{[['bold',Bold,'Bold'],['italic',Italic,'Italic'],['insertUnorderedList',List,'Bulleted list'],['insertOrderedList',ListOrdered,'Numbered list']].map(([command,Icon,label])=>{const Symbol=Icon as typeof Bold;return <Button key={String(command)} variant="outline" size="icon" aria-label={String(label)} onMouseDown={e=>e.preventDefault()} onClick={()=>format(String(command))}><Symbol /></Button>;})}<Button variant="outline" onMouseDown={e=>e.preventDefault()} onClick={()=>format('formatBlock','h2')}>Heading</Button><Button variant="outline" onMouseDown={e=>e.preventDefault()} onClick={()=>format('formatBlock','p')}>Paragraph</Button></div>
    <div className="editor-preview-controls"><Button variant="outline" onMouseDown={e=>e.preventDefault()} onClick={()=>{const selection=window.getSelection();selectedRange.current=selection?.rangeCount&&editor.current?.contains(selection.anchorNode)?selection.getRangeAt(0).cloneRange():null;setLinkUrl('');setLinkOpen(true);}}>Add link</Button><Button variant="outline" onClick={()=>{setPreviewHtml(editor.current?.innerHTML||'');setPreview(!preview);}}>{preview?'Continue writing':'Preview article'}</Button></div>
    {linkOpen&&<div className="editor-confirm"><label htmlFor="article-link">Link address</label><Input id="article-link" type="url" placeholder="https://example.com" value={linkUrl} onChange={e=>setLinkUrl(e.target.value)} /><Button disabled={!/^(https:\/\/|mailto:)/i.test(linkUrl)} onClick={()=>{editor.current?.focus();const selection=window.getSelection();if(selectedRange.current){selection?.removeAllRanges();selection?.addRange(selectedRange.current);}format('createLink',linkUrl);setLinkOpen(false);}}>Insert link</Button><Button variant="outline" onClick={()=>setLinkOpen(false)}>Cancel link</Button></div>}
    <div ref={editor} hidden={preview} contentEditable={!busy} suppressContentEditableWarning role="textbox" aria-multiline="true" aria-labelledby="article-body-label" className="article-body prose max-w-none" onInput={()=>setDirty(true)} onPaste={e=>{e.preventDefault();document.execCommand('insertText',false,e.clipboardData.getData('text/plain'));setDirty(true);}} />
    {preview&&<article className="article-body prose max-w-none"><h1>{text(current.post.title.rendered)}</h1><div dangerouslySetInnerHTML={{__html:previewHtml}} /></article>}
    {current.published&&<div className="editor-bottom"><a href={'/blog/'+current.post.slug} target="_blank" rel="noreferrer">View published article ↗</a><Button variant="outline" disabled={busy} onClick={()=>save('unpublish')}>Move to drafts</Button></div>}
   </>}</section>
  </div>}
 </div>;
};
export default BlogEditorPage;


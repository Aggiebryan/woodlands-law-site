import importedPosts from '../../content/posts.json';
import importedEvents from '../../content/events.json';
import categories from '../../content/categories.json';
import { selectEvents } from '@/lib/event-date';
interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls?: {
        [key: string]: string;
      };
    }>;
  };
  categories: number[];
  category_names?: string[];
  tags?: number[];
}

// Updated interface for WordPress Events
interface WordPressEvent {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls?: {
        [key: string]: string;
      };
    }>;
  };
  // Custom fields are now directly on the object (thanks to register_rest_field)
  event_date?: string;
  event_time?: string;
  event_end_time?: string;
  event_location?: string;
  registration_link?: string;
}

interface Category {
  id: number;
  name: string;
  count: number;
}


export const initialPosts = importedPosts as WordPressPost[];
export const initialEvents = importedEvents as WordPressEvent[];
export const initialCategories = categories as Record<number,string>;
export function getInitialPosts(): WordPressPost[] {
 if(typeof window !== 'undefined' && (window as any).__BLOG_POSTS__) return (window as any).__BLOG_POSTS__;
 return initialPosts;
}
export async function allPosts(): Promise<WordPressPost[]> {
 if (typeof window === 'undefined') return initialPosts;
 const response = await fetch('/api/blog/posts');
 if (!response.ok) throw new Error('Articles could not be loaded. Please try again.');
 return response.json();
}
export const fetchPosts = async(page=1,perPage=6,categoryIds?:number[]) => {
 let posts=await allPosts();
 if(categoryIds?.length) posts=posts.filter(p=>p.categories.some(id=>categoryIds.includes(id)));
 return { posts:posts.slice((page-1)*perPage,page*perPage),totalPages:Math.max(1,Math.ceil(posts.length/perPage)) };
};
export const fetchCategories=async(ids?:number[]) => Object.fromEntries(Object.entries(initialCategories).filter(([id])=>!ids?.length||ids.includes(Number(id))));
export const fetchPostBySlug=async(slug:string) => { const post=(await allPosts()).find(p=>p.slug===slug);if(!post)throw new Error('Article not found');return post; };
export const fetchRelatedPosts=async(categoryId:number,excludePostId:number,limit=3) => (await allPosts()).filter(p=>p.id!==excludePostId&&p.categories.includes(categoryId)).slice(0,limit);
export function getInitialEvents(): WordPressEvent[] {
 if(typeof window !== 'undefined' && (window as any).__BLOG_EVENTS__) return (window as any).__BLOG_EVENTS__;
 return initialEvents;
}
export async function allEvents(): Promise<WordPressEvent[]> {
 if(typeof window === 'undefined') return initialEvents;
 const response = await fetch('/api/blog/events');
 if(!response.ok) throw new Error('Events could not be loaded. Please try again.');
 return response.json();
}
export const fetchEvents=async(page=1,perPage=10,upcoming=true) => { const events=selectEvents(await allEvents(),upcoming);return {events:events.slice((page-1)*perPage,page*perPage),totalPages:Math.max(1,Math.ceil(events.length/perPage))}; };
export const fetchEventBySlug=async(slug:string) => {const event=(await allEvents()).find(e=>e.slug===slug);if(!event)throw new Error('Event not found');return event;};
export type { WordPressPost,WordPressEvent };

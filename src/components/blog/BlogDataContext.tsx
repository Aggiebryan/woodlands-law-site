import { createContext, useContext, type ReactNode } from 'react';
import { getInitialPosts, getInitialEvents, type WordPressPost, type WordPressEvent } from '@/services/wordPressService';

const BlogData = createContext<WordPressPost[] | null>(null);
export const BlogDataProvider = ({ posts, children }: { posts: WordPressPost[]; children: ReactNode }) => <BlogData.Provider value={posts}>{children}</BlogData.Provider>;
export const useInitialPosts = () => useContext(BlogData) ?? getInitialPosts();
const EventData = createContext<WordPressEvent[] | null>(null);
export const EventDataProvider = ({ events, children }: { events: WordPressEvent[]; children: ReactNode }) => <EventData.Provider value={events}>{children}</EventData.Provider>;
export const useInitialEvents = () => useContext(EventData) ?? getInitialEvents();

import { createContext, useContext, type ReactNode } from 'react';
import { getInitialPosts, type WordPressPost } from '@/services/wordPressService';

const BlogData = createContext<WordPressPost[] | null>(null);
export const BlogDataProvider = ({ posts, children }: { posts: WordPressPost[]; children: ReactNode }) => <BlogData.Provider value={posts}>{children}</BlogData.Provider>;
export const useInitialPosts = () => useContext(BlogData) ?? getInitialPosts();

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppShell from './AppShell';
import { BlogDataProvider } from './components/blog/BlogDataContext';
import { initialPosts, type WordPressPost } from './services/wordPressService';

export function render(url: string, posts: WordPressPost[] = initialPosts) {
  const helmetContext = {} as { helmet: HelmetServerState };
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <BlogDataProvider posts={posts}><AppShell /></BlogDataProvider>
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return { html, helmet };
}

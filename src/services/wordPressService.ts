
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

interface Category {
  id: number;
  name: string;
  count: number;
}

// Base URL for WordPress API
const WP_API_BASE = "https://woodlands.law/blog/wp-json/wp/v2";

export const fetchPosts = async (
  page: number = 1, 
  perPage: number = 6, 
  categoryIds?: number[]
): Promise<{
  posts: WordPressPost[];
  totalPages: number;
}> => {
  let url = `${WP_API_BASE}/posts?_embed&per_page=${perPage}&page=${page}`;
  
  if (categoryIds?.length) {
    url += `&categories=${categoryIds.join(',')}`;
  }
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
  const posts = await response.json();

  // Get unique category IDs from all posts
  const uniqueCategoryIds = new Set<number>();
  posts.forEach((post: WordPressPost) => {
    post.categories.forEach(catId => uniqueCategoryIds.add(catId));
  });
  
  // Fetch category data
  const categories = await fetchCategories(Array.from(uniqueCategoryIds));
  
  // Enhance posts with category names
  const enhancedPosts = posts.map((post: WordPressPost) => {
    return {
      ...post,
      category_names: post.categories.map(catId => categories[catId] || 'Uncategorized')
    };
  });
  
  return {
    posts: enhancedPosts,
    totalPages
  };
};

export const fetchCategories = async (ids?: number[]): Promise<Record<number, string>> => {
  let url = `${WP_API_BASE}/categories?per_page=100`;
  
  if (ids?.length) {
    url += `&include=${ids.join(',')}`;
  }
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }
  
  const categories: Category[] = await response.json();
  
  return categories.reduce((map: Record<number, string>, cat: Category) => {
    map[cat.id] = cat.name;
    return map;
  }, {});
};

export const fetchPostBySlug = async (slug: string): Promise<WordPressPost> => {
  const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`);
  }
  
  const posts = await response.json();
  
  if (posts.length === 0) {
    throw new Error("Post not found");
  }
  
  const post = posts[0];
  
  // Enhance with category names
  if (post.categories.length > 0) {
    const categories = await fetchCategories(post.categories);
    post.category_names = post.categories.map(catId => categories[catId] || 'Uncategorized');
  }
  
  return post;
};

export const fetchRelatedPosts = async (categoryId: number, excludePostId: number, limit: number = 3): Promise<WordPressPost[]> => {
  const response = await fetch(`${WP_API_BASE}/posts?categories=${categoryId}&exclude=${excludePostId}&_embed&per_page=${limit}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch related posts: ${response.status}`);
  }
  
  return await response.json();
};

export type { WordPressPost };

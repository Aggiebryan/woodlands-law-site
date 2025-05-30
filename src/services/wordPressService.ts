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

// Mock data for when the API is unavailable
const MOCK_POSTS: WordPressPost[] = [
  {
    id: 1,
    title: {
      rendered: "Estate Planning Essentials for Texas Families"
    },
    excerpt: {
      rendered: "Learn the fundamental components of estate planning that every Texas family should consider to protect their assets and loved ones."
    },
    content: {
      rendered: "<p>Estate planning is essential for ensuring your assets are distributed according to your wishes and your loved ones are protected after you're gone. This is especially true in Texas, where state laws regarding inheritance and probate have their own unique considerations.</p><p>In this article, we'll cover the essential estate planning documents every Texas family should have, including wills, trusts, powers of attorney, and advance directives.</p>"
    },
    date: "2025-04-15T10:30:00",
    slug: "estate-planning-essentials",
    categories: [1],
    category_names: ["Estate Planning"]
  },
  {
    id: 2,
    title: {
      rendered: "Business Formation: Choosing the Right Entity in Texas"
    },
    excerpt: {
      rendered: "Discover the pros and cons of different business entities in Texas, from LLCs to corporations, and how to choose the best structure for your new venture."
    },
    content: {
      rendered: "<p>Selecting the right business entity is one of the most important decisions you'll make when starting a business in Texas. The structure you choose affects everything from your personal liability to how you'll be taxed.</p><p>This guide examines the differences between sole proprietorships, partnerships, LLCs, and corporations in the context of Texas business law.</p>"
    },
    date: "2025-03-22T14:15:00",
    slug: "business-formation-guide",
    categories: [2],
    category_names: ["Business Planning"]
  },
  {
    id: 3,
    title: {
      rendered: "Understanding Insurance Bad Faith Claims in Texas"
    },
    excerpt: {
      rendered: "Has your insurance claim been wrongfully denied? Learn about bad faith insurance practices and how to protect your rights under Texas law."
    },
    content: {
      rendered: "<p>When insurance companies fail to honor legitimate claims or engage in deceptive practices, they may be acting in \"bad faith.\" Texas law provides specific protections for policyholders facing such situations.</p><p>In this article, we discuss the elements of an insurance bad faith claim in Texas, common examples of bad faith practices, and how our firm can help you recover the compensation you deserve.</p>"
    },
    date: "2025-02-10T09:45:00",
    slug: "insurance-bad-faith-claims",
    categories: [3],
    category_names: ["Insurance Litigation"]
  },
  {
    id: 4,
    title: {
      rendered: "Personal Injury Settlements: What to Expect"
    },
    excerpt: {
      rendered: "If you've been injured due to someone else's negligence, understanding the settlement process is crucial. Here's what you need to know about personal injury settlements in Texas."
    },
    content: {
      rendered: "<p>Most personal injury cases in Texas settle out of court, but navigating the settlement process can be complex. Insurance companies often try to minimize compensation, which is why having knowledgeable legal representation is essential.</p><p>This guide walks you through the typical personal injury settlement timeline, factors that affect settlement amounts, and strategies for maximizing your recovery.</p>"
    },
    date: "2025-01-18T11:20:00",
    slug: "personal-injury-settlements",
    categories: [4],
    category_names: ["Personal Injury"]
  },
  {
    id: 5,
    title: {
      rendered: "The Texas Deceptive Trade Practices Act: Consumer Protections"
    },
    excerpt: {
      rendered: "The DTPA provides strong protections for Texas consumers against fraudulent business practices. Learn how these laws can help if you've been misled by a company."
    },
    content: {
      rendered: "<p>The Texas Deceptive Trade Practices Act (DTPA) is one of the strongest consumer protection statutes in the nation. It prohibits a wide range of deceptive business practices and provides legal remedies for consumers who have been harmed.</p><p>This overview explains what practices are prohibited under the DTPA, the potential damages available to consumers, and how to pursue a claim if you've been victimized by deceptive practices.</p>"
    },
    date: "2024-12-05T15:30:00",
    slug: "texas-dtpa-overview",
    categories: [5],
    category_names: ["DTPA"]
  },
  {
    id: 6,
    title: {
      rendered: "Navigating Civil Litigation in Texas Courts"
    },
    excerpt: {
      rendered: "Civil litigation can be a lengthy and complex process. This guide helps you understand what to expect when pursuing or defending a civil case in Texas."
    },
    content: {
      rendered: "<p>Whether you're filing a lawsuit or defending against one, understanding the civil litigation process in Texas is crucial for protecting your interests. From the initial filing to discovery, settlement negotiations, and potentially trial, each stage requires careful planning and strategy.</p><p>This article provides an overview of the Texas civil litigation process, key deadlines, and what you can expect as your case progresses through the court system.</p>"
    },
    date: "2024-11-12T13:10:00",
    slug: "texas-civil-litigation-guide",
    categories: [6],
    category_names: ["Civil Litigation"]
  }
];

// Mock events for when the API is unavailable
const MOCK_EVENTS: WordPressEvent[] = [
  {
    id: 101,
    title: {
      rendered: "Estate Planning Workshop: Protecting Your Legacy"
    },
    excerpt: {
      rendered: "Join us for an informative workshop on estate planning fundamentals, including wills, trusts, and asset protection strategies under Texas law."
    },
    content: {
      rendered: "<p>This comprehensive workshop will cover the essential components of estate planning for Texas residents. Topics include creating effective wills, understanding different types of trusts, tax planning strategies, and protecting your assets for future generations.</p><p>Light refreshments will be provided. Registration is required due to limited seating.</p>"
    },
    date: "2025-06-01T10:00:00",
    slug: "estate-planning-workshop-june-2025",
    event_date: "2025-06-15",
    event_time: "18:00",
    event_end_time: "20:00",
    event_location: "The Woodlands Community Center, 5310 Research Forest Dr, The Woodlands, TX 77381",
    registration_link: "/schedule"
  },
  {
    id: 102,
    title: {
      rendered: "Business Owner Legal Summit: Protecting Your Enterprise"
    },
    excerpt: {
      rendered: "A comprehensive legal summit for business owners covering entity formation, contracts, employment law, and litigation prevention strategies."
    },
    content: {
      rendered: "<p>This full-day summit is designed for business owners who want to understand the legal landscape affecting their enterprises. We'll cover business formation, contract essentials, employment law compliance, and strategies to prevent costly litigation.</p><p>Includes continental breakfast, lunch, and networking opportunities with other business owners and legal professionals.</p>"
    },
    date: "2025-05-15T08:00:00",
    slug: "business-legal-summit-july-2025",
    event_date: "2025-07-22",
    event_time: "09:00",
    event_end_time: "16:00",
    event_location: "The Woodlands Waterway Marriott, 1601 Lake Robbins Dr, The Woodlands, TX 77380",
    registration_link: "/schedule"
  },
  {
    id: 103,
    title: {
      rendered: "Insurance Claims: Know Your Rights"
    },
    excerpt: {
      rendered: "Learn about your rights when dealing with insurance companies and what to do when claims are wrongfully denied or delayed."
    },
    content: {
      rendered: "<p>This informational session will help you understand your rights as a policyholder under Texas law. We'll discuss common insurance bad faith practices, the claims process, and when you may need legal representation.</p><p>This webinar format allows for interactive Q&A with our insurance litigation attorneys.</p>"
    },
    date: "2025-05-20T11:00:00",
    slug: "insurance-claims-webinar-august-2025",
    event_date: "2025-08-10",
    event_time: "12:00",
    event_end_time: "13:30",
    event_location: "Online Webinar (Zoom link provided upon registration)",
    registration_link: "/schedule"
  }
];

// Mock categories for when the API is unavailable
const MOCK_CATEGORIES: Record<number, string> = {
  1: "Estate Planning",
  2: "Business Planning",
  3: "Insurance Litigation",
  4: "Personal Injury",
  5: "DTPA",
  6: "Civil Litigation"
};

// Base URL for WordPress API
const WP_API_BASE = "https://woodlands.law/blog/wp-json/wp/v2";

// Flag to use mock data when API is down
let USE_MOCK_DATA = false;

export const fetchPosts = async (
  page: number = 1, 
  perPage: number = 6, 
  categoryIds?: number[]
): Promise<{
  posts: WordPressPost[];
  totalPages: number;
}> => {
  // First try the real API
  if (!USE_MOCK_DATA) {
    try {
      let url = `${WP_API_BASE}/posts?_embed&per_page=${perPage}&page=${page}`;
      
      if (categoryIds?.length) {
        url += `&categories=${categoryIds.join(',')}`;
      }
      
      const response = await fetch(url, { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      
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
    } catch (err) {
      console.error("WordPress API error, falling back to mock data:", err);
      USE_MOCK_DATA = true;  // Switch to mock data for future requests
    }
  }
  
  // If we get here, either USE_MOCK_DATA was true or the API request failed
  // Filter mock posts by category if needed
  let filteredPosts = [...MOCK_POSTS];
  if (categoryIds?.length) {
    filteredPosts = filteredPosts.filter(post => 
      post.categories.some(catId => categoryIds.includes(catId))
    );
  }
  
  // Simulate pagination
  const startIndex = (page - 1) * perPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(filteredPosts.length / perPage);
  
  return {
    posts: paginatedPosts,
    totalPages
  };
};

export const fetchEvents = async (
  page: number = 1,
  perPage: number = 10,
  upcoming: boolean = true
): Promise<{
  events: WordPressEvent[];
  totalPages: number;
}> => {
  // First try the real API
  if (!USE_MOCK_DATA) {
    try {
      let url = `${WP_API_BASE}/events?_embed&per_page=${perPage}&page=${page}`;
      
      // If upcoming events only, add date filter
      if (upcoming) {
        const today = new Date().toISOString().split('T')[0];
        url += `&meta_key=event_date&meta_value=${today}&meta_compare=>=`;
      }
      
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status}`);
      }

      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
      const events = await response.json();
      
      console.log("Fetched events from WordPress:", events); // Debug log
      
      return {
        events: events,
        totalPages
      };
    } catch (err) {
      console.error("WordPress API error, falling back to mock events:", err);
      USE_MOCK_DATA = true;  // Switch to mock data for future requests
    }
  }
  
  // If we get here, either USE_MOCK_DATA was true or the API request failed
  let filteredEvents = [...MOCK_EVENTS];
  
  // Filter for upcoming events if requested
  if (upcoming) {
    const today = new Date();
    filteredEvents = filteredEvents.filter(event => {
      const eventDate = new Date(event.event_date || event.date);
      return eventDate >= today;
    });
  }
  
  // Simulate pagination
  const startIndex = (page - 1) * perPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(filteredEvents.length / perPage);
  
  return {
    events: paginatedEvents,
    totalPages
  };
};

export const fetchEventBySlug = async (slug: string): Promise<WordPressEvent> => {
  // First try the real API
  if (!USE_MOCK_DATA) {
    try {
      const response = await fetch(`${WP_API_BASE}/events?slug=${slug}&_embed`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch event: ${response.status}`);
      }
      
      const events = await response.json();
      
      if (events.length === 0) {
        throw new Error("Event not found");
      }
      
      console.log("Fetched event by slug:", events[0]); // Debug log
      
      return events[0];
    } catch (err) {
      console.error("WordPress API error, falling back to mock event data:", err);
      USE_MOCK_DATA = true;  // Switch to mock data for future requests
    }
  }
  
  // If we get here, either USE_MOCK_DATA was true or the API request failed
  const mockEvent = MOCK_EVENTS.find(event => event.slug === slug);
  if (!mockEvent) {
    throw new Error("Event not found");
  }
  
  return mockEvent;
};

export const fetchCategories = async (ids?: number[]): Promise<Record<number, string>> => {
  // First try the real API
  if (!USE_MOCK_DATA) {
    try {
      let url = `${WP_API_BASE}/categories?per_page=100`;
      
      if (ids?.length) {
        url += `&include=${ids.join(',')}`;
      }
      
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status}`);
      }
      
      const categories: Category[] = await response.json();
      
      return categories.reduce((map: Record<number, string>, cat: Category) => {
        map[cat.id] = cat.name;
        return map;
      }, {});
    } catch (err) {
      console.error("WordPress API error, falling back to mock categories:", err);
      USE_MOCK_DATA = true;  // Switch to mock data for future requests
    }
  }
  
  // If we get here, either USE_MOCK_DATA was true or the API request failed
  if (ids?.length) {
    return ids.reduce((map: Record<number, string>, id: number) => {
      if (MOCK_CATEGORIES[id]) {
        map[id] = MOCK_CATEGORIES[id];
      }
      return map;
    }, {});
  }
  
  return MOCK_CATEGORIES;
};

export const fetchPostBySlug = async (slug: string): Promise<WordPressPost> => {
  // First try the real API
  if (!USE_MOCK_DATA) {
    try {
      const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      
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
    } catch (err) {
      console.error("WordPress API error, falling back to mock post data:", err);
      USE_MOCK_DATA = true;  // Switch to mock data for future requests
    }
  }
  
  // If we get here, either USE_MOCK_DATA was true or the API request failed
  const mockPost = MOCK_POSTS.find(post => post.slug === slug);
  if (!mockPost) {
    throw new Error("Post not found");
  }
  
  return mockPost;
};

export const fetchRelatedPosts = async (categoryId: number, excludePostId: number, limit: number = 3): Promise<WordPressPost[]> => {
  // First try the real API
  if (!USE_MOCK_DATA) {
    try {
      const response = await fetch(`${WP_API_BASE}/posts?categories=${categoryId}&exclude=${excludePostId}&_embed&per_page=${limit}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch related posts: ${response.status}`);
      }
      
      return await response.json();
    } catch (err) {
      console.error("WordPress API error, falling back to mock related posts:", err);
      USE_MOCK_DATA = true;  // Switch to mock data for future requests
    }
  }
  
  // If we get here, either USE_MOCK_DATA was true or the API request failed
  return MOCK_POSTS
    .filter(post => post.categories.includes(categoryId) && post.id !== excludePostId)
    .slice(0, limit);
};

export type { WordPressPost, WordPressEvent };
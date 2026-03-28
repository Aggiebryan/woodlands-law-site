const WP_API = 'https://woodlands.law/blog/wp-json/wp/v2';

const staticRoutes = [
  '/',
  '/our-team',
  '/services',
  '/about',
  '/trusts',
  '/schedule',
  '/news-events',
  '/attorney-advertising',
  '/privacy-policy',
  '/terms-of-service',
  '/insurance-glossary',
  '/sitemap',
  '/events',
  '/legal-tools/texas-civil-time-limits',

  // Attorney profiles
  '/team/gwendolyn-simpson',
  '/team/bryan-holman',
  '/team/courtney-fields',
  '/team/julie-dunlap',

  // Service detail pages
  '/service/insurance-litigation',
  '/service/personal-injury',
  '/service/civil-litigation',
  '/service/deceptive-trade-practices-act',
  '/service/business-planning',
  '/service/estate-planning',

  // Practice areas
  '/practice-areas/personal-injury',
  '/practice-areas/insurance-litigation',
  '/practice-areas/civil-litigation',
  '/practice-areas/deceptive-trade-practices-act',
  '/practice-areas/business-planning',
  '/practice-areas/estate-planning',

  // Texas DTPA resource pages
  '/texas-dtpa/what-qualifies-as-deceptive',
  '/texas-dtpa/false-verbal-statements',
  '/texas-dtpa/intent-required',
  '/texas-dtpa/misleading-advertising',
  '/texas-dtpa/failure-to-disclose',
  '/texas-dtpa/hidden-contract-terms',
  '/texas-dtpa/breach-of-contract',
  '/texas-dtpa/reliance-required',
  '/texas-dtpa/undisclosed-fees',
  '/texas-dtpa/who-is-a-consumer',
  '/texas-dtpa/can-a-business-sue',
  '/texas-dtpa/insurance-misrepresentations',
  '/texas-dtpa/contractor-poor-workmanship',
  '/texas-dtpa/car-dealer-misrepresentations',
  '/texas-dtpa/statute-of-limitations',
  '/texas-dtpa/pre-suit-notice',
  '/texas-dtpa/damages-available',
  '/texas-dtpa/treble-damages',
  '/texas-dtpa/attorneys-fees',
  '/texas-dtpa/settlement-offer-effect',
  '/texas-dtpa/common-defenses',
  '/texas-dtpa/personal-liability',
  '/texas-dtpa/where-to-file',
  '/texas-dtpa/class-actions',
  '/texas-dtpa/steps-before-filing',
  '/texas-dtpa/merger-integration-clause',
  '/texas-dtpa/as-is-clause',
  '/texas-dtpa/non-reliance-disclaimer',
  '/texas-dtpa/hidden-fees',
  '/texas-dtpa/bait-and-switch',
  '/texas-dtpa/financing-terms-apr',
  '/texas-dtpa/partial-business-use',
  '/texas-dtpa/homeowner-contractor',
  '/texas-dtpa/family-member-claim',
  '/texas-dtpa/car-buyer-undisclosed-damage',
  '/texas-dtpa/overcharging-unperformed-work',
  '/texas-dtpa/free-trial-auto-renewal',
];

async function fetchJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function getWordPressRoutes() {
  const routes = [];

  // Fetch all blog post slugs (paginated)
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const posts = await fetchJSON(
      `${WP_API}/posts?per_page=100&page=${page}&_fields=slug`
    );
    for (const p of posts) {
      routes.push(`/wp/${p.slug}`);
    }
    hasMore = posts.length === 100;
    page++;
  }

  // Fetch event slugs
  const events = await fetchJSON(
    `${WP_API}/events?per_page=100&_fields=slug`
  );
  for (const e of events) {
    routes.push(`/events/${e.slug}`);
  }

  // Fetch category IDs
  const cats = await fetchJSON(
    `${WP_API}/categories?per_page=100&_fields=id`
  );
  for (const c of cats) {
    routes.push(`/wp/category/${c.id}`);
  }

  return routes;
}

export async function getAllRoutes() {
  console.log('Fetching WordPress routes...');
  const wpRoutes = await getWordPressRoutes();
  console.log(`  Found ${wpRoutes.length} WordPress routes`);

  const allRoutes = [...staticRoutes, ...wpRoutes];
  console.log(`  Total routes to pre-render: ${allRoutes.length}`);
  return allRoutes;
}

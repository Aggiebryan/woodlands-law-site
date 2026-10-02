import fs from 'node:fs';

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

export async function getAllRoutes() {
 const posts=JSON.parse(fs.readFileSync(new URL('../content/posts.json',import.meta.url)));
 const events=JSON.parse(fs.readFileSync(new URL('../content/events.json',import.meta.url)));
 const categories=JSON.parse(fs.readFileSync(new URL('../content/categories.json',import.meta.url)));
 return [...new Set([...staticRoutes,'/blog',...posts.flatMap(p=>['/wp/'+p.slug,'/blog/'+p.slug]),...events.map(e=>'/events/'+e.slug),...Object.keys(categories).flatMap(id=>['/wp/category/'+id,'/blog/category/'+id])])];
}

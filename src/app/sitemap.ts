import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carlygage.com';

  // Honest lastmod dates — set to the date each page's content was last
  // meaningfully changed (from git history). Bump the relevant date when you
  // ship a real content update; do NOT use `new Date()` (that fakes freshness
  // on every build and Google learns to ignore it).
  const LOCATIONS_UPDATED = '2026-04-24'; // shared /locations/[city] template
  const SERVICE_UPDATED = '2026-04-24';   // service money pages

  // City slugs for location pages
  const cities = [
    'frisco',
    'southlake',
    'plano',
    'mckinney',
    'grapevine',
    'coppell',
    'colleyville',
    'highland-park',
    'prosper',
    'dallas',
    'highland-village',
    'trophy-club',
    'argyle'
  ];

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio/dallas-family-session`,
      lastModified: new Date('2026-01-14'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/dallas-maternity-session`,
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flower-mound-maternity-photographer`,
      lastModified: new Date(SERVICE_UPDATED),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/flower-mound-baby-announcement-photographer`,
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/portfolio/dallas-baby-announcement`,
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/dallas-mini-session`,
      lastModified: new Date('2026-01-14'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flower-mound-mini-sessions`,
      lastModified: new Date(SERVICE_UPDATED),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/newborn-baby-photographer-flower-mound`,
      lastModified: new Date(SERVICE_UPDATED),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
  ];

  // Location pages
  const locationPages = cities.map(city => ({
    url: `${baseUrl}/locations/${city}-family-photographer`,
    lastModified: new Date(LOCATIONS_UPDATED),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-photo-locations-southlake`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-photo-locations-dallas`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/murrell-park-photography-guide`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/spring-family-portrait-tips-dfw`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-photo-locations-flower-mound`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/spring-2026-booking-announcement`,
      lastModified: new Date('2026-01-23'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/grapevine-botanical-gardens-maternity-guide`,
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fall-mini-sessions-dfw`,
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/stone-creek-park-flower-mound-photography`,
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...routes, ...locationPages, ...blogPages];
}

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carlygage.com';
  
  // City slugs for location pages
  const cities = [
    'flower-mound',
    'frisco',
    'southlake',
    'plano',
    'mckinney',
    'grapevine',
    'coppell',
    'colleyville',
    'highland-park',
    'prosper',
    'dallas'
  ];

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio/dallas-family-session`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/dallas-maternity-session`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/dallas-baby-announcement`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/dallas-mini-session`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Location pages
  const locationPages = cities.map(city => ({
    url: `${baseUrl}/locations/${city}-family-photographer`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
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
  ];

  return [...routes, ...locationPages, ...blogPages];
}


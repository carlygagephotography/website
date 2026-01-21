import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  
  // 1. WWW to non-WWW redirect (301 permanent)
  if (request.headers.get('host')?.startsWith('www.')) {
    const newUrl = new URL(request.url);
    newUrl.host = newUrl.host.replace('www.', '');
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  // 2. Enforce trailing slash consistency (remove trailing slashes except for root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  // 3. Handle location page URL format
  // Redirect /locations/[city] to /locations/[city]-family-photographer
  if (pathname.startsWith('/locations/') && !pathname.endsWith('-family-photographer')) {
    const citySlug = pathname.split('/locations/')[1];
    // Don't redirect if already has the suffix or if it's malformed
    if (citySlug && !citySlug.includes('/')) {
      const newUrl = new URL(request.url);
      newUrl.pathname = `/locations/${citySlug}-family-photographer`;
      return NextResponse.redirect(newUrl, { status: 301 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, icon.svg (icons)
     * - public files (images, robots.txt, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|icon.svg|images|robots.txt|sitemap.xml|.*\\..*$).*)',
  ],
};

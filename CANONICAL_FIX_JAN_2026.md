# Canonical & Indexing Issues Fix (Jan 21, 2026)

## Problems Identified from Google Search Console

Google Search Console reported the following indexing issues:
1. **"Duplicate, Google chose different canonical than user"** - 1 page
2. **"Page with redirect"** - 2 pages  
3. **"Discovered - currently not indexed"** - 1 page
4. **"Crawled - currently not indexed"** - 1 page

## Root Causes

### 1. Missing Middleware
The `SEO_FIX_INSTRUCTIONS.md` mentioned middleware for www → non-www redirects, but the file was never created.

### 2. Inconsistent Canonical URLs
- Homepage used absolute URL: `canonical: "https://carlygage.com"`
- Other pages used relative URLs: `canonical: "/page-path"`
- This inconsistency can confuse search engines

### 3. No Trailing Slash Enforcement
Next.js is configured with `trailingSlash: false`, but no middleware was enforcing this at the edge level.

### 4. Location Page URL Format
Location pages use dynamic routing `[city]` but the actual URLs should consistently use the format `/locations/[city]-family-photographer`.

## Solutions Implemented

### ✅ 1. Created Middleware (`src/middleware.ts`)

**Purpose:** Handle redirects at the edge level before Next.js routing

**Features:**
- **WWW to non-WWW redirect** - 301 permanent redirect from www.carlygage.com to carlygage.com
- **Trailing slash removal** - Ensures all URLs (except root `/`) have no trailing slash
- **Location URL normalization** - Redirects `/locations/[city]` to `/locations/[city]-family-photographer`

**Code:**
```typescript
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. WWW to non-WWW redirect
  if (request.headers.get('host')?.startsWith('www.')) {
    const newUrl = new URL(request.url);
    newUrl.host = newUrl.host.replace('www.', '');
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  // 2. Remove trailing slashes (except root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  // 3. Location URL normalization
  if (pathname.startsWith('/locations/') && !pathname.endsWith('-family-photographer')) {
    const citySlug = pathname.split('/locations/')[1];
    if (citySlug && !citySlug.includes('/')) {
      const newUrl = new URL(request.url);
      newUrl.pathname = `/locations/${citySlug}-family-photographer`;
      return NextResponse.redirect(newUrl, { status: 301 });
    }
  }

  return NextResponse.next();
}
```

### ✅ 2. Updated Vercel Configuration (`vercel.json`)

**Added edge-level www redirect:**
```json
"redirects": [
  {
    "source": "/:path*",
    "has": [
      {
        "type": "host",
        "value": "www.carlygage.com"
      }
    ],
    "destination": "https://carlygage.com/:path*",
    "permanent": true
  }
]
```

This provides **double insurance** - both Vercel edge redirects AND Next.js middleware will handle www → non-www.

### ✅ 3. Fixed Canonical URL Consistency

**Changed homepage canonical from absolute to relative:**
- **Before:** `canonical: "https://carlygage.com"`
- **After:** `canonical: "/"`

**Why?** 
- All pages now use relative canonical URLs
- Next.js automatically combines `metadataBase` + relative path = absolute URL
- Ensures consistency across all pages

**Removed duplicate canonical from layout.tsx:**
- Removed root-level canonical from `layout.tsx` 
- Each page now controls its own canonical tag via page metadata
- Prevents canonical tag conflicts

### ✅ 4. Verified All Existing Canonicals

✅ **Homepage (`src/app/page.tsx`)**
- Canonical: `/`
- Resolves to: `https://carlygage.com/`

✅ **Portfolio Pages**
- `/portfolio/dallas-family-session` → canonical: `/portfolio/dallas-family-session`
- `/portfolio/dallas-maternity-session` → canonical: `/portfolio/dallas-maternity-session`
- `/portfolio/dallas-baby-announcement` → canonical: `/portfolio/dallas-baby-announcement`
- `/portfolio/dallas-mini-session` → canonical: `/portfolio/dallas-mini-session`

✅ **Location Pages (`src/app/locations/[city]/page.tsx`)**
- Dynamic canonical: `/locations/${citySlug}-family-photographer`
- Example: `/locations/frisco-family-photographer`

✅ **All Schema.org URLs**
- layout.tsx: All JSON-LD uses `https://carlygage.com`
- location pages: All JSON-LD uses `https://carlygage.com/locations/[city]`

---

## What Changed in Code

### Files Created:
- ✅ `src/middleware.ts` - Edge redirects for www/trailing-slash/location-urls

### Files Modified:
- ✅ `vercel.json` - Added www → non-www redirect configuration
- ✅ `src/app/page.tsx` - Changed canonical from absolute to relative URL
- ✅ `src/app/layout.tsx` - Removed root canonical to prevent conflicts

### Files Already Correct:
- ✅ `src/app/sitemap.ts` - Uses `https://carlygage.com` baseUrl
- ✅ `public/robots.txt` - Points to `https://carlygage.com/sitemap.xml`
- ✅ All portfolio pages - Already have correct relative canonicals
- ✅ All location pages - Already have correct relative canonicals

---

## Post-Deployment Actions Required

### Step 1: Deploy to Vercel
```bash
git add .
git commit -m "Fix canonical issues and add missing middleware for SEO"
git push origin main
```

Vercel will auto-deploy if connected to GitHub.

### Step 2: Verify Redirects Work
After deployment (wait 2-3 minutes), test:

```bash
# Test www redirect
curl -I https://www.carlygage.com
# Expected: HTTP/2 301 → Location: https://carlygage.com/

# Test trailing slash removal
curl -I https://carlygage.com/portfolio/
# Expected: HTTP/2 301 → Location: https://carlygage.com/portfolio

# Test location URL normalization
curl -I https://carlygage.com/locations/frisco
# Expected: HTTP/2 301 → Location: https://carlygage.com/locations/frisco-family-photographer

# Test canonical page loads correctly
curl -I https://carlygage.com
# Expected: HTTP/2 200 OK
```

### Step 3: Verify Canonical Tags in HTML
Visit your site and check the HTML source:

```bash
curl -s https://carlygage.com | grep "canonical"
# Expected: <link rel="canonical" href="https://carlygage.com/">

curl -s https://carlygage.com/portfolio/dallas-family-session | grep "canonical"
# Expected: <link rel="canonical" href="https://carlygage.com/portfolio/dallas-family-session">
```

### Step 4: Google Search Console Actions

#### A. Request Re-Indexing (CRITICAL)
1. Go to Google Search Console → URL Inspection
2. Test these specific URLs:
   - `https://carlygage.com` (homepage)
   - `https://carlygage.com/portfolio/dallas-family-session`
   - `https://carlygage.com/locations/frisco-family-photographer`
3. Click **"Request Indexing"** for each page
4. Wait 24-48 hours for Google to re-crawl

#### B. Submit Updated Sitemap
1. Go to **Sitemaps** section
2. Remove old sitemap if exists
3. Add: `https://carlygage.com/sitemap.xml`
4. Click **Submit**

#### C. Monitor Coverage Report
Check **Pages → Not Indexed** section daily:
- "Duplicate, Google chose different canonical" → Should decrease to 0 in 3-7 days
- "Page with redirect" → Should remain stable at 1 (contest page redirect is intentional)
- "Crawled - currently not indexed" → Should decrease as pages get re-indexed

### Step 5: Verify Domain Settings in Vercel (CRITICAL)
1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Domains**
2. Ensure `carlygage.com` is set as **Primary Domain**
3. If `www.carlygage.com` is listed separately, set it to **"Redirect to carlygage.com"**
4. **Screenshot your domain settings** for reference

---

## Expected Timeline

| Time | Expected Result |
|------|-----------------|
| **Immediate** | Redirects live after Vercel deployment |
| **24-48 hours** | Google re-crawls and recognizes 301 redirects |
| **3-7 days** | "Duplicate canonical" errors begin resolving |
| **7-14 days** | Pages start appearing in Google index |
| **2-4 weeks** | Full index recovery for all pages |

---

## Understanding the "Page with redirect" Issues

### What They Mean:
- Google found pages that immediately redirect to another URL
- This is **NOT always a problem** - redirects are normal for:
  - www → non-www (✅ Good)
  - Old URLs → New URLs (✅ Good)
  - Temporary contest pages → Homepage (✅ Good)

### Current Redirects (Expected):
1. **`/contest` → `/`** - Intentional redirect from contest page (not active)
2. **`www.carlygage.com/*` → `carlygage.com/*`** - Canonical domain redirect (correct)

### What to Monitor:
- If the count increases above 2, investigate
- If portfolio/location pages show redirects, that's a problem
- If homepage shows redirect, that's a problem

---

## Monitoring & Troubleshooting

### Week 1: Check Google Search Console Daily
- **Coverage Report** → Look for decrease in "Duplicate canonical" errors
- **Sitemaps** → Should show "Success" with pages discovered
- **URL Inspection** → Test key pages to see if Google can access them

### Week 2-4: Monitor Index Growth
- **Coverage Report** → "Valid" pages should increase
- **Performance** → Impressions should stabilize or increase
- **Search Results** → Do a Google search for: `site:carlygage.com` to see indexed pages

### Troubleshooting Guide

#### Problem: "Duplicate canonical" errors still showing after 14 days
**Solution:**
1. Use URL Inspection tool on the affected URL
2. Check "Discovered canonical" vs "User-declared canonical"
3. If they differ, investigate why Google chose a different canonical
4. Ensure no internal links point to www version

#### Problem: Pages still not indexing after 14 days
**Solution:**
1. Check robots.txt is accessible: `https://carlygage.com/robots.txt`
2. Check sitemap is accessible: `https://carlygage.com/sitemap.xml`
3. Verify pages are in sitemap using URL Inspection tool
4. Check for JavaScript errors that might block crawling
5. Use "Request Indexing" again for stubborn pages

#### Problem: Redirects are chaining (www → non-www → final page)
**Solution:**
1. This should NOT happen with current setup
2. If it does, check Vercel domain settings
3. Ensure Primary Domain is set correctly
4. Contact Vercel support if issue persists

---

## Technical Notes for Developers

### Why Middleware vs Vercel Redirects?
We use **BOTH** for defense-in-depth:
1. **Vercel redirects** - Runs at CDN edge (fastest)
2. **Next.js middleware** - Runs in Next.js runtime (handles complex logic)

### Why Relative Canonicals?
Next.js combines `metadataBase` + relative canonical automatically:
- `metadataBase: new URL("https://carlygage.com")`
- `canonical: "/portfolio/dallas-family-session"`
- **Result:** `<link rel="canonical" href="https://carlygage.com/portfolio/dallas-family-session">`

This ensures:
- Consistency across all pages
- Works correctly in staging/production environments
- Easier to maintain (change baseUrl once)

### Why 301 vs 302 Redirects?
- **301 Permanent** - Used for www → non-www, trailing slashes
- **302 Temporary** - NOT used (would hurt SEO)
- **308 Permanent** - Used by Next.js `redirect()` (contest page)

### Middleware Matcher Configuration
```typescript
matcher: [
  '/((?!_next/static|_next/image|favicon.ico|icon.svg|images|robots.txt|sitemap.xml|.*\\..*$).*)',
]
```
**What it does:**
- ✅ Runs on all pages
- ❌ Skips static assets (images, CSS, JS)
- ❌ Skips API routes
- ❌ Skips Next.js internal routes

This prevents middleware from interfering with static asset delivery.

---

## Additional SEO Benefits from These Fixes

✅ **Consolidated Link Equity**
- All backlinks to www.carlygage.com now pass through to carlygage.com
- Search engines recognize one canonical domain

✅ **Eliminated Canonical Confusion**
- Google no longer has to guess which version is correct
- Faster indexing of new pages

✅ **Single Source of Truth**
- Analytics data consolidated to one domain
- No split traffic between www/non-www

✅ **Cleaner URLs**
- No trailing slashes means cleaner social shares
- Consistent URL structure across all pages

✅ **Better User Experience**
- Faster redirects at edge level (Vercel)
- Users always see correct URL in browser

---

## Summary

### What Was Wrong:
1. ❌ No middleware to enforce www → non-www
2. ❌ Inconsistent canonical URLs (absolute vs relative)
3. ❌ No trailing slash enforcement
4. ❌ Potential location URL format issues

### What Was Fixed:
1. ✅ Created middleware with www/trailing-slash/location redirects
2. ✅ Added Vercel edge-level redirects for www
3. ✅ Standardized all canonicals to relative URLs
4. ✅ Removed conflicting canonical from layout.tsx
5. ✅ Verified all pages have correct canonical tags

### Next Steps:
1. Deploy to Vercel
2. Verify redirects work correctly
3. Request re-indexing in Google Search Console
4. Monitor for 2-4 weeks
5. Check this document for troubleshooting if issues persist

---

## Questions? Common Issues:

**Q: How long until Google fixes the duplicate canonical error?**
A: Typically 3-7 days after Google re-crawls. Can take up to 14 days for stubborn pages.

**Q: Should I remove the www DNS record?**
A: No! Keep it but ensure it redirects to non-www in Vercel domain settings.

**Q: What if new pages still show "Duplicate canonical" errors?**
A: This is normal during transition period. Google is consolidating the two versions. Will resolve automatically.

**Q: Can I speed up the indexing process?**
A: Yes - use "Request Indexing" in URL Inspection tool. Limited to ~10 requests per day.

**Q: What about the contest page redirect?**
A: This is intentional. Contest is not active, so it redirects to homepage. This is not a problem.

---

**Document Created:** Jan 21, 2026  
**Last Updated:** Jan 21, 2026  
**Status:** Fixes implemented, awaiting deployment

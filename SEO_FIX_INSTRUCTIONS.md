# SEO Fix: WWW to Non-WWW Redirect (Jan 14, 2026)

## Problem Identified
Google Search Console reported: **"Page is not indexed: Page with redirect"**
- Google selected `https://www.carlygage.com/` as canonical
- Site configured for `https://carlygage.com` (no www)
- Redirect inconsistency prevented indexing

## Solution Implemented

### 1. Created Middleware (`src/middleware.ts`)
- 301 permanent redirect from www to non-www
- Runs on all pages except API routes and static assets
- Ensures consistent URL structure site-wide

### 2. Updated Vercel Configuration (`vercel.json`)
- Added edge-level redirect from www to non-www
- Added X-Robots-Tag header for all pages
- Double insurance for redirect handling

### 3. Verified All URLs
✅ `src/app/layout.tsx` - metadataBase: `https://carlygage.com`
✅ `src/app/sitemap.ts` - baseUrl: `https://carlygage.com`
✅ `src/app/locations/[city]/page.tsx` - All schema URLs use non-www
✅ `public/robots.txt` - Sitemap URL: `https://carlygage.com/sitemap.xml`

---

## Post-Deployment Actions Required

### Step 1: Verify Vercel Domain Settings
1. Go to Vercel Dashboard → Project Settings → Domains
2. Ensure `carlygage.com` is set as the **Primary Domain**
3. If `www.carlygage.com` is listed, click "Edit" → Set as "Redirect to carlygage.com"

### Step 2: Test the Redirect
After deployment, test both URLs:
```bash
curl -I https://www.carlygage.com
# Should return: HTTP/2 301 (Moved Permanently)
# Location: https://carlygage.com/

curl -I https://carlygage.com
# Should return: HTTP/2 200 OK
```

### Step 3: Google Search Console Actions

#### A. Submit Non-WWW Property (if not already added)
1. Go to Google Search Console
2. Add Property: `https://carlygage.com` (non-www version)
3. Verify ownership via DNS or meta tag

#### B. Request Indexing for Homepage
1. In Search Console → URL Inspection Tool
2. Enter: `https://carlygage.com`
3. Click "Request Indexing"
4. Wait 24-48 hours for Google to re-crawl

#### C. Remove WWW Property (Optional but Recommended)
1. If you have a separate property for `https://www.carlygage.com`
2. Request removal via Settings → Remove Property
3. This prevents confusion and ensures all data flows to one property

#### D. Resubmit Sitemap
1. Go to Sitemaps section
2. Remove old sitemap if present
3. Add new sitemap URL: `https://carlygage.com/sitemap.xml`
4. Click Submit

### Step 4: Monitor in Search Console
Check after 3-5 days:
- **Coverage Report** - Should show "Valid" pages increasing
- **Sitemaps** - Should show "Success" with pages discovered
- **Index Status** - Homepage should show "Page is indexed"

---

## Expected Timeline
- **Immediate**: Redirect live after deployment
- **24-48 hours**: Google re-crawls and recognizes redirect
- **3-7 days**: Pages begin appearing in index
- **2-4 weeks**: Full index recovery (all 15+ pages)

---

## Troubleshooting

### If Pages Still Not Indexing After 7 Days:
1. Check Vercel deployment logs for errors
2. Use `curl -I` to verify 301 redirect is working
3. Check Google Search Console Coverage report for specific errors
4. Verify `robots.txt` is accessible at `https://carlygage.com/robots.txt`
5. Verify `sitemap.xml` is accessible at `https://carlygage.com/sitemap.xml`

### If "Duplicate without user-selected canonical" Errors:
- This is normal during transition period (7-14 days)
- Google is consolidating the www and non-www versions
- Errors will resolve once Google fully recognizes the redirect

---

## Additional SEO Wins from This Fix
✅ Consolidated link equity (backlinks to www will pass through to non-www)
✅ Single source of truth for analytics and tracking
✅ Cleaner URLs for social sharing
✅ Eliminated canonical confusion for search engines

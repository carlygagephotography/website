# Deployment Checklist - Canonical & Indexing Fixes

**Date:** Jan 21, 2026  
**Issue:** Google Search Console indexing problems

---

## ✅ Pre-Deployment (Completed)

- [x] Created `src/middleware.ts` with www/trailing-slash/location redirects
- [x] Updated `vercel.json` with edge-level redirects
- [x] Fixed homepage canonical URL to use relative path
- [x] Removed duplicate canonical from layout.tsx
- [x] Verified all portfolio pages have correct canonicals
- [x] Verified all location pages have correct canonicals
- [x] Created comprehensive documentation

---

## 🚀 Deployment Steps

### Step 1: Deploy to Vercel
```bash
git add .
git commit -m "Fix canonical issues and add missing middleware for SEO"
git push origin main
```

**Expected:** Vercel auto-deploys (if connected to GitHub)  
**Time:** 2-3 minutes

- [ ] Code pushed to GitHub
- [ ] Vercel deployment started
- [ ] Vercel deployment successful
- [ ] No build errors

---

### Step 2: Test Redirects (Wait 2-3 minutes after deployment)

Use PowerShell or Command Prompt:

```powershell
# Test 1: WWW redirect
curl -I https://www.carlygage.com
# Expected: 301 → Location: https://carlygage.com/

# Test 2: Trailing slash removal
curl -I https://carlygage.com/portfolio/
# Expected: 301 → Location: https://carlygage.com/portfolio

# Test 3: Location URL normalization
curl -I https://carlygage.com/locations/frisco
# Expected: 301 → Location: https://carlygage.com/locations/frisco-family-photographer

# Test 4: Homepage loads correctly
curl -I https://carlygage.com
# Expected: 200 OK
```

- [ ] WWW redirect works (301 → non-www)
- [ ] Trailing slash redirect works
- [ ] Location URL redirect works
- [ ] Homepage loads correctly (200)

---

### Step 3: Verify Canonical Tags

Open these URLs in browser and view page source (Ctrl+U):

**Homepage:**
- URL: https://carlygage.com
- Look for: `<link rel="canonical" href="https://carlygage.com/">`
- [ ] Canonical tag present and correct

**Portfolio Page:**
- URL: https://carlygage.com/portfolio/dallas-family-session
- Look for: `<link rel="canonical" href="https://carlygage.com/portfolio/dallas-family-session">`
- [ ] Canonical tag present and correct

**Location Page:**
- URL: https://carlygage.com/locations/frisco-family-photographer
- Look for: `<link rel="canonical" href="https://carlygage.com/locations/frisco-family-photographer">`
- [ ] Canonical tag present and correct

---

### Step 4: Verify Domain Settings in Vercel

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Domains**

**Check:**
- [ ] `carlygage.com` is listed as **Primary Domain**
- [ ] `www.carlygage.com` redirects to `carlygage.com` (or is not listed)
- [ ] Screenshot domain settings (for reference)

**If www is NOT redirecting:**
1. Click Edit on `www.carlygage.com`
2. Set to "Redirect to carlygage.com"
3. Save changes

---

### Step 5: Google Search Console - Request Indexing

Go to: https://search.google.com/search-console

**Test & Request Indexing for these URLs:**

1. **Homepage:** `https://carlygage.com`
   - Click URL Inspection (top search bar)
   - Paste URL and press Enter
   - Click "Request Indexing"
   - [ ] Requested

2. **Family Portfolio:** `https://carlygage.com/portfolio/dallas-family-session`
   - [ ] Requested

3. **Maternity Portfolio:** `https://carlygage.com/portfolio/dallas-maternity-session`
   - [ ] Requested

4. **Location Page (Frisco):** `https://carlygage.com/locations/frisco-family-photographer`
   - [ ] Requested

5. **Location Page (Southlake):** `https://carlygage.com/locations/southlake-family-photographer`
   - [ ] Requested

**Note:** You can request ~10 URLs per day. Google limits this.

---

### Step 6: Resubmit Sitemap

In Google Search Console:

1. Go to **Sitemaps** (left sidebar)
2. If old sitemap exists, remove it
3. Add new sitemap URL: `https://carlygage.com/sitemap.xml`
4. Click **Submit**

- [ ] Old sitemap removed (if present)
- [ ] New sitemap submitted
- [ ] Status shows "Success" (may take a few minutes)

---

## 📊 Monitoring Schedule

### Daily (Week 1)
- [ ] Day 1: Check Google Search Console → Coverage Report
- [ ] Day 2: Check Coverage Report (look for changes)
- [ ] Day 3: Check Coverage Report
- [ ] Day 4: Check Coverage Report
- [ ] Day 5: Check Coverage Report
- [ ] Day 6: Check Coverage Report
- [ ] Day 7: Check Coverage Report + Screenshot for comparison

**What to look for:**
- "Duplicate canonical" errors decreasing
- "Valid" pages increasing
- No new errors introduced

### Weekly (Weeks 2-4)
- [ ] Week 2: Check Coverage Report + Performance tab
- [ ] Week 3: Check Coverage Report + Performance tab
- [ ] Week 4: Check Coverage Report + Performance tab + Screenshot

**What to look for:**
- All "Duplicate canonical" errors resolved
- Pages indexed increasing
- Impressions stabilizing or increasing

---

## 🎯 Success Criteria

By **Week 4** (Feb 18, 2026), you should see:

- [ ] "Duplicate canonical" errors = 0
- [ ] "Valid" indexed pages = 15+ pages
- [ ] Homepage indexed and ranking
- [ ] Location pages indexed and ranking
- [ ] Portfolio pages indexed and ranking
- [ ] Google search `site:carlygage.com` shows all main pages

---

## ⚠️ Troubleshooting

If issues persist after 14 days, see `CANONICAL_FIX_JAN_2026.md` → **Monitoring & Troubleshooting** section.

Common issues:
- **Duplicate canonical still showing:** Google needs more time (up to 30 days max)
- **Pages not indexing:** Use URL Inspection tool to see why Google rejected
- **Redirects not working:** Check Vercel domain settings

---

## 📁 Related Files

- `CANONICAL_FIX_JAN_2026.md` - Full technical documentation
- `SEO_FIX_INSTRUCTIONS.md` - Previous SEO fix (Jan 14, 2026)
- `src/middleware.ts` - NEW: Edge redirects
- `vercel.json` - UPDATED: Added www redirect
- `src/app/page.tsx` - UPDATED: Fixed canonical
- `src/app/layout.tsx` - UPDATED: Removed duplicate canonical

---

## 🆘 Need Help?

1. Read `CANONICAL_FIX_JAN_2026.md` (comprehensive guide)
2. Check Google Search Console Help Center
3. Contact me if issues persist beyond 30 days

---

**Status:** ⏳ Awaiting deployment  
**Next Action:** Deploy to Vercel (Step 1)

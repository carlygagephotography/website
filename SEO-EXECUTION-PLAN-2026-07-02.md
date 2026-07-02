# Carly Gage Photography — Local SEO Execution Plan
**Prepared:** 2026-07-02 · **Site:** https://carlygage.com · **Repo:** this folder (Next.js App Router on Vercel, apex host)
**Goal:** Dramatically increase organic visits from legitimate prospective clients within ~40 miles of Flower Mound, TX (family / newborn / maternity / mini sessions), and beat local competitors.

---

## HOW TO USE THIS DOCUMENT (instructions to the executing LLM)

You are executing a plan authored after a full audit (codebase + live site + GSC + GA4 + SERP + Google Business Profile). Do not re-derive strategy; execute the workstreams below **in order**. Rules:

1. **Work in small PRs**, one workstream (or sub-batch) each, with the verification commands run and pasted into the PR description. Never bundle copy changes with technical changes.
2. **Any change to user-visible copy** (headlines, paragraphs, FAQs, pricing statements): draft it, but put it behind a review checklist item for Elliot/Carly approval before merge. Technical/meta/schema changes don't need copy approval.
3. **Never invent facts** about the business (pricing, awards, addresses, session details). Source of truth for business facts: `public/llms.txt`, existing site copy, and the "Business facts" section below. If a fact is missing, insert a `TODO(carly)` placeholder and list it in the PR.
4. **Do not touch what already works** — see the DO-NOT-TOUCH list.
5. **Verification ritual** after every deploy: fetch the changed page with `curl` (no JS) and confirm the served HTML contains the intended title/canonical/schema/content. What the browser shows is not what crawlers see.
6. **No new programmatic/thin pages.** Every new page must clear the content bar defined in Workstream 4. If it can't, don't ship it.
7. GSC property: domain property `carlygage.com` (Google account elliotovla@yahoo.com). GA4 property: "Carly Gage Photography" (`a379658071p518773632`), tag `G-4E5F8C8H7E`.

### DO-NOT-TOUCH (verified correct, 2026-07-02)
- Host setup: www→apex 308, http→https 308, trailing-slash strip, `/locations/{x}`→`/locations/{x}-family-photographer` middleware redirects. All verified live.
- Canonical tags: every real page emits a self-referential canonical in server HTML. Verified via curl.
- robots.txt (allow-all + AI crawlers + sitemap pointer) — leave as is (optionally remove the useless `Crawl-delay: 1`, cosmetic only).
- The 9 blog posts' titles/URLs (the two `best-photo-locations` posts are the site's ONLY organic winners — do not rename, redirect, or retitle them).
- Homepage title tag `Flower Mound Family Photographer | Carly Gage Photography` — correct target, keep.
- GA4 / Meta pixel wiring in `src/app/layout.tsx`.

---

## BASELINE (measure future progress against this)

| Metric (source, 2026-04-01→06-30) | Value |
|---|---|
| GSC clicks / impressions / avg pos | **94 / 4,340 / 23.0** (~1 click/day; CTR 2.2%) |
| Non-brand commercial clicks | ≈ 0 (top clicked queries are brand + "photo places near me" informational) |
| GA4 organic sessions | ~12/week; last-7-days total users 48, of which 28 = google/cpc (site is ads-dependent) |
| Indexed pages | 30 indexed / 11 not (3 redirects, 7 crawled-not-indexed incl. stale www URLs, 1 discovered) |
| GBP | EXISTS: 5.0★, **38 reviews**, category "Photographer" (generic), posts active, Book button live. Service-area business (no address shown); Flower Mound IS inside the drawn service area, but the area is Dallas-weighted so the listing's effective map point sits at ≈32.96, −96.88 (Farmers Branch, ~15 mi SE of Flower Mound). Photo tabs lead with "Bride"; review-topic chips: wedding (5), maternity (5), engagement (4) — wedding legacy outweighs family/newborn signals |
| Key rankings (GSC 3-mo avg) | maternity photographer flower mound **25.8** (81 impr, 0 clicks) · newborn photographer flower mound **27.2** (62 impr) · maternity photographer copper canyon **6.2** (65 impr!) · flower mound photography locations **14.7** (88 impr) · southlake photographer **33.1** · grapevine newborn photographer **19.3** · maternity photographer colleyville **18.3** · frisco family photographer **43.1** (466 impr on the frisco page) |
| Top pages by clicks | /blog/best-photo-locations-southlake (33), / (19), /blog/best-photo-locations-flower-mound (14) — blogs outperform every money page |
| SERP presence for commercial local queries | **Zero.** Competitors who own them: ritakwilderphotography.com (12+ city pages, "Voted Best Newborn Photographer in Flower Mound"), katemarieportraiture.com, jamiedenholmphotography.com, alisonaberdeen.com, jennifercarleyphotography.com (aged geo-tagged session-recap blog) |

**Success criteria (review checkpoints):**
- 30 days: all Workstream 1–3 technical items verified live; GBP relocated/optimized; review-ask flow running.
- 60 days: money-service pages rebuilt & indexed; ≥6 new citations live; ≥50 GBP reviews; GSC impressions >8k/3-mo-equivalent pace.
- 90 days: ≥5 commercial local queries in top 10 (from the Keyword→URL map); organic clicks ≥300/quarter pace (~3× baseline); local-pack appearance for "family photographer flower mound" (check manually from a Flower Mound IP/uule).
- Canary: if GSC sitewide impressions drop >30% week-over-week after any deploy, stop and investigate before shipping more.

**Demand reality (sets honest expectations):** Google Ads ran ~$1,150 lifetime and bought only 2,234 impressions across all keywords — and Keyword Planner shows each individual term is tiny ("flower mound photographer" ~30/mo, most others ~10/mo). There is no single keyword that delivers "tons" of traffic here. The volume comes from **aggregation**: ~40–60 commercial terms across 14+ suburbs and 4 service types (a few hundred searches/mo combined), PLUS the local pack / Maps surface (not counted in Planner numbers — this is where "family photographer near me" actually resolves, and why Workstream 3 is the highest-leverage work), PLUS informational long-tail (the photo-locations posts already prove this works), PLUS seasonal spikes (fall minis Aug–Oct, Christmas cards Oct–Dec — prep content 6+ weeks ahead). Realistic 90-day outcome if the plan executes fully: ~8–15 qualified organic visits/day (vs ~1 today) with local-pack presence across the northwest-quadrant cities; that is the honest ceiling of this market's search demand, and conversion rate (visible phone, low-friction form, fast replies, review proof) is what turns it into bookings.

### Business facts (verified — safe to use in copy/schema)
- Name: Carly Gage Photography. Phone: (214) 422-8050. Site: carlygage.com. Email: carlygagephotography@gmail.com (public contact; press@carlygage.com exists for press).
- Base: Flower Mound, TX 75028 (service-area business; do NOT publish a street address anywhere — see W3.4 re: Yelp leak).
- Services (from llms.txt): Family (1hr, ~40 images), Maternity (1hr), Baby announcement (1hr, ~40 images), Mini sessions (20min, ~10 images). Newborn also offered. 24-hr inquiry response commitment.
- Socials: Instagram @carlygage (NOT @carlygagephotography), Facebook page unverified — get correct URL from Carly before linking.
- GBP: 5.0★/38 reviews. Zola: 5.0★/2 reviews. Yelp listing exists (≈0 reviews, shows street address 2800 Parkhaven Dr — must be removed/hidden).
- **Sister brand:** A Nomadic Love (www.anomadiclove.com) = Elliot + Carly's wedding photography company. Cross-links between the two sites verified live in both directions (2026-07-02) — keep them. The Carly Gage GBP carries wedding-era reviews/photos from this history; that's an asset (review count/age), not a mistake to undo.

---

## WORKSTREAM 1 — Redirect & indexing repairs (1 PR, do first)

**1.1 Newborn slug goes to the WRONG page.** `/flower-mound-newborn-photographer` (exact-match for a 62-impr query) currently 307-redirects to the *baby-announcement* page (`src/app/flower-mound-newborn-photographer/page.tsx`). Fix: make it a **permanent** redirect to the real newborn page. Replace the page stub with an entry in `next.config.ts` `redirects()` → `{ source: '/flower-mound-newborn-photographer', destination: '/newborn-baby-photographer-flower-mound', permanent: true }` and delete the stub route dir. Same for `/contest` → `/` (currently 307; comment falsely claims 308).
   *Accept:* `curl -sI https://carlygage.com/flower-mound-newborn-photographer | grep -E "HTTP|Location"` → `308` + `Location: /newborn-baby-photographer-flower-mound`.

**1.2 Soft-404 on unknown cities.** `/locations/anything-family-photographer` returns HTTP 200 with a "Location Not Found" shell and no canonical/noindex (`src/app/locations/[city]/page.tsx:258-305`). Fix: add `generateStaticParams` over the cityData keys + `export const dynamicParams = false` (or call `notFound()` in both `generateMetadata` and the page for unknown slugs).
   *Accept:* `curl -s -o /dev/null -w "%{http_code}" https://carlygage.com/locations/gotham-family-photographer` → `404`.

**1.3 Remove the blanket `X-Robots-Tag: index, follow` header** from `vercel.json` (it adds nothing and forces indexability onto soft-404s/junk).
   *Accept:* `curl -sI https://carlygage.com/ | grep -i x-robots` → empty.

**1.4 Fix internal links to redirecting URLs.** `src/components/AreasServed.tsx:37` and 4 blog posts (spring-family-portrait-tips-dfw, best-photo-locations-southlake, murrell-park-photography-guide, spring-2026-booking-announcement) link `/locations/flower-mound-family-photographer` (a 301 to `/`). Point them at `/` with anchor text "Flower Mound family photographer".
   *Accept:* `grep -rn "locations/flower-mound-family-photographer" src/` → only middleware.ts.

**1.5 Sitemap honesty.** In `src/app/sitemap.ts` replace every `lastModified: new Date()` with real static dates (use the git log date of last substantive edit per page; update manually when pages change). Fix the future-dated fall-minis post (2026-08-01 → its real publish date) in both sitemap and its BlogPosting schema.

**1.6 llms.txt refresh** (`public/llms.txt`): remove the redirecting `/locations/flower-mound-family-photographer` URL; add the 4 service pages, `/blog` + the 2 location-guide posts, and the 3 missing city pages (highland-village, trophy-club, argyle).

---

## WORKSTREAM 2 — Schema & head cleanup (1 PR)

**2.1 De-globalize the layout JSON-LD** (`src/app/layout.tsx:20-116`). Today every page carries a homepage-scoped `FAQPage` (whose questions don't match any visible FAQ) + homepage `WebPage` node. Restructure:
   - Keep in layout: `PhotographyBusiness` only (it's the sitewide entity). Add to it: `"telephone"` already ✓, **add** `"sameAs"` entries for the GBP/Maps URL (`https://www.google.com/maps?cid=<get CID from GBP dashboard>`), Yelp page, and Zola page; keep Instagram (verify @carlygage) — remove the Facebook URL until verified real. Remove the empty `streetAddress` property entirely (SAB: locality+region+postal only).
   - Move `FAQPage` to `src/app/page.tsx` only, and regenerate its questions to EXACTLY match the visible homepage FAQ from `src/components/FAQ.tsx`. One FAQPage per site max, content-matched.
   - Move the `WebPage` node to the homepage; replace `dateModified: new Date().toISOString()` with a real static ISO datetime updated on real edits.
   - Add per-page `Service` schema (`@type: Service`, provider → `@id` of the business, `areaServed`, `serviceType`) to the 4 money service pages.
   *Accept:* `curl -s <each page> | grep -o '"@type":"[A-Za-z]*"' | sort | uniq -c` shows FAQPage ONLY on `/`; validate homepage + one service page in https://validator.schema.org (paste JSON manually).

**2.2 Homepage H1.** `src/components/Hero.tsx:50,102` renders "Flower Mound Family Photographer" as two 10px eyebrow H1s (mobile+desktop both in DOM) while the visual headline "Real Moments. Beautifully Kept." is an H2. Fix: exactly ONE H1 in the DOM. Recommended: make the visible headline block the single H1 reading "Flower Mound Family Photographer" with "Real Moments. Beautifully Kept." as the styled subline (needs Carly design sign-off), or minimally collapse the duplicate into one responsive element.

**2.3 Newborn page H1** (`src/app/newborn-baby-photographer-flower-mound/page.tsx` → `PortfolioGallery` H1 prop): "Newborn & Baby Photography" → "Flower Mound Newborn & Baby Photographer".

**2.4 Location-page og:url** (`src/app/locations/[city]/page.tsx:274-277`): add `url` to the openGraph object so it stops inheriting the homepage og:url.

**2.5 Kill broken anchors:** BreadcrumbList item → `https://carlygage.com/#locations` (doesn't exist) → point item 2 at `/` or add `id="locations"` to the AreasServed section; `ContextualCTA.tsx` links `/#wardrobe` and `/#pricing` (don't exist) → point at `/#contact` or create the sections.

**2.6 Grapevine FAQ raw HTML** (`locations/[city]/page.tsx:115` rendered as text at ~620): answer contains literal `<a href=...>` markup shown as text, linking a slug that's now a redirect. Rewrite the answer as plain text; if a link is wanted, render FAQs with a safe link component.

---

## WORKSTREAM 3 — Google Business Profile + reviews + NAP (no code; browser/dashboard work — highest local-traffic leverage)

**3.1 GBP geography.** Verified 2026-07-02: Flower Mound is inside the drawn service area, but the area is so broad and Dallas-weighted that the listing's public map point lands near Farmers Branch (~32.96, −96.88), ~15 mi SE of Flower Mound. In the GBP dashboard: (a) confirm the hidden verified address is Carly's Flower Mound 75028 address (NOT an old Dallas-area address — for service-area businesses Google still uses the hidden address as a proximity anchor; if it's stale, update it, which may trigger re-verification — plan for it); (b) redraw the service area tighter and centered on the northwest quadrant: Flower Mound, Highland Village, Lewisville, Grapevine, Coppell, Southlake, Colleyville, Argyle, Lantana, Copper Canyon, Trophy Club, Double Oak, Frisco, Plano — drop the far-east/southeast Dallas sprawl so the centroid moves to her actual market. Local-pack ranking decays with distance; today her effective location point is closer to Farmers Branch than to Flower Mound.
   *Also fix positioning drift in GBP content:* recent owner post/replies say "Dallas family photographer" — standardize on "Flower Mound family photographer serving DFW" in future posts/replies (matches site + schema).

**3.2 GBP category & attributes.** Primary category "Photographer" → change primary to **"Family photography service"** (or closest available; check picker), add secondaries: Portrait studio, Photographer, Maternity/newborn if available. Services list: add Family portraits, Newborn photography, Maternity photography, Baby announcement, Mini sessions — with descriptions pulled from llms.txt. Replace legacy "Bride" photo prominence: upload 15–20 recent family/newborn/maternity images (from `FAMILY/`, `NEWBORN/`, `MATERNITY/` folders in this repo — get Carly's pick + client permission), and continue weekly posts.

**3.3 GBP↔site loop.** Website field → `https://carlygage.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`. Add a "Leave us a review" link (short review URL from GBP dashboard) to the site footer and to Carly's gallery-delivery email. Add the Maps listing URL to the site footer alongside socials (also W2.1 sameAs).

**3.4 NAP cleanup (consistency = local trust):**
   - **Yelp**: listing shows street address "2800 Parkhaven Dr" (residential). Log in → convert to service-area/hide address. Standardize phone (214) 422-8050 + site link. Then ask 2–3 happy repeat clients for Yelp reviews (Yelp's category page ranks top-3 for nearly every target query — presence there IS visibility).
   - **Zola**: lists her as *Wedding Photographers* with handle @carlygagephotography → fix handle; keep/update the profile since it holds 2 five-star reviews (or retire it if she no longer wants wedding inquiries).
   - Standardize everywhere: "Carly Gage Photography" / Flower Mound, TX / (214) 422-8050 / carlygage.com / @carlygage.
   - Footer socials in `src/components/Footer.tsx:41-45` are dead `href="#"` stubs → real Instagram/Facebook/GBP URLs or remove the icons.

**3.5 Review engine (38 → 75+).** Create a standard post-delivery flow: gallery-delivery email includes the direct GBP review link + one line ask; SMS follow-up 3 days later if no review. Target 4–6 new reviews/month. **Ask reviewers to mention their city + session type naturally** ("newborn session in Flower Mound") — never scripted/incentivized (policy violation).

**3.6 Brand separation (Carly Gage vs A Nomadic Love).** Two real businesses, same owners — keep them cleanly split so they reinforce instead of blur:
   - Do NOT create a new GBP or strip old wedding reviews — 38 aged 5.0★ reviews are the moat. Instead, all future Carly Gage GBP content (posts, photos, services, review asks, owner replies) is family/newborn/maternity only; wedding work lives on A Nomadic Love's own profiles. Remove/demote the "Bride" photo album on the Carly Gage listing as new family photos accumulate.
   - If A Nomadic Love has its own GBP, its primary category should be "Wedding photographer" (distinct from Carly's family-focused primary) so the two listings don't compete in the same pack.
   - Keep the verified two-way site links; upgrade anchors to descriptive ("Looking for a wedding photographer? Visit A Nomadic Love" / "Family, newborn & maternity: Carly Gage Photography") and add one About-page sentence on each site naming the relationship — clean entity signals for Google.
   - Review asks: send family clients the Carly Gage GBP link, wedding clients the A Nomadic Love link — never mix.

**3.7 Citations & local links (from audited SERP gaps).** Build/claim, in order: Thumbtack (family photographer — Grapevine + Coppell metros rank page-1), FPJA DFW directory, Flower Mound Chamber of Commerce, DFWChild maternity roundups (pitch), Dallas Moms + Plano Moms photographer guides (pitch), Peerspace "best Dallas family photographers" refresh (pitch), ShoutoutDFW interview (free editorial), Snappr/PureWow Dallas roundups (pitch), Airbnb Services (Highland Village photographers page ranks). Also: **Nextdoor business page** (Flower Mound-area neighborhoods are heavy Nextdoor users; "photographer recommendation" threads are a real-customer channel) and the Flower Mound / Highland Village / Lewisville mom-group Facebook communities (genuine participation, not spam). Track each in a sheet: URL, date, NAP used, live-link check. Pace: 2–3/week, not all at once. NO paid link schemes, NO fake reviews, NO mass directory blasts.

---

## WORKSTREAM 4 — Money-page content rebuild (the core ranking fix)

**The inversion problem:** location pages are ~1,100 words while the 4 service money pages are 150–300 words of gallery + one paragraph — the thinnest pages on the site are the ones targeting the highest-intent terms, and they're nearly invisible internally.

**Content bar for every rebuilt/new page:** ≥700 words of *substantive, page-specific* prose; a visible FAQ (4–6 Qs) matching any FAQPage schema; ≥3 internal links to related service/city pages with descriptive anchors; at least one genuinely local element (real venue names, real session narrative); a testimonial (real, from Carly); a booking CTA + visible phone (214) 422-8050. If real substance can't be sourced → `TODO(carly)` and hold the page, never pad with boilerplate.

**4.1 Rebuild the 4 service pages** (`/newborn-baby-photographer-flower-mound`, `/flower-mound-maternity-photographer`, `/flower-mound-mini-sessions`, `/flower-mound-baby-announcement-photographer`): what-to-expect timeline, prep guide summary, in-home vs outdoor options, best local venues for that session type (reuse the blog research: Murrell Park, Stone Creek Park, Grapevine Botanical Gardens), session details from llms.txt, FAQ, testimonial, cross-links. Draft copy → Carly approval → ship.

**4.2 Internal-link the money pages into existence.** Today: zero links from nav, footer, or homepage.
   - Nav (`src/components/Navigation.tsx`): add a "Sessions" dropdown → 4 service pages (+ keep Blog).
   - Footer (`src/components/Footer.tsx`): add a Services column (4 links) and complete the city list (add highland-village, trophy-club, argyle — currently orphaned with ZERO internal links).
   - Homepage services section (`Expertise.tsx` / `Portfolio.tsx`): the 4 tiles currently link `/portfolio/dallas-*` → point them at the 4 Flower Mound service pages instead.
   *Accept:* every money + city page reachable ≤2 clicks from `/`; zero orphans (crawl with `npx linkinator https://carlygage.com --recurse` post-deploy).

**4.3 Resolve the Dallas duplication.** Each service exists twice (`/portfolio/dallas-{service}` vs Flower Mound service page / `locations/dallas-family-photographer`) with competing titles and identical image sets. Decision: **portfolio pages become galleries, not landers** — retitle to "Family Session Gallery | Carly Gage Photography" etc., de-optimize their commercial-intent titles, canonical stays self; `/locations/dallas-family-photographer` remains the sole owner of "dallas family photographer". Do NOT delete/redirect the portfolio URLs (they earn 15 clicks/quarter) — just re-scope their titles/H1s.

**4.4 De-boilerplate the city pages (doorway-risk reduction).** ~60-70% of each `/locations/[city]` page is token-swapped boilerplate, and location cards show the same 7 generic bento images relabeled as different parks (`page.tsx:514`) with false alt text. Fix: (a) swap in real photos per city where Carly has them, else neutral alts ("Family session by Carly Gage Photography" — never claim a park it isn't); (b) vary the ICP section per city or cut it to a short shared blurb; (c) expand per-city FAQs/venues. Prioritize cities by GSC impressions: **Frisco (466 impr, pos 46) → Southlake (72+66+39 impr) → Grapevine (227 impr, pos 16) → Plano (194) → Colleyville (maternity 40 impr, pos 18)**.

**4.5 New city pages — only after 4.4 raises the template's uniqueness:** Lewisville (in every areaServed list but has NO page), Lantana, Copper Canyon. **Copper Canyon is the sleeper:** "maternity photographer copper canyon" already ranks 6.2 with 65 impressions and no page targeting it — a small unique page (or a Copper Canyon section + FAQ on the maternity page) should convert that to clicks fast. Same content bar applies.

**4.6 Blog cadence (the proven channel — location guides are her only rankers):** 2 posts/month, alternating (a) "Best photo locations in {Lewisville | Coppell | Highland Village | Frisco}" guides matching the winning pattern, (b) geo-tagged real session recaps ("{Season} family session at Murrell Park, Flower Mound") — the Jennifer Carley model that compounds long-tail. Fix `/blog` index first: `src/app/blog/page.tsx:21-70` lists only 6 of 9 posts — add grapevine-botanical-gardens, fall-mini-sessions, stone-creek-park (they're currently orphaned). August priority: refresh fall-mini-sessions post + mini-sessions page ("fall mini sessions near me/dfw" queries spike Aug–Oct per the Ads keyword data).

---

## WORKSTREAM 5 — Performance & polish (last, lowest priority)

- **5.1** Money/location pages load multi-MB source JPGs (`bento-1.jpg` 7.0MB, `bento-4.jpg` 6.9MB on the newborn page) while optimized `.webp` twins in `/images/optimized/` sit unused → repoint refs (script exists: `npm run optimize-images`).
- **5.2** `PortfolioGallery.tsx:247` marks 6 gallery images `priority` → keep only the first 1–2 above-fold.
- **5.3** Rewrite templated alt texts: `newborn.../page.tsx:26-34` has "Lifestyle baby photographer near me" style stuffed alts and 36 near-identical "…Image N" alts on maternity → honest descriptive alts, location mentioned only when true.
- **5.4** Add `favicon.ico` + PNG apple-touch icon (SVG-only today).
- **5.5** Consider making the inquiry form's Budget field optional (conversion friction; Carly's call).

---

## KEYWORD → URL OWNERSHIP MAP (one page per term; never create a second)

| Keyword cluster (mo. volume, source) | Owning URL |
|---|---|
| flower mound family photographer / photographer in flower mound tx / flower mound photographer (30/mo & rising 600% YoY, Planner) | `/` (homepage) |
| flower mound newborn photographer, newborn photography near me | `/newborn-baby-photographer-flower-mound` |
| maternity photographer flower mound + copper canyon + near me | `/flower-mound-maternity-photographer` |
| mini sessions flower mound / fall mini sessions near me (seasonal Aug–Oct) | `/flower-mound-mini-sessions` |
| baby/pregnancy announcement photographer | `/flower-mound-baby-announcement-photographer` |
| {grapevine, southlake, coppell, frisco, plano, colleyville, highland village, trophy club, argyle, mckinney, prosper, highland park, dallas} family photographer (Grapevine 73/mo is the largest suburb segment) | `/locations/{city}-family-photographer` |
| lewisville / lantana family photographer | NEW `/locations/...` pages (W4.5) |
| best places for photos in {city} / {park} photography | `/blog/best-photo-locations-*` + park guides |
| grapevine newborn photographer (45 impr, pos 19) | Grapevine city page — add a newborn section + FAQ linking the newborn money page (do NOT create a separate grapevine-newborn page yet) |

Ads-conversion evidence worth honoring in copy: "newborn and family photographer" (15% conv rate), "maternity and newborn photography", "dfw family photographer" converted in Google Ads — use these exact phrases naturally in H2s/FAQs on the relevant pages.

---

## EXECUTION ORDER & REVIEW GATES

| Phase | Workstreams | Review gate |
|---|---|---|
| Week 1 | W1 (redirects/indexing) + W2 (schema/head) — pure technical, 2 PRs | curl checks in PR + GSC URL-inspect 3 fixed URLs |
| Week 1–2 (parallel, no code) | W3.1–3.5 (GBP, Yelp, reviews) | screenshots of GBP settings; review count tracked weekly |
| Week 2–4 | W4.1–4.3 (service pages + internal links + Dallas de-dupe) | Carly copy approval; linkinator crawl clean |
| Week 4–8 | W4.4–4.6 (city de-boilerplate, new cities, blog cadence) + W3.7 citations (2–3/wk) | each city page diff shows ≥50% unique content |
| Week 8+ | W5 polish; monthly: GSC finalized-data check of the Keyword→URL map | 30/60/90-day success criteria above |

**Monitoring cadence:** weekly GSC check on finalized dates only (exclude last 3 days), segmented by query AND page, tracking the Keyword→URL map rows; GBP insights monthly (calls, direction requests, website clicks); kill-switch rule from Success criteria.

**Explicitly out of scope / do not do:** paid links, fake or incentivized reviews, mass-generated city pages beyond the listed set, changing the canonical host, renaming the winning blog URLs, publishing any street address, wedding-focused content (positioning is family/newborn/maternity), pointing Ads at the homepage (when Ads resume, land them on the matching service page — note for Elliot, not an SEO task).

---

## EXECUTION LOG — 2026-07-02 (Opus 4.8)

Branch `seo/execution-2026-07` (off `main` @ 19bb676). **Committed locally, NOT pushed** — Elliot reviews, then merges/deploys (push = Vercel production deploy). Full `npm run build` passes after every commit. 24 files, 4 commits.

### Codebase corrections found during execution (the audit/plan had wrong paths)
1. **The live component tree is `src/components/v3/`, not `src/components/`.** The homepage renders `@/components/v3/HomeClient`. The legacy top-level `src/components/Hero.tsx` ("Heirlooms / Not JPEGs") is DEAD CODE — never rendered. The plan's file paths for Hero/FAQ/Nav/Footer/Expertise/Portfolio/ContextualCTA all pointed at the wrong (legacy) files; retargeted to `v3/`. Only `AreasServed.tsx` and `FacebookPixelDebug.tsx` are used from the top level. **Future work: edit `v3/` files.**
2. **`/flower-mound-newborn-photographer` and `/contest` are the only redirect stubs.** `/contest` has staged `v3/ContestForm` + `ContestHero` components (a real, currently-disabled page), so it was left as its existing redirect — NOT made a permanent 308 (a 308 hard-caches in browsers and would break a contest relaunch). Only the newborn slug was made permanent.
3. **W4.3 (portfolio retitling) was DEFERRED, not executed.** The plan assumed `/locations/dallas-*` pages own the Dallas service terms, but only `dallas-family-photographer` exists. The `dallas-maternity-session`, `dallas-baby-announcement` (9 clicks/qtr), and `dallas-mini-session` (6 clicks/qtr) PORTFOLIO pages are the SOLE pages for those terms and earn real clicks. Retitling them to generic galleries would sacrifice clicks with no replacement page. Needs a decision (see below).

### SHIPPED (committed on the branch)
- **W1 — redirect & indexing** (`1694a11`): newborn slug now 308→ real newborn page (was 307→wrong page); `/locations/[city]` uses `generateStaticParams` + `dynamicParams=false` so unknown slugs 404 (was soft-404 @ 200); removed blanket `X-Robots-Tag` header; repointed all internal links off the redirecting FM location URL; honest sitemap `lastmod` dates; fixed future-dated (2026-08-01) fall-minis post; refreshed `llms.txt`.
- **W2 — schema & head** (`e886320`): sitewide JSON-LD reduced to PhotographyBusiness only (removed empty `streetAddress`, fixed IG handle to `@carlygage`, dropped unverified Facebook, added `sameAs`: GBP cid 1566287165136920608 + Yelp + IG); moved WebPage + FAQPage to the homepage; **FAQPage now built from a shared module (`src/data/homepage-faq.ts`) that also drives the visible `<FAQ/>`, so schema always matches on-page content**; added `Service` schema (with ~40-mi GeoCircle) to the 4 money pages; location-page `og:url` added; Grapevine FAQ raw-HTML link now renders; dead `/#wardrobe` `/#pricing` CTAs fixed; `#locations` anchor made real. Verified in built HTML: FAQPage on `/` only.
- **W2.3 — visible copy** (`433a907`, isolated for easy review): newborn page H1 "Newborn & Baby Photography" → "Flower Mound Newborn & Baby Photographer".
- **W4.2 + W4.6 — internal linking + blog index** (`38ebb90`): footer now links all 4 money pages (a new "Sessions" bar) + the 3 previously-orphaned city pages; real Instagram link, visible phone, real Sitemap link; homepage service tiles repointed to money pages; `/blog` index now lists all 9 posts (was 6).

### POST-DEPLOY verification (run after Elliot merges + Vercel deploys)
```
curl -sI https://carlygage.com/flower-mound-newborn-photographer | grep -E "HTTP|location"   # 308 -> /newborn-baby-photographer-flower-mound
curl -s -o /dev/null -w "%{http_code}\n" https://carlygage.com/locations/gotham-family-photographer   # 404
curl -sI https://carlygage.com/ | grep -i x-robots   # empty
curl -s https://carlygage.com/ | grep -o '"@type":"FAQPage"'   # present
curl -s https://carlygage.com/locations/frisco-family-photographer | grep -o '"@type":"FAQPage"'   # ABSENT
npx linkinator https://carlygage.com --recurse --skip "instagram|yelp|google|anomadiclove"   # 0 broken; 0 orphans
```
Then in GSC: URL-inspect + Request Indexing for the 4 money pages and `/flower-mound-newborn-photographer`; resubmit sitemap.

### STILL TODO — needs a human (not code)
- **W3 (highest local-traffic leverage) — all dashboard work, see `CGWeb/W3-DASHBOARD-CHECKLIST.md`.** GBP service-area redraw + category + photos + reviews engine; Yelp address hide; NAP standardization. None of this is in the repo.
- **W4.1 / W4.4 / W4.5 — page copy + real per-city photos.** Needs Carly's approval and assets; draft copy should be produced then approved before shipping (do NOT auto-publish thin pages — content bar in W4). The `Service` schema and internal links are already in place to receive this content.
- **W4.3 decision:** only `/portfolio/dallas-family-session` has a true duplicate (`/locations/dallas-family-photographer`). Recommend re-scoping just that one to a gallery title; leave the other 3 portfolio pages (they're sole owners + earn clicks).
- **W5 (lowest priority, deferred):** repoint money/location pages off multi-MB source JPGs to the existing `/images/optimized/*.webp`; trim `priority` image count; rewrite keyword-stuffed alt texts on the newborn/maternity galleries; add a binary `favicon.ico` + PNG apple-touch icon (needs image tooling). Vercel resizes on the fly, so this is real-but-marginal.
- **Homepage H1 (W2.2):** still two 10px-eyebrow `<h1>`s in `v3/Hero.tsx` (mobile+desktop), keyword present but visually tiny, with "Real Moments. Beautifully Kept." as the H2. Not shipped — it's a design decision (needs Carly's eye on making the visible headline the H1). Low SEO impact since the keyword is already in an H1.
- **Nav "Sessions" dropdown (W4.2):** deferred — the money pages are now reachable via the footer (1 click), so this is a UX nicety, not a crawlability fix. Building the dropdown is a design/interaction change for Carly to approve.

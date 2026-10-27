# Honey Wagon Services: website build script

Mockup for a walk-in pitch by Madison Design Projects ($800 flat, 6-day launch).
Showpiece device: **iPad** (portrait 820×1180, landscape 1180×820, iPad Pro 1024×1366). Desktop and phone get the same polish.

## 1. Business facts (only these, all sourced)
| Fact | Value | Source |
|---|---|---|
| Legal name | Honey Wagon Services Inc | FMCSA SAFER USDOT 897290 |
| Shop & yard | 330 Industrial Circle, Stoughton, WI 53589 (owned by the company, commercial class G2, 1.26 ac) | AccessDane parcel 0511-051-9345-2 |
| Mailing | PO Box 139, Stoughton, WI 53589 | FMCSA |
| Phone | (608) 873-6726 | FMCSA, BBB, Google |
| Hours | Mon–Fri 8:00 AM–4:30 PM, Sat–Sun closed | Google listing data |
| In business since | 1977 (D&B, septic.com). AllPages says 1960, so **confirm with the owner** | D&B, septic.com, AllPages |
| Area | Dane County, WI | BBB |
| Services | Pumping septic systems & holding tanks; catch basins, grease traps, car-wash pits; high-pressure line jetting; thawing frozen lines; baffle replacement; system evaluations; porta-potty rental | Business description on Experience.com/Google; septic.com; AllPages |
| Rating | 4.6★ on Google (17 reviews) | Google listing data |
| Owner | Les Swanson (not named on the site) | D&B, Green Union |

Not used on the site (unverified): licensing/bonding/insurance claims, "24/7 emergency", truck sizes, prices, "family-owned", the exact list of towns served, any photos of their trucks or yard (none publicly available).

## 2. Positioning
"The local septic crew Stoughton has called since 1977." Calm and trustworthy, rural Dane County, no gimmicks. The goal is one action: **call the office**, with a quote request form as the backup.

## 3. Visual system
- **Colors:** Field green `#1E3B2F` (primary, dark sections), Honey `#E9A23B` (accent, CTAs on dark), Deep honey `#B9741A` (accent text on light), Cream `#FAF6EE` (page background), Paper `#FFFFFF` (cards), Ink `#17201B` (text), Moss gray `#5D6B63` (secondary text), Line `#E6DFD1`.
- **Type:** "Archivo" 700/800 for headings (sturdy, trade-like), "Inter" 400/500/600 for body. Fluid sizes with `clamp()`.
- **Wordmark:** an original SVG honeycomb hexagon with a drop inside, plus "HONEY WAGON" set in Archivo 800 and "SERVICES · STOUGHTON, WI" small caps beneath.
- **Imagery:** one licensed hero photo of a red barn and silos in Dane County ("Ashton Farm in Dane County, Wisconsin" by Corey Coyle, CC BY 3.0, credited in the footer). Everything else uses original line icons/illustrations (inline SVG). No other company's logos or units.
- **Shape language:** 16px radius cards, soft shadows, honeycomb hex motif used sparingly.

## 4. Layout & breakpoints (no awkward in-betweens)
- **Phone, under 640px:** single column. Sticky bottom action bar (Call | Request service), 56px tall.
- **Tablet, 640–1099px** (iPad portrait 820, iPad Pro portrait 1024): menu button opens a full-height sheet with 56px rows. Two-column grids for services, rentals, and reviews. The hero stacks its copy over the photo with a trust strip. A sticky bottom action bar stays on (it's the main tap target on iPad).
- **Desktop and landscape tablet, 1100px and up** (iPad landscape 1180, iPad Pro landscape 1366, laptops): full inline nav plus a "Call" pill in the sticky header, three-column grids, and a two-column hero with a "Request service" card beside it.
- **Touch:** every tap target is at least 48px. There are no hover-only interactions: the FAQ uses `<details>`, the menu is a button, and hover effects are cosmetic only. `-webkit-tap-highlight-color` is tuned, and focus-visible rings are on.

## 5. Sections & copy
1. **Utility bar** (desktop): "Mon–Fri 8:00–4:30 · 330 Industrial Circle, Stoughton · (608) 873-6726".
2. **Header:** wordmark, then nav (Services · Porta-Potties · Service Area · Reviews · FAQ · Contact), then the "Call (608) 873-6726" button.
3. **Hero:** eyebrow "Stoughton, WI · Since 1977". H1 "Septic pumping & porta-potty rentals from Stoughton's local crew." Sub: "Septic and holding-tank pumping, line jetting, frozen-line thawing, system evaluations, and clean portable toilets for job sites and events across Dane County." CTAs "Call (608) 873-6726" and "Request service". Trust row: "4.6★ on Google · 17 reviews" | "Serving Dane County since 1977" | "Shop & trucks on Industrial Circle, Stoughton".
4. **Quick help** (three tap cards): "Tank due for pumping?" / "Drain or line backing up?" / "Need porta-potties?". Each one jumps to its section or calls.
5. **Services** (H2 "Septic & drain services"): six cards: Septic & holding-tank pumping; System evaluations & inspections; High-pressure line jetting; Thawing frozen lines; Baffle replacement; Commercial pumping (grease traps, catch basins, car-wash pits).
6. **Porta-potty rentals** (H2 "Portable toilet rentals"): three cards, Construction & job sites / Parties & events / Weddings & reunions. Line: "Tell us the date, location and headcount. We'll confirm availability and give you a price on the phone." No prices.
7. **Three-year reminder** band: "Wisconsin requires most private septic systems to be inspected or pumped at least every three years. Not sure when you're due? Call and we'll check your record." (Wisconsin SPS 383.55; verify with the owner.)
8. **About**: "Local since 1977." Stoughton-based with their own shop and yard on Industrial Circle, a phone answered by people in Stoughton, and a crew that customers describe as prompt, courteous and knowledgeable.
9. **How it works:** 1 Call the office → 2 We schedule a time that works → 3 Pumped, checked, and recorded.
10. **Reviews:** "4.6★ average on Google from 17 reviews". Exact quotes only, with first name + last initial where the source shows it (Patrick R., April J., Keith K., Kimberly M., Julie W.; one unnamed Google quote). Link: "Read reviews on Google".
11. **Service area:** "Based in Stoughton, serving homes, farms and businesses across Dane County." Map embed of 330 Industrial Circle. (Town list goes in after the owner confirms it.)
12. **FAQ** (accordion): how often to pump; signs you need service; frozen lines; porta-potty lead time & what to tell us; commercial work; hours/how to reach us.
13. **Contact / request service:** a form (name, phone, town or address, service type, preferred day, notes). In the mockup it's front-end only with a confirmation state (wire it to email at launch). Alongside: phone, hours, shop address, mailing address, and directions link.
14. **Footer:** wordmark, NAP, hours, quick links, photo credit, "© Honey Wagon Services Inc", and "Website concept by Madison Design Projects".
15. **Sticky action bar** (below 1100px): "Call now" (tel:) + "Request service" (#contact).

## 6. SEO
- **Title:** `Septic Pumping & Porta Potty Rental in Stoughton, WI | Honey Wagon Services`
- **Meta description:** `Stoughton's local septic crew since 1977. Septic & holding-tank pumping, line jetting, frozen lines, inspections and porta-potty rentals across Dane County. Call (608) 873-6726.`
- **Keywords to work into the copy:** septic pumping Stoughton WI, septic tank pumping Dane County, holding tank pumping, septic inspection Stoughton, porta potty rental Stoughton, porta potty rental Dane County, portable toilet rental Madison area, line jetting, frozen septic line.
- **Schema:** JSON-LD `LocalBusiness`/`Plumber` with name, address, geo (42.927185, -89.217857), phone, opening hours, areaServed Dane County. No self-serving aggregateRating.
- **Other:** OG/Twitter image, canonical, semantic headings (one H1), alt text, `lang="en"`.

## 7. Performance & quality
Static HTML/CSS/vanilla JS with no framework. Hero served as responsive WebP (800/1280/2000) with a JPEG fallback and `fetchpriority="high"`. Fonts preconnected with `display=swap`. Map iframe lazy-loaded. Target: Lighthouse 95+ on mobile.

## 8. Launch checklist (after the owner says yes)
Confirm the year founded, town list, porta-potty unit types and inventory, an office email for form delivery, any license numbers they want shown, and photos of their own trucks/yard. Then connect a domain and set up the Google Business Profile website link.

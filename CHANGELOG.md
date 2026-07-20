# Changelog

## 2026-07-21

### FAQ

- **Medical Services**: Added “What happens if we need medical help after hours?” (24/7 on-call escalation process) and “How do I contact my medical care team when I need them?” (Blink messaging, nursing phone numbers, on-call line, email)
- **Contact Us**: Removed “Do you have questions for a member of our team?”; renamed “Questions before signing up?” to “Questions?” with intro-call link, sales email, and direct sales line 801-560-7640; billing contact changed to accounting@aspencorrections.com
- Updated JSON-LD schema to match (25 questions)

## 2026-07-20

### Global

- **Type scale**: h3 raised to 2rem with the same tightened letter-spacing and leading as h1/h2
- **Footer**: Added phone number (801) 560 7640 and reorganized into a four-corner layout — branding top-left, larger phone top-right, legal bottom-left, sales email bottom-right; copyright updated to “© 2026 Aspen Correctional Telehealth”; restored the aspen forest image below the footer content

### Homepage

- **Hero**: Reverted proof points from the checkmark design back to the thematic icons (ambulance, trend-down, phone)
- **All pages**: Hid the “Learn More” secondary CTA (hero and reprise sections) until it can link to case studies
- **Hero**: Ivy Medical callout link text changed from “Click here” to “Email sales”
- **Social Proof**: Removed the “What changes when the right medical team shows up.” heading, updated Rosebud County transports stat from 80% to 90%, added 88% fewer medical transports stat to Washington State; added “Proven results” section heading with “Aspen partners” and “From the people who’ve been there.” subheadings, extra spacing between groups
- **Testimonials**: Added quotes from Steven Barker (Jail Commander), Allen Dahl (Correctional Officer), and Lucas Morrison (HCA & Re-Entry Officer) as the first three cards, followed by the original three; section is now a manually controlled carousel with previous/next arrows (no auto-advance), cards top-aligned at natural height with peek sizing on mobile, first card wider on large screens
- **Section order**: Moved Burden (“Without the right medical team…”) above Problems (“Nobody Built This for You.”) to match the brief’s flow, and removed the “And” from the Burden headline
- **Pillars**: Removed the lightbulb section divider above (the yellow card stands on its own); dropdowns now open on hover (tap to toggle on touch devices), tightened row spacing and accordion chevron alignment, grid gap reduced to 1rem, columns now step strictly 4 → 2×2 → 1 (never 3+1)
- **Timeline**: Split into two rows of three, connected by a continuous S-shaped line with dots centered on it; removed periods from headings and retitled Month 1 to “Fewer meds, shorter med pass”
- **Reprise**: “Download a one-pager” secondary button prepared but commented out until the PDF link exists; removed “No commitment required.” from the CTA note

## 2026-06-13

### Global

- **Nav**: Lowercased “Why Telehealth” to “Why telehealth?” per copy guidance
- **Tagline**: Moved “Serving county jails across the US” out of the nav links into a highlighted tag after the logo per the mockup (hidden on mobile), and matched the Ivy Medical hero callout to the same highlight

### Homepage

- **Social Proof**: Added transitional headline “What changes when the right medical team shows up.”
- **Testimonials**: Added transitional headline “From the people who’ve been there.”
- **Burden**: Changed headline to “And without the right medical team, the facility carries the burden.” to connect from the Problems section
- **Videos**: Added facility video embeds to the Social Proof section, between the stats and testimonials — Walla Walla County Jail (Walla Walla, Washington State) and Whitman County Jail (Colfax, Washington State)
- **Hero**: Proof points now use the checkmark design from the mockup, eyebrow set in all caps
- **Burden**: Centered the headline
- **Pillars**: Restored the expandable dropdown copy for all 10 items (“keep drop down copy”), with the new Administrative Ownership additions (confirming patient medical records and medications, coordinating outside medical appointments)
- **Reprise**: Added back-to-top navigation link, “Still unsure?” eyebrow sized to match the hero eyebrow, “We respond to every request.” bumped to body size

### About

- Replaced page copy with new “We built Aspen because small jails deserve better.” rewrite (5/27 brief): audience framing (under 120 beds, ignored by the industry), Ivy Correctional Medicine origin story with 15 years experience, “It shows up in our” corrections-expertise list, mission statement, “With Aspen, jails get” service list, Brian Egeland closing quote
- **Reprise**: Updated to dual CTA (Book a 30-min call + Learn More)

### FAQ

- Restructured into categories per 6/3 brief: Getting Started, Medical Services, Medications & Staffing, Facility Eligibility, Contact Us
- **New questions**: Who holds the liability if something goes wrong?, How do you handle complicated high-risk patients via telehealth?, Do you do suicide clearances?, Do you offer MAT/MOUD assistance or programs?, Can I use my local pharmacy?, How many med passes will occur per day?, Since this is telehealth should I expect my medical transports to go up?, Questions before signing up?, Questions for a member of our team?, Questions about billing?
- **Updated answers**: Implementation (go-live week onsite, med cart setup, 2-5 day onboarding), inmate complaints (inmates can kite us directly), medications (20%-80% rate drop), part-time nursing (now custom hybrid solutions on a case-by-case basis — supersedes the 70 ADP answer), local nurse exceptions (“on the nursing side”)
- **Eligibility**: Updated larger-jail and ADP questions from 100/80 to 120 thresholds
- Regenerated JSON-LD schema to match all 24 questions
- **Reprise**: Updated to dual CTA (Book a 30-min call + Learn More)

### Deferred

- **Case Studies nav link**: waiting until case studies are ready
- **FAQ links**: “Contact us” links point to sales@aspencorrections.com until quote/contact page links are provided
- **Open design questions from Round 1**: alternating module background colors / reduced bumpers (current design uses section dividers instead), bumping darkness of light gray text, solution module logo vs. “Introducing Aspen” headline redundancy (options requested)
- **SEO/ranking recommendations**: linked doc in the brief not accessible from the PDF — need the link

## 2026-05-13

### Global

- **Nav**: Removed “Home” link, renamed “About us” to “About”, added “Serving county jails across the US” tagline as first nav element
- **Footer**: Removed duplicated nav bar, removed forest background imagery, added sales@aspencorrections.com contact, removed dead Privacy/Terms links
- **All pages**: Updated bed count from 80 to 120
- **Asset paths**: Fixed from `../assets/` to `assets/` for subdirectory deploy compatibility

### Homepage

- **Hero**: Added eyebrow (“Custody is your job. Medical care is ours.”), updated headline to “Finally, Inmate Healthcare for Jails Under 120 Beds”, rewrote subheadline with 15+ years experience, changed “Support you can trust” proof point to “On-call 24/7”, added dual CTA (Book a 30-min call + Learn More), added “We respond to every request.” note, added Ivy Medical callout for 150+ ADP jails
- **Video**: Removed section entirely (to be replaced eventually)
- **Social Proof** (new): Added stats from 3 jails — Rosebud County MT (80% fewer transports, 53% med drop, 60% stress reduction), Washington State (85% cost reduction), Nevada (80% cost reduction). Added 3 testimonials (James Byrd, Brian Egeland, Bill Ferguson)
- **Problems**: Updated headline from “Why Small Jails Get Left Behind” to “Nobody Built This for You.”, updated subheadline to reference 120 beds
- **Burden**: Kept as-is
- **Pillars** (new, replaces Solution + Features): Combined into 4 pillars — Clinical Coverage, Behavioral Health, Admin & Records, Liability Protection — each with icon, description, and feature list
- **Timeline**: Redesigned from vertical alternating layout to horizontal
- **Results**: Removed section (data moved into Social Proof)
- **Reprise**: Added “Still unsure?” eyebrow, changed headline to “Let’s talk through your specific situation”, updated copy, added dual CTA, added “No commitment required” note

### FAQ

- **Part-time nursing question**: Changed answer from “No” to “Yes. For jails with 70 ADP or greater...” with sales@aspencorrections.com contact
- Updated JSON-LD schema to match

### Why Telehealth

- Updated bed count references from 80 to 120

### About

- Updated bed count references from 80 to 120
- Updated Ivy CM experience from “14 years” to “15+ years”

### Needs discussion

- **SEO title**: Should change from “Aspen - Inmate Medical Care” to “Jail Medical Services for Small County Jails | Aspen Corrections” (requires build.js change)
- **Meta description**: Should update to “Aspen provides 24/7 telehealth medical care for jails under 120 beds. Reduce transports, cut liability, and stop asking officers to make medical decisions. Serving county jails across the US.” (requires build.js change)
- **Dead links**: Privacy and Terms in footer link to `#` — need actual URLs

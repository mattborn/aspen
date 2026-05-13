# Changelog

## 2026-05-13

### Global

- **Nav**: Removed "Home" link, renamed "About us" to "About", added "Serving county jails across the US" tagline as first nav element
- **Footer**: Removed duplicated nav bar, removed forest background imagery, added sales@aspencorrections.com contact, removed dead Privacy/Terms links
- **All pages**: Updated bed count from 80 to 120
- **Asset paths**: Fixed from `../assets/` to `assets/` for subdirectory deploy compatibility

### Homepage

- **Hero**: Added eyebrow ("Custody is your job. Medical care is ours."), updated headline to "Finally, Inmate Healthcare for Jails Under 120 Beds", rewrote subheadline with 15+ years experience, changed "Support you can trust" proof point to "On-call 24/7", added dual CTA (Book a 30-min call + Learn More), added "We respond to every request." note, added Ivy Medical callout for 150+ ADP jails
- **Video**: Removed section entirely (to be replaced eventually)
- **Social Proof** (new): Added stats from 3 jails — Rosebud County MT (80% fewer transports, 53% med drop, 60% stress reduction), Washington State (85% cost reduction), Nevada (80% cost reduction). Added 3 testimonials (James Byrd, Brian Egeland, Bill Ferguson)
- **Problems**: Updated headline from "Why Small Jails Get Left Behind" to "Nobody Built This for You.", updated subheadline to reference 120 beds
- **Burden**: Kept as-is
- **Pillars** (new, replaces Solution + Features): Combined into 4 pillars — Clinical Coverage, Behavioral Health, Admin & Records, Liability Protection — each with icon, description, and feature list
- **Timeline**: Redesigned from vertical alternating layout to horizontal
- **Results**: Removed section (data moved into Social Proof)
- **Reprise**: Added "Still unsure?" eyebrow, changed headline to "Let's talk through your specific situation", updated copy, added dual CTA, added "No commitment required" note

### FAQ

- **Part-time nursing question**: Changed answer from "No" to "Yes. For jails with 70 ADP or greater..." with sales@aspencorrections.com contact
- Updated JSON-LD schema to match

### Why Telehealth

- Updated bed count references from 80 to 120

### About

- Updated bed count references from 80 to 120
- Updated Ivy CM experience from "14 years" to "15+ years"

### Needs discussion

- **SEO title**: Should change from "Aspen - Inmate Medical Care" to "Jail Medical Services for Small County Jails | Aspen Corrections" (requires build.js change)
- **Meta description**: Should update to "Aspen provides 24/7 telehealth medical care for jails under 120 beds. Reduce transports, cut liability, and stop asking officers to make medical decisions. Serving county jails across the US." (requires build.js change)
- **Dead links**: Privacy and Terms in footer link to `#` — need actual URLs
- **Phone number**: Footer should include a phone number per content strategist — need the number

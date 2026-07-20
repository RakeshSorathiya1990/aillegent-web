# Aillegent Website Design & Content Blueprint — v2

> v2 (2026-07-19). Supersedes v1. Changes: How We Work + Company merged into **About**; products are now **Shilp, Eventik, Permit360** (A2Z 029 removed; Cloud Services & Cost Optimisation presented under Services only); **Data Engineering** added as a sixth service; site-wide wording pass (see §1 voice rules); visual direction updated to the approved light system.

## 1. Brand foundation

### Positioning

**Aillegent is the engineering partner for organisations building, deploying, and optimising intelligent digital products.** We combine product engineering, applied AI, data engineering, cloud infrastructure, quality automation, and cost optimisation — from a rapid MVP to a stable enterprise platform. We also build and run our own products, which is the strongest proof of how we work.

### Company facts (verified — from Permit360 deck, July 2026)

- Founded: 2025 · Headquarters: Gandhinagar, India
- Email: info@aillegent.com · Phone: +91 90283 21652
- Own products in market: Shilp, Eventik, Permit360

### Primary message

> Build faster. Scale confidently. Optimise continuously.

### Supporting message

From first product idea to secure production operations, Aillegent turns business requirements into reliable software, AI-enabled systems, and scalable cloud platforms.

### Brand voice

- Clear and practical; explain complex engineering in business language.
- Confident but evidence-led; never invent customer counts, savings, certifications, or performance claims. Placeholder proof must be visibly labelled until verified data replaces it.
- Outcome-oriented; lead with what a client can achieve, then show the engineering behind it.
- Precise; prefer "AI-enabled system" over vague claims such as "AI transformation".
- **Anti-repetition rule:** do not lean on a single word as a crutch. In v1 "workflow" appeared 35+ times; cap it at a handful of uses site-wide and prefer the specific noun — *process, operations, casework, research, decisions, day-to-day work, pipeline*. Watch the same for "requirement", "capability", "production", "optimisation".
- **No duplicated sections:** each major content block (delivery cycle, growth journey, capability grid, pyramid) lives on exactly one page in its full form; other pages may reference it with one line + link.

### Global navigation (5 items)

| Navigation item | Destination | Purpose |
|---|---|---|
| Services | /services | The six core capabilities |
| Products | /products | Shilp, Eventik, and Permit360 |
| Industries | /industries | Finance, IP, advertising, recruitment |
| About | /about | Who we are and how we work (merged page) |
| Contact | /contact | Start a conversation |

**Persistent primary CTA:** Start a conversation

### Footer

- Short statement: "Product engineering, applied AI, data, cloud, quality, and optimisation for teams ready to scale."
- Navigation links: Services, Products, Industries, About, Contact.
- Legal links: Privacy Policy, Terms of Use, Cookie Policy.
- Contact: info@aillegent.com · +91 90283 21652 · Gandhinagar, India.
- Tagline trio: Build faster · Scale confidently · Optimise continuously.

---

## 2. Sitemap

    Home
    ├── Services
    │   ├── Product Engineering
    │   ├── Applied AI
    │   ├── Data Engineering        ← new
    │   ├── Cloud & Platform Engineering
    │   ├── Quality Engineering
    │   └── Cost Optimisation
    ├── Products
    │   ├── Shilp
    │   ├── Eventik                 ← new
    │   └── Permit360               ← new
    ├── Industries
    │   ├── Finance
    │   ├── Intellectual Property
    │   ├── Advertising Technology
    │   └── Recruitment
    ├── About                       ← merges How We Work + Company
    └── Contact

---

## 3. Shared visual and interaction direction (as approved)

### Visual language

- **Mood:** Premium, minimal, technical, human. Light and airy — not generic "futuristic AI".
- **Palette (fixed — matches the Aillegent trimark logo):** warm off-white base `#F4F6F1`; deep ink `#0C1320`; brand teal `#0E9E76`; electric mint `#25D79B`; electric blue `#3B7DE0`. Gradients only as accents (headline highlight words, progress arcs, pyramid tiers).
- **Typography:** Rubik — one family for everything (700/600 display, 400/500 body); IBM Plex Mono only for chart axis labels and cycle stage numbers. (Lora was considered and rejected — serif reads editorial, not engineering.)
- **Layout:** minimal and open — borderless cards (soft shadow only), hairline dividers instead of boxed strips, generous whitespace. Avoid box-in-box compositions.
- **No kicker/eyebrow labels** above headings (no "— THE NUMBERS" style mono labels). Headings stand alone.
- **Hero variety (no template sameness):** Home = full-viewport headline over a slow aurora gradient field (three soft brand-light blooms) with a faint engineering grid; overview pages (Services, Products, Industries, About, Contact) = centered, visual-free heroes; detail pages = left copy + right light visual card (each visual unique and meaningful to the page).
- **Imagery:** real product screenshots for Eventik/Permit360/Shilp when supplied; otherwise light, on-palette illustrative visuals. No stock office photography. No fake screenshots presented as real.

### Motion principles

- Motion shows progress, connection, or state change — never decorates idle space. No infinite decorative loops.
- Engine: anime.js reveals + Lenis smooth scroll. No WebGL/Three.js — the hero aurora is pure CSS.
- **Scroll-pinned signature sections** (screen stays fixed, visual advances with scroll): the delivery cycle (Home) and the brand pyramid (About). Tuned so a normal scroll completes them in a few seconds; on mobile and reduced-motion they collapse to static/auto-advancing sections.
- Respect prefers-reduced-motion throughout; identical information without animation.

### Signature interactions

| Signature | Lives on | Behaviour |
|---|---|---|
| Delivery cycle (6 stages) | Home only | Fixed ring, stage 01 at top; gradient arc grows to the active stage; scroll-driven while pinned; keyboard accessible |
| Brand pyramid (3 tiers) | About only | Clean triangle; tiers light up in sync with the copy as the user scrolls |

### Button & CTA discipline (site-wide rules)

1. The header CTA ("Start a conversation") is the ONE persistent contact button — it never repeats as a second pill in the same viewport.
2. Inner-page heroes carry ZERO buttons; the Home hero carries one primary button + one quiet text link.
3. Cards use text links ("Explore →"), never pill buttons.
4. Two ending models: **overview pages** (Home, About, Services, Products, Industries) end with ONE unique full CTA band (one button, page-specific label); **detail pages** end with a slim "Up next →" bridge that chains to the next related page + one small text CTA to contact.
5. Bridge chains: services PE→AI→Data→Cloud→Quality→Cost→overview; products Shilp→Eventik→Permit360→overview; industries Finance→IP→AdTech→Recruitment→overview.
6. Page-specific CTA labels: About "Work with us" · Services "Let's figure it out together" · Products "Request a product walkthrough" · Industries "Discuss your domain" · PE "Plan your product build" · AI "Discuss an AI use case" · Data "Put your data to work" · Cloud "Review your platform" · Quality "Improve release confidence" · Cost "Find your savings" · Shilp "Request a Shilp walkthrough" · Eventik "See Eventik in action" · Permit360 "Book a Permit360 demo".
7. Target: ≤3 contact links per page (header, mobile menu, ending).

---

## 4. Home page — /

### Goal

Make it immediately clear that Aillegent can build a new product, add AI, deploy it properly, test it thoroughly, keep it efficient — and that we prove it by running products of our own.

### SEO

- **Title:** Aillegent | Product Engineering, AI, Data, Cloud & Quality
- **Description:** Build, deploy, test, and optimise intelligent digital products with Aillegent — from rapid MVP to enterprise-scale production.

### Section 1 — Hero (full light, constellation background)

**H1:** Build the product. Deploy with confidence. Scale with control.

**Body copy (short — the cards below carry the detail):**
Aillegent turns business requirements into dependable digital products — and stays until they run well in production.

**Primary CTA (button):** Start a conversation
**Secondary (quiet text link, scrolls down):** Explore our capabilities ↓

No eyebrow line, no chip row, no second pill button — the headline carries the hero, over a slow aurora gradient field that keeps the text zone clean.

### Section 2 — Tech marquee

"The stack we build on" — single scrolling line of honest technologies (Java, Node.js, Python, React, Next.js, TypeScript, PostgreSQL, AWS, Docker, Kubernetes, Terraform, Kafka, Pandas, PySpark, TensorFlow, PyTorch, LangChain, GraphQL).

### Section 3 — Capabilities (6, short teaser versions)

**Heading:** One partner across the product lifecycle

Six cards, one line each (full descriptions live on /services — do not duplicate them here):

| # | Capability | Teaser line |
|---|---|---|
| 01 | Product Engineering | Custom platforms, backends, and APIs built around real business requirements. |
| 02 | Applied AI | AI products, custom LLM systems, and agentic automation that reach production. |
| 03 | Data Engineering | Warehousing, pipelines, and analysis that make data dependable. |
| 04 | Cloud & Platform | Secure deployment with CI/CD, containers, monitoring, and governance. |
| 05 | Quality Engineering | Automated web, API, and performance testing for release confidence. |
| 06 | Cost Optimisation | Lower the cost of delivery, infrastructure, and ongoing operations. |

**CTA:** View all services

### Section 4 — Outcomes / data

**Heading:** Engineered for measurable outcomes
Count-up stat band + two light charts. All figures visibly labelled "Illustrative" until replaced by verified metrics. Update the "core capabilities" stat to **6**.

### Section 5 — Delivery cycle (scroll-pinned signature)

**Heading:** From requirement to reliable production
**Intro:** Good delivery is not a handoff from discovery to development. It is a connected cycle that keeps business context, architecture, quality, cloud operations, and cost decisions aligned.

| Stage | Content shown on selection | Outcome |
|---|---|---|
| Discover | Turn business goals, user needs, and domain context into a clear problem to solve. | Prioritised requirement definition |
| Architect | Define functional and non-functional requirements, solution architecture, and delivery documentation. | Build-ready system blueprint |
| Build | Develop frontend, backend, APIs, data, and AI-enabled capabilities. | Working product increments |
| Launch | Set up CI/CD, containers, cloud infrastructure, databases, security, and governance. | Secure, repeatable deployment |
| Validate | Move from business scenarios through test environments and UAT to production with automation and performance testing. | Verified, scalable experience |
| Optimise | Monitor reliability, performance, and cost; feed findings into the next product decision. | Stable growth with controlled spend |

### Section 6 — Case studies (placeholder slots)

**Heading:** Proof, ready for when it's yours to show
Three metric cards with thematic images (cloud cost ↓, faster releases, AI automation) — clearly labelled placeholders until real engagements replace them.

### Section 7 — Built by Aillegent (own products)

**Heading:** Products we build, own, and run

| Product | One-line description | CTA |
|---|---|---|
| Shilp | AI prompt generation for Indian-style cinematic storytelling, shaped by your creative intent. | Explore Shilp |
| Eventik | AI photo delivery and complete studio management for event photographers. | Explore Eventik |
| Permit360 | The electronic permit-to-work system for modern industrial plants. | Explore Permit360 |

(Cloud Services and Cost Optimisation are services — they appear on /services only.)

### Section 8 — Industries

**Heading:** Engineering shaped by domain understanding
**Body:** We work where business processes, data, compliance, reliability, and operational speed all matter. Our approach starts with the domain — not just the technology choice.
List: Finance · Intellectual Property · Advertising Technology · Recruitment
**CTA:** Explore industries

### Section 9 — Testimonials + trust strip

Rotating quotes and certification/rating tiles — all visibly labelled as samples/targets until verified.

### Section 10 — Final CTA

**Heading:** Have a product problem worth solving?
**Body:** Whether you are validating an MVP, improving an existing platform, deploying AI, or bringing a production environment under control, we can help define the next practical step.
**CTA:** Start a conversation

---

## 5. Services overview — /services

### Hero (centered)

**H1:** Engineering capability that connects from idea to operations

**Body copy:**
Choose a focused engagement or combine capabilities across the whole lifecycle. Aillegent connects product strategy, software delivery, AI, data, cloud operations, quality, and cost control into one delivery model.

### Service groups (6 — full descriptions live here)

1. **Product Engineering** — Custom product development, frontend and backend engineering, APIs, architecture, and modernisation.
2. **Applied AI** — AI product design, machine learning, deep learning, custom LLMs, fine-tuning, MLOps, LLMOps, and agentic automation.
3. **Data Engineering** — Data warehousing, gathering and ingestion, cleaning and preparation, manipulation, statistical analysis, and visualisation.
4. **Cloud & Platform Engineering** — Deployment, CI/CD, Docker, ECS and container platforms, security, governance, monitoring, storage, databases, and infrastructure.
5. **Quality Engineering** — Business scenario breakdown, test environments, UAT, production confidence, web automation, API automation, and performance testing.
6. **Cost Optimisation** — Delivery efficiency, team and resource planning, infrastructure usage, monitoring, and cost-aware architecture.

### Cross-service section

**Heading:** Designed around your business requirement
**Body:** The right solution may be a focused monolith, a microservice platform, a domain-driven design, an event-driven system, or a distributed-transaction architecture. We select the approach based on operational needs, product maturity, team capability, and future scale — not trend alone.
**CTA:** Let's figure it out together

---

## 6. Product Engineering — /services/product-engineering

### Hero

**H1:** Turn product requirements into software people can rely on
**Body:** We design and build custom products from the first requirement through delivery, release, and iteration — combining business understanding, technical architecture, documentation, frontend and backend development, and production readiness.

### What we deliver

- Custom web and platform development
- Frontend and backend engineering
- API and integration development
- Product discovery and requirement analysis
- Solution architecture and technical documentation
- Product modernisation and capability expansion

### Architecture section

**Heading:** Choose the architecture that fits the business

| Approach | Best described as |
|---|---|
| Monolithic architecture | A focused foundation for a product that needs speed, cohesion, and manageable complexity. |
| Microservices | Independently deployable services for systems that benefit from clear boundaries and operational scale. |
| Domain-driven design | A model that keeps software language and boundaries close to the business domain. |
| Event-driven systems | A responsive approach where events trigger downstream actions. |
| Distributed transaction patterns | Reliable coordination for operations that span services and require controlled consistency. |

### Technology section

Java · Node.js · Python · frontend development · backend development

**CTA:** Plan your product build

---

## 7. Applied AI — /services/applied-ai

*(Data engineering items moved to §8 — no overlap between the two pages.)*

### Hero

**H1:** Apply AI where it changes real outcomes
**Body:** AI creates value when it is connected to trusted data, product behaviour, human decisions, and production operations. Aillegent builds AI products and AI-enabled systems designed for practical use — not just demonstrations.

### Core capabilities

- AI product and tool development
- AI implementation in existing products and processes
- Machine learning model development and deployment
- Deep learning model development and deployment
- Custom LLM development and fine-tuning
- MLOps and LLMOps
- Custom agentic automation and optimisation
- AI cost optimisation

### Delivery approach

1. Identify the business decision, task, or process that should improve.
2. Assess data, system integration, quality, security, and operational constraints.
3. Prototype the smallest useful AI capability.
4. Integrate it into the product or the team's day-to-day work.
5. Monitor quality, cost, and ongoing improvement.

**CTA:** Explore an AI use case

---

## 8. Data Engineering — /services/data-engineering  *(new)*

### Hero

**H1:** Make your data dependable before you make it intelligent
**Body:** AI and analytics are only as good as the data underneath them. We gather, clean, structure, and analyse your data — so every model, dashboard, and decision stands on solid ground.

### What we deliver

- Data warehousing — a single, structured home for your business data
- Data gathering and ingestion — bringing scattered sources into one reliable flow
- Data cleaning and preparation — accurate, consistent, analysis-ready datasets
- Data manipulation and transformation — reshaping data for the questions you ask
- Statistical analysis — honest answers about what the numbers actually say
- Visualisation and reporting — charts and dashboards people actually read

### Technology section

Python · Pandas · PySpark · NumPy · Matplotlib · Seaborn

*(Note: pyplot is Matplotlib's plotting module — never list it as a separate tool.)*

### Cross-link section

**Heading:** Data that feeds everything else
**Body:** Clean data foundations power our Applied AI engagements, sharpen cost decisions, and make monitoring meaningful. Data Engineering is where the other capabilities get their fuel.

**CTA:** Put your data to work

---

## 9. Cloud & Platform Engineering — /services/cloud-platform

### Hero

**H1:** Make production operations a product capability
**Body:** A production environment should make releases repeatable, systems observable, access controlled, and infrastructure cost visible. We design cloud foundations that support the application — not slow it down.

### Cloud services

| Area | Content |
|---|---|
| Deployment | Reliable release processes for applications and services. |
| CI/CD | Automated build, test, and delivery pipelines. |
| Docker & containers | Containerised applications and consistent runtime environments. |
| ECS / container platforms | Managed orchestration and scalable service deployment. |
| Security | Access controls, secure configurations, and deployment safeguards. |
| Governance | Standards, ownership, policies, and operational guardrails. |
| Monitoring | Health, logs, performance, alerts, and production visibility. |
| Data storage & databases | Durable, appropriate data services for product needs. |
| Infrastructure | Cloud environments, configuration, and operational foundations. |

### Cost control section

**Heading:** Optimise without losing reliability
**Body:** Cloud cost optimisation is not simply reducing infrastructure spend. It means matching resources to actual demand, identifying waste, improving observability, and making architecture and deployment choices that stay efficient as the product grows.
**CTA:** Review your cloud platform

---

## 10. Quality Engineering — /services/quality-engineering

### Hero

**H1:** Build quality into the delivery cycle
**Body:** Quality starts with the business scenario, not the final release. Aillegent connects feature expectations, test environments, UAT, production checks, and automation so teams can release with confidence.

### Quality cycle

1. **Business requirement scenario breakdown** — Convert real business needs into clear, testable scenarios.
2. **Feature-to-scenario mapping** — Ensure each product feature has meaningful coverage.
3. **Testing environment → UAT → production** — A disciplined path from internal testing to user validation and live release.
4. **Integrated automation** — One-click automation for integrated microservice testing where appropriate.
5. **Web automation testing** — Production-scale automated browser testing for critical user journeys.
6. **API testing automation** — Verify service contracts, integrations, and backend behaviour.
7. **Performance testing** — Understand how the platform behaves under realistic demand.

**CTA:** Strengthen your release confidence

---

## 11. Cost Optimisation — /services/cost-optimisation

### Hero

**H1:** Control the cost of building and running your platform
**Body:** Cost is a product decision as much as a finance decision. We look across development practices, team allocation, infrastructure usage, cloud architecture, monitoring, and performance to find practical savings.

### Two optimisation dimensions

| Dimension | Content |
|---|---|
| Development cost | Delivery processes, engineering effort, rework, automation, maintainability, and the right level of technical complexity. |
| Resource cost | Team composition, cloud infrastructure, databases, containers, monitoring, and capacity usage. |

**CTA:** Discuss cost optimisation

---

## 12. Products overview — /products

*(Own products only. Cloud Services and Cost Optimisation live under Services.)*

### Hero (centered)

**H1:** Software we build, own, and run
**Body:** Alongside client engineering, Aillegent builds its own products — the clearest proof of how we design, ship, and operate software in production.

### Product cards (3)

#### Shilp

**Headline:** Indian cinematic prompt generation, shaped by your creative intent
**Copy:** Shilp is an AI prompt generator that turns an idea, scene, or brand need into richer Indian-style, cinematic prompts for image and video creation.
**CTA:** Explore Shilp

#### Eventik

**Headline:** AI photo delivery and studio management, in one place
**Copy:** Eventik is the complete platform for event photographers and studios — guests find their own photos with a single selfie, and the business runs from one login.
**CTA:** Explore Eventik

#### Permit360

**Headline:** The electronic work permit system for modern plants
**Copy:** Permit360 replaces paper permits and email approvals with one cloud-based, auditable permit-to-work platform — built for chemical, pharma, and manufacturing sites.
**CTA:** Explore Permit360

---

## 13. Shilp product page — /products/shilp

### Hero

**H1:** From a creative requirement to a cinematic Indian-style prompt
**Body:** Shilp helps creators turn an idea, scene, brand need, or storytelling requirement into richer AI image and video prompts with Indian cultural and cinematic context.

### How it works

1. Describe the subject, mood, use case, or intended scene.
2. Select the creative direction and contextual parameters.
3. Generate a structured, expressive prompt.
4. Refine the output for your creation tool of choice.

### Benefit section

**Heading:** Give creative direction more depth
- Reduce the blank-page problem when starting visual concepts.
- Bring cultural context, atmosphere, and cinematic direction into prompts.
- Create a consistent foundation for content ideation.

**CTA:** Request a Shilp walkthrough

---

## 14. Eventik product page — /products/eventik  *(new)*

### Hero

**H1:** Every guest finds their photos with a single selfie
**Body:** Eventik is the complete platform for event photographers and studios. Upload an event once, and AI face-matching delivers each guest's photos to their phone in seconds — no sorting, no shared folders, no endless requests.

### Beyond galleries — run the whole studio

**Heading:** One login for the entire business

- **AI photo delivery** — guests take a selfie and instantly receive their own photos.
- **Leads & clients** — manage inquiries and client relationships in one place.
- **Estimates & invoices** — send GST-ready estimates and invoices without extra tools.
- **Service packages** — build reusable packages for faster, consistent quoting.
- **Portfolio website** — showcase your work with a polished site, no developer needed.
- **Business analytics** — revenue, pending payments, and growth at a glance.

### Closing line

From the first inquiry to the final delivered photo, Eventik handles it all — so photographers can focus on shooting, not admin.

**CTA:** Explore Eventik

---

## 15. Permit360 product page — /products/permit360  *(new)*

### Hero

**H1:** The electronic work permit system for modern plants
**Body:** One easy-to-use, cloud-based platform that replaces paper permits and email approvals — configure your own permits and approval routes, raise and close them in a click, and see every live permit in real time. Built for chemical, pharma, and manufacturing plants.

### The problem it solves

Paper permits leave EHS teams without a defensible record: scattered and unauditable sign-offs, permits that stay live by accident, approvals that bypass the chain, and no live operational picture across the site.

### How a permit moves through Permit360

1. **Request** — raise from a template in a click; fields auto-fill and autosave.
2. **Approve** — routed by role, level, and conditions you define.
3. **Activate** — issued with a validity window and a signed PDF.
4. **Work** — monitored live; suspend or extend as needed.
5. **Close** — signed off with a closure PDF; everyone notified.

### Why teams choose it

- Fully configurable permit forms and approval routing — no code, no waiting on IT.
- One-click permit-to-work from a single screen.
- Live dashboards and KPIs — counts, approval turnaround, expiry tracking.
- Web, mobile, and plant-floor kiosk; cloud or on-premise.
- Complete audit trail, per-company data isolation, automatic backup.

### Permit types

Hot work · Cold work · Confined space entry · Work at height · Electrical (LOTO) · Excavation · Radiography · Composite — plus any custom type your team defines.

**CTA:** Explore Permit360

---

## 16. Industries overview — /industries

### Hero (centered)

**H1:** Engineering that speaks your industry's language
**Body:** Technology is more useful when it understands the operating model around it. Aillegent applies product, AI, data, cloud, and quality capability across industries where the details matter.

### Industry cards

Finance · Intellectual Property · Advertising Technology · Recruitment

**CTA:** Discuss your domain

---

## 17. Finance — /industries/finance

### Hero

**H1:** Finance operations that demand intelligence, control, and clarity

### Focus areas

- Private equity operations
- Private debt operations
- Finance document intelligence using AI
- AI-assisted market and trading research

### Important content note (unchanged — compliance)

Do not make performance, investment-return, or financial-advice claims. Any trading-related capability must be described as research, analytics, or technology capability and reviewed for applicable compliance requirements.

---

## 18. Intellectual Property — /industries/intellectual-property

### Hero

**H1:** Bring clarity to the patent and IP lifecycle

### Focus areas

- Patent filing processes
- Alerts and deadline awareness
- Lawyer, foreign associate, and client interactions
- Patent communication and correspondence
- Patent lifecycle management
- Fees and payment processes
- PTO office action handling
- Automated form filling
- Law-firm team platforms

### Value statement

Create a connected operating view across people, documents, deadlines, communications, and process steps.

---

## 19. Advertising Technology — /industries/advertising-technology

### Hero

**H1:** Turn campaign data into clearer operating decisions

### Focus areas

- Campaign systems for Google, Meta/Facebook, and Bing channels
- Campaign monitoring tools
- Performance analysis
- Conversion analysis
- CPC and CPA visibility

### Value statement

Give marketing and operations teams a clearer view of campaign activity, performance signals, and conversion outcomes.

---

## 20. Recruitment — /industries/recruitment

### Hero

**H1:** From vendor requirement to the right candidate, in one connected flow

### Visual

Vendor → Requirement → Candidate

### Content

Build tools that capture the vendor requirement, structure it for review, and support an organised, transparent candidate matching process.

---

## 21. About — /about  *(merges How We Work + Company)*

### Hero (centered)

**H1:** Specialists who connect product ambition to production reality
**Body:** Aillegent brings product, AI, data, cloud, quality, and cost thinking into one engineering conversation — and one accountable team. We move quickly without losing the discipline reliable production systems demand.

### Section 1 — How we're built (scroll-pinned pyramid — signature)

Three tiers, told bottom-up:

| Tier | Label | Copy |
|---|---|---|
| Top | Product-led thinking | We start with the outcome and the user, then design the smallest thing that actually moves the business. |
| Middle | Enterprise-grade execution | Delivery maturity, platform partnerships, and compliance thinking — so it holds up at scale and in production. |
| Base | Engineering-first culture | Modern capabilities, lean hands-on teams, and engineering DNA that ships — and keeps shipping. |

### Section 2 — How we work (the working relationship)

One line referencing the Home delivery cycle ("Our six-stage delivery cycle keeps every step connected — see it in action on the home page"), then the six working steps:

1. Requirement and domain analysis
2. Solution and architecture
3. Documentation
4. Development
5. Cloud infrastructure
6. Testing and scalable production

### Section 3 — Grow with the product (client lifecycle)

| Phase | What Aillegent supports |
|---|---|
| Quick MVP | Core product scope, architecture, delivery, and a release path for early market validation. |
| Startup Growth | Feature growth, scalable systems, AI capability, automation, cloud foundations, and better engineering rhythms. |
| Enterprise Production | Deployment support, stabilisation, monitoring, governance, performance, reliability, and cost optimisation. |

### Section 4 — Technical expertise

Java · Node.js · Python · Frontend and backend development · Data engineering · Data science · AI cost optimisation · Cloud and infrastructure engineering · Quality automation and performance engineering

### Section 5 — Team approach

**Heading:** Start with the business problem, then earn the technical complexity
**Body:** We begin with requirements, domain context, system constraints, and the outcome that matters. The architecture, technology choices, automation, and operational model follow from that work.

### Content to add later

Only verified team bios, leadership profiles, hiring information, certifications, partner logos, and client testimonials. No placeholder proof presented as real.

### Final CTA

**Heading:** Have a product problem worth solving?
**CTA:** Start a conversation

---

## 22. Contact — /contact

### Hero (centered)

**H1:** Tell us what you are building — or what is holding it back
**Body:** Share the product, AI opportunity, platform challenge, or delivery bottleneck you want to improve. We will help identify a practical next step.

### Contact details (verified)

- Email: info@aillegent.com
- Phone: +91 90283 21652
- Location: Gandhinagar, India

### Form fields

- Name · Work email · Company · Role · Website or product link (optional)
- What are you trying to achieve?
- What stage are you in? (New idea / Quick MVP · Startup growth · Existing product improvement · Enterprise production support · AI implementation · Data, cloud, quality, or cost optimisation)
- Submit: Start the conversation

### Confirmation

Thank you. We have received your message and will review the context before getting back to you.

---

## 23. Reusable content blocks

### Capability chips

Product Engineering · Applied AI · Data Engineering · Cloud Platforms · Quality Automation · Cost Optimisation · MLOps · LLMOps · Agentic Automation · CI/CD · Containers · Performance Testing

### CTA library

Start a conversation · Let's figure it out together · Explore an AI use case · Put your data to work · Review your cloud platform · Strengthen your release confidence · Discuss cost optimisation · Request a product walkthrough · Explore Eventik · Explore Permit360

### Avoid using

- "We are the best" / "Revolutionary AI solutions"
- Unverified performance or savings figures presented as real
- Generic claims such as "end-to-end digital transformation"
- Long raw technology lists above the fold
- **Overusing "workflow"** — prefer the specific noun (process, operations, casework, research, decisions, pipeline)
- Repeating a full content block on more than one page

---

## 24. Launch checklist

Before publishing, collect:

1. Aillegent logo files and any additional brand rules (palette and type are fixed above).
2. Social profile links (email, phone, and location are confirmed in §1).
3. Product screenshots or approved demo visuals for **Shilp, Eventik, and Permit360**.
4. Verified case studies, customer approvals, testimonials, certifications, and partner information — swap out every "Illustrative/Placeholder" label.
5. Privacy, legal, and cookie-policy text.
6. Contact-form destination and CRM/email routing.
7. Analytics, consent, and SEO requirements.
8. A legal/compliance review of finance and trading-related wording.
9. Final repetition pass: "workflow" and duplicated blocks (see §1 voice rules).

import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "temistar",
    title: "TemiStar - Simplifying the complexity of cooperative finance",
    tagline: "TEMISTAR",
    category: "FINTECH",
    description:
      "From member management to contributions and payments, TemiStar presents a unified experience that brings the moving parts of cooperative operations into one clear system.",
    cover: { gradient: "from-sky-500 via-blue-600 to-indigo-900" },
    tags: ["UI/UX", "Branding"],
    meta: {
      role: "Brand & Product Designer",
      duration: "7 months",
      tools: "Figma, Slack, Adobe, Google Docs, Claude.",
      team: "1 PM, 1 Engineer, 1 QA Tester",
    },
    sections: [
      {
        kind: "paragraphs",
        heading: "Project Overview",
        paragraphs: [
          "TemiStar is a fintech SaaS platform digitizing how cooperative societies and savings groups operate in Nigeria. Most still run on spreadsheets and WhatsApp, leaving members blind to their money and admins buried in manual work. TemiStar brings it all into one system: a mobile app for members, a web app for cooperative admins, and a super admin console for platform governance.",
          "I led design end to end, from brand identity and logo to all three products. The core challenge was unifying four very different savings models (ROSCAs, charity pools, social pools and regulated cooperatives) into one coherent, trustworthy experience.",
        ],
      },
      {
        kind: "bullets",
        heading: "Problem Statement",
        intro:
          "Cooperatives and savings groups in Nigeria move real money every week, but almost none of it runs on systems built for it. Contributions are tracked in spreadsheets and notebooks, payout turns are agreed in WhatsApp threads, and members often have no way to check their balance without asking an admin. The result is a model that runs on trust but constantly erodes it.",
        groups: [
          {
            items: [
              "Members have no real-time view of their contributions, balances or payout dates, so every question goes through an admin",
              "Payout rotations and pool insurance in ROSCAs are managed by hand, which leads to disputes over turns and missed contributions",
              "Charity and social pools have no fair way to approve withdrawals or loans, so decisions rest on one person's word",
              "Regulated cooperatives struggle with member verification, loan tracking and compliance records kept across scattered files",
              "Collecting money is fragmented across cash, transfers and mobile payments, with reconciliation done manually",
              "Platform-wide, there's no oversight layer to spot defaults, fraud or abuse before they spread",
            ],
          },
        ],
      },
      {
        kind: "paragraphs",
        eyebrow: "RESEARCH & DISCOVERY",
        heading: "Research & Discovery",
        paragraphs: [
          "Discovery was driven by stakeholder briefs and close domain knowledge of how Nigerian savings groups operate. Rather than starting with screens, I mapped each of the four savings models, their rules and the people involved, to understand where money, trust and control actually changed hands.",
        ],
      },
      {
        kind: "list",
        heading: "Key Findings",
        items: [
          "Trust is the real product. Groups run on personal relationships with the admin, so every transaction needed to be visible to members, not just recorded.",
          "Defaults are the biggest fear. In ROSCAs, members who collect early and stop contributing break the circle. This shaped pool insurance, which holds the first collection as a safety net.",
          "Payout order drives conflict. Members argue over turns and often need to swap for emergencies, which led to automated scheduling and cycle swaps.",
          "Shared money needs shared control. In charity and social pools, no single person should approve withdrawals, so deductions require consensus and any member can veto.",
          "Regulated cooperatives need proof, not just convenience. Verification and audit trails became core to the admin web app, backed by BVN/NIN checks.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Ideation",
        paragraphs: [
          "Working from stakeholder briefs alongside a product manager, an engineer and a QA tester, I broke each of the four savings models into its rules, roles and money movements, then mapped where each user needed to see, act or intervene. From there I moved quickly into high-fidelity interactive prototypes, using them as the main ideation tool. The PM could validate business rules against real flows, the engineer could flag feasibility early, and QA could stress-test edge cases like defaults, vetoed deductions and failed payments before anything was built.",
          "We converged on a concept I called \"See, Act, Govern\": one platform with three role-shaped surfaces sharing a single source of truth. Members see everything that affects their money on mobile. Cooperative admins act through a structured web workspace for members, savings, loans and compliance. Super admins govern through a consistent oversight pattern of scope selectors, rule panels, flagged-item queues, intervention drawers and immutable audit logs, repeated across every group type so the platform team learns it once.",
        ],
      },
      {
        kind: "flow",
        heading: "User Flow",
        intro:
          "I mapped 5 primary user journeys across 4 user roles: group member, group admin, cooperative admin and super admin. The priority flow was a member joining a ROSCA and receiving a payout, because it's the MVP's core loop and the moment where trust is either earned or lost. The goal was to take a process that ran on WhatsApp messages, bank transfers and an organiser's notebook and turn it into one guided flow, where every step is visible to the member and recorded by the system.",
        items: [
          { title: "Join a ROSCA to first payout.", body: "Sign up, verify with BVN/NIN, fund the wallet, join the group, and see your payout turn and pool insurance before you commit." },
          { title: "Create and launch a group.", body: "A group admin sets membership limits, contribution amount and cycle, approves members, and launches the first cycle from a single setup flow." },
          { title: "Request and approve a pool deduction.", body: "In charity and social pools, the admin raises a deduction or loan, members vote in-app, and any single \"no\" vetoes it automatically." },
          { title: "Loan application to disbursement.", body: "Cooperative admins review applications in a drawer alongside the list, check guarantors, savings and KYC status, then approve and track repayments." },
          { title: "Flag to intervention.", body: "Super admins scope to a group type, review flagged issues like missed cycles or payout disputes, intervene, and every action is written to an immutable log." },
        ],
      },
      {
        kind: "paragraphs",
        heading: "Initial Draft",
        paragraphs: [
          "100+ screens drafted across three products in mid-fidelity, letting the PM, engineer and QA validate money rules and edge cases before a single high-fidelity screen was built.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Visual Design",
        paragraphs: [
          "The visual direction needed to make people feel safe handing their money to an app, while staying warm and familiar enough for users moving over from WhatsApp groups and paper ledgers. I anchored the system in a confident blue as the primary colour, used for key actions and to signal reliability, set against generous white space so screens feel calm and uncluttered. Gold lives in the logo as a brand accent, a quiet nod to prosperity and value, but I kept it out of the interface so blue alone carries meaning and every action stays unambiguous. The typography is built on Geist, whose clean, highly legible numerals suit a product where amounts matter most. A clear hierarchy and generous spacing let a member read their balance at a glance on mobile and let an admin scan dense loan and contribution tables on the web without feeling overwhelmed.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Prototyping & Testing",
        paragraphs: [
          "I built high-fidelity interactive prototypes for the Cooperative Admin and Super Admin web apps as standalone HTML, covering about 14 admin modules and the full Super Admin governance pattern across ROSCA, Charity Pool and Onboarding. Rather than clickable mockups, they behaved like working software: cross-linked navigation, live filters, drawers and approval actions, all running inside a realistic demo environment, with real-feeling members, ₦ amounts, BVN/NIN references and loan records.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "3", label: "Products Designed" },
          { value: "14", label: "Coop Admin Core Modules" },
          { value: "12", label: "Super Admin Core Modules" },
        ],
      },
      {
        kind: "iterations",
        heading: "Iterations & Refinements",
        items: [
          {
            title: "Navigation.",
            body: "Early mid-fi drafts used a top navigation bar for the Cooperative Admin app. As the product grew to 14 modules, the top bar couldn't hold them without hiding key areas behind a \"More\" menu, so I moved to a sidebar in the final design.",
            result: "Every module stays one click away, and the sidebar has room to grow as new features ship.",
          },
          {
            title: "One governance pattern.",
            body: "Each Super Admin module initially risked getting its own layout. I standardised all of them on one pattern: scope selector, rules panel, flagged-items table, intervention drawer and immutable audit log.",
            result: "The platform team learns the console once and can move between ROSCA, Charity Pool and Onboarding without relearning anything.",
          },
        ],
      },
      {
        kind: "beforeAfter",
        beforeLabel: "Before",
        afterLabel: "After",
      },
      {
        kind: "features",
        heading: "Final Design",
        intro:
          "The final design, built around the \"See, Act, Govern\" concept, delivers one trustworthy platform for every way Nigerians save together, from a 10-person ajo circle to a government-registered cooperative. Each role gets a surface shaped to its job, all sharing one source of truth. Key features include:",
        items: [
          "Member mobile app with the wallet balance up front, quick actions to create or join a group, add money and withdraw, and live progress on every group's contributions and payouts",
          "One home for four savings models, letting members explore and join ROSCA, Charity, Social and Cooperative groups from a single screen, each with its own rules made clear before they commit",
          "Flexible funding through bank transfer, USSD, QR, card and wallet, so members without cards or banking apps aren't left out",
          "Cooperative Admin web app covering members, savings, loans, contributions, approvals, offerings, wallet and settlement, compliance and reports",
          "Member lifecycle management that tracks every member from pending activation through verification to exit, with BVN/NIN checks built in",
          "Loan review in context, with eligibility checks, guarantors and repayment schedules in a drawer beside the list, so admins never lose their place",
          "Super Admin governance console using one repeatable pattern (scope, rules, flagged items, intervention and an immutable audit log) across every group type",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "< 2%", label: "Payouts Disputes" },
          { value: "70%", label: "Wallet Funded" },
          { value: "50%", label: "Faster Reconciliation" },
        ],
      },
      {
        kind: "paragraphs",
        heading: "Success Targets",
        paragraphs: [
          "TemiStar is preparing for public launch, with 3 products and 100+ screens designed end to end, unifying 4 savings models in one experience.",
          "After launch, success will be measured by fewer payout disputes, higher verification-to-funding rates, and less time admins spend reconciling records.",
        ],
      },
      {
        kind: "quote",
        text: "Our biggest question was whether people would trust an app with their group's money. TemiStar answers that on every screen: members can see everything, and admins can prove everything.",
      },
      {
        kind: "list",
        heading: "Lessons Learned",
        items: [
          "In money products, trust is the real feature. Members didn't need more functionality; they needed to see their balance, their turn and who has paid. Visibility did more to replace the WhatsApp-and-notebook system than any single feature.",
          "Edge cases are the product when money moves. Defaults, vetoed deductions, failed payouts and members in arrears weren't corner cases; they were where trust is won or lost. Designing them early, alongside QA, saved rework later.",
          "On a lean team, high-fidelity prototypes are the fastest form of documentation. Interactive prototypes answered questions that specs and static screens couldn't, and gave the PM, engineer and QA one shared source of truth.",
          "Consistency compounds. Repeating one governance pattern across every Super Admin module, and keeping status labels consistent across screens, made the product feel simpler than its complexity.",
        ],
      },
      {
        kind: "list",
        heading: "Next Steps",
        items: [
          "Direct debit mandates. Automate contributions and loan repayments for premium members, with clear setup and easy pause or cancel.",
          "Automated recovery. Recover defaults from BVN-linked accounts past the grace period, backed by upfront consent and clear warnings.",
          "Buy now, pay later. Offer instalment purchases to credit-scored members, with simple explanations of eligibility and terms.",
        ],
      },
    ],
  },
  {
    slug: "altaria",
    title: "Altaria - Family Commerce & Services Platform",
    tagline: "ALTARIA",
    category: "E-COMMERCE",
    description:
      "Altaria is a one-stop digital marketplace connecting families with baby products, essential services, trusted vendors, and convenient delivery - all in one seamless experience.",
    cover: { gradient: "from-orange-500 via-rose-500 to-red-600" },
    tags: ["UI/UX"],
    meta: {
      role: "Product Designer",
      duration: "9 months",
      tools: "Figma, Google Docs, ChatGPT, Microsoft teams.",
      team: "1 PM, 2 Engineers.",
    },
    sections: [
      {
        kind: "paragraphs",
        heading: "Project Overview",
        paragraphs: [
          "Altaria Hub is a one-stop marketplace and ecosystem for baby essentials, bringing together products, services, vendors, events and gift registries for every stage from newborn to teen. Today, parents juggle online stores, Instagram vendors, WhatsApp groups and event pages just to meet their children's needs, and Altaria brings all of it into one place.",
          "As the Product Designer, I worked across the full ecosystem. I redesigned and improved the existing customer web app, vendor and admin dashboards, registry and events, and designed the customer mobile app and logistics dashboard from scratch. The core challenge was making the platform grow in breadth without growing in complexity, so every user, from parents to delivery partners, experiences a product that feels simple.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "4", label: "User Role Served" },
          { value: "5", label: "Products Designed" },
          { value: "5", label: "Life Stages Covered" },
        ],
      },
      {
        kind: "bullets",
        heading: "Problem Statement",
        intro:
          "Parents meet their children's needs across a patchwork of disconnected channels: online stores for products, Instagram for vendors, WhatsApp for events, and separate tools for gift lists and delivery. Altaria Hub was built to bring all of this into one place, but before its public launch, testing with a selected user group showed the platform had developed its own kind of fragmentation. Flows were disjointed, unclear and often led to dead ends, so the product meant to simplify family life was adding friction to it.",
        groups: [
          {
            items: [
              "Fragmented flows. Journeys across shopping, registries, events and vendor management didn't connect, so testers had to work out on their own where to go next.",
              "Dead ends. Key flows stopped without a clear next step, leaving users stuck mid-task.",
              "Unclear, unintuitive patterns. Actions and information weren't where users expected them, which made even simple tasks feel like work.",
              "Dated visual design. The UI didn't feel appealing or trustworthy, which matters when parents are buying for their children.",
              "Poor responsiveness. Screens didn't adapt well to smaller devices, even though many parents shop on their phones.",
              "Missing pieces. There was no dedicated customer mobile app and no logistics experience, so delivery was managed outside the platform.",
            ],
          },
        ],
      },
      {
        kind: "paragraphs",
        eyebrow: "RESEARCH & DISCOVERY",
        heading: "Research & Discovery",
        paragraphs: [
          "Because some of Altaria already existed, discovery started with the product itself. I audited the existing web app, vendor and admin dashboards, registry and events flow by flow, and reviewed feedback from the selected test group to see where real users struggled. I also studied how parents currently shop for their children across stores, social media vendors and WhatsApp, and reviewed comparable marketplaces and registry platforms.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "10+", label: "Flows Audited" },
          { value: "1", label: "Test Group's Feedback Reviewed" },
          { value: "4", label: "User Roles Mapped" },
        ],
      },
      {
        kind: "list",
        heading: "Key Findings",
        items: [
          "Users got lost between features. Shopping, registries, events and vendors felt like separate products, with no clear paths connecting them.",
          "Dead ends broke momentum. Several flows ended without a next step, so users abandoned tasks they had started.",
          "Trust depended on presentation. A dated, unpolished UI made it harder for parents to feel confident buying for their children.",
          "Mobile was an afterthought. Many parents browse on their phones, but the web app didn't hold up on smaller screens and there was no native app.",
          "Registries had two audiences. Creators and gift buyers had different needs, but the existing flow didn't do justice to it well.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Ideation",
        paragraphs: [
          "I started ideation from the existing product rather than a blank page. I mapped every journey end to end, from a parent discovering a product to a vendor fulfilling it and a rider delivering it, and marked each point where a flow broke, stalled or hit a dead end. Those gaps became the brief. For each one, I asked what the user was trying to do next and how the product could take them there, then explored layouts for the redesigned surfaces and the two new ones, the customer mobile app and the logistics dashboard.",
          "We converged on a concept I called \"Every Path Leads Somewhere\": an ecosystem designed around connected journeys rather than separate features. Every flow ends with a clear next step, so a purchase leads to tracking, an event leads to its registry, and a registry gift leads to delivery. Each role sees only what its job needs, and discovery is shaped by a child's age and stage, so parents never wade through products meant for a different child.",
        ],
      },
      {
        kind: "flow",
        heading: "User Flow",
        intro:
          "I mapped four primary journeys across the ecosystem: shopping, registries, events and vendor fulfilment. The priority was the end-to-end purchase journey, because it touches every side of the marketplace at once: a parent buys, a vendor fulfils and a rider delivers. The goal of restructuring was to remove every dead end, so each flow ends with a clear next step and no user is left wondering what happens now.",
        items: [
          { title: "Discovery to delivery.", body: "Parents browse by their child's age and stage, check vendor profiles with reviews and clear pricing, and check out, then follow the order through vendor confirmation and delivery without leaving the app." },
          { title: "Registry creation to gift delivery.", body: "A parent builds a registry and shares a public link. Guests open it, see what's still needed, buy a gift that's instantly marked as claimed, and the item is delivered to the family." },
          { title: "Event discovery to RSVP.", body: "Parents find a children's event, view the details and RSVP in a few taps, with a path onward to related vendors or a registry for the occasion." },
          { title: "Order to fulfilment (vendor and logistics).", body: "A vendor receives the order in one dashboard, prepares it and hands it to a rider, who updates each delivery step so parents, vendors and admins all see the same status." },
        ],
      },
      {
        kind: "paragraphs",
        heading: "Wireframing",
        paragraphs: [
          "The final mid-fi designs achieved an 88% task completion rate, compared to 51% on the original design.",
          "I designed mid-fidelity layouts for the key screens across all five surfaces, starting with the redesigned web app, vendor and admin dashboards, then the new customer mobile app and logistics dashboard. Each layout answered one question first: where does this screen lead next? That kept every flow free of dead ends before any visual design began, and made the redesigned and new surfaces share one structure.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Visual Design",
        paragraphs: [
          "The visual direction needed to feel warm and joyful, like shopping for a child, while staying clear and trustworthy enough for parents to buy with confidence. I developed a fitting, high-contrast design system using orange as the primary color with rounded components to keep the tone friendly and approachable.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Prototyping & Testing",
        paragraphs: [
          "I built high-fidelity interactive prototypes in Figma for the four key journeys across web and mobile: discovery to delivery, registry creation to gift delivery, event discovery to RSVP, and vendor order fulfilment. The team reviewed each one internally, walking through every flow end to end to check that the dead ends, unclear next steps and small-screen issues from pre-launch testing had been resolved before handoff.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "4", label: "Journeys Prototyped" },
          { value: "5", label: "Surfaces Covered" },
          { value: "0", label: "Dead Ends left in Key Flows" },
        ],
      },
      {
        kind: "quote",
        text: "Every path leads somewhere. I didn't have to think at all - it just guided me through.",
      },
      {
        kind: "iterations",
        heading: "Iterations & Refinements",
        items: [
          {
            title: "Registries in the main navigation.",
            body: "Registries were tucked inside the account area, so many users never found them. I promoted Registries to the top navigation alongside Home and Shop.",
            result: "One of Altaria's most distinctive features is now one click away from any page.",
          },
          {
            title: "Guest checkout for registries.",
            body: "Gift buyers were treated like regular shoppers and pushed toward creating an account. I added a guest checkout that opens straight from a shared registry.",
            result: "Friends and family can buy a gift in a few steps without signing up, removing the biggest barrier in the gift buyer's journey.",
          },
        ],
      },
      {
        kind: "beforeAfter",
        beforeLabel: "Before",
        afterLabel: "After",
      },
      {
        kind: "features",
        heading: "Final Design",
        intro:
          "The final design, built around \"Every Path Leads Somewhere,\" delivers one connected ecosystem where parents, vendors, riders and admins each get a focused experience, and no journey ends in a dead end. Key features include:",
        items: [
          "Stage-aware shopping with categories from newborn to teen, plus filters for subcategory, price and product condition, including thrift.",
          "Guided registry creation that starts with the occasion (baby arrival, birthday, back-to-school) and tailors the template to fit.",
          "Shareable public registries where guests see what's still needed and buy a gift without creating an account.",
          "A mobile-first vendor dashboard for sales, products, orders and team permissions, with one-tap switching between shopping and selling.",
          "Responsive web and a native mobile app, designed for the phones most parents shop on.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "4", label: "Key User Journeys Redesigned" },
          { value: "2", label: "Apps Designed from Scratch" },
          { value: "4", label: "User Roles Served" },
        ],
      },
      {
        kind: "quote",
        text: "It finally feels as simple to use as it was meant to be.",
      },
      {
        kind: "list",
        heading: "Lessons Learned",
        items: [
          "In marketplaces, the hardest problems live between users, not on screens.",
          "A dead end is a broken promise. Testers didn't struggle with any single screen. They struggled when a flow stopped without telling them what came next, so designing the next step first changed everything else.",
          "Every product has a second user. Registries looked like a parent feature, but the gift buyer was a completely different audience with different needs. Designing for them separately removed the biggest barrier in the journey.",
          "Redesigns should start with an audit, not a blank canvas. Mapping what already existed, and where it broke, made it clear what to keep, what to fix and what to build new.",
        ],
      },
      {
        kind: "list",
        heading: "Next Steps",
        items: [
          "AI-assisted registries. Suggest items based on the occasion, the child's age and what similar families add, so parents can build a complete registry in minutes instead of searching item by item.",
          "Group gifting on registries. Let several guests chip in toward one big item, like a stroller or a car seat, instead of everyone buying small gifts.",
          "Booking calendars for service vendors. Let photographers, party planners and other providers show their availability and take bookings directly.",
        ],
      },
    ],
  },
  {
    slug: "dles",
    title: "Deeper Life Enterprise Solutions — Church Management Suite",
    tagline: "DLES",
    category: "CHURCH MANAGEMENT PLATFORM",
    description:
      "From member records to House Caring Fellowships and service attendance, the Deeper Life Enterprise Solutions brings the moving parts of church administration into one connected system, so leaders can spend less time on paperwork and more time caring for people.",
    cover: { gradient: "from-blue-600 via-sky-500 to-indigo-700" },
    tags: ["UI/UX"],
    meta: {
      role: "Product Designer",
      duration: "12 months",
      tools: "Figma, Google Meet, Google Docs, ChatGPT.",
      team: "1 PM, 2 Designers, 5 Engineers, 1 QA Tester",
    },
    sections: [
      {
        kind: "paragraphs",
        heading: "Project Overview",
        paragraphs: [
          "Deeper Christian Life Ministry is a global church with congregations across many countries, each running Sunday services, midweek meetings, small Sunday-evening gatherings held in homes and other locations to build closer bonds between members. Keeping track of who belongs where, which fellowship meets where, and who attended which service had become a large data challenge spread across many hands.",
          "As Product Designer, I designed three connected web dashboards to bring this together: a Membership Portal for managing member records, an HCF Portal for organising fellowships and their members across locations, and an Attendance Portal for recording and reviewing attendance at any service. The core challenge was making large volumes of member and attendance data feel simple for church workers and volunteers, many of whom are not everyday software users.",
        ],
      },
      {
        kind: "bullets",
        heading: "Problem Statement",
        intro:
          "With congregations, services and House Caring Fellowships running across many locations, the church needed an accurate picture of its people, but member, fellowship and attendance records were scattered across paper registers, spreadsheets and individual workers. Leaders couldn't easily answer simple questions: how many members do we have, which fellowship does each person belong to, and who has stopped attending?",
        groups: [
          {
            items: [
              "Scattered member records. Details lived in different places and formats, so records were often duplicated, outdated or incomplete.",
              "Hard-to-track fellowships. HCFs meet in many homes and locations, making it difficult to know which fellowships exist, who leads them and who belongs to each.",
              "Manual attendance. Attendance was counted and recorded by hand, which was slow, error-prone and rarely reviewed after the service.",
              "No connection between data. Membership, fellowship and attendance records didn't link, so leaders couldn't see the full picture of a member's involvement.",
              "Missed follow-up. Without reliable attendance history, members who quietly stopped coming could go unnoticed for weeks.",
            ],
          },
        ],
      },
      {
        kind: "paragraphs",
        eyebrow: "RESEARCH & DISCOVERY",
        heading: "Research & Discovery",
        paragraphs: [
          "Discovery was driven by the brief from DeeperLife Enterprise Solutions. Rather than jumping into screens, I broke the brief down into the church's three core records (members, fellowships and attendance) and mapped how they relate: who creates each record, who updates it, and who needs to see it. That showed where the real complexity sat. It wasn't in any single portal, but in keeping the three connected.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "3", label: "Portals Scoped" },
          { value: "3", label: "Core Records Mapped" },
          { value: "1", label: "Shared Member Record" },
        ],
      },
      {
        kind: "list",
        heading: "Key Insights",
        items: [
          "One member, one record. The same person appears in membership, fellowship and attendance data, so all three portals needed to draw on a single member record rather than keeping separate copies.",
          "Fellowships need structure across locations. HCFs meet in many homes and venues, so each one needed a clear location, leader and member list that leadership could oversee from one place.",
          "Attendance only matters if it's used. Recording attendance was the easy part; the value lay in turning it into trends and follow-up lists.",
          "Leaders need answers, not lists. Dashboards had to surface growth, attendance patterns and members needing attention at a glance.",
          "Simplicity over features. The portals would be used by church workers with mixed digital skills, so every task needed to be obvious on first use.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Ideation",
        paragraphs: [
          "Working from the brief alongside the DeeperLife Enterprise Solutions team, I started ideation by asking a simple question: what does a church leader need to know about a member, and where does that information come from? Mapping the answers showed that membership, fellowship and attendance weren't three separate problems but three views of the same people. From there, I sketched the structure each portal needed and explored layouts for the core tasks: adding and updating members, setting up and staffing HCFs across locations, and recording attendance for any service.",
          "We converged on a concept I called \"One Member, Many Gatherings\": three focused portals built around a single, shared member record. A member is created once and appears everywhere they belong, in their HCF, in every service they attend, and in the reports leaders rely on. Each portal stays simple and task-focused for the people who use it, while leadership gets a connected view of the whole church.",
        ],
      },
      {
        kind: "flow",
        heading: "User Flow",
        intro:
          "I mapped four primary journeys across the three portals: member self-registration, managing a fellowship, recording attendance, and following up. The priority flow was recording attendance, because it happens every week, involves the most people, and was where records most often went missing. The goal of restructuring was to make every journey start from the same member record, so information is entered once and shows up everywhere it's needed, with no re-typing and no duplicates.",
        items: [
          { title: "Self-registration to approved profile.", body: "Members register themselves through a public link, filling in their bio-data, church info and career details. Their district pastor then reviews the submission and approves it, creating one verified profile shared by all three portals." },
          { title: "Fellowship set-up to membership.", body: "An HCF is created with its location and leader, and approved members are added from the shared member list, so each person's fellowship shows on their profile." },
          { title: "Service to attendance record.", body: "For each week, attendance is marked per service (MBS, TRETS, SWS and HCF) on the member's attendance report, with past weeks editable and future weeks locked." },
          { title: "Attendance to follow-up.", body: "Member statuses (active, inactive, transferred) and attendance history make it easy to spot who has stopped coming, so leaders can reach out sooner." },
        ],
      },
      {
        kind: "paragraphs",
        heading: "Mid-fidelity designs",
        paragraphs: [
          "The structure agreed at mid-fi carried through to a live system that now holds more than 13,000 member records.",
          "I designed mid-fidelity layouts for the key screens across all three portals, from self-registration and pastor approval to member profiles, the district dashboard and the attendance grid. Working in mid-fi let the team agree on structure and role-based access, meaning what each leadership level sees, before visual design began.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Visual Design",
        paragraphs: [
          "The visual direction needed to feel calm, dependable and respectful of the church's identity, while staying clear enough for pastors at every level to read dense member data at a glance. I anchored the portals in a deep navy sidebar that carries the ministry's name and keeps navigation steady, set against a bright white workspace where the information takes centre stage. A single blue marks links, active states and primary actions, so the next step is always easy to spot. Colour is otherwise reserved for meaning: status pills distinguish active, transferred, inactive and deceased members, and simple green ticks and red crosses make an attendance record readable in seconds. Typography uses Inter for its clarity at small sizes, with generous spacing that keeps long member tables and detailed profiles easy to scan.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Prototyping & Testing",
        paragraphs: [
          "I built high-fidelity interactive prototypes in Figma for the core journeys across all key user journeys: member self-registration and pastor approval, managing HCF members, viewing member profiles, and recording weekly attendance. The prototypes were reviewed with the DeeperLife Enterprise Solutions team and church stakeholders, walking through each flow end to end to check that every leadership level, from District Pastor to General Superintendent, saw exactly the information their role allowed, and that pastors with mixed digital skills could complete key tasks without guidance.",
        ],
      },
      {
        kind: "quote",
        text: "For the first time, I can see my whole district's members and attendance in one place.",
      },
      {
        kind: "iterations",
        heading: "Iterations & Refinements",
        items: [
          {
            title: "Members register themselves.",
            body: "Having church workers type in every new member's details created a bottleneck and room for errors. I moved registration to a public link, so members enter their own details, and their District Pastor reviews and approves each sign-up.",
            result: "Data is entered once by the person who knows it best, and every approved member is verified by their own pastor.",
          },
          {
            title: "Access that matches the church's structure.",
            body: "Showing everyone the same data would overwhelm senior leaders and expose details to the wrong people. I designed view access around the leadership hierarchy, from District Pastor up to General Superintendent, with each level seeing its own slice of the church.",
            result: "Every leader sees exactly what their role needs, no more and no less.",
          },
        ],
      },
      {
        kind: "beforeAfter",
        beforeLabel: "Before",
        afterLabel: "After",
      },
      {
        kind: "features",
        heading: "Final Design",
        intro:
          "The final design, built around \"One Member, Many Gatherings,\" gives Deeper Christian Life Ministry one connected system for its people. Members register once, their District Pastor verifies them, and every level of leadership sees an accurate, up-to-date picture of the church. Key features include:",
        items: [
          "Self-registration with pastoral approval. Members sign up through a public link, and their District Pastor reviews and approves each submission before it becomes a record.",
          "A district dashboard at a glance. Total members, male and female counts with month-on-month trends, and a breakdown across Adults, YPF, Campus, Youths and Children.",
          "Growth over time. A chart of members by age group that switches between monthly, quarterly, bi-annual and yearly views.",
          "Member profiles grouped the way churches think. Bio-data, church info and career details, including each member's section and designation.",
          "Clear member statuses. Active, transferred, inactive and deceased members are marked at a glance, with relocation handled in its own section.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "13,000+", label: "Members registered" },
          { value: "3", label: "Portals live: Membership, HCF and Attendance" },
          { value: "6", label: "Leadership levels with role-based access" },
        ],
      },
      {
        kind: "paragraphs",
        heading: "Impact",
        paragraphs: [
          "The portals are live and adoption is growing gradually. As more districts come on board, success will be tracked through how quickly new sign-ups are approved, how many districts record attendance every week, and how early leaders spot members who have stopped attending.",
        ],
      },
      {
        kind: "quote",
        text: "For the first time, we can see the church's growth clearly, from a single district right up to the whole nation.",
      },
      {
        kind: "list",
        heading: "Takeaways",
        items: [
          "Let people own their own data. Self-registration cut errors at the source and turned pastors into reviewers, not typists.",
          "Hierarchy is information architecture. Mapping access to the leadership structure made the system feel natural to every level.",
          "Design for the least confident user. Simple, familiar layouts mattered more than extra features for pastors with mixed digital skills.",
          "Launch is the start, not the finish. With 13,000+ members registered and adoption still growing, onboarding support is as important as the interface.",
          "Earlier testing would have helped. Putting mid-fi screens in front of pastors sooner would have given us evidence, not just agreement.",
        ],
      },
      {
        kind: "list",
        heading: "Next Steps",
        items: [
          "Approval reminders so pending sign-ups don't stall.",
          "Absence alerts that flag members who have missed several services.",
          "Onboarding guides to speed up adoption in new districts.",
        ],
      },
    ],
  },
  {
    slug: "best-mobile",
    title: "Best Mobile — Automotive Services App",
    tagline: "BEST MOBILE",
    category: "AUTOMOTIVE",
    description:
      "An end-to-end mobile platform connecting car owners with trusted technicians, making it easier to discover, book, and manage vehicle repair and maintenance services.",
    cover: { gradient: "from-yellow-400 via-amber-500 to-neutral-900" },
    tags: ["UI/UX"],
    meta: {
      role: "Product Designer",
      duration: "3 months",
      tools: "Figma, Trivoh, ChatGPT",
      team: "1 PM, 2 Engineers",
    },
    sections: [
      {
        kind: "paragraphs",
        heading: "Project Overview",
        paragraphs: [
          "Best Mobile is a mobile app that helps car owners in the US get their car problems solved. Owners describe what's wrong through a guided request, and Best Mobile's team reviews it, posts it to vetted technicians and assigns the best fit. For minor issues, owners can fix it themselves with DIY guides or buy parts from a built-in spare parts marketplace.",
          "As the Product Designer, I designed the experience for car owners and technicians. The core challenge was making car repair feel as simple and trustworthy as booking any other digital service, even for owners who can't describe exactly what's wrong.",
        ],
      },
      {
        kind: "bullets",
        heading: "Problem Statement",
        intro:
          "Finding a good mechanic in the US is still largely luck. Drivers rely on recommendations, scattered reviews and calls to local shops, while skilled technicians struggle to be found beyond their own network.",
        groups: [
          {
            heading: "For car owners",
            items: [
              "No easy way to judge who's qualified",
              "Hard to describe what's wrong with the car",
              "Minor fixes still mean a trip to the shop",
              "Calls to shops often go unanswered",
              "Little visibility once work begins",
            ],
          },
          {
            heading: "For technicians",
            items: [
              "New customers come mostly by word of mouth",
              "Few ways to find work beyond their network",
              "Job requests arrive incomplete and unstructured",
            ],
          },
        ],
      },
      {
        kind: "paragraphs",
        eyebrow: "RESEARCH & DISCOVERY",
        heading: "Research & Discovery",
        paragraphs: [
          "Discovery focused on how drivers find mechanics today and what technicians need to take on new work. I reviewed the brief and studied competing car service apps to understand where trust breaks down on both sides.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "2", label: "User Groups Mapped" },
          { value: "2", label: "Journeys Mapped" },
          { value: "5", label: "Competitor Audits" },
        ],
      },
      {
        kind: "list",
        heading: "Research insights",
        items: [
          "Trust needs a middleman. Owners can't vet mechanics themselves, so a human review step builds confidence.",
          "Owners speak in symptoms. People describe what they hear or feel, not the fault, so requests need guiding.",
          "Not every problem needs a technician. Minor issues can be solved with the right guide or part.",
          "Technicians need context to apply. The car, the symptoms and the pay decide whether they take a job.",
          "Silence creates anxiety. Once a request is sent, owners want to know someone is on it.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Ideation",
        paragraphs: [
          "Working from the brief, I started from the moment a driver realises something is wrong. Two questions shaped everything: how does someone who isn't a car expert explain the problem, and how do they know who to trust?",
          "We converged on \"Symptom to Solution.\" Owners start with what they notice, not what they'd need to know. Minor issues lead to DIY guides and spare parts. Everything else becomes a guided request that Best Mobile's admin reviews, posts to vetted technicians, and assigns to the best fit.",
        ],
      },
      {
        kind: "flow",
        heading: "User Flow",
        intro:
          "I mapped three primary journeys: fixing a minor issue, requesting a technician, and applying for a job. The priority was the request journey, from noticing a problem to a technician being assigned, because that's where trust is won or lost.",
        items: [
          { title: "Minor issue to fix.", body: "The owner checks DIY hacks or buys a part from the spare parts marketplace." },
          { title: "Request to assignment.", body: "The owner sends a guided request with a photo and voice note. The admin reviews it, posts the job, and assigns the best technician from those who applied." },
          { title: "Job to completion.", body: "The technician sees the job, applies, and moves it from active to completed. The owner then pays and leaves a review in the app." },
        ],
      },
      {
        kind: "paragraphs",
        heading: "Wireframing",
        paragraphs: [
          "The final wireframes achieved over 92% task completion rate in structured walkthroughs.",
          "I designed mid-fidelity layouts for the key screens on both sides of the marketplace, from the guided service request and technician matching to booking, job tracking and the technician's request inbox. Working in mid-fi kept the focus on structure: what an owner needs to see before they trust a technician, and what a technician needs to know before they accept a job.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Visual Design",
        paragraphs: [
          "The visual direction needed to feel confident and reassuring for drivers dealing with a stressful problem, while staying quick to use, often one-handed and on the go. I anchored the system in a bold yellow, borrowed from the world of roadside help and warning signs, for primary actions such as \"Send request\" and \"Set automatically,\" with a softer yellow for secondary choices. Calm, light grey surfaces and generous rounded cards keep longer screens like the guided request and vehicle details easy to scan. Typography uses Inter, whose clear, neutral forms let owners, technicians and the admin read a request, a job or a part listing at a glance.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Prototyping & Testing",
        paragraphs: [
          "I built high-fidelity interactive prototypes in Figma for the three primary journeys: fixing a minor issue with DIY guides or spare parts, sending a guided request through to a technician being assigned, and a technician applying for and completing a job. The prototypes were reviewed with the team, walking through each flow to check that owners could describe a problem without knowing the fault, and that every request reached a technician with the context they needed.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "3", label: "Journeys Prototyped" },
          { value: "3", label: "User Roles Covered" },
          { value: "92%", label: "Task Success Rate" },
        ],
      },
      {
        kind: "iterations",
        heading: "Iterations & Refinements",
        items: [
          {
            title: "A guided request instead of a blank box.",
            body: "Owners struggled to describe faults in their own words, so I replaced free text with guided questions (issue type, when it started, warning lights) plus a photo and voice note.",
            result: "Every request arrives with the details a technician needs to quote.",
          },
          {
            title: "Vehicle details saved once.",
            body: "Re-entering car details on every request added friction. I moved them to a one-time vehicle profile.",
            result: "Repeat requests are faster, and every job shows the exact make, model and year.",
          },
        ],
      },
      {
        kind: "beforeAfter",
        beforeLabel: "Before",
        afterLabel: "After",
      },
      {
        kind: "features",
        heading: "Final Design",
        intro:
          "The final design, built around \"Symptom to Solution,\" gives US drivers one app for every car problem, from a quick DIY fix to a vetted technician. Key features include:",
        items: [
          "Location-aware home that connects owners with professionals and services nearby",
          "Guided service request covering issue type, when it started and warning lights, with photo and voice note support",
          "Saved vehicle profile so make, model and year are entered once",
          "Admin review in chat, with a clear request summary before any job is posted",
          "Technician jobs board with All, Applied, Active and Completed tabs, showing the car, symptoms and pay for each job",
          "In-app payment and reviews once a job is complete",
          "Spare parts marketplace with categories and brand-new or used listings",
          "DIY hacks, a video library filtered by category, with an invite for creators to share their own guides",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "3", label: "ways to fix a car: DIY, spare parts or a vetted technician" },
          { value: "3", label: "user roles in one flow: owner, admin and technician" },
          { value: "1", label: "guided request that turns symptoms into a clear job" },
        ],
      },
      {
        kind: "quote",
        text: "Drivers don't need to know what's wrong anymore. They just tell us what they notice.",
      },
      {
        kind: "quote",
        text: "I had no idea what was wrong with my car. I just answered a few questions, and a technician was on it the same day.",
      },
      {
        kind: "list",
        heading: "Lessons Learned",
        items: [
          "People describe car problems in feelings, not faults. Designing around symptoms made the request usable for anyone, not just car enthusiasts.",
          "Trust in a marketplace can come from a person, not just a profile. A human review step reassured owners more than any rating could.",
          "Not every problem needs the full service. Offering DIY and spare parts alongside technicians made the app useful for small issues too.",
          "Structure helps both sides at once. The same guided request that eases the owner's job gives technicians the context they need to apply.",
        ],
      },
      {
        kind: "list",
        heading: "Next Steps",
        items: [
          "AI symptom checker. Suggest a likely cause and urgency from the owner's answers, photo and voice note before the request is sent.",
          "Maintenance reminders. Use the saved vehicle profile to prompt owners about oil changes, inspections and recalls.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

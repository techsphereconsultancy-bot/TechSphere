import { Service, PortfolioProject, Testimonial, FAQItem, ProcessStep } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "web-design",
    title: "Website Design",
    description: "Stunning, high-conversion web solutions tailored to establish industry authority.",
    iconName: "Globe",
    features: ["Business Websites", "Corporate Websites", "Landing Pages", "E-commerce Platforms"],
    subServices: [
      { name: "Business Websites", description: "Modern portals showcasing your services, values, and client testimonials." },
      { name: "Corporate Websites", description: "Complex enterprise-grade sites with high security and division profiles." },
      { name: "Landing Pages", description: "Laser-focused layouts engineered for maximum conversion rates and lead captures." },
      { name: "Portfolio & Creative", description: "Immersive show-and-tell galleries tailored for designers, artists, and creators." },
      { name: "Specialized Verticals", description: "Custom templates for Restaurants, Hotels, Healthcare, Educational, and CA firms." },
      { name: "E-commerce Websites", description: "Secure, high-speed stores integrated with regional payment gateways and stock managers." }
    ]
  },
  {
    id: "erp-consultancy",
    title: "ERP Consultancy",
    description: "Streamline operations and drive efficiency with bespoke ERP architecture & flows.",
    iconName: "Cpu",
    features: ["Implementation", "Custom Integrations", "Workflow Automation", "Enterprise Planning"],
    subServices: [
      { name: "ERP Analysis", description: "Audit of current bottlenecks, departmental processes, and tool compatibility checks." },
      { name: "ERP Implementation", description: "Setting up, customizing, and deploying platforms like Odoo, Zoho, and NetSuite." },
      { name: "Business Automation", description: "Replacing repetitive manual tasks with lightning-fast cloud-triggered scripts." },
      { name: "Workflow Design", description: "Structuring cross-department handoffs to reduce communication friction and delays." },
      { name: "Operational Modules", description: "Inventory, Manufacturing, CRM, HRMS, Accounting, and robust tracking dashboards." }
    ]
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy",
    description: "Strategic planning, secure cloud migrations, and robust enterprise architecture.",
    iconName: "Cloud",
    features: ["Digital Strategy", "Cloud Infrastructure", "Cybersecurity Audit", "Tech Stack Consulting"],
    subServices: [
      { name: "Digital Strategy", description: "Designing multi-year tech roadmaps aligned directly with long-term company growth." },
      { name: "Cloud Solutions", description: "Architecting high-availability infrastructure on AWS, Google Cloud, or Azure." },
      { name: "Software Consulting", description: "Guiding custom software purchases, standard build-vs-buy analysis, and API planning." },
      { name: "Infrastructure Security", description: "Setting up active firewalls, role-based controls, disaster recovery, and backups." }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Immersive interface wireframing, layout engineering, and beautiful functional designs.",
    iconName: "Layers",
    features: ["User Research", "Wireframes & Flows", "Interactive Prototypes", "Modern Systems"],
    subServices: [
      { name: "Wireframes", description: "Skeletal blueprints detailing functional components and spatial structural flow." },
      { name: "Prototypes", description: "Interactive click-through simulations to test layout logic before writing any code." },
      { name: "User Research", description: "Competitor benchmarks, demographic testing, and qualitative UX user interviews." },
      { name: "Modern Interfaces", description: "Stunning color palettes, typography systems, and modern glassmorphic UI design." }
    ]
  },
  {
    id: "branding",
    title: "Branding",
    description: "Define a highly authoritative brand personality with logos, kits, and pitch materials.",
    iconName: "Award",
    features: ["Logo & Brand Guidelines", "Business Identity Kit", "Investor Pitch Decks", "Company Profiles"],
    subServices: [
      { name: "Logo Design", description: "Vector identity marks that look crisp at any resolution or format." },
      { name: "Business Identity", description: "Sleek business cards, letterheads, typography specs, and uniform visual kit." },
      { name: "Company Profile", description: "Authoritative PDFs outlining corporate background, leadership, and services." },
      { name: "Proposal & Pitch Decks", description: "Conversion-optimized slides designed to close high-ticket corporate accounts." }
    ]
  },
  {
    id: "digital-growth",
    title: "Digital Growth",
    description: "Accelerate visibility, capture local leads, and build high-ROI digital footprints.",
    iconName: "TrendingUp",
    features: ["SEO Engineering", "Google My Business", "Speed Audits", "Growth Funnels"],
    subServices: [
      { name: "SEO Optimization", description: "On-page metadata structure, speed tuning, and content maps targeting key queries." },
      { name: "Google Business Profile", description: "Local discovery optimization to rank high in regional map packs and search." },
      { name: "Performance Optimization", description: "Core Web Vitals enhancement to keep load times well under 1.5 seconds." },
      { name: "Analytics & Tracking", description: "Comprehensive click tracking, conversion reports, and behavioral session audits." }
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: "photography",
    title: "Vivid Frames",
    category: "Photography Website",
    description: "A dark, immersive, media-optimized portfolio showcasing cinematic photography work.",
    longDescription: "Vivid Frames was built to serve as an digital art gallery. The layout emphasizes raw, uninhibited visual weight, featuring fullscreen dynamic media grids, lazy-loaded lazy arrays, and intuitive zoom lightboxes.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Unsplash CDN"],
    features: ["Fullscreen media grid", "Dynamic filtering", "Zero-flicker lightboxes", "SEO-optimized image tags"],
    demoUrl: "https://vividframes.techsphere.com",
    clientName: "Devendra Singh Studios",
    timeline: "3 Weeks"
  },
  {
    id: "restaurant",
    title: "Saffron Spices",
    category: "Fine Dining Website",
    description: "An elegant, sensory culinary landing with online booking and custom interactive menus.",
    longDescription: "An ultra-premium web portal for a fine dining restaurant. It integrates direct reservation widgets, virtual restaurant tours, and localized micro-menus showcasing signature courses.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Motion", "Tailwind CSS", "TableAgent Integration"],
    features: ["Direct calendar reservation", "Interactive dish highlights", "Optimized mobile menu", "Custom location finder"],
    demoUrl: "https://saffronspices.techsphere.com",
    clientName: "Saffron Spices Hospitality Group",
    timeline: "4 Weeks"
  },
  {
    id: "ca-firm",
    title: "Kothari & Co. Associates",
    category: "CA Firm Website",
    description: "A secure, authoritative platform for tax consulting with document uploading tools.",
    longDescription: "A corporate portal constructed for chartered accountants. It prioritizes data clarity and compliance, hosting safe document portals, tax calendars, client registration grids, and FAQ structures.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Express Backend", "Secure Uploads"],
    features: ["Client tax calendar", "Document safe integration", "Inquiry booking funnel", "Service calculator"],
    demoUrl: "https://kotharica.techsphere.com",
    clientName: "Kothari & Co. Associates",
    timeline: "5 Weeks"
  },
  {
    id: "corporate",
    title: "Nexus Global Holdings",
    category: "Corporate Website",
    description: "A sleek multi-national holding corporate page featuring multi-language profiles.",
    longDescription: "A highly sophisticated corporate showcase created for a global asset management firm. Designed to handle huge traffic, it offers fast translations, team boards, quarterly reports, and news wires.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Vite", "Motion", "i18next", "Lottie"],
    features: ["Multi-lingual setup", "Dynamic team directories", "Investor downloads", "Secure email routing"],
    demoUrl: "https://nexusglobal.techsphere.com",
    clientName: "Nirvana Ventures India",
    timeline: "6 Weeks"
  },
  {
    id: "interior",
    title: "Aura Spaces",
    category: "Interior Design Website",
    description: "High-contrast minimalist layout with interactive before-after slider modules.",
    longDescription: "Designed for a premium interior design studio. We integrated sliding image modules for interactive design proofing, sleek architectural layouts, and responsive quote inquiry flows.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Interactive Canvas", "Motion"],
    features: ["Interactive before/after sliders", "Room design categorizer", "Framer micro-animations", "Quick WhatsApp chat"],
    demoUrl: "https://auraspaces.techsphere.com",
    clientName: "Alok Design Studio",
    timeline: "4 Weeks"
  },
  {
    id: "real-estate",
    title: "Prestige Estates",
    category: "Real Estate Website",
    description: "A fast property listing engine with localized filters and premium map tracking.",
    longDescription: "A real estate portal featuring rapid client-side search indexing, advanced property tags, high-res video tour modules, and instant consultation scheduling forms.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Lucide Icons", "Tailwind CSS", "Filter Engine"],
    features: ["Multi-parametric filter", "Schedule property tours", "Virtual video walkthroughs", "Premium glass listings"],
    demoUrl: "https://prestigeestates.techsphere.com",
    clientName: "Prithvi Developers Ltd",
    timeline: "5 Weeks"
  },
  {
    id: "gym",
    title: "Vigor Fitness Club",
    category: "Gym Website",
    description: "A high-energy dark layout showcasing membership subscription packages.",
    longDescription: "Built for a chain of smart luxury fitness clubs. This landing features a fluid schedule booking grid, trainer directories, nutrition/calorie widgets, and easy payment setup.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Dynamic Schedule", "Motion"],
    features: ["Interactive timetable", "Trainer bio cards", "Pricing plan selector", "Direct workout calculators"],
    demoUrl: "https://vigorfitness.techsphere.com",
    clientName: "Vigor Group India",
    timeline: "3 Weeks"
  },
  {
    id: "education",
    title: "Apex Academic Institute",
    category: "Educational Institute",
    description: "A robust learning hub featuring academic circulars and course outlines.",
    longDescription: "A modern web portal built for a major educational institution. Includes student registration boards, dynamic calendar widgets, downloadable course materials, and administrative announcements.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Lucide Icons", "Static Data Grid"],
    features: ["Dynamic circular board", "Course syllabus download", "Admission process timeline", "Faculty spotlight carousel"],
    demoUrl: "https://apexacademic.techsphere.com",
    clientName: "Apex Educational Trust",
    timeline: "5 Weeks"
  },
  {
    id: "healthcare",
    title: "Prana Wellness Clinic",
    category: "Healthcare Clinic",
    description: "A clean, comforting medical interface with an online slot selection scheduler.",
    longDescription: "Created to help patients book slots instantly. The interface strictly emphasizes calm pastel blues, clean and simple font size settings, medical service menus, and quick emergency numbers.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Lucide Icons", "Slot Scheduler"],
    features: ["Instant slot checker", "Calm accessibility design", "Emergency fast contact", "Doctor availability timeline"],
    demoUrl: "https://pranawellness.techsphere.com",
    clientName: "Prana Healthcare Clinic",
    timeline: "4 Weeks"
  },
  {
    id: "startup",
    title: "ScribeAI Landing",
    category: "Startup Landing Page",
    description: "A futuristic glassmorphic software product showcase with dynamic features.",
    longDescription: "A futuristic, ultra-modern product landing page for a cutting-edge tech startup. It utilizes massive typography, a gorgeous interactive pricing toggle, custom mock UI animations, and quick signup funnels.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Vite", "Motion", "Tailwind CSS"],
    features: ["Interactive product demo", "Dynamic testimonials grid", "Responsive lead capturer", "Glow-cursor tracking card"],
    demoUrl: "https://scribeai.techsphere.com",
    clientName: "Likhit Tech Solutions",
    timeline: "3 Weeks"
  }
];

export const INDUSTRIES_DATA = [
  { name: "Manufacturing", icon: "Settings", desc: "Automate shop floor scheduling, inventory tracing, and custom order dispatch modules." },
  { name: "Healthcare", icon: "Activity", desc: "Patient registries, digital scheduling pipelines, and HIPAA-friendly consultation layouts." },
  { name: "Retail", icon: "ShoppingBag", desc: "Multi-branch point of sale integration, predictive stock alerts, and omni-channel e-commerce." },
  { name: "Hospitality", icon: "Coffee", desc: "Online table reservation, premium hotel booking, and custom service request grids." },
  { name: "Education", icon: "GraduationCap", desc: "Circular management, modern virtual campus directories, and secure syllabus downloads." },
  { name: "Finance", icon: "TrendingUp", desc: "CA client portals, secure invoice generation, tax timeline notices, and data dashboards." },
  { name: "Real Estate", icon: "Building2", desc: "Property filters, virtual tours, dynamic listings, and agent consultation pipelines." },
  { name: "Construction", icon: "HardHat", desc: "Project timeline planners, labor dispatch schedules, and material order logs." },
  { name: "Restaurants", icon: "Utensils", desc: "Visual interactive food menus, reserve-a-table triggers, and instant WhatsApp ordering." },
  { name: "Startups", icon: "Rocket", desc: "Futuristic software products landings, pitch decks, and lead generation funnels." }
];

export const WHY_CHOOSE_DATA = [
  { title: "Experienced Team", desc: "A robust roster of ERP architects, full-stack developers, and creative UI researchers.", icon: "Users" },
  { title: "Affordable Pricing", desc: "Premium, agency-grade design assets priced transparently with no hidden setup fees.", icon: "DollarSign" },
  { title: "Fast Delivery", desc: "Agile sprints ensuring robust business sites deploy cleanly in 5 to 15 business days.", icon: "Zap" },
  { title: "Custom Design", desc: "Zero cookie-cutter layouts. Every pixel is uniquely styled for your brand identity.", icon: "Palette" },
  { title: "SEO Friendly", desc: "Optimized semantic markup and meta tags to help your company rank for high-intent keywords.", icon: "Search" },
  { title: "Responsive & Scalable", desc: "Flawless layouts across mobile, tablet, and widescreen. Easy module expansion.", icon: "Maximize" },
  { title: "Secure", desc: "Active HTTPS deployment, sandboxed libraries, secure inputs, and active form filters.", icon: "ShieldCheck" },
  { title: "Ongoing Support", desc: "We don't leave you after launch. Premium SLA maintenance, backups, and hourly edits.", icon: "HeartHandshake" }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description: "We deep-dive into your operational flow, brand guidelines, competitors, and target audience goals.",
    details: ["Consultation call", "Competitor research", "Requirement finalization", "Project roadmap outline"]
  },
  {
    step: 2,
    title: "Planning",
    subtitle: "Structuring the Architecture",
    description: "Designing the core sitemap, defining data relationships, and preparing content maps.",
    details: ["Sitemap definition", "Data flow chart", "Tech stack confirmation", "Milestone scheduling"]
  },
  {
    step: 3,
    title: "UI Design",
    subtitle: "Crafting High-Fidelity Prototypes",
    description: "We design beautiful glassmorphic wireframes and interactive prototypes in light & dark configurations.",
    details: ["Wireframes & layout", "Typography & palettes", "Clickable components", "Design approvals"]
  },
  {
    step: 4,
    title: "Development",
    subtitle: "Writing Clean Production Code",
    description: "Our engineers build standard, responsive modular systems with zero-bloat Tailwind code.",
    details: ["Modular React codebase", "Interactive states", "Database configuration", "API proxies"]
  },
  {
    step: 5,
    title: "Testing",
    subtitle: "Rigorous Quality Assurance",
    description: "Ensuring maximum accessibility compliance, pixel accuracy, responsive flow, and form protection.",
    details: ["Core Web Vitals tuning", "Cross-browser testing", "Form validation audit", "Accessibility verification"]
  },
  {
    step: 6,
    title: "Deployment",
    subtitle: "Going Live Internationally",
    description: "Deploying secure static files or containers onto premium platforms like Cloud Run or Vercel.",
    details: ["DNS pointing & SSL", "Production builds", "SEO tags validation", "Sitemap generation"]
  },
  {
    step: 7,
    title: "Support",
    subtitle: "Ensuring Uninterrupted Scale",
    description: "Continuous server monitoring, weekly back-ups, speed reviews, and quick text adjustments.",
    details: ["Weekly visual checks", "API health pings", "Content updates", "Priority email SLAs"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kothari",
    role: "Managing Director",
    company: "Kothari Steel & Manufacturing",
    content: "TechSphere transformed our messy inventory sheets into a beautiful custom Odoo ERP system. Their IT consulting team explained every technical step in simple language. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Dr. Ananya Sharma",
    role: "Chief of Medicine",
    company: "Prana Healthcare Clinic",
    content: "Our patients love the calm blue interface and the calendar schedule booking widget. The mobile responsiveness is flawless, and we've seen a 40% jump in web appointments within two months.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Vikram Malhotra",
    role: "Founder",
    company: "ScribeAI",
    content: "The custom startup landing page designed by TechSphere has a spectacular dark theme and floating graphics that immediately match our futuristic product look. Total visual masterclass.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Meera Nair",
    role: "Lead Designer",
    company: "Aura Spaces Interior",
    content: "We needed an interactive portfolio with image sliders, and TechSphere implemented it with incredibly smooth Framer Motion controls. Their attention to pixel accuracy is exceptional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What exactly does TechSphere do?",
    answer: "TechSphere is a full-service premium IT and ERP consultancy. We design highly custom corporate websites, implement robust ERP solutions (including custom inventory, CRM, HRMS, accounting), design professional branding profiles, and build performance-driven digital growth pipelines."
  },
  {
    id: "faq-2",
    category: "ERP",
    question: "What ERP systems do you consult and implement?",
    answer: "We specialize in tailored implementations of Odoo, Zoho Suite, and Oracle NetSuite. We handle the entire lifecycle: from initial operations audit and flow diagraming, to customization, database seeding, team training, and weekly support post-launch."
  },
  {
    id: "faq-3",
    category: "Engagement",
    question: "How are the project costs calculated?",
    answer: "Our engagement models are tailored entirely to your specific operational scale. We offer fixed-scope quotes and milestone-based payments with no hidden retainer fees. All cloud hosting, domain names, or Odoo licensing fees are billed transparently under your own entity."
  },
  {
    id: "faq-4",
    category: "Process",
    question: "How long does a website take to design and deploy?",
    answer: "Our timeline is strictly structured for agility. A standard high-performance corporate showcase site is typically deployed in 10-15 business days, while simpler launchpages can go live in under a week."
  },
  {
    id: "faq-5",
    category: "Customization",
    question: "Will our website look like a pre-made online template?",
    answer: "No. At TechSphere, we believe cookie-cutter templates destroy brand authority. Every single UI component is wireframed from scratch based on user research and your specific visual guidelines, ensuring a unique premium digital footprint."
  },
  {
    id: "faq-6",
    category: "SEO",
    question: "Do you build SEO optimized websites?",
    answer: "Yes, 100%. All of our websites are hand-crafted using standard semantic HTML elements, structured metadata tags, Open Graph card support, automated XML sitemaps, robots configurations, and optimized Core Web Vitals to guarantee speed scores above 95."
  },
  {
    id: "faq-7",
    category: "Support",
    question: "What happens if we need changes after the website goes live?",
    answer: "Every project comes with a complimentary 3-month post-launch support period. This covers visual checks, minor text/photo updates, weekly security audits, and general server health metrics to keep your platform completely stable."
  },
  {
    id: "faq-8",
    category: "Technology",
    question: "What modern tech stack do you use to build platforms?",
    answer: "We primarily build frontend solutions with React, Vite, and Tailwind CSS. For robust animated components, we utilize Framer Motion. This setup guarantees instantaneous loading, secure offline rendering, and clean scaling compared to heavy traditional CMS tools."
  },
  {
    id: "faq-9",
    category: "Branding",
    question: "What is included in the Branding service?",
    answer: "Our branding service delivers a vector logo kit (SVG, PNG, print formats), corporate typography specifications, unified color pallets, custom-designed business identity cards, official letterhead formats, and complete high-ticket PDF pitch layouts."
  },
  {
    id: "faq-10",
    category: "Booking",
    question: "How do I book a free consultation?",
    answer: "You can click on any 'Book Free Consultation' button across the site to access our live digital calendar. Simply select your convenient time slot, input your company details, choose the desired service, and our executive will reach out instantly via email with the meeting invite."
  }
];

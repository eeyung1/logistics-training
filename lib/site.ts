/**
 * Delivery Coordination Business Training — single source of truth
 * for site copy, pricing, course curriculum, bonuses, and contact config.
 */

/* ------------------------------------------------------------------ */
/* Contact / business config                                           */
/* ------------------------------------------------------------------ */

/** Public business line shown on the page (calls + WhatsApp). */
export const phoneDisplay = "0808 622 8640";

/** Digits only, international format — wa.me links default. */
export const phoneIntl = "2348086228640";

/** Brand & Host Details */
export const brand = {
  name: "Solution Virtues Logistics",
  brandShort: "Solution Virtues",
  courseName: "The Complete Delivery Coordination Business Course",
  freeTrainingTitle: "90-Minute Delivery Coordination Masterclass",
  currency: "₦",
  location: "Lagos & Ogun State, Nigeria",
};

export const host = {
  name: "Chinedu Aniakor",
  title: "Logistics Coordinator & Founder",
  company: "Solution Virtues Logistics",
  experience: "2+ years coordinating 1,000+ deliveries across Lagos & Ogun State",
  quote: "I don't deliver. I coordinate. And it pays.",
  bio: "Chinedu Aniakor has mastered the art of delivery coordination—connecting high-volume e-commerce vendors with reliable dispatch riders without owning bikes, maintaining warehouses, or burning fuel. He has processed over 1,000 deliveries and now equips aspiring entrepreneurs with the exact operating blueprint.",
};

export const videoConfig = {
  youtubeId: "VjleahE61tA",
  youtubeUrl: "https://youtu.be/VjleahE61tA?si=M7jiUmiKm78Tdbva",
  embedUrl: "https://www.youtube-nocookie.com/embed/VjleahE61tA?rel=0&modestbranding=1",
  duration: "90 Minutes",
  badge: "Free Recorded Masterclass",
};

/* ------------------------------------------------------------------ */
/* Site Metadata                                                       */
/* ------------------------------------------------------------------ */

export const siteMeta = {
  title: "Delivery Coordination Business Training — Earn From Every Delivery In Your City",
  description:
    "Learn the Delivery Coordination business model that pays ₦1,000–₦2,000 every time a vendor ships. Without owning a bike, warehouse, or fueling anything. Start with just your phone.",
  siteName: "Solution Virtues Logistics Academy",
};

/* ------------------------------------------------------------------ */
/* Free Training Content                                               */
/* ------------------------------------------------------------------ */

export const freeTrainingHighlights = [
  {
    title: "Find Daily Paying Vendors",
    text: "The exact step-by-step method to discover e-commerce, food, cake, and fashion vendors who ship constantly and will pay you daily.",
  },
  {
    title: "Build a 20+ Rider Network in 7 Days",
    text: "How to connect with vetted, trustworthy riders who already have bikes and are eagerly looking for consistent delivery jobs.",
  },
  {
    title: "WhatsApp + Google Sheet Tracking System",
    text: "The simple plug-and-play dispatch system to seamlessly track 50+ orders simultaneously without confusion, missed items, or stress.",
  },
  {
    title: "Charge, Collect & Avoid Being Owed",
    text: "Rock-solid payment collection strategies that ensure you get your ₦1,000–₦2,000 fee upfront or upon delivery with zero bad debt.",
  },
  {
    title: "5-Minute Vendor Closing Scripts",
    text: "Copy-and-paste WhatsApp scripts that turn hesitant business owners into loyal, high-frequency coordination clients in under 5 minutes.",
  },
];

export const socialProof = [
  {
    quote: "I made over my first ₦18,500 in week 1 after the training.",
    name: "Faith",
    role: "Student",
    location: "Federal University Oye-Ekiti (FUOYE)",
  },
  {
    quote: "I now coordinate for 4 cake vendors. The riders do the heavy lifting while I run everything from my smartphone.",
    name: "Blessing",
    role: "Logistics Coordinator",
    location: "Surulere, Lagos",
  },
  {
    quote: "Before this, I thought you needed millions for bikes and dispatch licenses. Delivery coordination changed my monthly cashflow completely.",
    name: "Emeka",
    role: "Agency Operator",
    location: "Ikeja, Lagos",
  },
];

/* ------------------------------------------------------------------ */
/* Main Course Offer & Pricing                                         */
/* ------------------------------------------------------------------ */

export const coursePricing = {
  regularPrice: 50000,
  actionTakersPrice: 30000,
  discountPercentage: 40,
  savingsAmount: 20000,
  expiryNotice: "Offer expires TODAY at Midnight. After today, fee returns to ₦50,000.",
};

export const formatNaira = (amount: number): string =>
  `₦${amount.toLocaleString("en-NG")}`;

export const courseModules = [
  {
    number: "01",
    title: "Business Setup & Operating Structure",
    desc: "How to set up and structure your lean delivery coordination business model from scratch with zero capital.",
  },
  {
    number: "02",
    title: "Client Acquisition with Zero Followers",
    desc: "How to land your very first paying vendor clients even if you don't have a social media following or prior agency name.",
  },
  {
    number: "03",
    title: "High-Margin Quoting & Competitive Pricing",
    desc: "How to craft competitive delivery quotes so you win vendors while protecting your healthy ₦1,000–₦2,000 profit margin per dispatch.",
  },
  {
    number: "04",
    title: "Bike & Vehicle Owner Partnerships",
    desc: "How to partner with individuals who already own motorbikes, vans, and delivery vehicles and turn them into your reliable logistics fleet.",
  },
  {
    number: "05",
    title: "Rider Vetting & Anti-Theft Protection",
    desc: "The bulletproof verification framework to choose honest, reliable riders so packages don't go missing and your business is secure.",
  },
  {
    number: "06",
    title: "Brand Packaging & Digital Positioning",
    desc: "How to brand your coordination service professionally online so premium corporate vendors treat you like an established courier firm.",
  },
  {
    number: "07",
    title: "Rider Coordination & Dispatch Mastery",
    desc: "Daily operational routines to schedule pick-ups, dispatch riders on optimal routes, and handle fast-paced rush hour orders.",
  },
  {
    number: "08",
    title: "Professional Delivery Management",
    desc: "Handling delays, transit complaints, proof of delivery, and customer communications like a multi-million-naira logistics company.",
  },
  {
    number: "09",
    title: "Scaling Operations & Delegating",
    desc: "How to grow from 5 deliveries a day to 50+ per day without burning out, by automating coordination and hiring virtual assistants.",
  },
  {
    number: "10",
    title: "Costly Launch Mistakes to Avoid",
    desc: "The critical blind spots that cause beginners to lose money or riders, and how to bypass them on day one.",
  },
  {
    number: "11",
    title: "The 4 Secret Demand Platforms (Online & Offline)",
    desc: "Chinedu's private list of 4 untapped platforms where hundreds of high-paying delivery requests are posted every single morning.",
  },
  {
    number: "12",
    title: "Cheap Fleet Acquisition Blueprint",
    desc: "When you are ready to own assets: how to acquire your own delivery motorbikes or vehicles cheaply through hire-purchase and partnerships.",
  },
  {
    number: "13",
    title: "Multiple Income Streams in Logistics",
    desc: "How to branch into interstate waybilling, haulage brokering, storage/holding hubs, and corporate contract retainers.",
  },
  {
    number: "14",
    title: "Safety, Insurance & Legal Precautions",
    desc: "The precautions, liability waivers, terms of service, and regulatory steps needed to safeguard your agency long term.",
  },
];

export const courseBonuses = [
  {
    title: "FREE Daily Leads & Delivery Requests for 1 Month",
    value: 30000,
    tag: "Most Popular Bonus",
    desc: "Get plugged directly into Solution Virtues' active delivery requests stream for 30 full days so you can start coordinating and earning immediately.",
  },
  {
    title: "Access to 4 Secret Platforms for Unlimited Requests",
    value: 25000,
    tag: "Exclusive Access",
    desc: "Direct invitations and links to 4 private online & offline logistics groups where vendors post urgent delivery requests all day.",
  },
  {
    title: "Courier Transition Infrastructure Blueprint",
    value: 35000,
    tag: "Growth Asset",
    desc: "The legal, dispatch, and software blueprints you need when you are ready to expand into a full-fledged offline courier agency.",
  },
  {
    title: "Official Franchise & Affiliation with Solution Virtues",
    value: 50000,
    tag: "Brand Power",
    desc: "Operate with the authority and backing of an established brand. Use our vetted templates, invoices, and letterheads to close big accounts.",
  },
  {
    title: "Direct Employment & Outsourcing Opportunity",
    value: 40000,
    tag: "Direct Career Path",
    desc: "Top graduates get prioritized for remote logistics manager and dispatch coordinator positions within Solution Virtues Logistics network.",
  },
  {
    title: "Equity Share Opportunity in ₦20M+ Logistics Company",
    value: 100000,
    tag: "Wealth Builder",
    desc: "Exclusive qualification to partner and hold equity stakes in upcoming Solution Virtues expansion hubs across major Nigerian hubs.",
  },
  {
    title: "Official Certificate of Completion",
    value: 15000,
    tag: "Credentials",
    desc: "Recognized certification demonstrating professional competence in logistics coordination and freight management.",
  },
  {
    title: "Lifetime Course Access + WhatsApp Community Updates",
    value: 20000,
    tag: "Lifetime Value",
    desc: "Re-watch the training whenever you want, access updated vendor templates, and network with coordinators across Nigeria.",
  },
];

export const affiliateHack = {
  headline: "Want the Entire Course 100% FREE?",
  subhead: "The Affiliate 2-Friend Referral Hack",
  text: "Once you enroll today, you receive your unique affiliate referral link inside the members' area. Simply share your honest experience with 2 friends or vendors. When 2 people enroll through your link, you get a 100% FULL REFUND of your ₦30,000 fee—making your entire training and bonuses completely FREE!",
};

/* ------------------------------------------------------------------ */
/* Payment & Bank Account Config                                      */
/* ------------------------------------------------------------------ */

export const bankPaymentDetails = {
  bankName: "Moniepoint Microfinance Bank",
  accountName: "Solution Virtues Logistics / Chinedu Aniakor",
  accountNumber: "6348086228", // Configurable
  referenceInstruction: "Use your Full Name as transfer description",
};

export const twoChoices = {
  choice1: {
    title: "Choice 1: Leave & Try to Figure it Out Alone",
    text: "Waste 12+ months making costly mistakes: trusting the wrong riders, having packages stolen, undercharging, getting owed by difficult vendors, and giving up out of frustration.",
  },
  choice2: {
    title: "Choice 2: Take the Proven Shortcut Today",
    text: "Invest ₦30,000 once, copy Chinedu's exact systems, use ready-to-dispatch rider networks, tap into daily vendor leads, and start earning ₦1,000–₦2,000 on deliveries this very week.",
  },
};

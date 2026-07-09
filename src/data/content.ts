export const features = [
  {
    icon: "📕",
    title: "One app is all you need",
    blurb: "All your recipes in one place",
  },
  {
    icon: "🧠",
    title: "Intuitive design",
    blurb: "Simplifies creating and managing recipes.",
  },
  {
    icon: "🤝",
    title: "Seamless collaboration",
    blurb: "Easily share recipes with friends and co-workers",
  },
  {
    icon: "🧹",
    title: "Reduce clutter",
    blurb: "Write it down once and reuse.",
  },
];

export const information = [
  {
    leftCard: "Getting started is easy",
    leftInfo: [
      "One app all, your recipes.",
      "Reads like a book.",
      "Create, access, manage.",
    ],
    leftLink: { label: "Get Started", href: "/", isDocsLink: false },

    rightCard: "Create and manage your recipes",
    rightInfo: [
      "Categorize drinks by recipe book or consolidate in one.",
      "Create once - reuse whenever you need it.",
      "Quickly select tracked inventory for any new recipe.",
    ],
    rightLink: { label: "docs", href: "", isDocsLink: true },
  },
  {
    leftCard: "Share with friends, share with bartenders",
    leftInfo: ["Share entire recipes books.", "Or just share one recipe.","Friends can collaborate, acquaintances can view."],
    leftLink: { label: "docs", href: "", isDocsLink: true },

    rightCard: "Seamlessly build your recipe list",
    rightInfo: [
      "Recipe not logged?",
      "In app search finds it online and saves it to your catalog!",
      "Save as is or modify as you'd like.",
    ],
    rightLink: { label: "docs", href: "", isDocsLink: true },
  },
];

export const benefits = [
  { stat: "10×", label: "Faster launch" },
  { stat: "99.99%", label: "Uptime target" },
  { stat: "↓70%", label: "Support load" },
  { stat: "↑25%", label: "Conversion" },
];

export const testimonials = [
  {
    quote: "We built a launch page in a day and doubled signups.",
    author: "Sam Rivera",
    role: "PM, Acme Co.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote: "Beautiful defaults and great a11y out of the box.",
    author: "Dana Hu",
    role: "Design Lead, Piper",
    avatar: "https://i.pravatar.cc/80?img=22",
  },
];

export const useCases = [
  {
    title: "Log all Recipes. Anyone can share with you",
    blurb: "Food and drinks!",
  },
  {
    title: "Not just for bartenders",
    blurb: "log any kind of beverage",
  },
  {
    title: "Share to anyone, receive from anyone",
    blurb: "Access to anyone's recipe book that has shared with you.",
  },
];

export const integrations = [
  { name: "Stripe", logo: "https://dummyimage.com/96x24/000/fff&text=Stripe" },
  { name: "Vercel", logo: "https://dummyimage.com/96x24/000/fff&text=Vercel" },
  {
    name: "Plausible",
    logo: "https://dummyimage.com/96x24/000/fff&text=Plausible",
  },
  {
    name: "HubSpot",
    logo: "https://dummyimage.com/96x24/000/fff&text=HubSpot",
  },
];

export const faqs = [
  {
    q: "Is it production ready?",
    a: "Yes—fully typed, a11y-friendly, and responsive.",
  },
  {
    q: "Does it support dark mode?",
    a: "Yep. Class-based dark mode with a toggle.",
  },
  {
    q: "Can I self-host?",
    a: "Absolutely. Deploy anywhere—Vite builds static assets.",
  },
];

export const plans = [
  {
    name: "Starter",
    priceMonthly: "$9",
    features: ["All core blocks", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    priceMonthly: "$29",
    features: [
      "Everything in Starter",
      "A/B testing hooks",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    priceMonthly: "$79",
    features: ["Everything in Pro", "Team seats", "SLAs"],
    highlighted: false,
  },
];

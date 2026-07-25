import {
  Search,
  Megaphone,
  Palette,
  Bot,
  Sparkles,
  LineChart,
  Newspaper,
  Radio,
  Tv,
  Car,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Home,
  UtensilsCrossed,
  Hotel,
  Shirt,
  Gem,
  CarFront,
  Factory,
  Banknote,
  Rocket,
  ShoppingCart,
  HandHeart,
  Landmark,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  items: string[];
};

export const services: ServiceCategory[] = [
  {
    id: 'digital',
    title: 'Digital Marketing',
    icon: Search,
    blurb: 'Performance-driven campaigns across every major digital channel.',
    items: [
      'Search Engine Optimization (SEO)',
      'Google Ads (PPC)',
      'Facebook & Instagram Ads',
      'LinkedIn Marketing',
      'YouTube Marketing',
      'Social Media Management',
      'Content Marketing',
      'Influencer Marketing',
      'Email Marketing',
      'WhatsApp Marketing',
      'Marketing Automation',
      'AI Marketing',
      'Website Development',
      'Landing Pages',
      'E-commerce Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    id: 'traditional',
    title: 'Traditional Marketing',
    icon: Newspaper,
    blurb: 'Offline reach that builds trust at city, regional & national scale.',
    items: [
      'Auto Rickshaw Advertising',
      'Event Marketing',
      'Flyer Distribution',
      'Pamphlet Design',
      'Brochure Design',
      'Catalogue Printing',
      'Retail Branding',
      'Packaging Design',
      'Vehicle Branding',
    ],
  },
  {
    id: 'branding',
    title: 'Branding Services',
    icon: Palette,
    blurb: 'Distinct identities that make your brand impossible to ignore.',
    items: [
      'Logo Design',
      'Brand Identity',
      'Brand Strategy',
      'Product Branding',
    ],
  },
  {
    id: 'creative',
    title: 'Creative Studio',
    icon: Sparkles,
    blurb: 'Design, motion & visual storytelling that moves audiences.',
    items: [
      'Motion Graphics',
      'Video Editing',
      'Product Photography',
      'Commercial Shoots',
      'UI/UX Design',
    ],
  },
  {
    id: 'ai',
    title: 'AI & Business Solutions',
    icon: Bot,
    blurb: 'Automate operations and turn data into a competitive edge.',
    items: [
      'AI Chatbots',
      'CRM Automation',
      'Lead Automation',
      'Workflow Automation',
      'Business Consulting',
      'Data Analytics',
    ],
  },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Projects Target' },
  { value: 100, suffix: '+', label: 'Client Goal' },
  { value: 10, suffix: 'M+', label: 'Reach Target' },
  { value: 95, suffix: '%', label: 'Satisfaction Goal' },
];

export const portfolio = [
  {
    title: 'Aurora Rebrand',
    category: 'Branding',
    image:
      'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'tall',
    result: '+212% brand recall',
    desc: 'Complete identity overhaul for a fintech challenger brand across 12 markets.',
  },
  {
    title: 'Pulse Social Campaign',
    category: 'Social Media',
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'wide',
    result: '8M+ impressions',
    desc: 'A 30-day always-on social engine that turned a product launch into a cultural moment.',
  },
  {
    title: 'Lumen Website',
    category: 'Website Design',
    image:
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
    result: '3.2s load time',
    desc: 'A conversion-first website rebuild that lifted qualified leads by 64%.',
  },
  {
    title: 'Velocity Google Ads',
    category: 'Google Ads',
    image:
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
    result: '4.7x ROAS',
    desc: 'Full-funnel PPC restructuring that cut cost-per-lead by 38% in one quarter.',
  },
  {
    title: 'Skyline Outdoor',
    category: 'Outdoor Campaigns',
    image:
      'https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'wide',
    result: 'City-wide takeover',
    desc: 'A 40-site outdoor blitz across metro, bus and billboard formats for a real estate launch.',
  },
  {
    title: 'Bloom Packaging',
    category: 'Packaging',
    image:
      'https://images.pexels.com/photos/4464820/pexels-photo-4464820.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'tall',
    result: 'Shelf standout',
    desc: 'Premium packaging system for an organic D2C brand, from structure to print-ready art.',
  },
  {
    title: 'Nimbus Logo System',
    category: 'Logo Design',
    image:
      'https://images.pexels.com/photos/6212466/pexels-photo-6212466.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
    result: 'Trademarked',
    desc: 'A modular logo system with responsive variants for a SaaS platform scaling globally.',
  },
  {
    title: 'Monument Billboard',
    category: 'Billboard Design',
    image:
      'https://images.pexels.com/photos/212980/pexels-photo-212980.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
    result: 'Top-of-mind',
    desc: 'A high-impact billboard concept for an automotive launch along major highway corridors.',
  },
];

export const process = [
  { step: '01', title: 'Discovery', desc: 'We immerse ourselves in your business, audience, market position and growth goals through stakeholder workshops and audits.', duration: 'Week 1' },
  { step: '02', title: 'Research', desc: 'Quantitative and qualitative research — competitor analysis, customer interviews, trend mapping — to find the white space your brand can own.', duration: 'Week 1-2' },
  { step: '03', title: 'Strategy', desc: 'A documented brand and growth roadmap with positioning, channel mix, messaging architecture and measurable KPIs.', duration: 'Week 2-3' },
  { step: '04', title: 'Creative Design', desc: 'Identity systems, content and campaign assets crafted by our studio to command attention and stay on-brand at scale.', duration: 'Week 3-4' },
  { step: '05', title: 'Marketing Execution', desc: 'Multi-channel campaigns launched with precision targeting, creative testing and budget pacing across digital and traditional.', duration: 'Ongoing' },
  { step: '06', title: 'Optimization', desc: 'Continuous A/B testing, audience refinement and creative iteration for compounding returns on every rupee spent.', duration: 'Ongoing' },
  { step: '07', title: 'Reporting', desc: 'Transparent live dashboards and monthly reviews that tie every effort to outcomes — leads, revenue, reach and ROI.', duration: 'Monthly' },
  { step: '08', title: 'Growth', desc: 'We scale what works, retire what doesn’t, and expand into new channels, markets and opportunities to compound growth.', duration: 'Quarterly' },
];

export const values = [
  { title: 'Strategy First', desc: 'Every creative decision traces back to a business objective. No vanity metrics, no guesswork.' },
  { title: 'Full-Funnel Thinking', desc: 'From first impression to closed deal, we engineer the entire journey — not just the top of the funnel.' },
  { title: 'AI-Native', desc: 'We embed automation and intelligence where it creates leverage, freeing humans to do what humans do best.' },
  { title: 'Radical Transparency', desc: 'Live dashboards, honest reporting and clear pricing. You always know what you’re getting and why.' },
  { title: 'Craft Obsessed', desc: 'Premium design and copy are non-negotiable. The details are the difference between good and unforgettable.' },
  { title: 'Partnership, Not Vendorship', desc: 'We act like an extension of your team, invested in your growth long after the campaign launches.' },
];

export const team = [
  { name: 'Mayank Rana', role: 'Digital Marketing Consultant', avatar: '/images/team/WhatsApp_Image_2026-07-22_at_9.54.58_AM.jpeg' },
  { name: 'Dhurba Sikdar', role: 'Creative Director', avatar: '/images/team/WhatsApp_Image_2026-07-22_at_9.58.45_AM.jpeg' },
  { name: 'Pratham Rana', role: 'Founder & Chief Strategist', avatar: '/images/team/WhatsApp_Image_2026-07-22_at_10.41.32_AM.jpeg' },
];

export const milestones = [
  { year: '2026', title: 'Founded in Boisar', desc: 'Vystar Media begins with a 3-person team and a single client.' },
  { year: '2027', title: 'Expanding our reach', desc: 'Building towards our goal of serving enterprises, SMEs and government organizations across 15+ industries with 10M+ marketing reach.' },
];

export const testimonials = [
  {
    quote:
      'Our mission at Vystar Media is to blend data-driven marketing with world-class design, ensuring every client achieves measurable and transformational growth.',
    name: 'Pratham Rana',
    role: 'Founder & Chief Strategist',
    avatar: '/images/team/WhatsApp_Image_2026-07-22_at_10.41.32_AM.jpeg',
  },
  {
    quote:
      'By combining performance PPC, SEO, and AI automation, we turn traffic into predictable revenue streams for scaling enterprises.',
    name: 'Mayank Rana',
    role: 'Digital Marketing Consultant',
    avatar: '/images/team/WhatsApp_Image_2026-07-22_at_9.54.58_AM.jpeg',
  },
  {
    quote:
      'Crafting distinct visual identities and high-converting creative assets is what makes our partner brands stand out in crowded markets.',
    name: 'Dhurba Sikdar',
    role: 'Creative Director',
    avatar: '/images/team/WhatsApp_Image_2026-07-22_at_9.58.45_AM.jpeg',
  },
];

export const industries: { name: string; icon: LucideIcon }[] = [
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Real Estate', icon: Home },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Hotels', icon: Hotel },
  { name: 'Fashion', icon: Shirt },
  { name: 'Jewellery', icon: Gem },
  { name: 'Automotive', icon: CarFront },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Finance', icon: Banknote },
  { name: 'Startups', icon: Rocket },
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'NGOs', icon: HandHeart },
  { name: 'Government', icon: Landmark },
  { name: 'Technology', icon: Cpu },
];

export const plans = [
  {
    name: 'Starter',
    tagline: 'For early-stage brands finding their footing.',
    features: [
      'Brand identity essentials',
      '1 digital channel managed',
      'Monthly strategy session',
      'Basic analytics dashboard',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    tagline: 'For scaling brands ready to dominate their category.',
    features: [
      'Full brand system',
      'Up to 4 digital channels',
      'Bi-weekly strategy & reporting',
      'Advanced analytics & AI insights',
      'Creative studio hours monthly',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For market leaders with complex, multi-channel needs.',
    features: [
      'Everything in Growth, scaled',
      'Unlimited channels & markets',
      'Dedicated account team',
      'Custom AI automation & CRM',
      'Quarterly business reviews',
      '24/7 priority support',
    ],
    highlight: false,
  },
];

export const faqs = [
  { q: 'What services does Vystar Media offer?', a: 'We are a full-service agency spanning digital marketing, traditional advertising, branding, creative studio work, and AI-powered business solutions.' },
  { q: 'Do you work with startups?', a: 'Yes. Our Starter plan is designed for early-stage brands, and we scale our engagement as you grow.' },
  { q: 'Can you handle both digital and traditional marketing?', a: 'Absolutely. We run integrated campaigns across SEO, PPC, social, TV, radio, outdoor, print and more for a unified brand presence.' },
  { q: 'How do you measure success?', a: 'Every engagement begins with clear KPIs. We provide transparent dashboards tying effort to outcomes like leads, revenue and reach.' },
  { q: 'Do you offer AI marketing solutions?', a: 'Yes — from AI chatbots and lead automation to CRM workflows and predictive analytics, we embed AI where it creates measurable leverage.' },
  { q: 'What is your typical project timeline?', a: 'Brand identity projects run 3–6 weeks. Ongoing retainer campaigns launch within 2 weeks of strategy approval.' },
  { q: 'How do we get started?', a: 'Book a free consultation. We\u2019ll map your goals, audit current performance, and recommend a tailored plan — no obligation.' },
  { q: 'Do you work with government organizations?', a: 'Yes. We are empanelled and experienced with public-sector compliance, procurement and branding standards.' },
  { q: 'Can you redesign an existing brand?', a: 'Rebranding is one of our specialties. We preserve equity while modernizing identity, positioning and messaging.' },
  { q: 'Which industries do you specialize in?', a: 'We serve 15+ industries including healthcare, real estate, finance, automotive, fashion, hospitality, technology and more.' },
  { q: 'Do you provide packaging design?', a: 'Yes. Our creative studio handles packaging design, catalogue printing, brochure design and retail branding end-to-end.' },
  { q: 'Is there a minimum contract length?', a: 'Most retainers are monthly with a 3-month recommended runway for compounding results. Project work is fixed-scope.' },
  { q: 'Do you offer reporting dashboards?', a: 'Every retainer includes a live analytics dashboard with channel performance, spend and ROI tracking.' },
  { q: 'Can you manage our social media?', a: 'Yes — full social media management including content, design, scheduling, community management and paid amplification.' },
  { q: 'How is pricing structured?', a: 'Pricing is custom-quoted based on scope, channels and goals. Contact us for a tailored proposal.' },
  { q: 'Where is Vystar Media based?', a: 'We operate globally with a hybrid team, serving clients across multiple time zones.' },
];

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'AI Audit', href: '/ai-audit' },
  { label: 'Process', href: '/process' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

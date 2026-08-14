import React from 'react';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Custom software development', href: '/services/custom-software-development' },
      { label: 'Website Development', href: '/services/website-development' },
      { label: 'Ecommerce Development', href: '/services/ecommerce-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'Web App Development', href: '/services/web-app-development' },
      { label: 'CRM & ERP Development', href: '/services/crm-erp-development' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Meta Ads & Google Ads', href: '/services/meta-google-ads' },
    ],
  },
  {
    label: 'ERP Consultation',
    href: '/erp-consultation',
    children: [
      { label: 'Zoho Consultation', href: '/erp-consultation/zoho-consultation' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact Us', href: '/contact' },
];

export const HERO_STATS = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Team Experts' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Industries Served' },
];

export const COUNTER_STATS = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Team Members' },
  { value: '15+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export const SERVICES = [
  { slug: 'custom-software-development', title: 'Custom Software Development', img: '/images/service-custom-software.jpg', desc: 'Professional custom software development services tailored for scalable and high-performance solutions.' },
  { slug: 'website-development', title: 'Website Development', img: '/images/service-website.jpg', desc: 'Modern, responsive websites built to convert visitors into customers with strong SEO foundations.' },
  { slug: 'ecommerce-development', title: 'Ecommerce Development', img: '/images/service-ecommerce.jpg', desc: 'Sell online with confidence via robust Shopify, WooCommerce and custom ecommerce solutions.' },
  { slug: 'mobile-app-development', title: 'Mobile App Development', img: '/images/service-mobile.jpg', desc: 'Native and cross-platform iOS & Android apps engineered for scale, speed and delightful UX.' },
  { slug: 'web-app-development', title: 'Web App Development', img: '/images/service-webapp.jpg', desc: 'Full-stack SaaS platforms and business web apps with modern architectures and clean APIs.' },
  { slug: 'crm-erp-development', title: 'CRM/ERP Development', img: '/images/service-crm.jpg', desc: 'Custom CRM & ERP built to streamline sales, operations, finance and support workflows.' },
  { slug: 'digital-marketing', title: 'Digital Marketing (SEO, SMM)', img: '/images/service-marketing.jpg', desc: 'SEO, content and social strategies that generate compounding traffic and qualified leads.' },
  { slug: 'meta-google-ads', title: 'Meta and Google Ads', img: '/images/service-ads.jpg', desc: 'Performance marketing across Meta and Google to drive ROI-focused customer acquisition.' },
];

export const WHY_US = [
  { title: 'End-to-End Solutions', desc: 'Tech, marketing & automation under one roof.' },
  { title: 'Agile Delivery', desc: 'Faster development with sprint-based execution.' },
  { title: 'Transparent Process', desc: 'Structured project delivery with clear communication.' },
  { title: 'Dedicated Teams', desc: 'Offshore teams for long-term scaling.' },
  { title: 'Data-Driven', desc: 'Every decision backed by analytics and KPIs.' },
];

export const PROCESS_STEPS = [
  { step: 'Step 1', title: 'Requirement Analysis', icon: 'Lightbulb' },
  { step: 'Step 2', title: 'UI/UX Planning', icon: 'Layers' },
  { step: 'Step 3', title: 'Development', icon: 'Code2' },
  { step: 'Step 4', title: 'Testing', icon: 'Hourglass' },
  { step: 'Step 5', title: 'Deployment', icon: 'CloudUpload' },
  { step: 'Step 6', title: 'Maintenance', icon: 'RefreshCw' },
];

export const PROJECTS = [
  { name: 'Kartavyam', img: '/images/portfolio-kartavyam.png' },
  { name: 'Sejwal', img: '/images/portfolio-sejwal.png' },
  { name: 'Posh Pro', img: '/images/portfolio-poshpro.png' },
  { name: 'Raaf Beauty', img: '/images/portfolio-raaf.png' },
  { name: 'Decortiq Interior', img: '/images/portfolio-decortiq.png' },
  { name: 'Skbbuildcon', img: '/images/portfolio-skb.png' },
];

export const TECH_STACK = [
  'React', 'PHP/Laravel', 'WordPress', 'Shopify', 'Node.js', 'Next.js',
  'Microsoft .Net', 'Woocommerce', 'Flutter', 'React Native', 'AWS',
  'Google Cloud', 'MySQL', 'MongoDB', 'Zoho CRM',
];

export const PARTNERS = [
  // Payment Gateways
  { name: 'PhonePe', img: '/images/tech/phonepe.svg', category: 'Payment Gateway' },
  { name: 'RazorPay', img: '/images/tech/razorpay.svg', category: 'Payment Gateway' },
  { name: 'Cashfree', img: '/images/tech/cashfree.svg', category: 'Payment Gateway' },
  // E-Commerce Platforms
  { name: 'BigCommerce', img: '/images/tech/bigcommerce.svg', category: 'E-Commerce Platform' },
  { name: 'Shopify', img: '/images/tech/shopify.svg', category: 'E-Commerce Platform' },
  { name: 'WooCommerce', img: '/images/tech/woocommerce.svg', category: 'E-Commerce Platform' },
  { name: 'Magento', img: '/images/tech/magento.svg', category: 'E-Commerce Platform' },
  { name: 'Custom Commerce', img: '/images/tech/customcommerce.svg', category: 'E-Commerce Platform' },
  // Hosting & Cloud
  { name: 'AWS', img: '/images/tech/aws.svg', category: 'Cloud & Hosting' },
  { name: 'Google Cloud', img: '/images/tech/googlecloud.svg', category: 'Cloud & Hosting' },
  { name: 'GoDaddy', img: '/images/tech/godaddy.svg', category: 'Cloud & Hosting' },
  { name: 'Hostinger', img: '/images/tech/hostinger.svg', category: 'Cloud & Hosting' },
  { name: 'BigRock', img: '/images/tech/bigrock.svg', category: 'Cloud & Hosting' },
  // Advertising & Marketing
  { name: 'Meta', img: '/images/tech/meta.svg', category: 'Advertising & Marketing' },
  { name: 'Google', img: '/images/tech/google.svg', category: 'Advertising & Marketing' },
];

export const TESTIMONIALS = [
  { name: 'Alok Kumar', role: 'Director', company: 'Sejwal Industries', img: '/images/testimonial-alok.jpg', rating: 4.5, text: 'White Gravity built our web platform end-to-end. The team is fast, transparent, and truly invested in outcomes.' },
  { name: 'Aditi Sharma', role: 'Founder', company: 'Raaf Beauty', img: '/images/testimonial-raafi.jpg', rating: 5.0, text: 'From CRM setup to campaigns, White Gravity became a real growth partner. Highly recommended for scaling businesses.' },
  { name: 'Madhu Sudan Mishra', role: 'Founder', company: 'Kartavyam NGO', img: '/images/testimonial-madhu.jpg', rating: 4.0, text: 'Their sprint-based delivery is a game changer. We shipped a full ecommerce store in weeks, not months.' },
  { name: 'Rupesh Gera', role: 'Founder', company: 'Posh Pro', img: '/images/testimonial-rupesh.jpg', rating: 4.5, text: 'The Zoho implementation streamlined our operations. Team is deeply knowledgeable and always available.' },
  { name: 'Vikram Malhotra', role: 'Founder', company: 'Decortiq Interior', img: '/images/testimonial-vikram.png', rating: 3.5, text: 'Beautiful design, clean code, tangible ROI. That sums up our experience with the White Gravity team.' },
  { name: 'Anuj Kumar', role: 'Director', company: 'SKB Buildcon', img: '/images/testimonial-anuj.jpg', rating: 5.0, text: 'Their Google & Meta ads brought us qualified leads within the first month. Metrics-obsessed in the best way.' },
  { name: 'Seema Chauhan', role: 'Director', company: 'Sejwal Foundation', img: '/images/testimonial-seema.jpg', rating: 4.5, text: 'Migrated our legacy ERP with zero downtime. White Gravity is the partner every growing business needs.' },
  { name: 'Rahul Verma', role: 'CEO', company: 'TechNova Solutions', img: '/images/testimonial-rahul.jpg', rating: 4.0, text: 'Working with White Gravity was an absolute pleasure. Their attention to detail and proactive approach helped us launch ahead of schedule.' },
  { name: 'Neha Gupta', role: 'Marketing Head', company: 'StyleBoutique', img: '/images/testimonial-neha.jpg', rating: 5.0, text: 'The SEO and digital marketing strategy they crafted doubled our organic traffic in just 3 months. Truly exceptional work.' },
  { name: 'Sanjay Patel', role: 'Operations Manager', company: 'LogiCorp', img: '/images/testimonial-sanjay.jpg', rating: 3.5, text: 'Their custom ERP solution completely transformed how we manage our inventory. We save hours every day now.' },
  { name: 'Priya Singh', role: 'Co-Founder', company: 'EduTech India', img: '/images/testimonial-priya.jpg', rating: 4.5, text: 'The mobile app developed by White Gravity is flawless. Our students love the interface and the performance is top-notch.' },
  { name: 'Karan Mehta', role: 'Managing Director', company: 'Mehta Estates', img: '/images/testimonial-karan.jpg', rating: 4.0, text: 'They rebuilt our real estate portal from scratch. The leads have skyrocketed thanks to the blazing fast website.' },
  { name: 'Anita Desai', role: 'Owner', company: 'Desai Handicrafts', img: '/images/testimonial-anita.jpg', rating: 4.5, text: 'They took my small offline business online with a beautiful Shopify store. Sales have been phenomenal ever since.' },
  { name: 'Ravi Teja', role: 'VP Engineering', company: 'FinTech Pro', img: '/images/testimonial-ravi.jpg', rating: 4.0, text: 'Great technical expertise! They seamlessly integrated multiple payment gateways and ensured robust security for our platform.' }
];

export const INDUSTRIES = [
  { name: 'Healthcare', img: '/images/industry-healthcare.jpg' },
  { name: 'Real Estate', img: '/images/industry-realestate.jpg' },
  { name: 'E-commerce', img: '/images/industry-ecommerce.jpg' },
  { name: 'Finance', img: '/images/industry-finance.jpg' },
  { name: 'Education', img: '/images/industry-education.jpg' },
  { name: 'Beauty & Personal Care Industry', img: '/images/industry-beauty.jpg' },
  { name: 'Law Firm & Legal', img: '/images/industry-legal.jpg' },
  { name: 'Hospitality', img: '/images/industry-hospitality.jpg' },
  { name: 'Logistics', img: '/images/industry-logistics.jpg' },
  { name: 'Interior Design', img: '/images/industry-interior.jpg' },
  { name: 'Manufacturing', img: '/images/industry-manufacturing.jpg' },
  { name: 'Non-Profit', img: '/images/industry-nonprofit.jpg' },
  { name: 'Automobile', img: '/images/industry-automobile.jpg' },
  { name: 'Food & Restaurant', img: '/images/industry-food.jpg' },
  { name: 'Travel & Tourism', img: '/images/industry-travel.jpg' },
  { name: 'Fitness & Wellness', img: '/images/industry-fitness.jpg' },
];

export const TEAM = [
  { name: 'Harrison Hudson', role: 'WordPress Developer', img: '/images/team-1.jpg' },
  { name: 'Elizabeth Sofia', role: 'WordPress Developer', img: '/images/team-2.jpg' },
  { name: 'Charlie Cooper', role: 'Front-End Developer', img: '/images/team-3.jpg' },
  { name: 'Lucy Evelyn', role: 'UI/UX Designer', img: '/images/team-4.jpg' },
];

export const COMPANY = {
  name: 'White Gravity Web Solutions',
  short: 'White Gravity',
  tagline: ' #1 IT Company in Noida',
  phones: ['+91-921-713-5322', '+91-879-641-4339'],
  whatsapp: 'https://wa.me/919217135322?text=Hello%20White%20Gravity%20Team!%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20you.',
  emails: ['info@whitegravity.in', 'sales@whitegravity.in'],
  address: 'LG-04, Dallas 1 Business Park, H-202, Sector 63, Noida, U.P-201301',
  socials: {
    facebook: 'https://www.facebook.com/people/White-Gravity-Web-Solution/61583427517726/',
    instagram: 'https://www.instagram.com/whitegravityweb/',
    linkedin: 'https://www.linkedin.com/company/whitegravity/',
  },
  logo: '/images/logo-whitegravity.webp',
  heroImg: '/images/hero-main.jpg',
};

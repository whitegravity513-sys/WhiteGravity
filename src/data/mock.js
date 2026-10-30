import React from 'react';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Custom Software Development', href: '/custom-software-development' },
      { label: 'Website Development', href: '/website-development' },
      { label: 'Ecommerce Development', href: '/ecommerce-development' },
      { label: 'Mobile App Development', href: '/mobile-app-development' },
      { label: 'Web App Development', href: '/web-app-development' },
      { label: 'CRM & ERP Development', href: '/crm-erp-development' },
      { label: 'Digital Marketing', href: '/digital-marketing' },
      { label: 'Meta Ads & Google Ads', href: '/meta-google-ads' },
    ],
  },
  {
    label: 'ERP Consultation',
    href: '/erp-consultation',
    children: [
      { label: 'Zoho Consultation', href: '/zoho-consultation' },
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
  { slug: 'crm-erp-development', title: 'CRM/ERP Development', img: '/images/service-crm.svg', desc: 'Custom CRM & ERP built to streamline sales, operations, finance and support workflows.' },
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
  {
    id: 1,
    title: 'Sales CRM Platform',
    category: 'Custom CRM',
    img: '/images/projects/project-crm.jpg',
    slug: 'crm-erp-development',
    iconType: 'crm',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    borderHover: 'hover:border-indigo-200'
  },
  {
    id: 2,
    title: 'Business Website',
    category: 'Website Development',
    img: '/images/projects/project-website.jpg',
    slug: 'website-development',
    iconType: 'web',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    borderHover: 'hover:border-sky-200'
  },
  {
    id: 3,
    title: 'Online Store',
    category: 'E-commerce',
    img: '/images/projects/project-ecommerce.jpg',
    slug: 'ecommerce-development',
    iconType: 'ecommerce',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    borderHover: 'hover:border-rose-200'
  },
  {
    id: 4,
    title: 'Task Management SaaS',
    category: 'Custom Software',
    img: '/images/projects/project-software.jpg',
    slug: 'custom-software-development',
    iconType: 'software',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderHover: 'hover:border-emerald-200'
  },
  {
    id: 5,
    title: 'Food Delivery App',
    category: 'Mobile App Development',
    img: '/images/projects/project-mobile.jpg',
    slug: 'mobile-app-development',
    iconType: 'mobile',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    borderHover: 'hover:border-amber-200'
  },
  {
    id: 6,
    title: 'Enterprise Dashboard',
    category: 'Web Application',
    img: '/images/projects/project-webapp.jpg',
    slug: 'web-app-development',
    iconType: 'dashboard',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderHover: 'hover:border-blue-200'
  }
];

export const TECH_STACK = [
  'React', 'PHP/Laravel', 'WordPress', 'Shopify', 'Node.js', 'Next.js',
  'Microsoft .Net', 'Woocommerce', 'Flutter', 'React Native', 'AWS',
  'Google Cloud', 'MySQL', 'MongoDB', 'Zoho CRM',
];

export const PARTNERS = [
  { name: 'PhonePe', img: '/images/tech/phonepe.svg', category: 'Payment Gateway' },
  { name: 'RazorPay', img: '/images/tech/razorpay.svg', category: 'Payment Gateway' },
  { name: 'Cashfree', img: '/images/tech/cashfree.svg', category: 'Payment Gateway' },
  { name: 'BigCommerce', img: '/images/tech/bigcommerce.svg', category: 'E-Commerce Platform' },
  { name: 'Shopify', img: '/images/tech/shopify.svg', category: 'E-Commerce Platform' },
  { name: 'WooCommerce', img: '/images/tech/woocommerce.svg', category: 'E-Commerce Platform' },
  { name: 'Magento', img: '/images/tech/magento.svg', category: 'E-Commerce Platform' },
  { name: 'Custom Commerce', img: '/images/tech/customcommerce.svg', category: 'E-Commerce Platform' },
  { name: 'AWS', img: '/images/tech/aws.svg', category: 'Cloud & Hosting' },
  { name: 'Google Cloud', img: '/images/tech/googlecloud.svg', category: 'Cloud & Hosting' },
  { name: 'GoDaddy', img: '/images/tech/godaddy.svg', category: 'Cloud & Hosting' },
  { name: 'Hostinger', img: '/images/tech/hostinger.svg', category: 'Cloud & Hosting' },
  { name: 'BigRock', img: '/images/tech/bigrock.svg', category: 'Cloud & Hosting' },
  { name: 'Meta', img: '/images/tech/meta.svg', category: 'Advertising & Marketing' },
  { name: 'Google', img: '/images/tech/google.svg', category: 'Advertising & Marketing' },
];

export const TESTIMONIALS = [
  { name: 'Ekta Pandey', rating: 5.0, text: 'My website is really well-defined. I appreciate their support and highly recommend them for E-commerce website development.' },
  { name: 'SHIREEN NAQVI', rating: 5.0, text: 'I had a wonderful experience working with White Gravity Web Solutions. Their team is highly professional, creative, and responsive throughout the entire process. They understood my requirements clearly and delivered a high-quality website with excellent attention to detail. Their technical expertise, timely communication, and commitment to customer satisfaction made the experience smooth and hassle-free. I highly recommend White Gravity Web Solutions to anyone looking for reliable web design and development services.' },
  { name: 'Avnish', rating: 5.0, text: 'I had a really good experience with this company. They understood what I needed, communicated clearly, and delivered exactly what they promised. I appreciate their support and recommend them to others.' },
  { name: 'Anshika Choudhary', rating: 5.0, text: 'White gravity helped me grow and increase my bussiness. There team helped me with my digital marketing , social media management and website development.' },
  { name: 'Aditya Maurya', rating: 5.0, text: 'My website is really well-designed and impressive. The layout is clean, the navigation is smooth, and the overall presentation looks very professional Great work.' },
  { name: 'VISHAL TIMOLY', rating: 5.0, text: 'I had a great experience with White Gravity Web Solutions. Their team is highly professional, responsive, and committed to delivering quality work. They understood my requirements perfectly and completed the project on time. The communication was smooth throughout the process, and the final result exceeded my expectations. I highly recommend White Gravity Web Solutions to anyone looking for reliable web development and digital solutions. Keep up the excellent work!' },
  { name: 'Sujeet Kumar', rating: 5.0, text: 'I had a great experience working with White Gravity Web Solution. Their team is professional, responsive, and highly skilled in website design and development. They understood my requirements clearly and delivered a modern, responsive, and high-performing website on time. Communication throughout the project was excellent, and they were always willing to make changes whenever needed. I highly recommend White Gravity Web Solution to anyone looking for reliable web development and digital marketing services.' },
  { name: 'Deepak Kumar', rating: 5.0, text: 'Excellent service by White Gravity Web Solution! The team is professional, responsive, and delivered my website on time with great quality. They understood my requirements perfectly and provided valuable suggestions. Highly recommended for website development and digital marketing services.' },
  { name: 'shivam bhardwaj', rating: 5.0, text: 'Working with White Gravity Web Solutions was a great experience. The team was knowledgeable, approachable, and always ready to help. They delivered the project on time and ensured every detail matched my expectations. Their innovative ideas, prompt support, and dedication to quality truly set them apart. I would gladly recommend White Gravity Web Solutions to anyone looking for dependable and professional web development services.' },
  { name: 'Sagar Yadav', rating: 5.0, text: 'Best website Development Company. The team was highly supportive and attentive to all our requirements.' }
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


export const COMPANY = {
  name: 'White Gravity Web Solutions',
  short: 'White Gravity',
  tagline: 'Premier IT & Software Company in USA',
  phones: ['+1 (469) 461-4710'],
  whatsapp: 'https://wa.me/14694614710?text=Hello%20White%20Gravity%20Team!%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20you.',
  emails: ['info@whitegravitycrm.com'],
  address: 'Dallas, TX, United States (CST)',
  timezone: 'CST (UTC-6)',
  socials: {
    facebook: 'https://www.facebook.com/people/White-Gravity-Web-Solution/61583427517726/',
    instagram: 'https://www.instagram.com/whitegravityweb/',
    linkedin: 'https://www.linkedin.com/company/whitegravity/',
  },
  logo: '/images/logo-whitegravity-new.png',
  heroImg: '/images/hero-main.jpg',
};

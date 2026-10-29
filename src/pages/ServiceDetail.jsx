import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CTA from '../components/sections/CTA';
import QuickContactSection from '../components/sections/QuickContactSection';
import { SERVICES } from '../data/mock';

import {
  Code,
  Plus,
  Minus,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

import {
  FaBuilding,
  FaUsers,
  FaProjectDiagram,
  FaCloud,
  FaChartBar,
  FaPlug,
  FaDesktop,
  FaWordpress,
  FaReact,
  FaSearch,
  FaMobileAlt,
  FaTachometerAlt,
  FaShopify,
  FaMoneyCheckAlt,
  FaBoxes,
  FaFilter,
  FaTruck,
  FaApple,
  FaAndroid,
  FaMobile,
  FaCalendarCheck,
  FaPalette,
  FaRocket,
  FaGraduationCap,
  FaNetworkWired,
  FaBriefcase,
  FaCogs,
  FaBullhorn,
  FaSearchDollar,
  FaShareAlt,
  FaPenNib,
  FaEnvelopeOpenText,
  FaMapMarkedAlt,
  FaGoogle,
  FaGooglePlusG,
  FaShoppingCart,
  FaFacebook,
  FaInstagram,
  FaCopy,
  FaWindows,
  FaUserCog,
  FaSitemap,
  FaDev,
  FaClipboardList,
  FaTerminal
} from 'react-icons/fa';

import {
  motion,
  AnimatePresence
} from 'framer-motion';

const DETAILED_SERVICES_CONTENT = {

  'custom-software-development': {
    pill: 'Custom Software Development',

    heroSubtitle:
      'Build Smarter Business Solutions with Custom Software',

    tailoredTitle:
      'Tailored Software Solutions Designed Around Your Business',

    tailoredDesc:
      'Every business has unique workflows, challenges, and goals. Off-the-shelf software often creates limitations that slow growth and reduce efficiency. At White Gravity, we develop custom software solutions that fit your business perfectly, helping you streamline operations, automate processes, and improve overall performance. From startups to enterprises, we deliver innovative software products that are secure, scalable, and built to support your future growth.',

    tailoredImg: '/images/service-website.jpg',

    subServicesTitle:
      'Our Custom Software Development Services',

    subServices: [
      {
        icon: FaWindows,
        title: 'Enterprise Software Development',
        desc:
          'Powerful business applications designed to manage operations, resources, and organizational workflows efficiently.'
      },
      {
        icon: FaUserCog,
        title: 'CRM & Customer Management Systems',
        desc:
          'Centralize customer data, improve communication, and enhance customer experiences with customized CRM solutions.'
      },
      {
        icon: FaSitemap,
        title: 'Workflow Automation Solutions',
        desc:
          'Reduce manual tasks and increase productivity through intelligent automation systems tailored to your processes.'
      },
      {
        icon: FaDev,
        title: 'SaaS Product Development',
        desc:
          'Launch subscription-based software platforms with modern architecture and seamless user experiences.'
      },
      {
        icon: FaClipboardList,
        title: 'Custom Dashboards & Reporting Tools',
        desc:
          'Gain real-time insights through interactive dashboards and data-driven reporting systems.'
      },
      {
        icon: FaCogs,
        title: 'Software Integration Services',
        desc:
          'Connect your software ecosystem with third-party tools, APIs, payment gateways, and enterprise platforms.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — Custom Software Development in Noida',

    faqs: [
      {
        q: 'What is custom software development?',
        a:
          'Custom software development is the process of designing, building, deploying, and maintaining software tailored specifically for a specific set of users, functions, or organizations.'
      },
      {
        q: 'Is custom software better than ready-made software?',
        a:
          'Yes, custom software fits your exact business workflows, scales seamlessly with your growth, eliminates recurring license fees, and gives you 100% IP ownership.'
      },
      {
        q: 'Can you upgrade existing software?',
        a:
          'Yes, we modernize legacy codebases, refactor databases, migrate to cloud infrastructure, and add new features to existing software applications.'
      },
      {
        q: 'How secure is custom software?',
        a:
          'We build enterprise security by design, incorporating data encryption, role-based access control (RBAC), security audits, and OWASP compliance.'
      },
      {
        q: 'Do you provide post-launch support?',
        a:
          'Yes, we offer ongoing maintenance, server monitoring, bug fixes, feature enhancements, and dedicated SLA support packages.'
      }
    ]
  },

  'website-development': {
    pill: 'Website Development',

    heroSubtitle:
      'Custom-built websites focused on speed, user experience, and business success.',

    tailoredTitle:
      'Custom Website Development Services by White Gravity',

    tailoredDesc:
      "Website development in Noida is one of White Gravity's core specialties. We create modern, high-performing websites that do more than just look impressive—they help businesses grow. Every website is built with a focus on speed, responsive design, SEO best practices, and a seamless user experience across all devices.\n\nWhether you need a business website, corporate portal, portfolio, landing page, eCommerce store, or a custom web solution, our experienced team delivers websites tailored to your goals. At White Gravity, we combine creative design with powerful development to build websites that strengthen your online presence and drive measurable business results.",

    tailoredImg: '/images/service-website.jpg',

    subServicesTitle:
      'Website Development Services We Offer',

    subServices: [
      {
        icon: FaDesktop,
        title: 'Custom Website Design',
        desc:
          'Unique, brand-aligned designs tailored to your business — no templates, no compromises.'
      },
      {
        icon: FaWordpress,
        title: 'WordPress Development',
        desc:
          'Custom WordPress themes and plugins for content-rich, easy-to-manage business websites.'
      },
      {
        icon: FaReact,
        title: 'React & Next.js Sites',
        desc:
          'Blazing-fast static and server-rendered sites using modern JavaScript frameworks.'
      },
      {
        icon: FaSearch,
        title: 'SEO-First Architecture',
        desc:
          'Every page built with on-page SEO best practices — meta tags, schema, speed, and structure.'
      },
      {
        icon: FaMobileAlt,
        title: 'Responsive Design',
        desc:
          'Pixel-perfect layouts that look amazing on every device — desktop, tablet, and mobile.'
      },
      {
        icon: FaTachometerAlt,
        title: 'Performance Optimization',
        desc:
          'Core Web Vitals optimization — fast loading, smooth interactions, and visual stability.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — Website Development in Noida',

    faqs: [
      {
        q: 'How long does it take to build a custom website?',
        a:
          'Standard business websites take 2 to 4 weeks, while complex web applications take 4 to 8 weeks.'
      },
      {
        q: 'Will my website be mobile-friendly & SEO optimized?',
        a:
          'Yes! Every website we develop is 100% responsive across mobile, tablet, and desktop, and built with SEO best practices.'
      },
      {
        q: 'Can I edit content on my website easily?',
        a:
          'Yes, we provide easy-to-use CMS admin dashboards so your team can add or edit pages, blogs, and media anytime.'
      },
      {
        q: 'Do you provide hosting and maintenance services?',
        a:
          'Yes, we offer secure cloud hosting, SSL certificates, and ongoing maintenance packages to ensure your website remains fast, secure, and up-to-date.'
      }
    ]
  },

  'ecommerce-development': {
    pill: 'E-Commerce',

    heroTitle:
      'ECommerce Development in Noida',

    heroSubtitle:
      'Build powerful, secure, and scalable online stores tailored to your business. We develop high-performance eCommerce websites that deliver seamless shopping experiences and drive more sales.',

    tailoredTitle:
      'Grow Your Business with Professional ECommerce Development in Noida',

    tailoredDesc:
      "ECommerce development in Noida is one of White Gravity's core services. We build modern, secure, and scalable online stores that are designed to deliver exceptional user experiences and drive business growth.\n\nWhether you're launching a new eCommerce brand or expanding an existing business, our team provides end-to-end development solutions. From custom storefront design and product catalog management to secure payment gateway integration, inventory management, order processing, and shipping solutions, we ensure every aspect of your online store is optimized for success.",

    tailoredImg: '/images/service-ecommerce.jpg',

    subServicesTitle:
      'ECommerce Development Services We Offer',

    subServices: [
      {
        icon: FaShopify,
        title: 'Shopify Development',
        desc:
          'Custom Shopify stores with branded themes, apps, and optimized checkout flows.'
      },
      {
        icon: FaWordpress,
        title: 'WooCommerce Development',
        desc:
          'Feature-rich WooCommerce stores for WordPress — flexible, scalable, and SEO-friendly.'
      },
      {
        icon: FaMoneyCheckAlt,
        title: 'Payment Gateway Integration',
        desc:
          'Razorpay, Stripe, PayPal, Paytm, and secure custom payment gateways integration.'
      },
      {
        icon: FaBoxes,
        title: 'Inventory Management',
        desc:
          'Real-time stock tracking, automated reordering, and multi-warehouse support.'
      },
      {
        icon: FaFilter,
        title: 'Conversion Optimization',
        desc:
          'A/B testing, checkout optimization, and analytics-driven improvements.'
      },
      {
        icon: FaTruck,
        title: 'Shipping & Logistics',
        desc:
          'Shipping API integration with Shiprocket, Delhivery, and custom logistics.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — ECommerce Development in Noida',

    faqs: [
      {
        q: 'Which eCommerce platform should I choose for my business?',
        a:
          'We recommend Shopify for fast turnkey setup and reliability, WooCommerce for custom WordPress flexibility, or headless custom Node/React for enterprise scale.'
      },
      {
        q: 'Can you integrate Indian payment gateways and Shiprocket logistics?',
        a:
          'Yes! We seamlessly integrate Razorpay, Paytm, Cashfree, Stripe, Shiprocket, Delhivery, and automated GST invoice plugins.'
      },
      {
        q: 'Will my online store be secure and PCI-compliant?',
        a:
          'Yes, all our ecommerce stores include SSL encryption, PCI-DSS compliant checkout flows, and DDoS protection.'
      },
      {
        q: 'Do you provide mobile apps for ecommerce stores?',
        a:
          'Yes, we develop companion iOS and Android mobile apps that sync seamlessly with your ecommerce store to provide a unified shopping experience.'
      }
    ]
  },

  'mobile-app-development': {
    pill: 'Mobile App Development',

    heroTitle:
      'Mobile App Development in Noida',

    heroSubtitle:
      'Custom mobile app development for iOS and Android, delivering intuitive user experiences, robust functionality, and scalable solutions from concept to launch.',

    tailoredTitle:
      'Expert Mobile App Development in Noida',

    tailoredDesc:
      "At White Gravity, we specialize in developing custom mobile applications that help businesses connect with customers, streamline operations, and accelerate digital growth. Our team creates high-performance Android and iOS apps with intuitive user experiences, modern designs, and scalable architectures tailored to your business objectives.\n\nFrom strategy and UI/UX design to app development, API integration, testing, deployment, and ongoing maintenance, we provide end-to-end mobile app development services. Whether you need a customer-facing application, an enterprise mobility solution, an eCommerce app, or an on-demand service platform, we build secure, reliable, and feature-rich mobile applications that deliver exceptional performance across devices.",

    tailoredImg: '/images/service-mobile.jpg',

    subServicesTitle:
      'Mobile App Services We Offer',

    subServices: [
      {
        icon: FaApple,
        title: 'iOS App Development',
        desc:
          'Native iOS apps with Swift — optimized for iPhone and iPad with Apple design guidelines.'
      },
      {
        icon: FaAndroid,
        title: 'Android App Development',
        desc:
          'Native Android apps with Kotlin — optimized for the diverse Android device ecosystem.'
      },
      {
        icon: FaMobile,
        title: 'Flutter Development',
        desc:
          'Cross-platform apps with a single codebase — beautiful UI and near-native performance.'
      },
      {
        icon: FaReact,
        title: 'React Native Development',
        desc:
          'Appointment booking, reservation systems, and scheduling platforms.'
      },
      {
        icon: FaPalette,
        title: 'UI/UX Design',
        desc:
          'User-centered design with wireframes, prototypes, and pixel-perfect interfaces.'
      },
      {
        icon: FaRocket,
        title: 'App Store Optimization & Launch',
        desc:
          'Complete App Store & Google Play submission, ASO optimization, and launch strategy.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — Mobile App Development in Noida',

    faqs: [
      {
        q: 'Do you build native or cross-platform mobile apps?',
        a:
          'We build both! We develop native Swift/Kotlin apps for maximum device integration, as well as Flutter and React Native cross-platform apps for cost-effective dual OS delivery.'
      },
      {
        q: 'Will you submit my app to Apple App Store and Google Play?',
        a:
          'Yes, we handle the entire App Store and Google Play submission, guidelines compliance, developer account setup, and store listing optimization.'
      },
      {
        q: "How do you ensure the app's security and data privacy?",
        a:
          'We implement industry-standard encryption, secure API integrations, and robust authentication methods to protect user data and ensure compliance.'
      },
      {
        q: 'What happens after the app is launched?',
        a:
          'We offer comprehensive post-launch support, including bug fixes, performance monitoring, OS updates, and new feature development to keep your app competitive.'
      }
    ]
  },

  'web-app-development': {
    pill: 'Web App Development',

    heroTitle:
      'Web App Development in Noida',

    heroSubtitle:
      'Build secure, scalable, and high-performance web applications tailored to your business needs. We develop custom SaaS platforms, enterprise solutions, customer portals, and business dashboards designed for long-term growth.',

    tailoredTitle:
      'Custom Web Application Development in Noida for Modern Businesses',

    tailoredDesc:
      'Web app development in Noida is a key service at White Gravity, where we build custom web applications that help businesses streamline operations, improve productivity, and accelerate digital growth. Our solutions are designed with performance, security, and scalability in mind, ensuring they evolve alongside your business. Whether you need a custom CRM, ERP system, customer portal, SaaS platform, business dashboard, booking system, or workflow automation tool, our experienced developers deliver feature-rich applications tailored to your unique requirements. Using modern technologies and industry best practices, we create intuitive, reliable, and high-performing web applications that provide seamless user experiences across all devices.',

    tailoredImg:
      '/images/service-webapp.jpg',

    subServicesTitle:
      'Our Web Application Development Solutions',

    subServices: [
      {
        icon: FaCloud,
        title: 'SaaS Platforms',
        desc:
          'Multi-tenant SaaS applications with subscription billing, user management, and analytics.'
      },
      {
        icon: FaChartBar,
        title: 'Admin Dashboards',
        desc:
          'Real-time data dashboards with charts, filters, and role-based access control.'
      },
      {
        icon: FaBuilding,
        title: 'Enterprise Portals',
        desc:
          'Internal portals for HR, operations, project management, and team collaboration.'
      },
      {
        icon: FaCalendarCheck,
        title: 'Booking & Scheduling',
        desc:
          'Appointment booking, reservation systems, and scheduling platforms.'
      },
      {
        icon: FaGraduationCap,
        title: 'LMS & E-Learning',
        desc:
          'Learning management systems with courses, quizzes, certificates, and progress tracking.'
      },
      {
        icon: FaNetworkWired,
        title: 'API Development',
        desc:
          'RESTful and GraphQL APIs for mobile apps, third-party integrations, and microservices.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — Web App Development in Noida',

    faqs: [
      {
        q: 'What tech stack do you use for web application development?',
        a:
          'We use React, Next.js, Node.js, Python, PHP/Laravel, PostgreSQL, MongoDB, and AWS cloud infrastructure.'
      },
      {
        q: 'Can you build multi-tenant SaaS applications with subscription billing?',
        a:
          'Yes! We build multi-tenant SaaS architectures with Stripe/Razorpay automated subscription billing, user roles, and admin management.'
      },
      {
        q: 'How do you ensure data security in enterprise portals?',
        a:
          'We implement SSL/TLS encryption, JWT authentication, Role-Based Access Control (RBAC), and regular vulnerability patching.'
      },
      {
        q: 'Can you integrate the web application with our existing systems?',
        a:
          'Absolutely. We specialize in API integrations and can connect your new web application seamlessly with your existing CRM, ERP, and third-party tools.'
      }
    ]
  },

  'crm-erp-development': {
    pill: 'CRM & ERP Development',

    heroSubtitle:
      'Build Smarter Business Solutions with Custom CRM & ERP',

    tailoredTitle:
      'Custom CRM & ERP Development Services by White Gravity',

    tailoredDesc:
      "Managing customer relationships and business operations efficiently is essential for sustainable growth. At White Gravity, we develop powerful CRM and ERP solutions that help organizations centralize data, automate processes, and improve decision-making.\n\nOur custom-built systems are designed to simplify daily operations, increase productivity, and provide complete visibility across departments. Whether you're a growing startup or an established enterprise, we deliver scalable solutions tailored to your unique business requirements.",

    tailoredImg:
      '/images/service-crm.svg',

    subServicesTitle:
      'Our CRM & ERP Development Solutions',

    subServices: [
      {
        icon: FaUsers,
        title: 'Custom CRM Software',
        desc:
          'Manage leads, track sales pipelines, and improve customer retention with tailored CRM systems.'
      },
      {
        icon: FaBriefcase,
        title: 'Enterprise Resource Planning (ERP)',
        desc:
          'Integrate finance, HR, inventory, and operations into a single centralized ERP platform.'
      },
      {
        icon: FaCogs,
        title: 'Zoho Customization',
        desc:
          'Expert deployment, customization, and API integration for the Zoho One suite.'
      },
      {
        icon: FaBullhorn,
        title: 'Sales & Marketing Automation',
        desc:
          'Automate repetitive tasks, email campaigns, and follow-ups to empower your sales teams.'
      },
      {
        icon: FaProjectDiagram,
        title: 'Workflow Integration',
        desc:
          'Connect your CRM/ERP with third-party tools, payment gateways, and existing software.'
      },
      {
        icon: FaChartBar,
        title: 'Advanced Analytics & Reporting',
        desc:
          'Gain real-time business insights with custom dashboards, forecasting, and data visualization.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — CRM & ERP Development',

    faqs: [
      {
        q: 'Should I choose a custom CRM or a ready-made solution like Zoho?',
        a:
          'If your workflows are highly unique, a custom CRM is best. If you want fast deployment and standard features, customizing Zoho is more cost-effective.'
      },
      {
        q: 'Can you migrate data from our old systems to the new ERP?',
        a:
          'Yes! We securely migrate all your legacy data (customers, inventory, finance) to the new platform with zero data loss.'
      },
      {
        q: 'Is training provided after deployment?',
        a:
          'Absolutely. We provide comprehensive documentation and hands-on team training so your staff can efficiently use the new systems.'
      },
      {
        q: 'How long does it take to deploy a custom ERP?',
        a:
          'A standard CRM setup takes 2-4 weeks, while a comprehensive custom ERP implementation can take anywhere from 8 to 16 weeks depending on complexity.'
      }
    ]
  },

  'digital-marketing': {
    pill: 'Digital Marketing',

    heroTitle:
      'Digital Marketing',

    heroSubtitle:
      'Drive More Traffic, Generate Quality Leads & Grow Your Business Online',

    tailoredTitle:
      'Results-Driven Digital Marketing Services by White Gravity',

    tailoredDesc:
      "In today's competitive digital landscape, having a website is not enough. Businesses need a strategic digital marketing approach to reach the right audience, increase brand visibility, and generate consistent leads. At White Gravity, we create data-driven marketing campaigns that help businesses grow faster and achieve measurable results.\n\nOur team combines creativity, technology, and analytics to develop customized marketing strategies that maximize your online presence and deliver long-term success.",

    tailoredImg:
      '/images/service-marketing.jpg',

    subServicesTitle:
      'Digital Marketing Services We Offer',

    subServices: [
      {
        icon: FaSearchDollar,
        title: 'Search Engine Optimization (SEO)',
        desc:
          'Improve your search engine rankings, increase organic traffic, and attract potential customers through effective SEO strategies.'
      },
      {
        icon: FaBullhorn,
        title: 'Pay-Per-Click Advertising (PPC)',
        desc:
          'Reach targeted audiences instantly with high-converting Google Ads and paid advertising campaigns.'
      },
      {
        icon: FaShareAlt,
        title: 'Social Media Marketing',
        desc:
          'Build brand awareness, engage your audience, and grow your presence across popular social media platforms.'
      },
      {
        icon: FaPenNib,
        title: 'Content Marketing',
        desc:
          'Create valuable and engaging content that attracts, educates, and converts your target audience.'
      },
      {
        icon: FaEnvelopeOpenText,
        title: 'Email Marketing',
        desc:
          'Nurture leads and strengthen customer relationships with personalized email campaigns.'
      },
      {
        icon: FaMapMarkedAlt,
        title: 'Local SEO',
        desc:
          'Enhance your visibility in local search results and attract customers from your target geographic area.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — Digital Marketing in Noida',

    faqs: [
      {
        q: 'How soon can I expect results from SEO?',
        a:
          'SEO is a compounding organic growth strategy. Initial ranking improvements typically appear within 60 to 90 days, with significant traffic growth by months 4 to 6.'
      },
      {
        q: 'What platforms do you manage for Social Media Marketing?',
        a:
          'We manage Meta (Instagram & Facebook), LinkedIn, YouTube, and Google Business Profile listing campaigns.'
      },
      {
        q: 'Do you provide detailed monthly ROI reports?',
        a:
          'Yes! You receive transparent monthly analytics reports detailing traffic, keyword rankings, cost-per-lead, and conversion performance.'
      },
      {
        q: 'Do you create custom content for digital marketing campaigns?',
        a:
          'Yes, our in-house team creates high-quality, engaging content including ad copies, blog posts, graphics, and videos tailored to your brand voice.'
      }
    ]
  },

  'meta-google-ads': {
    pill: 'Meta Ads & Google Ads',

    heroTitle:
      'Meta Ads & Google Ads',

    heroSubtitle:
      'Reach the Right Audience and Maximize Your Advertising ROI',

    tailoredTitle:
      'Performance-Driven Meta Ads & Google Ads Management',

    tailoredDesc:
      'Online advertising is one of the fastest ways to attract potential customers and grow your business. At White Gravity, we create and manage high-performing Meta Ads and Google Ads campaigns that help businesses increase visibility, generate qualified leads, and achieve measurable results.\n\nOur advertising experts use advanced targeting, audience insights, and continuous optimization strategies to ensure every advertising dollar delivers maximum value.',

    tailoredImg:
      '/images/service-ads.jpg',

    subServicesTitle:
      'Advertising Services We Offer',

    subServices: [
      {
        icon: FaGoogle,
        title: 'Google Search Ads',
        desc:
          'Appear at the top of Google search results and capture customers actively searching for your products or services.'
      },
      {
        icon: FaGooglePlusG,
        title: 'Google Display Ads',
        desc:
          'Increase brand awareness and reach potential customers across millions of websites and apps.'
      },
      {
        icon: FaShoppingCart,
        title: 'Google Shopping Ads',
        desc:
          'Showcase your products directly in Google search results and drive high-intent ecommerce traffic.'
      },
      {
        icon: FaFacebook,
        title: 'Meta Facebook Ads',
        desc:
          'Connect with your target audience through engaging Facebook advertising campaigns designed to increase conversions.'
      },
      {
        icon: FaInstagram,
        title: 'Instagram Ads',
        desc:
          'Promote your brand, products, and services with visually compelling Instagram advertising strategies.'
      },
      {
        icon: FaCopy,
        title: 'Remarketing Campaigns',
        desc:
          'Reconnect with previous website visitors and encourage them to complete their purchase or inquiry.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — Meta & Google Ads in Noida',

    faqs: [
      {
        q: 'Which ad platform is better: Google Ads or Meta Ads?',
        a:
          'Google Ads targets high-intent searchers actively looking to buy now, while Meta Ads (Facebook & Instagram) builds audience demand, interest, and retargeting. We often run both together for maximum performance.'
      },
      {
        q: 'What budget is needed to start running ad campaigns?',
        a:
          'We design flexible campaign budgets starting from ₹15,000/month up to enterprise scaling budgets.'
      },
      {
        q: 'How do you optimize cost-per-lead (CPL) and ROAS?',
        a:
          'We conduct A/B ad creative testing, conversion API tracking, negative keyword filtering, and weekly bid optimization.'
      },
      {
        q: 'Will I have ownership of my ad accounts?',
        a:
          'Yes, you retain 100% ownership and administrative access to all your advertising accounts, ensuring complete transparency and control.'
      }
    ]
  },

  'zoho-consultation': {
    pill: 'Zoho Consultation',

    heroTitle:
      'Zoho Consultation & Implementation in Noida',

    heroSubtitle:
      'Streamline Your Entire Business Operations with Certified Zoho One Experts',

    tailoredTitle:
      'Certified Zoho Consultation & Development Services by White Gravity',

    tailoredDesc:
      'Managing separate tools for CRM, finance, HR, and customer support leads to fragmented data and operational bottlenecks. At White Gravity, we provide end-to-end Zoho consultation, customization, and deployment to help your business operate as one unified digital ecosystem.\n\nFrom Zoho CRM and Zoho Books to Zoho Desk, Zoho People, and complete Zoho One suites, our certified experts customize workflows, automate lead scoring, and train your team for maximum productivity.',

    tailoredImg:
      '/images/service-zoho.jpg',

    subServicesTitle:
      'Zoho Consultation Services We Offer',

    subServices: [
      {
        icon: FaUsers,
        title: 'Zoho CRM Customization',
        desc:
          'Custom lead pipelines, automation rules, blueprint workflows, and sales dashboards.'
      },
      {
        icon: FaBuilding,
        title: 'Zoho One Setup & Migration',
        desc:
          'Unified setup of 45+ integrated Zoho business apps tailored to your company operations.'
      },
      {
        icon: FaMoneyCheckAlt,
        title: 'Zoho Books & Finance Integration',
        desc:
          'GST-compliant invoicing, automated bank reconciliation, and accounting setup.'
      },
      {
        icon: FaEnvelopeOpenText,
        title: 'Zoho Desk & Support Portals',
        desc:
          'Omnichannel customer support ticketing, SLA automation, and self-service portals.'
      },
      {
        icon: FaBriefcase,
        title: 'Zoho People & HRMS Integration',
        desc:
          'Employee onboarding, attendance tracking, leave management, and performance appraisal.'
      },
      {
        icon: FaPlug,
        title: 'Zoho API & Deluge Scripting',
        desc:
          'Custom integrations between Zoho apps and third-party software using Deluge & REST APIs.'
      }
    ],

    faqsTitle:
      'Frequently Asked Questions — Zoho Consultation in Noida',

    faqs: [
      {
        q: 'Why choose White Gravity as your Zoho Partner in Noida?',
        a:
          'Our certified Zoho experts bring years of domain experience across CRM, ERP, and Zoho One apps to ensure smooth deployment and maximum ROI.'
      },
      {
        q: 'Can you migrate data from Salesforce or Excel to Zoho CRM?',
        a:
          'Yes! We handle full data migration from Salesforce, HubSpot, Excel, or custom databases into Zoho CRM with zero data loss.'
      },
      {
        q: 'Do you offer custom Deluge scripting and third-party API integration?',
        a:
          'Yes, our developers write custom Deluge scripts to connect Zoho with WhatsApp, payment gateways, e-commerce, and custom ERPs.'
      },
      {
        q: 'Do you provide training for my team on how to use Zoho?',
        a:
          'Yes, we offer comprehensive training sessions, customized user manuals, and ongoing support to ensure your team maximizes the potential of your Zoho applications.'
      }
    ]
  }
};

const getDefaultContent = (service) => ({
  pill: service.title.toUpperCase(),

  heroSubtitle:
    `Build Smarter Business Solutions with ${service.title}`,

  tailoredTitle:
    `Tailored ${service.title} Designed Around Your Business`,

  tailoredDesc:
    `Every business has unique workflows, challenges, and goals. At White Gravity, we develop ${service.title} solutions that fit your business perfectly, helping you streamline operations, automate processes, and achieve measurable growth.`,

  tailoredImg:
    service.img || '/images/service-custom-software.jpg',

  subServicesTitle:
    `Our ${service.title} Services`,

  subServices: [
    {
      icon: FaBuilding,
      title: 'Enterprise Solutions',
      desc:
        'Scalable business applications designed to manage operations and organizational workflows.'
    },
    {
      icon: FaUsers,
      title: 'Consultation & Strategy',
      desc:
        'Strategic technology advisory and roadmaps tailored to your industry goals.'
    },
    {
      icon: FaProjectDiagram,
      title: 'Process Automation',
      desc:
        'Reduce manual tasks and increase productivity through intelligent automation systems.'
    },
    {
      icon: FaTerminal,
      title: 'Custom Implementation',
      desc:
        'Tailored platforms engineered with modern architecture and seamless UX.'
    },
    {
      icon: FaChartBar,
      title: 'Analytics & Dashboards',
      desc:
        'Real-time business insights through interactive dashboards and reporting systems.'
    },
    {
      icon: FaPlug,
      title: 'API & Integration Services',
      desc:
        'Connect your software ecosystem with third-party tools, payment gateways, and platforms.'
    }
  ],

  faqsTitle:
    `Frequently Asked Questions — ${service.title} in Noida`,

  faqs: [
    {
      q: `What is included in ${service.title}?`,
      a:
        'We provide end-to-end services from requirement discovery, architecture design, development, testing, to cloud deployment and ongoing maintenance.'
    },
    {
      q: 'How do we get started with White Gravity?',
      a:
        'Simply book a free 30-minute discovery call. Our tech leads will analyze your requirements and send a detailed proposal within 24 hours.'
    },
    {
      q: 'Do you provide post-launch support?',
      a:
        'Yes, we provide complimentary post-launch support and SLA-backed maintenance packages.'
    },
    {
      q: 'Do you offer customized pricing packages?',
      a:
        'Yes, we provide flexible and transparent pricing models tailored to your specific project requirements, ensuring you get the best value for your investment.'
    }
  ]
});

const GradientDefs = () => (
  <svg
    width="0"
    height="0"
    className="absolute"
    aria-hidden="true"
  >
    <defs>

      <linearGradient
        id="grad-instagram"
        x1="0%"
        y1="100%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#FCAF45" />
        <stop offset="50%" stopColor="#FD1D1D" />
        <stop offset="100%" stopColor="#E1306C" />
      </linearGradient>

      <linearGradient
        id="grad-google"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="33%" stopColor="#34A853" />
        <stop offset="66%" stopColor="#FBBC05" />
        <stop offset="100%" stopColor="#EA4335" />
      </linearGradient>

      <linearGradient
        id="grad-gmail"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#EA4335" />
        <stop offset="50%" stopColor="#FBBC05" />
        <stop offset="100%" stopColor="#34A853" />
      </linearGradient>

      <linearGradient
        id="grad-theme"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#009B6C" />
        <stop offset="100%" stopColor="#026f4f" />
      </linearGradient>

    </defs>
  </svg>
);

const getIconColor = (title) => {

  const t = title.toLowerCase();

  if (t.includes('facebook')) return '#1877F2';
  if (t.includes('meta')) return '#0468FF';
  if (t.includes('instagram')) return 'url(#grad-instagram)';
  if (t.includes('whatsapp')) return '#25D366';
  if (t.includes('linkedin')) return '#0A66C2';
  if (t.includes('youtube')) return '#FF0000';

  if (
    t.includes('twitter') ||
    t.match(/\bx\b/)
  ) {
    return '#000000';
  }

  if (t.includes('gmail')) return 'url(#grad-gmail)';
  if (t.includes('google')) return 'url(#grad-google)';
  if (t.includes('telegram')) return '#26A5E4';
  if (t.includes('github')) return '#181717';

  if (
    t.includes('apple') ||
    t.includes('ios')
  ) {
    return '#000000';
  }

  if (t.includes('android')) return '#3DDC84';
  if (t.includes('shopify')) return '#96bf48';
  if (t.includes('wordpress')) return '#21759b';

  return 'url(#grad-theme)';
};

export default function ServiceDetail() {

  const { slug } = useParams();

  const service =
    SERVICES.find(
      (s) => s.slug === slug
    ) || SERVICES[0];

  const content =
    DETAILED_SERVICES_CONTENT[service.slug] ||
    getDefaultContent(service);

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>

      <GradientDefs />

      <section
        className="
          relative
          overflow-hidden
          bg-[#009B6C]
          text-white
          pt-28
          pb-14
          lg:pt-36
          lg:pb-20
          text-center
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-20
            pointer-events-none
          "
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,.3) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.2) 0, transparent 40%)'
          }}
        />

        <div
          className="
            container-x
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
            max-w-4xl
            mx-auto
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="
              inline-flex
              items-center
              gap-2
              bg-white
              text-[#009B6C]
              px-5
              py-2
              rounded-full
              text-xs
              font-extrabold
              tracking-wider
              uppercase
              shadow-md
              mb-6
            "
          >

            <Code className="w-4 h-4 stroke-[3]" />

            {content.pill}

          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-tight
              text-white
              leading-tight
            "
          >
            {content.heroTitle || service.title}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0
            }}
            className="
              mt-4
              text-white/90
              text-lg
              md:text-xl
              font-semibold
              max-w-2xl
            "
          >
            {content.heroSubtitle}
          </motion.p>

        </div>

      </section>

      <section className="py-10 md:py-12 bg-white">

        <div
          className="
            container-x
            grid
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-center
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.3
            }}
            className="
              lg:col-span-6
              flex
              flex-col
              items-start
              text-left
            "
          >

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                text-slate-900
                leading-[1.15]
              "
            >
              {content.tailoredTitle}
            </h2>

            <p
              className="
                mt-6
                text-slate-600
                leading-relaxed
                text-base
                md:text-lg
                whitespace-pre-line
              "
            >
              {content.tailoredDesc}
            </p>

            <div className="block lg:hidden w-full mt-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group relative bg-white p-3">
              <img src={content.tailoredImg} alt={service.title} className="w-full h-auto max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-700 rounded-2xl" />
            </div>

            <div className="mt-8 space-y-3.5">

              {[
                'Scalable, enterprise-ready software architecture',
                'Custom UI/UX & interactive prototype design',
                '100% source code ownership & transparent sprints',
                '3 months post-launch support & SLA maintenance'
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <CheckCircle2
                    className="
                      w-5
                      h-5
                      text-[#009B6C]
                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-slate-800
                      font-bold
                      text-sm
                      md:text-base
                    "
                  >
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-10">

              <a
                href="#contact-form-section"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-8
                  py-4
                  rounded-full
                  font-extrabold
                  bg-white
                  text-[#009B6C]
                  border-2
                  border-[#009B6C]
                  shadow-lg
                  hover:scale-105
                  transition-all
                "
              >

                Get Started Now

                <ArrowRight className="w-5 h-5" />

              </a>

            </div>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.3
            }}
            className="
              hidden
              lg:block
              lg:col-span-6
              relative
            "
          >

            <div
              className="
                rounded-[2.5rem]
                overflow-hidden
                shadow-2xl
                border-4
                md:border-8
                border-white
                group
                relative
                bg-white
                flex
                items-center
                justify-center
                p-3
              "
            >

              <img
                src={content.tailoredImg}
                alt={service.title}
                className="
                  w-full
                  h-auto
                  max-h-[500px]
                  object-contain
                  group-hover:scale-105
                  transition-transform
                  duration-700
                  rounded-2xl
                "
              />

            </div>

          </motion.div>

        </div>

      </section>

      <QuickContactSection
        defaultService={content.pill || 'Website Development'}
        title={`Get a Free Proposal for ${content.pill || 'Your Project'}`}
        subtitle="Tell us your project requirements. Our Noida-based senior engineering team will provide a comprehensive scope, timeline, and free consultation within 24 hours."
      />

      <section className="py-10 md:py-12 bg-[#e6f7f2]/50">

        <div className="container-x">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                text-[#009B6C]
                leading-tight
              "
            >
              {content.subServicesTitle}
            </h2>

          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
              md:gap-8
            "
          >

            {content.subServices.map(
              (sub, idx) => {

                const Icon = sub.icon;

                return (

                  <motion.div
                    key={sub.title}

                    initial={{
                      opacity: 0,
                      y: 25
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}

                    viewport={{
                      once: true
                    }}

                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08
                    }}

                    className="
                      service-detail-card

                      bg-white
                      rounded-3xl

                      p-7
                      md:p-8

                      min-h-[280px]

                      shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]

                      border-l-4
                      border-[#009B6C]

                      border-t
                      border-r
                      border-b

                      border-[#009B6C]/20

                      hover:shadow-xl
                      hover:-translate-y-1

                      transition-all
                      duration-300

                      flex
                      flex-col

                      !items-center
                      !text-center
                    "

                    style={{
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >

                    <div
                      className="
                        service-card-icon

                        w-16
                        h-16

                        rounded-2xl

                        bg-[#d1f2eb]

                        border-2
                        border-[#009B6C]/20

                        flex
                        items-center
                        justify-center

                        mb-6

                        shadow-sm

                        shrink-0

                        mx-auto
                      "

                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                    >

                      <Icon
                        className="
                          !w-8
                          !h-8
                        "

                        style={{
                          width: '32px',
                          height: '32px',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          fill: getIconColor(sub.title)
                        }}
                      />

                    </div>

                    <h3
                      className="
                        service-card-title

                        !w-full
                        !max-w-full

                        !text-center

                        text-xl
                        font-extrabold
                        text-slate-900

                        leading-snug

                        mx-auto
                      "

                      style={{
                        width: '100%',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                    >
                      {sub.title}
                    </h3>

                    <p
                      className="
                        service-card-description

                        !w-full
                        !max-w-full

                        !text-center

                        mt-3

                        text-slate-600

                        leading-relaxed

                        text-sm

                        flex-grow

                        mx-auto
                      "

                      style={{
                        width: '100%',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                    >
                      {sub.desc}
                    </p>

                  </motion.div>

                );

              }
            )}

          </div>

        </div>

      </section>

      <section className="py-10 md:py-12 bg-[#e6f7f2]/50">

        <div className="container-x">

          <div
            className="
              text-center
              max-w-4xl
              mx-auto
              mb-8
            "
          >

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                text-[#009B6C]
                leading-tight
              "
            >
              {content.faqsTitle}
            </h2>

          </div>

          <div
            className="
              max-w-4xl
              mx-auto
              bg-white
              rounded-3xl
              p-6
              sm:p-10
              shadow-sm
              border
              border-[#009B6C]/20
            "
          >

            <div className="divide-y divide-slate-100">

              {content.faqs.map(
                (faq, idx) => (

                  <div
                    key={faq.q}
                    className="
                      py-4
                      first:pt-0
                      last:pb-0
                    "
                  >

                    <button
                      onClick={() =>
                        setOpenFaq(
                          openFaq === idx
                            ? null
                            : idx
                        )
                      }

                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        py-2
                        text-left
                        font-bold
                        text-slate-800
                        hover:text-[#009B6C]
                        transition-colors
                        gap-4
                      "
                    >

                      <span
                        className="
                          text-base
                          sm:text-lg
                          font-bold
                          text-slate-900
                        "
                      >
                        {faq.q}
                      </span>

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-slate-50
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >

                        {openFaq === idx ? (

                          <Minus
                            className="
                              w-4
                              h-4
                              text-[#009B6C]
                            "
                          />

                        ) : (

                          <Plus
                            className="
                              w-4
                              h-4
                              text-[#009B6C]
                            "
                          />

                        )}

                      </div>

                    </button>

                    <AnimatePresence>

                      {openFaq === idx && (

                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0
                          }}

                          animate={{
                            height: 'auto',
                            opacity: 1
                          }}

                          exit={{
                            height: 0,
                            opacity: 0
                          }}

                          transition={{
                            duration: 0.3
                          }}

                          className="
                            pt-2
                            pb-4
                            text-slate-600
                            text-sm
                            md:text-base
                            leading-relaxed
                          "
                        >
                          {faq.a}
                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      <CTA />

    </>
  );
}
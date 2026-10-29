import React from "react";
import { Link } from "react-router-dom";

const KEYWORD_LINKS = [
  { label: "Website Development Company Noida", href: "/website-development-company-noida" },
  { label: "Website Design Company Noida", href: "/website-design-company-noida" },
  { label: "Web Development Company Noida", href: "/website-development-company-noida" },
  { label: "Website Design and Development Company Noida", href: "/website-development-company-noida" },
  { label: "Custom Website Development Company Noida", href: "/website-development-company-noida" },
  { label: "Website Development Services Noida", href: "/website-development-company-noida" },
  { label: "Web Design Agency Noida", href: "/website-design-company-noida" },
  { label: "Digital Marketing Agency Noida", href: "/digital-marketing-agency-noida" },
  { label: "Digital Marketing Company Noida", href: "/digital-marketing-agency-noida" },
  { label: "SEO Company Noida", href: "/seo-company-noida" },
  { label: "SEO Agency Noida", href: "/seo-company-noida" },
  { label: "SEO Services Noida", href: "/seo-company-noida" },
  { label: "Software Development Company Noida", href: "/software-development-company-noida" },
  { label: "Custom Software Development Company Noida", href: "/software-development-company-noida" },
  { label: "Web Application Development Company Noida", href: "/web-application-development-noida" },
  { label: "Ecommerce Development Company Noida", href: "/ecommerce-development-noida" },
  { label: "Ecommerce Website Development Company Noida", href: "/ecommerce-development-noida" },
  { label: "Shopify Development Company Noida", href: "/shopify-wordpress-development-noida" },
  { label: "WordPress Development Company Noida", href: "/shopify-wordpress-development-noida" },
  { label: "Mobile App Development Company Noida", href: "/mobile-app-development" },
  { label: "CRM Development Company Noida", href: "/crm-erp-development-noida" },
  { label: "ERP Development Company Noida", href: "/crm-erp-development-noida" },
  { label: "Custom CRM Development Noida", href: "/crm-erp-development-noida" },
  { label: "Custom ERP Development Noida", href: "/crm-erp-development-noida" },
  { label: "Zoho CRM Consultant Noida", href: "/zoho-crm-consultant-noida" },
  { label: "Business Software Development Company Noida", href: "/software-development-company-noida" },
];

export default function SEOKeywords() {
  return (
    <div
      className="
        bg-[#e6f7f2]
        py-4
        sm:py-6
        md:py-6
        lg:py-4
      "
    >
      <div
        className="
          container-x
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
        "
      >
        <p
          className="
            text-[#009B6C]
            text-[10px]
            sm:text-xs
            md:text-base
            font-semibold
            leading-[1.5]
            sm:leading-relaxed
            mb-0
            md:mb-4
            lg:mb-2
          "
        >
          {KEYWORD_LINKS.map((item, idx) => (
            <React.Fragment key={idx}>
              <Link
                to={item.href}
                className="hover:underline text-[#009B6C] transition-colors"
              >
                {item.label}
              </Link>
              {idx < KEYWORD_LINKS.length - 1 && " | "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
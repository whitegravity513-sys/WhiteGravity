import React from "react";
import { Link } from "react-router-dom";

const KEYWORD_LINKS = [
  { label: "Website Development Company USA", href: "/website-development-company-usa" },
  { label: "Website Design Company USA", href: "/website-design-company-usa" },
  { label: "Web Development Company USA", href: "/website-development-company-usa" },
  { label: "Website Design and Development Company USA", href: "/website-development-company-usa" },
  { label: "Custom Website Development Company USA", href: "/website-development-company-usa" },
  { label: "Website Development Services USA", href: "/website-development-company-usa" },
  { label: "Web Design Agency USA", href: "/website-design-company-usa" },
  { label: "Digital Marketing Agency USA", href: "/digital-marketing-agency-usa" },
  { label: "Digital Marketing Company USA", href: "/digital-marketing-agency-usa" },
  { label: "SEO Company USA", href: "/seo-company-usa" },
  { label: "SEO Agency USA", href: "/seo-company-usa" },
  { label: "SEO Services USA", href: "/seo-company-usa" },
  { label: "Software Development Company USA", href: "/software-development-company-usa" },
  { label: "Custom Software Development Company USA", href: "/software-development-company-usa" },
  { label: "Web Application Development Company USA", href: "/web-application-development-usa" },
  { label: "Ecommerce Development Company USA", href: "/ecommerce-development-usa" },
  { label: "Ecommerce Website Development Company USA", href: "/ecommerce-development-usa" },
  { label: "Shopify Development Company USA", href: "/shopify-wordpress-development-usa" },
  { label: "WordPress Development Company USA", href: "/shopify-wordpress-development-usa" },
  { label: "Mobile App Development Company USA", href: "/mobile-app-development" },
  { label: "CRM Development Company USA", href: "/crm-erp-development-usa" },
  { label: "ERP Development Company USA", href: "/crm-erp-development-usa" },
  { label: "Custom CRM Development USA", href: "/crm-erp-development-usa" },
  { label: "Custom ERP Development USA", href: "/crm-erp-development-usa" },
  { label: "Zoho CRM Consultant USA", href: "/zoho-crm-consultant-usa" },
  { label: "Business Software Development Company USA", href: "/software-development-company-usa" },
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
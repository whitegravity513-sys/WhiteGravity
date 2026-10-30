import { useEffect } from 'react';
import { COMPANY } from '../data/mock';

export default function SEOMeta({ page, isNotFound = false }) {
  useEffect(() => {
    const previousTitle = document.title;
    const jsonLdId = 'seo-page-jsonld';

    const setMetaTag = (attrName, attrVal, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (isNotFound || !page) {
      document.title = 'Page Not Found | White Gravity Web Solutions';
      setMetaTag('name', 'robots', 'noindex, nofollow');
      setMetaTag('name', 'googlebot', 'noindex, nofollow');
      return () => {
        document.title = previousTitle;
        setMetaTag('name', 'robots', 'index, follow');
      };
    }

    const canonicalUrl = `https://whitegravity.in/${page.slug}`;

    document.title = page.metaTitle || `${page.title} | White Gravity`;

    setMetaTag('name', 'description', page.metaDescription || '');

    if (page.keywords && page.keywords.length > 0) {
      setMetaTag('name', 'keywords', page.keywords.join(', '));
    }

    setMetaTag('name', 'robots', 'index, follow');
    setMetaTag('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', page.metaTitle || page.title);
    setMetaTag('property', 'og:description', page.metaDescription || '');
    setMetaTag('property', 'og:site_name', COMPANY.name);
    setMetaTag('property', 'og:locale', 'en_US');
    setMetaTag('property', 'og:image', 'https://whitegravity.in/og.png');
    setMetaTag('property', 'og:image:secure_url', 'https://whitegravity.in/og.png');
    setMetaTag('property', 'og:image:type', 'image/png');
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', `${page.title} - White Gravity Web Solutions`);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@whitegravity');
    setMetaTag('name', 'twitter:creator', '@whitegravity');
    setMetaTag('name', 'twitter:title', page.metaTitle || page.title);
    setMetaTag('name', 'twitter:description', page.metaDescription || '');
    setMetaTag('name', 'twitter:image', 'https://whitegravity.in/og.png');
    setMetaTag('name', 'twitter:image:alt', `${page.title} - White Gravity Web Solutions`);

    let scriptTag = document.getElementById(jsonLdId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://whitegravity.in/#website',
          'url': 'https://whitegravity.in/',
          'name': COMPANY.name,
          'description': 'IT and Software Company in the US providing Custom Software, Web & Mobile App Development, CRM/ERP, and Digital Marketing.',
          'publisher': {
            '@id': 'https://whitegravity.in/#organization',
          },
        },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://whitegravity.in/#organization',
          'name': COMPANY.name,
          'image': 'https://whitegravity.in/images/logo-whitegravity-new.png',
          'url': 'https://whitegravity.in/',
          'telephone': COMPANY.phones[0] || '+1-469-461-4710',
          'email': COMPANY.emails[0] || 'info@whitegravitycrm.com',
          'priceRange': '$$',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Dallas, TX',
            'addressLocality': 'Dallas',
            'addressRegion': 'TX',
            'addressCountry': 'US',
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 32.7767,
            'longitude': -96.7970,
          },
          'sameAs': [
            COMPANY.socials?.facebook,
            COMPANY.socials?.instagram,
            COMPANY.socials?.linkedin,
          ].filter(Boolean),
          'areaServed': [
            'Dallas',
            'Texas',
            'United States',
            'USA',
            'Nationwide',
          ],
        },
        {
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          'name': page.title,
          'serviceType': page.title,
          'provider': {
            '@id': 'https://whitegravity.in/#organization',
          },
          'areaServed': {
            '@type': 'Country',
            'name': 'United States',
          },
          'description': page.metaDescription,
          'url': canonicalUrl,
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://whitegravity.in/',
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Services in USA',
              'item': 'https://whitegravity.in/services',
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': page.title,
              'item': canonicalUrl,
            },
          ],
        },
        ...(page.faqs && page.faqs.length > 0
          ? [
              {
                '@type': 'FAQPage',
                '@id': `${canonicalUrl}#faq`,
                'mainEntity': page.faqs.map((faq) => ({
                  '@type': 'Question',
                  'name': faq.q,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.a,
                  },
                })),
              },
            ]
          : []),
      ],
    };

    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      document.title = previousTitle;
      const scriptToRemove = document.getElementById(jsonLdId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [page, isNotFound]);

  return null;
}

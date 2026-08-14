import React from 'react';
import PageHeader from '../components/PageHeader';
import ServicesGridStatic from '../components/sections/ServicesGridStatic';
import CTA from '../components/sections/CTA';
import ServicesProcess from '../components/sections/ServicesProcess';

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" crumbs={[{ label: 'Services' }]} />
      <ServicesGridStatic />
      <ServicesProcess />
      <CTA />
    </>
  );
}

import React from 'react';

export default function SectionPill({ icon: Icon, children }) {
  return (
    <span className="section-pill">
      {Icon && <Icon className="w-5 h-5 " />} {children}
    </span>
  );
}

import React from 'react';

export default function SectionPill({ icon: Icon, children }) {
  return (
    <span className="section-pill">
      {Icon && <Icon className="w-3.5 h-3.5" />} {children}
    </span>
  );
}

import React from 'react';

export default function SectionPill({ icon: Icon, children, className = '' }) {
  return (
    <span className={`section-pill ${className}`}>
      {Icon && <Icon className="w-5 h-5 flex-shrink-0" />} {children}
    </span>
  );
}

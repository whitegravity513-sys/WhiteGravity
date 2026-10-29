import React from 'react';

export default function HeroVisualMockup({ page }) {
  if (!page || !page.heroImg) return null;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white p-2 sm:p-3 group">
        <img
          src={page.heroImg}
          alt={page.heroImgAlt || page.title}
          className="w-full h-auto max-h-[460px] object-cover rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-700"
          loading="eager"
        />
      </div>
    </div>
  );
}

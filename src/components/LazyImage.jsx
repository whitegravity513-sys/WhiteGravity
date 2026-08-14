import React, { useState, useEffect } from 'react';

export default function LazyImage({ src, alt, className = '', containerClassName = '', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName} ${className.match(/w-[^\s]+/)?.[0] || 'w-full'} ${className.match(/h-[^\s]+/)?.[0] || 'h-full'} ${className.match(/rounded-[^\s]+/)?.[0] || ''}`}>
      {/* Skeleton background */}
      <div 
        className={`absolute inset-0 bg-slate-200/50 dark:bg-slate-800/50 animate-pulse transition-opacity duration-500 ease-in-out ${
          isLoaded || error ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`${className} transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}

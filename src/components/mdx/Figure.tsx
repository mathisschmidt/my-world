import React from 'react';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-slate-700 shadow-lg shadow-black/30 bg-slate-800/40">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-slate-400 text-center">{caption}</figcaption>
      )}
    </figure>
  );
}

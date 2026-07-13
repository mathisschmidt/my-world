import React from 'react';

interface Spec {
  label: string;
  value: string;
}

export default function SpecGrid({ items }: { items: Spec[] }) {
  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3"
        >
          <div className="text-xs uppercase tracking-wide text-cyan-400 font-medium mb-1">
            {item.label}
          </div>
          <div className="text-slate-100 text-sm leading-snug">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

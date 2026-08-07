import React from 'react';

type Variant = 'info' | 'tip' | 'warning';

const STYLES: Record<Variant, { border: string; bg: string; accent: string; label: string }> = {
  info: {
    border: 'border-cyan-500/30',
    bg: 'from-cyan-500/10 to-blue-500/5',
    accent: 'text-cyan-400',
    label: 'Note',
  },
  tip: {
    border: 'border-emerald-500/30',
    bg: 'from-emerald-500/10 to-cyan-500/5',
    accent: 'text-emerald-400',
    label: 'Why it matters',
  },
  warning: {
    border: 'border-amber-500/30',
    bg: 'from-amber-500/10 to-orange-500/5',
    accent: 'text-amber-400',
    label: 'Limitation',
  },
};

interface CalloutProps {
  variant?: Variant;
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ variant = 'info', title, children }: CalloutProps) {
  const s = STYLES[variant];
  return (
    <div className={`my-6 rounded-xl border ${s.border} bg-gradient-to-br ${s.bg} p-5 flex gap-4`}>
      <svg
        className={`w-5 h-5 shrink-0 mt-0.5 ${s.accent}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
      </svg>
      <div className="min-w-0">
        <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${s.accent}`}>
          {title ?? s.label}
        </div>
        <div className="[&_p]:mb-0 [&_p]:text-slate-200">{children}</div>
      </div>
    </div>
  );
}

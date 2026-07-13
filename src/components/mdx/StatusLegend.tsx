import React from 'react';

const STATUSES = [
  {
    emoji: '⏳',
    label: 'Queued',
    desc: 'Sent, not yet fetched by the box',
    color: 'border-slate-600 bg-slate-700/40',
  },
  {
    emoji: '👁️',
    label: 'Seen',
    desc: 'Box woke and showed the message',
    color: 'border-cyan-500/30 bg-cyan-500/10',
  },
  {
    emoji: '💕',
    label: 'Loved',
    desc: 'Recipient pressed the button to confirm',
    color: 'border-pink-500/30 bg-pink-500/10',
  },
];

export default function StatusLegend() {
  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {STATUSES.map((s) => (
        <div key={s.label} className={`rounded-lg border ${s.color} px-4 py-3`}>
          <div className="text-sm font-semibold text-slate-100 mb-1">
            {s.emoji} {s.label}
          </div>
          <div className="text-xs text-slate-400 leading-snug">{s.desc}</div>
        </div>
      ))}
    </div>
  );
}

import React, { Fragment } from 'react';

const LAYERS = [
  {
    name: 'Vue 3 SPA',
    subtitle: 'Browser',
    detail: 'Login · Lovers · Compose · History',
    color: 'from-blue-500/20 to-blue-500/5 border-blue-500/40 text-blue-300',
  },
  {
    name: 'AdonisJS server',
    subtitle: 'Node.js',
    detail: 'Auth · Boxes · Messages · Lovers API · SQLite',
    color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/40 text-cyan-300',
  },
  {
    name: 'ESP32 firmware',
    subtitle: 'C++ / Arduino',
    detail: 'FreeRTOS dual-task · State machine',
    color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/40 text-emerald-300',
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="my-8 flex flex-col items-center">
      {LAYERS.map((layer, i) => (
        <Fragment key={layer.name}>
          <div
            className={`w-full max-w-md rounded-xl border bg-gradient-to-br ${layer.color} px-5 py-4 text-center`}
          >
            <div className="font-semibold">{layer.name}</div>
            <div className="text-xs opacity-70 mb-1">{layer.subtitle}</div>
            <div className="text-sm text-slate-300">{layer.detail}</div>
          </div>
          {i < LAYERS.length - 1 && (
            <div className="flex flex-col items-center py-1 text-slate-500">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path
                  d="M8 0v18M2 14l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[11px] uppercase tracking-wide">HTTP / JSON</span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

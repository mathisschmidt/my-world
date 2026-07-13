import React from 'react';

export default function CoreDiagram() {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
      <div className="rounded-xl border border-cyan-500/30 bg-slate-800/50 p-5">
        <div className="text-cyan-300 font-semibold mb-1">Core 0 — PRO</div>
        <div className="text-sm text-slate-200 font-medium mb-2">mainTask (state machine)</div>
        <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
          <li>WiFi connect</li>
          <li>HTTP requests (up to 8s)</li>
          <li>Display rendering</li>
          <li>Reads button events from queue</li>
        </ul>
      </div>

      <div className="flex md:flex-col items-center justify-center gap-2 text-slate-500">
        <svg width="40" height="16" className="md:hidden" viewBox="0 0 40 16" fill="none">
          <path
            d="M0 8h34M28 2l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg width="16" height="40" className="hidden md:block" viewBox="0 0 16 40" fill="none">
          <path
            d="M8 0v34M2 28l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] uppercase tracking-wide text-center leading-tight">
          g_buttonEvents
          <br />
          queue (8)
        </span>
      </div>

      <div className="rounded-xl border border-emerald-500/30 bg-slate-800/50 p-5">
        <div className="text-emerald-300 font-semibold mb-1">Core 1 — APP</div>
        <div className="text-sm text-slate-200 font-medium mb-2">buttonTask (button monitor)</div>
        <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
          <li>Polls GPIO 15 every 10ms</li>
          <li>Sends BTN_SHORT_PRESS on release</li>
          <li>Sends BTN_LONG_HOLD after 5s</li>
        </ul>
      </div>
    </div>
  );
}

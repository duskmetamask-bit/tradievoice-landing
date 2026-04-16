"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-dark border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">TradieVoice</span>
        </div>
        <a
          href="#waitlist"
          className="bg-orange hover:bg-orange-dark text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}

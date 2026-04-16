export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-7 h-7 bg-orange rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
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
          <span className="text-white font-semibold">TradieVoice</span>
        </div>
        <p className="text-white/40 text-sm">Built for Australian tradies 🇦🇺</p>
        <p className="text-white/30 text-xs mt-2">© {new Date().getFullYear()} TradieVoice. All rights reserved.</p>
      </div>
    </footer>
  );
}

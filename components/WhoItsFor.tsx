const trades = [
  {
    name: "HVAC",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3m-6.125 2h6.25M12 3v1m6 11h1a2 2 0 002-2V5a2 2 0 00-2-2h-1a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Electricians",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Plumbers",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "Builders",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
        Who It&apos;s <span className="text-orange">For</span>
      </h2>
      <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
        Built for tradies who are sick of missing calls and losing jobs to voicemail.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trades.map((trade) => (
          <div
            key={trade.name}
            className="bg-navy-light rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-4 text-center hover:border-orange/50 transition-colors"
          >
            <div className="text-orange">{trade.icon}</div>
            <span className="text-white font-semibold">{trade.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section className="bg-navy-light py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Simple <span className="text-orange">Pricing</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Early Bird */}
          <div className="bg-navy rounded-2xl p-8 border-2 border-orange relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white text-sm font-bold px-4 py-1 rounded-full">
              EARLY BIRD
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Early Bird</h3>
            <p className="text-white/60 mb-6">Limited spots available</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$149</span>
              <span className="text-white/60 text-lg">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "AI receptionist — unlimited calls",
                "24/7 availability",
                "Calendar integration",
                "SMS notifications",
                "Priority support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#waitlist" className="block text-center bg-orange hover:bg-orange-dark text-white font-bold py-3 rounded-xl transition-colors">
              Get Early Access
            </a>
          </div>

          {/* Normal */}
          <div className="bg-navy rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-2">Normal</h3>
            <p className="text-white/60 mb-6">Launch pricing</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$249</span>
              <span className="text-white/60 text-lg">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "AI receptionist — unlimited calls",
                "24/7 availability",
                "Calendar integration",
                "SMS notifications",
                "Standard support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-white/40 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#waitlist" className="block text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl transition-colors border border-white/20">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

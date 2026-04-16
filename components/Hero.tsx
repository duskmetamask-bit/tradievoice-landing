export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span className="text-sm text-white/80">127 tradies already signed up</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Never lose a job to
        <br />
        <span className="text-orange">voicemail again.</span>
      </h1>

      <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
        TradieVoice is your AI receptionist that answers every call, 24/7. Itqualifies the job and books them straight to your calendar — no missed jobs, no call backs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#waitlist"
          className="bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          Get Early Access
        </a>
        <a
          href="#how-it-works"
          className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-white/20"
        >
          See How It Works
        </a>
      </div>
    </section>
  );
}

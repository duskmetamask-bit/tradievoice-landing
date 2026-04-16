export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "AI Answers 24/7",
      desc: "When a customer calls, TradieVoice picks up instantly — day or night, weekends included.",
    },
    {
      num: "2",
      title: "Qualifies the Job",
      desc: "It asks the right questions: what trade, when needed, job size, contact details.",
    },
    {
      num: "3",
      title: "Books to Calendar",
      desc: "Qualified jobs get slotted straight into your calendar. You wake up to booked jobs.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-navy-light py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          How It <span className="text-orange">Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-navy rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="w-14 h-14 bg-orange rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

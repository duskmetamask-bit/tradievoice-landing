"use client";

import { useState } from "react";

const TRADES = [
  "HVAC",
  "Electrical",
  "Plumbing",
  "Building / Construction",
  "Carpentry",
  "Painting",
  "Roofing",
  "Landscaping",
  "Air Conditioning",
  "Gas Fitting",
  "Bricklaying",
  "Other",
];

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    trade: "",
    businessName: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // Client-side validation
    if (!form.name || !form.email || !form.trade || !form.phone) {
      setStatus("error");
      setMessage("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Try again.");
      }

      setStatus("success");
      setMessage("You're in! Check your email for confirmation.");
      setForm({ name: "", email: "", trade: "", businessName: "", phone: "" });
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  };

  return (
    <section id="waitlist" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Join the <span className="text-orange">Waitlist</span>
        </h2>
        <p className="text-white/60 text-center mb-10">
          Grab your spot before we launch. Early bird spots are limited.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-navy-light rounded-2xl p-6 md:p-10 border border-white/10 space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
              Full Name <span className="text-orange">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Mick Jenkins"
              className="w-full bg-navy border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              Email <span className="text-orange">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="mick@jenkinsplumbing.com.au"
              className="w-full bg-navy border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors"
            />
          </div>

          {/* Trade + Phone row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="trade" className="block text-sm font-medium text-white/80 mb-2">
                Trade <span className="text-orange">*</span>
              </label>
              <select
                id="trade"
                name="trade"
                value={form.trade}
                onChange={handleChange}
                required
                className="w-full bg-navy border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors"
              >
                <option value="">Select your trade...</option>
                {TRADES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                Phone <span className="text-orange">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="0412 345 678"
                className="w-full bg-navy border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors"
              />
            </div>
          </div>

          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-white/80 mb-2">
              Business Name <span className="text-white/40">(optional)</span>
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Jenkins Plumbing Co."
              className="w-full bg-navy border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors"
            />
          </div>

          {/* Status message */}
          {message && (
            <div
              className={`rounded-xl px-4 py-3 text-sm ${
                status === "success"
                  ? "bg-green-500/20 border border-green-500/40 text-green-300"
                  : "bg-red-500/20 border border-red-500/40 text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-orange hover:bg-orange-dark disabled:opacity-50 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            {status === "loading" ? "Submitting..." : "Get Early Access →"}
          </button>
        </form>
      </div>
    </section>
  );
}

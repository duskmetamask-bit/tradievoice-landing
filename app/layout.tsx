import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradieVoice — AI Receptionist for Australian Tradies",
  description:
    "Never lose a job to voicemail again. TradieVoice answers your calls 24/7, qualifies the job, and books them straight to your calendar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swapnil Patil — Full Stack Developer",
  description:
    "Senior Software Engineer with 8+ years of experience in React, Next.js, Node.js, TypeScript, and Microfrontend architecture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

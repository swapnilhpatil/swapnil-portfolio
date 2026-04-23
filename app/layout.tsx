import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swapnil Patil — Full Stack Developer",
  description:
    "Senior Software Engineer with 8+ years of experience in React, Next.js, Node.js, TypeScript, and Microfrontend architecture.",
  keywords: ["Swapnil Patil", "Full Stack Developer", "Software Engineer", "React", "Next.js", "Node.js", "TypeScript", "Microfrontends"],
  authors: [{ name: "Swapnil Patil" }],
  creator: "Swapnil Patil",
  metadataBase: new URL("https://swapnil-portfolio-kappa.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swapnil-portfolio-kappa.vercel.app/",
    title: "Swapnil Patil — Full Stack Developer",
    description: "Senior Software Engineer with 8+ years of experience in React, Next.js, Node.js, TypeScript, and Microfrontend architecture.",
    siteName: "Swapnil Patil Portfolio",
    images: [
      {
        url: "", // Add OG image URL here when available
        width: 1200,
        height: 630,
        alt: "Swapnil Patil Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swapnil Patil — Full Stack Developer",
    description: "Senior Software Engineer with 8+ years of experience in React, Next.js, Node.js, TypeScript, and Microfrontend architecture.",
    images: [""], // Add Twitter image URL here when available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Swapnil Patil",
  url: "https://swapnil-portfolio-kappa.vercel.app/",
  jobTitle: "Senior Software Engineer",
  knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "Microfrontend architecture"],
  sameAs: [
    "https://www.linkedin.com/in/swapnilhpatil",
    // Add other social links here
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

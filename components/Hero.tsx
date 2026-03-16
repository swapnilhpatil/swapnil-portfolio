import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 py-20 pb-14">
      {/* Badge */}
      <div className="flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-1.5 w-fit font-mono text-xs text-acc">
        <span className="w-2 h-2 bg-acc rounded-full animate-pulse-dot" />
        Available for opportunities
      </div>

      {/* Name */}
      <h1
        className="font-serif leading-[1.05] text-white tracking-tight"
        style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
      >
        Swapnil
        <br />
        <em className="gradient-text not-italic">Patil.</em>
      </h1>

      {/* Subtitle */}
      <p className="text-slate-400 max-w-xl leading-relaxed font-light text-base">
        Full Stack Engineer crafting scalable web systems with React, Next.js,
        Node.js and modern frontend architecture — Microfrontend specialist,
        problem solver.
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5 text-slate-500 font-mono text-xs">
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#4ade80"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Pune, Maharashtra, India
        </span>
        <span className="flex items-center gap-1.5 text-slate-500 font-mono text-xs">
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#4ade80"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Immediate Joiner
        </span>
      </div>

      {/* CTAs */}
      <div className="flex gap-3 flex-wrap mt-2">
        <Link
          href="https://www.linkedin.com/in/swapnilhpatil"
          target="_blank"
          className="inline-flex items-center gap-2 bg-acc text-c1 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-500 transition-all hover:-translate-y-0.5"
        >
          <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn Profile
        </Link>
        <a
          href="mailto:swapnil@example.com"
          className="inline-flex items-center gap-2 bg-transparent text-slate-200 px-6 py-3 rounded-lg text-sm font-medium border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
        >
          <svg
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Get in Touch
        </a>
      </div>
    </section>
  );
}

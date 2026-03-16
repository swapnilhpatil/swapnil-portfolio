import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex gap-3 flex-wrap mb-5">
      <Link
        href="https://www.linkedin.com/in/swapnilhpatil"
        target="_blank"
        className="flex-1 min-w-[200px] bg-c2 border border-white/[0.07] rounded-2xl p-5 flex items-center gap-3.5 hover:border-green-400/25 hover:-translate-y-0.5 transition-all"
      >
        <div className="w-10 h-10 rounded-xl bg-green-400/[0.08] border border-green-400/15 flex items-center justify-center shrink-0">
          <svg width="18" height="18" fill="#4ade80" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
        <div>
          <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest">LinkedIn</p>
          <p className="text-slate-200 text-sm font-medium mt-0.5">swapnilhpatil</p>
        </div>
      </Link>

      <div className="flex-1 min-w-[200px] bg-c2 border border-white/[0.07] rounded-2xl p-5 flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-green-400/[0.08] border border-green-400/15 flex items-center justify-center shrink-0">
          <svg
            width="18"
            height="18"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest">Location</p>
          <p className="text-slate-200 text-sm font-medium mt-0.5">Pune, Maharashtra</p>
        </div>
      </div>
    </div>
  );
}

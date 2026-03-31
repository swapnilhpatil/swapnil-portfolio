"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Phone, Copy, Check, MapPin } from "lucide-react";

const CONTACT_PHONE = "+91 8177817009";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone: ", err);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap mb-10">
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/swapnilhpatil"
        target="_blank"
        className="flex-1 min-w-[280px] bg-[var(--bg-card)] border border-[var(--border-col)] rounded-2xl p-6 flex items-center justify-between group hover:border-[var(--acc)]/30 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[var(--acc)]/5"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--acc)]/10 border border-[var(--acc)]/20 flex items-center justify-center shrink-0">
            <svg width="20" height="20" fill="var(--acc)" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <div>
            <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest font-bold">LinkedIn</p>
            <p className="text-[var(--txt-primary)] text-sm font-semibold mt-1">swapnilhpatil</p>
          </div>
        </div>
        <div className="text-[var(--acc)] opacity-0 group-hover:opacity-100 transition-opacity">
          ↗
        </div>
      </Link>

      {/* Phone Card with Copy */}
      <div 
        className="flex-1 min-w-[280px] bg-[var(--bg-card)] border border-[var(--border-col)] rounded-2xl p-6 flex items-center justify-between group hover:border-[var(--acc2)]/30 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[var(--acc2)]/5"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--acc2)]/10 border border-[var(--acc2)]/20 flex items-center justify-center shrink-0">
            <Phone size={20} className="text-[var(--acc2)]" />
          </div>
          <div>
            <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest font-bold">Phone</p>
            <p className="text-[var(--txt-primary)] text-sm font-semibold mt-1 tracking-wider">{CONTACT_PHONE}</p>
          </div>
        </div>
        
        <button 
          onClick={copyPhone}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card2)] border border-[var(--border-col)] text-[var(--txt-muted)] hover:text-[var(--acc2)] hover:border-[var(--acc2)]/30 transition-all active:scale-95"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} className="text-[var(--acc)]" />
              <span className="text-[10px] font-mono font-bold text-[var(--acc)]">COPIED!</span>
            </>
          ) : (
            <>
              <Copy size={14} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono font-bold">COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Location */}
      <div className="flex-1 min-w-[280px] bg-[var(--bg-card)] border border-[var(--border-col)] rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 shadow-lg">
        <div className="w-12 h-12 rounded-xl bg-[var(--acc3)]/10 border border-[var(--acc3)]/20 flex items-center justify-center shrink-0">
          <MapPin size={20} className="text-[var(--acc3)]" />
        </div>
        <div>
          <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest font-bold">Location</p>
          <p className="text-[var(--txt-primary)] text-sm font-semibold mt-1">Pune, Maharashtra, India</p>
        </div>
      </div>
    </div>
  );
}

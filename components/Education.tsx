export default function Education() {
  return (
    <div className="bg-c2 border border-white/[0.07] rounded-2xl p-7 mb-10 flex items-start gap-5">
      <div className="w-12 h-12 rounded-xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center text-2xl shrink-0">
        🎓
      </div>
      <div>
        <h3 className="text-white text-base font-semibold">Bachelor of Engineering (BE)</h3>
        <p className="text-slate-400 font-mono text-sm mt-1">
          Electrical, Electronics &amp; Communications Engineering
        </p>
        <p className="text-cyan-300 font-mono text-sm mt-1.5">
          Savitribai Phule Pune University
        </p>
        <p className="text-slate-500 font-mono text-xs mt-1.5">Graduated 2016</p>
      </div>
    </div>
  );
}

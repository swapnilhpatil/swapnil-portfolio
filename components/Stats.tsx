const stats = [
  { num: "6", suffix: "+", label: "Years Exp" },
  { num: "2", suffix: "", label: "Companies" },
  { num: "12", suffix: "+", label: "Technologies" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 my-10">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-c2 border border-white/[0.07] rounded-2xl p-6 text-center hover:border-green-400/20 transition-colors"
        >
          <div className="font-serif text-white leading-none" style={{ fontSize: "clamp(32px,5vw,48px)" }}>
            {s.num}
            <span className="text-acc font-sans" style={{ fontSize: "clamp(16px,2.5vw,22px)" }}>
              {s.suffix}
            </span>
          </div>
          <div className="text-slate-500 font-mono text-xs mt-1.5 uppercase tracking-widest">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

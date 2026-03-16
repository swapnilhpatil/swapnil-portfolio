export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 section-line">
      <span className="text-acc font-mono text-[11px] uppercase tracking-[3px] whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

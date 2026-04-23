export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 mb-6 section-line">
      <span className="text-acc font-mono text-[11px] uppercase tracking-[3px] whitespace-nowrap">
        {children}
      </span>
    </h2>
  );
}

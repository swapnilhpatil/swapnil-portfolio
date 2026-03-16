const groups = [
  {
    label: "Frontend",
    variant: "fe",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Redux", icon: "⚡" },
      { name: "Angular", icon: "🅰" },
      { name: "Ionic", icon: "⬡" },
      { name: "MUI", icon: "🎨" },
      { name: "Microfrontend", icon: "⊞" },
    ],
  },
  {
    label: "Backend & Infrastructure",
    variant: "be",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⬡" },
      { name: "Java", icon: "☕" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Hibernate", icon: "🗄️" },
      { name: "Docker", icon: "🐳" },
    ],
  },
  {
    label: "Tools & Practices",
    variant: "dx",
    skills: [
      { name: "SonarQube", icon: "🔍" },
      { name: "Git", icon: "⎇" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Agile / Scrum", icon: "🔄" },
      { name: "Problem Solving", icon: "💡" },
      { name: "DSA", icon: "🌲" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="mb-10 space-y-5">
      {groups.map((g) => (
        <div key={g.label}>
          <p style={{ fontSize: 12, fontFamily: "'DM Mono',monospace", color: "var(--txt-muted)", marginBottom: 10, letterSpacing: "0.5px" }}>
            {g.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {g.skills.map((s) => (
              <span
                key={s.name}
                className={`spill-${g.variant}`}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 6, fontSize: 13, fontFamily: "'DM Mono',monospace", fontWeight: 500 }}
              >
                <span style={{ fontSize: 12 }}>{s.icon}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

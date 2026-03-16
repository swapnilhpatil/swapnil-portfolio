const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Teksolto Softwares",
    period: "May 2022 – Present",
    duration: "3+ yrs 11 mos",
    current: true,
    description:
      "Leading frontend architecture and development with a focus on scalable microfrontend systems. Driving technical decisions, code quality improvements with SonarQube, and mentoring junior engineers on React, TypeScript, and Node.js best practices.",
  },
  {
    title: "Software Development Engineer",
    company: "Teksolto Softwares",
    period: "Nov 2017 – May 2022",
    duration: "4 yrs 7 mos",
    current: false,
    description:
      "Built and maintained full-stack web and mobile applications using React, Angular, Ionic, Node.js and Java Spring Boot. Delivered end-to-end features from database layer through to polished user interfaces, maintaining a strong focus on performance and user experience.",
  },
];

export default function Experience() {
  return (
    <div className="relative flex flex-col gap-5 mb-10 pl-10">
      {/* vertical line */}
      <div
        className="absolute left-[19px] top-8 bottom-8 w-px"
        style={{
          background: "linear-gradient(to bottom, #4ade80, #22d3ee, transparent)",
        }}
      />

      {experiences.map((exp) => (
        <div
          key={exp.title + exp.period}
          className="relative bg-c2 border border-white/[0.07] rounded-2xl p-7 hover:border-white/15 transition-colors"
        >
          {/* dot */}
          <div
            className={`absolute -left-[29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-acc ${exp.current ? "bg-acc shadow-[0_0_12px_rgba(74,222,128,0.5)]" : "bg-c1"
              }`}
          />

          <div className="flex justify-between items-start gap-3 flex-wrap mb-2">
            <div>
              <h3 className="text-white text-base font-semibold">{exp.title}</h3>
              <p className="text-cyan-300 font-mono text-sm mt-0.5">{exp.company}</p>
              {exp.current && (
                <span className="inline-flex mt-1 bg-green-400/10 text-acc font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-green-400/20">
                  Current role
                </span>
              )}
            </div>
            <div className="text-right">
              <p className="text-slate-500 font-mono text-xs">{exp.period}</p>
              <p
                className={`font-mono text-[11px] mt-0.5 ${exp.current ? "text-acc" : "text-slate-500"
                  }`}
              >
                {exp.duration}
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mt-2">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

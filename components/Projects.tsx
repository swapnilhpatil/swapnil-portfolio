"use client";
import React from 'react';

const projects = [
  {
    id: "01",
    name: "V25 Platform",
    tagline: "Frontend Engineer · Built from scratch",
    role: "Frontend Lead",
    className: "card-v25",
    color: "#7c6af7",
    accent: "dot-fe",
    stacks: [
      {
        label: "Frontend",
        tags: [
          { name: "React.js", type: "fe" },
          { name: "MUI", type: "fe" },
          { name: "React Flow", type: "fe" },
          { name: "AG Grid", type: "fe" }
        ]
      },
      {
        label: "Architecture",
        tags: [
          { name: "Micro Frontends", type: "arch" },
          { name: "Microservices", type: "arch" },
          { name: "RabbitMQ", type: "arch" }
        ]
      },
      {
        label: "Backend / Auth",
        tags: [
          { name: "Java", type: "be" },
          { name: "Spring Boot", type: "be" },
          { name: "Keycloak", type: "be" }
        ]
      }
    ],
    features: [
      {
        label: "Architecture",
        items: [
          "Designed and set up the project using a <strong>Micro Frontend architecture</strong>, enabling independent deployments and team scalability across modules.",
          "Worked within a <strong>Microservices</strong> backend ecosystem integrated via <strong>RabbitMQ</strong> for asynchronous event-driven communication between services."
        ]
      },
      {
        label: "Flow Registry",
        items: [
          "Architected a <strong>visual flow builder</strong> using React Flow — supporting input nodes, multiple configurable process nodes, and output nodes for end-to-end pipeline creation.",
          "Implemented <strong>worker config deployment</strong> for nodes with versioned flow history, enabling rollback and change tracking across releases."
        ]
      },
      {
        label: "Component Library",
        items: [
          "Built a <strong>reusable component library</strong> — standardized data grid (AG Grid React), JSON-driven dynamic forms supporting all input types.",
          "Developed global <strong>Loader and Notification</strong> systems consumed across the platform."
        ]
      },
      {
        label: "Auth & Permissions",
        items: [
          "Integrated <strong>Keycloak</strong> for user authentication and implemented <strong>role-based access control</strong> (RBAC) across platform features."
        ]
      }
    ]
  },
  {
    id: "02",
    name: "SafeSight",
    tagline: "End-to-end feature development",
    url: "https://safesightsafety.com",
    role: "Full Stack · Client Support",
    className: "card-safesight",
    color: "#3ecfb2",
    accent: "dot-green",
    stacks: [
      {
        label: "Frontend",
        tags: [
          { name: "React.js", type: "fe" },
          { name: "Geolocation API", type: "fe" },
          { name: "Image Optimization", type: "fe" },
          { name: "Push Notifications", type: "fe" }
        ]
      },
      {
        label: "Backend",
        tags: [
          { name: "Java", type: "be" },
          { name: "Spring Boot", type: "be" }
        ]
      },
      {
        label: "Performance / Data",
        tags: [
          { name: "Debounce / Throttle", type: "perf" },
          { name: "CSV Import / Export", type: "perf" }
        ]
      }
    ],
    features: [
      {
        label: "Logs & Tasks",
        items: [
          "Built a full <strong>logs and task management system</strong> with optimized image uploads, geolocation tagging, and priority levels.",
          "Implemented a <strong>notification system</strong> with trigger-based user events for real-time updates."
        ]
      },
      {
        label: "Performance & Data",
        items: [
          "Optimized list fetching per date using <strong>debounce and throttle</strong> strategies, reducing redundant API calls significantly.",
          "Enabled <strong>bulk creation via CSV import</strong> for users, logs, and tasks — plus full data export for reporting."
        ]
      },
      {
        label: "Backend",
        items: [
          "Contributed to <strong>Java Spring Boot</strong> services powering the core API layer for logs, tasks, and user management."
        ]
      },
      {
        label: "Client Relations",
        items: [
          "Managed <strong>direct technical support</strong> with clients — translating requirements, resolving issues, and ensuring smooth feature rollout."
        ]
      }
    ]
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-12">
      <div className="section-title text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
        Selected <br />
        <span className="text-acc">Projects</span>
      </div>

      {projects.map((project) => (
        <div 
          key={project.id} 
          className={`project-card relative bg-[#111118] border border-white/[0.07] rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-white/15 hover:-translate-y-1 ${project.className}`}
        >
          {/* Card Accent Top Line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ 
              background: project.id === "01" 
                ? "linear-gradient(90deg, #7c6af7, #b47cf7)" 
                : "linear-gradient(90deg, #3ecfb2, #4ab8ff)" 
            }}
          />
          
          <div className="absolute top-7 right-8 text-7xl font-extrabold opacity-[0.04] pointer-events-none select-none tracking-tighter">
            {project.id}
          </div>

          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div>
              <h3 className={`text-2xl font-bold tracking-tight mb-1 ${project.id === "01" ? "text-[#c4b5fd]" : "text-[#3ecfb2]"}`}>
                {project.name}
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-xs text-slate-500 font-mono tracking-wider">
                  {project.tagline}
                </p>
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-acc border border-acc/20 bg-acc/5 px-2 py-0.5 rounded-full hover:bg-acc/10 transition-colors"
                  >
                    ↗ {project.url.replace('https://', '')}
                  </a>
                )}
              </div>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-500 border border-white/10 px-3 py-1 rounded">
              {project.role}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
              <div className={`w-2 h-2 rounded-full ${project.id === "01" ? "bg-[#7c6af7]" : "bg-[#3ecfb2]"}`} /> Frontend
            </div>
            {project.id === "01" ? (
              <>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#f7a86a]" /> Architecture
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#4ab8ff]" /> Backend / Infra
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#4ab8ff]" /> Backend
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#f7a86a]" /> Performance / Data
                </div>
              </>
            )}
          </div>

          <div className="space-y-6">
            {project.stacks.map((stack, idx) => (
              <div key={idx}>
                <div className="text-[9px] uppercase tracking-[0.2em] text-slate-600 mb-2 opacity-80">
                  {stack.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-[10px] font-mono px-3 py-1 rounded-full border transition-colors ${
                        tag.type === "fe" ? "border-acc/30 text-acc bg-acc/5 hover:bg-acc/10" :
                        tag.type === "arch" ? "border-[#f7a86a]/30 text-[#f7c89a] bg-[#f7a86a]/5 hover:bg-[#f7a86a]/10" :
                        tag.type === "be" ? "border-[#4ab8ff]/30 text-[#90d4ff] bg-[#4ab8ff]/5 hover:bg-[#4ab8ff]/10" :
                        "border-[#f7a86a]/30 text-[#f7c89a] bg-[#f7a86a]/5 hover:bg-[#f7a86a]/10"
                      }`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {project.features.map((feature, fIdx) => (
              <div key={fIdx}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-3 opacity-70">
                  {feature.label}
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li 
                      key={iIdx} 
                      className="text-[12.5px] text-slate-400 leading-relaxed pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-acc before:text-lg before:leading-[1.1]"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
                {fIdx < project.features.length - 1 && <div className="h-px w-full bg-white/[0.05] mt-8" />}
              </div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .project-card {
          font-family: 'DM Mono', monospace;
        }
        .section-title {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </div>
  );
}

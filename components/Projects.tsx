"use client";
import React from 'react';

type TagType = 'fe' | 'be' | 'arch' | 'perf';

interface ProjectTag {
  name: string;
  type: TagType;
}

interface ProjectStack {
  label: string;
  tags: ProjectTag[];
}

interface ProjectFeature {
  label: string;
  items: string[];
}

interface Project {
  id: string;
  name: string;
  tagline: string;
  url?: string;
  githubUrl?: string;
  demoUrl1?: string;
  demoUrl2?: string;
  role: string;
  className: string;
  color: string;
  accent: string;
  type: 'enterprise' | 'client' | 'oss' | 'fullstack';
  stacks: ProjectStack[];
  features: ProjectFeature[];
}

const projects: Project[] = [
  {
    id: "01",
    name: "V25 Platform",
    tagline: "Frontend Engineer · Built from scratch",
    role: "Frontend Lead",
    className: "card-v25",
    color: "#7c6af7",
    accent: "dot-fe",
    type: "enterprise",
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
    type: "client",
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
  },
  {
    id: "03",
    name: "loader-overlay",
    tagline: "A lightweight, customizable React loader overlay plugin with full-page & container support",
    url: "https://www.npmjs.com/package/loader-overlay",
    githubUrl: "https://github.com/swapnilhpatil/loader-overlay-plugin",
    demoUrl1: "https://loader-overlay-plugin.vercel.app/",
    demoUrl2: "https://demo-loader-overlay.vercel.app/",
    role: "Open Source · NPM",
    className: "card-loader",
    color: "#ff6b6b",
    accent: "dot-pink",
    type: "oss",
    stacks: [
      {
        label: "Core",
        tags: [
          { name: "React.js", type: "fe" },
          { name: "TypeScript", type: "fe" },
          { name: "CSS-in-JS", type: "fe" }
        ]
      },
      {
        label: "Build / Publish",
        tags: [
          { name: "Rollup / Vite", type: "arch" },
          { name: "NPM Registry", type: "be" },
          { name: "Vercel", type: "arch" }
        ]
      },
      {
        label: "Developer Experience",
        tags: [
          { name: "Prop-based API", type: "perf" },
          { name: "Custom Spinners", type: "perf" },
          { name: "Context / Hook Support", type: "perf" }
        ]
      }
    ],
    features: [
      {
        label: "NPM Install",
        items: [
          "<code class='bg-black/40 px-3 py-1 rounded text-acc font-mono text-xs'>$ npm install loader-overlay</code>"
        ]
      },
      {
        label: "Package Features",
        items: [
          "Built and published <strong>loader-overlay</strong> as a standalone React NPM package — a flexible loading overlay with full-page and container-scoped modes.",
          "Supports <strong>custom spinners</strong>, configurable overlay colors, opacity, fade transitions, and message text via a clean prop-based API.",
          "Designed for easy integration — wrap any component or the entire app and toggle with a single <strong>active</strong> prop."
        ]
      },
      {
        label: "Developer Experience",
        items: [
          "Provides <strong>Context and Hook support</strong> for triggering the loader globally from anywhere in the component tree without prop drilling.",
          "Shipped with <strong>two live demos</strong> — a plugin playground and an integration usage example — both deployed on Vercel for instant preview.",
          "Maintained full <strong>TypeScript types</strong> and a minimal API surface to keep the bundle lightweight and developer-friendly."
        ]
      }
    ]
  },
  {
    id: "04",
    name: "TaskFlow",
    tagline: "A complete full-stack todo management system with real-time sync, user authentication, analytics, and polished responsive UI",
    url: "https://taskflow-lyart-zeta.vercel.app/",
    githubUrl: "https://github.com/swapnilhpatil/taskflow",
    role: "Full Stack · MERN",
    className: "card-taskflow",
    color: "#fcd98a",
    accent: "dot-yellow",
    type: "fullstack",
    stacks: [
      {
        label: "Frontend",
        tags: [
          { name: "React.js", type: "fe" },
          { name: "Ant Design v5", type: "fe" },
          { name: "CSS Variables", type: "fe" },
          { name: "TypeScript", type: "fe" }
        ]
      },
      {
        label: "Backend",
        tags: [
          { name: "Node.js", type: "be" },
          { name: "Express.js", type: "be" },
          { name: "JWT Auth", type: "be" },
          { name: "RESTful API", type: "be" }
        ]
      },
      {
        label: "Database / DevOps",
        tags: [
          { name: "MongoDB", type: "arch" },
          { name: "Bcrypt", type: "arch" },
          { name: "Vercel", type: "arch" },
          { name: "PDF Export", type: "arch" }
        ]
      }
    ],
    features: [
      {
        label: "Core Features",
        items: [
          "Built a <strong>production-ready full-stack application</strong> with secure JWT-based authentication, including encrypted password storage using bcrypt.",
          "Implemented <strong>real-time task synchronization</strong> with persistent state management, instant UI updates, and themed notifications across the app.",
          "Developed <strong>advanced analytics dashboard</strong> with task completion stats, dynamic indicators, and visual status cues for better productivity tracking."
        ]
      },
      {
        label: "Dev Experience & Performance",
        items: [
          "Designed <strong>fully responsive interface</strong> with persistent theme mode using CSS variables, optimized for desktop, tablet, and mobile devices.",
          "Implemented <strong>human-readable date labels</strong> using Day.js (Today, Tomorrow, Overdue) with color-coded visual indicators for task priority.",
          "Shipped with <strong>PDF export functionality</strong>, security hardening (CORS, rate limiting), performance optimizations, and clean MVC architecture for maintainability."
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
        <article 
          key={project.id} 
          className={`project-card relative bg-[#111118] border border-white/[0.07] rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-white/15 hover:-translate-y-1 ${project.className}`}
        >
          {/* Card Accent Top Line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ 
              background: project.id === "01" 
                ? "linear-gradient(90deg, #7c6af7, #b47cf7)" 
                : project.id === "02" 
                ? "linear-gradient(90deg, #3ecfb2, #4ab8ff)"
                : project.id === "03"
                ? "linear-gradient(90deg, #ff6b6b, #f78da7)" 
                : "linear-gradient(90deg, #fcd98a, #f7b733)"
            }}
          />
          
          <div className="absolute top-7 right-8 text-7xl font-extrabold opacity-[0.04] pointer-events-none select-none tracking-tighter">
            {project.id}
          </div>

          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div>
              <h3 className={`text-2xl font-bold tracking-tight mb-1 ${
                project.id === "01" ? "text-[#c4b5fd]" : 
                project.id === "02" ? "text-[#3ecfb2]" : 
                project.id === "03" ? "text-[#ff8a8a]" :
                "text-[#fcd98a]"
              }`}>
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
                    aria-label={`Visit project: ${project.name}`}
                    className="text-[10px] text-acc border border-acc/20 bg-acc/5 px-2 py-0.5 rounded-full hover:bg-acc/10 transition-colors"
                  >
                    ↗ {project.url.replace('https://', '')}
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Github repository: ${project.name}`}
                    className="text-[10px] text-white/60 border border-white/10 bg-white/5 px-2 py-0.5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Github
                  </a>
                )}
                {project.id === "03" && project.demoUrl1 && (
                  <a 
                    href={project.demoUrl1} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#f7a86a] border border-[#f7a86a]/20 bg-[#f7a86a]/5 px-2 py-0.5 rounded-full hover:bg-[#f7a86a]/10 transition-colors"
                  >
                    ↗ Plugin Demo
                  </a>
                )}
                {project.id === "03" && project.demoUrl2 && (
                  <a 
                    href={project.demoUrl2} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#4ab8ff] border border-[#4ab8ff]/20 bg-[#4ab8ff]/5 px-2 py-0.5 rounded-full hover:bg-[#4ab8ff]/10 transition-colors"
                  >
                    ↗ Usage Demo
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
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: project.color }}
              /> Frontend
            </div>
            
            {project.type === 'enterprise' && (
              <>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#f7a86a]" /> Architecture
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#4ab8ff]" /> Backend / Infra
                </div>
              </>
            )}
            
            {project.type === 'client' && (
              <>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#4ab8ff]" /> Backend
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#f7a86a]" /> Performance / Data
                </div>
              </>
            )}
            
            {project.type === 'oss' && (
              <>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#f7a86a]" /> Build / Publish
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#4ab8ff]" /> DX / Performance
                </div>
              </>
            )}
            
            {project.type === 'fullstack' && (
              <>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#4ab8ff]" /> Backend
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-[#f7a86a]" /> Database / DevOps
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
                        tag.type === "be" || tag.type === "perf" ? "border-[#4ab8ff]/30 text-[#90d4ff] bg-[#4ab8ff]/5 hover:bg-[#4ab8ff]/10" :
                        tag.type === "arch" ? "border-[#f7a86a]/30 text-[#f7c89a] bg-[#f7a86a]/5 hover:bg-[#f7a86a]/10" :
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
        </article>
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

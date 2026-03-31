import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SectionLabel from "@/components/SectionLabel";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import BlogCard from "@/components/BlogCard";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--bg-primary)" }}>
      <Background />
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20" style={{ paddingTop: 64 }}>

        <section id="home">
          <Hero />
          <Stats />
        </section>

        <section id="about" style={{ paddingTop: 24 }}>
          <SectionLabel>About Section</SectionLabel>
          <About />
        </section>

        <section id="experience" style={{ paddingTop: 24 }}>
          <SectionLabel>Professional Experience</SectionLabel>
          <Experience />
        </section>

        <section id="projects" style={{ paddingTop: 24 }}>
          <SectionLabel>Selected Projects</SectionLabel>
          <Projects />
        </section>

        <section id="stack" style={{ paddingTop: 24 }}>
          <SectionLabel>Tech Stack</SectionLabel>
          <TechStack />
        </section>

        <section id="skills" style={{ paddingTop: 24 }}>
          <SectionLabel>Core Skills</SectionLabel>
          <Skills />
        </section>

        <section id="education" style={{ paddingTop: 24 }}>
          <SectionLabel>Education & Certificates</SectionLabel>
          <Education />
        </section>

        <section id="blog" style={{ paddingTop: 24 }}>
          <SectionLabel>Articles & Insights</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard 
              title="How to Build Great APIs"
              excerpt="A practical, human-friendly guide to API design and documentation. Learn how to build APIs that developers actually enjoy using."
              date="March 2026"
              image="/images/api-guide-banner.png"
              tags={["API Design", "Best Practices", "DX"]}
              slug="api-guide"
            />
            <BlogCard 
              title="Publishing React Components to npm"
              excerpt="A complete guide to building and publishing a React loader overlay to npm. Learn how to scaffold library projects, configure builds, and ship open source."
              date="March 2026"
              image="/images/publish-npm-banner.png"
              tags={["React", "npm", "Open Source", "TypeScript"]}
              slug="publish-npm-package"
            />
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 24 }}>
          <SectionLabel>Say Hello / Collaborations</SectionLabel>
          <Contact />
        </section>

        <footer
          style={{
            textAlign: "center",
            fontFamily: "'DM Mono',monospace",
            fontSize: 12,
            color: "var(--txt-muted)",
            paddingTop: 32,
            borderTop: "1px solid var(--border-col)",
          }}
        >
          Built with{" "}
          <span style={{ color: "var(--acc)" }}>Next.js + Tailwind CSS</span>
          {" "}· Swapnil Patil © 2025
        </footer>
      </div>
    </main>
  );
}

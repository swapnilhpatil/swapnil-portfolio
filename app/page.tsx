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

        <section id="stack" style={{ paddingTop: 24 }}>
          <SectionLabel>Tech Stack</SectionLabel>
          <TechStack />
        </section>

        <section id="experience" style={{ paddingTop: 24 }}>
          <SectionLabel>Experience</SectionLabel>
          <Experience />
        </section>

        <section id="skills" style={{ paddingTop: 24 }}>
          <SectionLabel>Skills</SectionLabel>
          <Skills />
        </section>

        <section id="education" style={{ paddingTop: 24 }}>
          <SectionLabel>Education</SectionLabel>
          <Education />
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

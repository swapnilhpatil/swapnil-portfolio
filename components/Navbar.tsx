"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Work",         href: "#stack" },
  { label: "Projects",     href: "#experience" },
  { label: "Blog",         href: "#skills" },
  { label: "Certificates", href: "#education" },
  { label: "Contact",      href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? "var(--nav-bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border-col)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.3s",
        }}
      >
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "0 24px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* ── LOGO: SP only ── */}
          <Link href="#home" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg, var(--acc), var(--acc2))",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(74,222,128,0.25)",
            }}>
              <span style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#0a0a0f", fontWeight: 700, fontSize: 16,
                fontStyle: "italic", letterSpacing: "-0.5px",
              }}>SP</span>
            </div>
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 0 }}>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-link${activeSection === l.href.slice(1) ? " active" : ""}`}
                onClick={() => setActiveSection(l.href.slice(1))}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* ── RIGHT: theme toggle + hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => setIsDark(!isDark)}
              className="icon-btn"
              aria-label="Toggle theme"
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="icon-btn md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid var(--border-col)",
              padding: "8px 16px 20px",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                style={{ display: "flex", width: "100%", padding: "11px 14px", fontSize: 14 }}
                onClick={() => { setActiveSection(l.href.slice(1)); closeMenu(); }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

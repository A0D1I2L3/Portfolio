"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function AppShell() {
  const [activeSection, setActiveSection] = useState<
    "home" | "projects" | "skills" | "contact"
  >("home");

  useEffect(() => {
    const sections: Array<"home" | "projects" | "skills" | "contact"> = [
      "home",
      "projects",
      "skills",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WhatIDemo from "./components/WhatIDemo";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatIDemo />
        <Contact />
      </main>
    </>
  );
}

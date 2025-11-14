"use client";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Services />
      <Contact />
    </Layout>
  );
}

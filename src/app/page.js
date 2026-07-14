import Hero from "@/components/Hero";
import SkillMarquee from "@/components/SkillMarquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillMarquee />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
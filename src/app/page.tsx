import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Learn from '@/components/Learn';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Learn />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

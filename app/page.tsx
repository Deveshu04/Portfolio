import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import Starfield from '@/components/starfield';
import About from '@/components/about';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Starfield />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

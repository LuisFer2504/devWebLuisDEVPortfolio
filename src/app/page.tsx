import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/hero/Hero';
import Stack from '@/components/stack/Stack';
import Projects from '@/components/projects/Projects';
import Experience from '@/components/experience/Experience';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
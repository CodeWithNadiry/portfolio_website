import Navbar from '@/components/Navbar';
import classes from './page.module.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

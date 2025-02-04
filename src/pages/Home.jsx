
import Hero from '../components/Hero';
import NavBar from './../components/NavBar';
import About from './../components/About';
import Skills from '../components/Skills';
import Projects from './../components/Projects';
import Feats from "./../components/Feats"
import Contact from '../components/Contact';
import { motion ,useScroll } from "motion/react"
import HeroImgs from '../components/UI/HeroImgs';

const Home = () => {
  const { scrollYProgress } = useScroll()
  return (
      <div   className="  ">
                    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 15,
                    originX: 0,
                   
                }}
                className='mb-10 z-50 bg-blue-300 border-b-2 border-black bottom-4'
            />

         <NavBar/>
         <HeroImgs/>
         <Hero/>

         <About />
         <Skills/>
         <Projects/>
         <Feats/>
         <Contact/>
      </div>
  )
}

export default Home
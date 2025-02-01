
import Hero from '../components/Hero';
import NavBar from './../components/NavBar';
import About from './../components/About';
import Skills from '../components/Skills';
import Projects from './../components/Projects';
import Feats from "./../components/Feats"
import Contact from '../components/Contact';

import HeroImgs from '../components/UI/HeroImgs';
const Home = () => {
  return (
      <div className="  ">
         <NavBar/>
         <HeroImgs/>
         <Hero/>

         <About/>
         <Skills/>
         <Projects/>
         <Feats/>
         <Contact/>
      </div>
  )
}

export default Home

import Hero from '../components/Hero';
import NavBar from './../components/NavBar';
import About from './../components/About';
import Skills from '../components/Skills';

const Home = () => {
  return (
      <div className="  ">
         <NavBar/>
         <Hero/>
         <About/>
         <Skills/>
      </div>
  )
}

export default Home
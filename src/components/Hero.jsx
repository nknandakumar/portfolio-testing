import { motion } from 'framer-motion';
import SplitText from './UI/SplitText';
import {MoveRight} from "lucide-react"

const Hero = () => {
  return (
    <section  className="Hero-sec center flex-col py-52 space-y-6 md:px-20 md:pt-24px h-[100vh] sticky top-0 bg-[radial-gradient(circle,#80808070_1px,transparent_1px)] bg-[size:14px_14px]

">
      {/* Animated Presence for h2 */}
      <motion.h2
        className="font-main text-[20px] md:text-[34px] lg:text-[52px] mb-2 font-semibold text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Nanda Kumar M
      </motion.h2>

      {/* Infinite SplitText Animation for h1 */}
      <h1 className="font-main font-bold text-center text-[42px] md:text-[54px] lg:text-[72px] text-black mb leading-[1.1] md:leading-[1.2]">
      <SplitText
          text="Full-stack web Developer"
          className="inline-block"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translate3d(0, 40px, 0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          easing="easeOutCubic"
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          infinite={false} // Enable infinite animation
        />
      </h1>

      {/* Animated Presence for p */}
      <motion.p
        className="font-second font-semibold text-[#151515] text-center text-[18px] tracking-wide text-xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Building websites that connect,
        <br className="sm:block md:hidden" /> engage,{" "}
        <br className="hidden md:block" />
        and deliver value
      </motion.p>

      {/* Animated Presence for button */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center pt-8 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
     <button className="font-main flex items-center font-bold text-white  text-base leading-none px-6 py-2 rounded-3xl bg-[#ff4a23] text-[18px] hover:bg-[#774dff] transition-colors duration-300 group">
      Let's Connect
      <MoveRight className="ml-6 w-5 h-5 transform  -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
    </button>
      </motion.div>
    </section>
  );
};

export default Hero;
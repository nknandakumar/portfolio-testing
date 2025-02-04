import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const image =
  "https://t4.ftcdn.net/jpg/03/00/81/73/360_F_300817340_XgeBeZZdwZVUhPownI7xCrlu78IxsBkF.jpg";

const Projects = () => {
  return (
    <section className="flex flex-col items-center bg-black pb-20 relative z-20 px-6 lg:px-32">
      {/* Section Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="section-name pt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300"
      >
        
        Projects
      </motion.h2>

      {/* Staggered Grid Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 }, // Delay between each card
          },
        }}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10"
      >
      {[...Array(3)].map((_, index) => (
          <motion.div

          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
            key={index}
            className="w-full sticky top-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-2xl p-5 group hover:shadow-2xl transition-shadow duration-300 bg-[radial-gradient(circle,#80808040_1px,transparent_1px)] bg-[size:14px_14px]"
          >
            {/* Image Section */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={image}
                className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                alt="Project Thumbnail"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-main md:text-2xl font-bold text-gray-800 mt-4">
              Agency Landing Page
            </h3>

            {/* Project Description */}
            <p className="mt-2 text-gray-600 font-second text-md">
              A modern and responsive landing page designed for creative agencies. 
            </p>

            {/* Tags */}
            <div className="flex gap-2 mt-3 font-second text-sm">
              <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">React</span>
              <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">Tailwind</span>
            </div>

            {/* Buttons */}
            <div className="flex font-main gap-3 mt-4">
              <button className="flex items-center px-4 py-2 text-sm md:text-base rounded-xl bg-[#ff4a23] font-bold hover:bg-[#774dff] transition duration-300">
                GitHub
                <FontAwesomeIcon
                  className="ml-2 font-thin transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  icon={faArrowRight}
                />
              </button>
              <button className="flex items-center px-4 py-2 text-sm md:text-base text-white font-medium rounded-xl bg-gray-900 hover:bg-gray-800 transition">
                View
                <FontAwesomeIcon
                  className="ml-2 font-thin transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  icon={faArrowRight}
                />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

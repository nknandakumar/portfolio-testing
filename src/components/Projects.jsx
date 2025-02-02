const image =
  "https://t4.ftcdn.net/jpg/03/00/81/73/360_F_300817340_XgeBeZZdwZVUhPownI7xCrlu78IxsBkF.jpg";

const Projects = () => {
  return (
    <section className="flex flex-col items-center bg-black pb-20 relative z-20 px-6 lg:px-32">
      <h2 className="section-name pt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300">Projects</h2>

      {/* Responsive Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-2xl p-5 group hover:shadow-2xl transition-shadow duration-300"
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

            {/* Tags */}
            <div className="flex gap-2 mt-3 font-second text-sm">
              <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">React</span>
              <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">Tailwind</span>
            </div>

            {/* Buttons */}
            <div className="flex font-main gap-3 mt-4">
              <button className="px-4 py-2 text-sm md:text-base rounded-lg bg-[#ff4a23] font-bold hover:bg-[#774dff] transition duration-300">
                GitHub
              </button>
              <button className="px-4 py-2 text-sm md:text-base text-white font-medium rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
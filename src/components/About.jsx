const About = () => {
  return (
    <section className="bg-[#121212] text-gray-300 py-20 md:py-32 w-full px-6 md:px-12 min-h-screen flex items-center relative z-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-main font-semibold text-[40px] md:text-[60px] text-white">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ">
          {/* Image Container */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" 
                alt="Nanda Kumar M" 
                className="w-full h-[350px] md:h-[400px] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-6 md:pl-4">
            <p className="font-second text-lg leading-relaxed text-gray-400">
              Hi, I'm <span className="font-semibold text-white">Nanda Kumar M</span>, 
              a full-stack web developer based in India. I specialize in crafting 
              efficient and engaging web applications that deliver value.
            </p>
            <p className="font-second text-lg leading-relaxed text-gray-400">
              Passionate about tech, I thrive on creating, developing, and adapting 
              to challenges with a tech-savvy mindset and a drive for innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

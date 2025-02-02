const image =
	"https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png";

const Feats = () => {
	return (
		<section className="center flex flex-col items-center bg-[#ff4a23] pb-20 relative z-20 px-6 lg:px-32 bg-[linear-gradient(to_right,rgba(211,211,211,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(211,211,211,0.3)_1px,transparent_1px)] bg-[size:60px_60px]">
			<h2 className="section-name pt-20 text-white text-3xl font-bold">
				Feats & Achievements
			</h2>

			{/* Flex Container for Cards */}
			<div className="flex flex-wrap justify-center gap-10 mt-10 w-full max-w-6xl">
				{/* Card 1 - Hackathon Achievement */}
				<div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 h-[420px] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 group">
					{/* Image Section */}
					<div className="overflow-hidden rounded-xl">
						<img
							src={image}
							className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
							alt="Hackathon Achievement"
						/>
					</div>

					{/* Content */}
					<div className="mt-4 flex flex-col gap-3">
						<h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
							🏆{" "}
							<span>
								Secured{" "}
								<span className="text-[#ff4a23] font-bold">3rd Place</span> in
								Hackathon
							</span>
						</h3>
						<p className="text-gray-600 text-sm md:text-base leading-relaxed">
							Built{" "}
							<span className="font-semibold">
								Quizzes, Clones, and Projects
							</span>{" "}
							within a limited timeframe.
						</p>
						<p className="text-gray-700 font-medium text-sm">
							<span className="font-semibold">Event:</span> Chaturya
						</p>
						<p className="text-gray-700 font-medium text-sm">
							<span className="font-semibold">College:</span> MS Ramaiah
							College, Bengaluru
						</p>
					</div>
				</div>
				{/* Card 2 - Full Stack Bootcamp */}
        <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 h-[420px] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 group">
  {/* Image Section */}
  <div className="overflow-hidden rounded-xl relative">
    <img
      src="https://markitup.in/assets/images/work/vauldcollab.png"
      className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
      alt="Full Stack Bootcamp"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>

  {/* Content */}
  <div className="mt-4 flex flex-col gap-3">
    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
      💻 Completed Full Stack Web Development Bootcamp
    </h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      It is my foundation for development.
    </p>
    <p className="text-gray-700 font-medium text-sm">
      <span className="font-semibold">Skills Gained:</span> React, Node.js, Express,
      PostgreSQL.
    </p>
  </div>
</div>
			</div>
		</section>
	);
};

export default Feats;

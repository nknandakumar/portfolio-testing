import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const image =
	"https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png";

const Feats = () => {
	return (
		<section className="center flex flex-col items-center  bg-[#ff4a23] pb-24 relative z-20 px-6 lg:px-32 bg-[linear-gradient(to_right,rgba(211,211,211,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(211,211,211,0.3)_1px,transparent_1px)] bg-[size:60px_60px]">
			<motion.h2
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1, ease: "easeOut" }}
				className="section-name pt-20 text-white text-3xl font-bold"
			>
				Feats & Achievements
			</motion.h2>

			{/* Swiper Container */}
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
					el: ".swiper-pagination", // Use a custom class for pagination
				}}
				modules={[Pagination]}
				className="mySwiper w-full max-w-6xl mt-2"
				breakpoints={{
					// when window width is <= 480px
					480: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					// when window width is <= 768px
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// when window width is > 768px
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
			>
				{/* Card 1 - Hackathon Achievement */}
				<SwiperSlide>
					<div
						data-aos="fade-up"
						className="w-full cursor-grab bg-white shadow-lg rounded-2xl p-6 h-[420px] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 group dot-bg"
					>
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
							<h3 className="text-lg font-main md:text-xl font-semibold text-gray-800 flex items-center gap-2">
								🏆{" "}
								<span>
									Secured{" "}
									<span className="text-[#ff4a23] font-bold">3rd Place</span> in
									Hackathon
								</span>
							</h3>
							<p className="text-gray-600 font-second text-sm md:text-base leading-relaxed">
								Built{" "}
								<span className="font-semibold">
									Quizzes, Clones, and Projects
								</span>{" "}
								within a limited timeframe.
							</p>
							<p className="text-gray-700 font-second font-medium text-sm">
								<span className="font-semibold">Event:</span> Chaturya
							</p>
							<p className="text-gray-700 font-second font-medium text-sm">
								<span className="font-semibold">College:</span> MS Ramaiah
								College, Bengaluru
							</p>
						</div>
					</div>
				</SwiperSlide>

				{/* Card 2 - Full Stack Bootcamp */}
				<SwiperSlide>
					<div
						data-aos="fade-up"
						data-aos-delay="100"
						className="w-full cursor-grab bg-white shadow-lg rounded-2xl p-6 h-[420px] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 group dot-bg"
					>
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
						<div className="mt-2 flex flex-col gap-3">
							<h3 className="text-lg font-main md:text-xl font-semibold text-gray-800">
								💻 Completed Full Stack Web Development Bootcamp
							</h3>
							<p className="text-gray-600 font-second text-sm md:text-base leading-relaxed">
								It is my foundation for development.
							</p>
							<p className="text-gray-700 font-second font-medium text-sm">
								<span className="font-semibold">Skills Gained:</span> React,
								Node.js, Express, PostgreSQL.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

			{/* Custom Pagination Container */}
			<div className="swiper-pagination mt-6	"></div>
		</section>
	);
};

export default Feats;

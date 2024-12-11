import { useEffect, useRef } from "react";
import banglaBanner from "../../../assets/banner.png";

const Banner = () => {
	const typedRef = useRef(null);

	return (
		<div
			className="text-white"
			style={{
				backgroundImage: `url(${banglaBanner})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				paddingTop: '100px' // Fixes overlap with navbar
			}}
		>
			<div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="text-[#2eb88c] font-bold text-4xl p-2">AI for People</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					Bangla AI Research, Technology and Application (BARTA)
				</h1>
				<p className="md:text-2xl text-xl font-bold text-white">
					Hello! We are a group of enthusiastic people wanting to solve the many
					problems around Bangla Natural Language Processing. We extensively
					focus on social inclusion and accessibility for universalism of human
					values.
				</p>

				{/* Updated Button Styling */}
				<div className="mt-8 flex justify-center gap-4">
					<button className="bg-[#2eb88c] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
						Latest News
					</button>
					<button className="bg-[#2eb88c] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
						Brief Description
					</button>
				</div>

				{/* Updated Section Styling */}
				<div className="mt-16 text-left">
					<h2 className="text-4xl font-bold text-white">Latest News</h2>
					<p className="mt-4 text-lg text-white">
						Stay updated with our recent research activities, conferences, and publications.
					</p>
				</div>

				<div className="mt-16 text-left">
					<h2 className="text-4xl font-bold text-white">Brief Description</h2>
					<p className="mt-4 text-lg text-white">
						BARTA is a research group focused on solving complex challenges in Bangla Natural Language Processing, applying the latest AI technologies for social inclusion and accessibility.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;

import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

export default function Achievement() {
	return (
		<div className="min-h-80vh flex justify-center items-center ">
			<div className="w-full">
				<h1 className="font-bold text-4xl mb-10">Achievement</h1>
				<div className="flex sm:flex-row flex-col gap-5 w-full justify-between items-center">
					<div className=" w-full sm:w-1/2">
						<Image
							src="/achievement/youtube.jpeg"
							alt="peppermint cambodia"
							width={100}
							height={100}
							className="rounded-full"
						/>
						<h1 className="text-xl font-bold mb-5">
							DailyWebCoding
						</h1>
						<p className=" text-gray-400">
							Daily web coding is focusing on doing stuff relate
							to latest web technologies. We are excited to help
							you and share with you with all the knowledge we
							have had about web development.
						</p>
					</div>
					<div className="flex items-center gap-10 w-full sm:w-1/2 sm:justify-end ">
						<div className="flex gap-2 items-center">
							<CountUp
								end={800083}
								className="text-2xl sm:text-4xl"
							/>
							<h1>Viewed</h1>
						</div>
						<div className="flex gap-2 items-center">
							<CountUp
								end={5630}
								className="text-2xl sm:text-4xl"
							/>
							<h1>Subscribed</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

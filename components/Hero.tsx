import React from "react";

export default function Hero() {
	return (
		<div className=" min-h-screen max-w-7xl mx-auto flex justify-center items-center">
			<div className="w-full">
				<div className="flex flex-col gap-5">
					<h1 className="text-sky-500">Sokheng</h1>
					<h1 className="font-bold text-3xl sm:text-4xl animate-left-right-3s">
						FullStack Developer / Youtuber from Cambodia.
					</h1>
					<h1 className="text-3xl sm:text-4xl font-bold animate-left-right-2s">
						Teaching and Sharing at DailyWebCoding.
					</h1>
				</div>
			</div>
		</div>
	);
}

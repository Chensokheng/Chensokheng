import React from "react";

export default function Footer() {
	return (
		<div className="h-56  flex justify-center items-end pb-5 ">
			<div className="flex flex-col sm:flex-row items-center justify-between w-full">
				<div className="flex gap-4">
					<a
						href="https://github.com/Chensokheng"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
					<a
						href="https://www.youtube.com/c/DailyWebCoding"
						target="_blank"
						rel="noreferrer"
					>
						Youtube
					</a>
				</div>
				<h1>Code with love and passion by Chensokheng</h1>
				<h1>&copy; Chensokheng 2022-present</h1>
			</div>
		</div>
	);
}

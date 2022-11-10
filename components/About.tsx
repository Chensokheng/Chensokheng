import React from "react";
import Image from "next/image";
export default function About() {
	return (
		<div className="min-h-80vh flex justify-center items-center">
			<div className="w-full flex flex-col sm:flex-row justify-between sm:items-center">
				<div>
					<Image
						src="/profile-image.png"
						alt="chensokheng"
						width={300}
						height={300}
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<div className="sm:w-1/2">
					<h1 className="mb-5 font-bold text-4xl">About me</h1>
					<p className="text-xl text-gray-300">
						I'm a 23 year old fullstack developer based in Cambodia
						and currently working @Peppermint Cambodia. I have a
						strong passion for Web Development and teaching/sharing
						things that impact people's day to day lives and make
						them better. I am interested in Typescript, Next.js,
						React,Node.js, Python. In my free time, you can see me
						hiking, gaming, climbing, exploring, and talking to new
						people.
					</p>
					<p className="text-xl text-gray-300 mt-5">
						Currently I am available for freelance project or
						tutoring about web development
						<a
							href="mailto:sokhengchen@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="text-blue-500 underline"
						>
							{" send me an email."}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

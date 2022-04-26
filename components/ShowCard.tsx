import React from "react";
import Image from "next/image";
import { ShowCardProp } from "../type";

export default function ShowCaseCard({ showCase }: ShowCardProp) {
	return (
		<a href={showCase.link} target="_blank" rel="noreferrer">
			<div className="w-80 border-2 dark:border-0 border-black dark:bg-secondary rounded-md">
				<div className="w-80 h-40 relative rounded-t-md">
					<Image
						src={showCase.imageUrl}
						alt="thumbnail"
						layout="fill"
						className="rounded-t-md hover:scale-105 transition"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<div className="p-5">
					<h1 className="dark:text-gray-300 text-gray-700 text-md">
						{showCase.title}
					</h1>
					<div className="mt-5 dark:text-gray-400 text-gray-600 grid grid-cols-4 gap-5 ">
						{showCase.techStack.map((Icon: any, index: number) => {
							return <Icon className="text-xl" key={index} />;
						})}
					</div>
				</div>
			</div>
		</a>
	);
}

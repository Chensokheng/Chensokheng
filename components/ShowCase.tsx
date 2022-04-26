import React from "react";
import { DiOpensource } from "react-icons/di";
import {
	SiTsnode,
	SiExpress,
	SiJest,
	SiDocker,
	SiSequelize,
	SiPostgresql,
	SiReact,
	SiNetlify,
	SiMaterialui,
	SiTailwindcss,
	SiChartdotjs,
	SiNextdotjs,
	SiVercel,
	SiPwa,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import Image from "next/image";
import ShowCaseCard from "./ShowCard";

export default function ShowCase() {
	const listOfShowCases = [
		{
			imageUrl: "/showcase/rest-api.jpeg",
			title: "Rest api with Express & Typescript",
			link: "https://github.com/Chensokheng/rest-api",
			techStack: [
				SiTsnode,
				SiJest,
				SiDocker,
				SiExpress,
				SiSequelize,
				SiPostgresql,
			],
		},
		{
			imageUrl: "/showcase/covid-tracker.jpeg",
			title: "Build covid-19 tracker UI with React and Tailwind and Chart.js.",
			techStack: [SiReact, SiNetlify, SiTailwindcss, SiChartdotjs],
			link: "https://github.com/Chensokheng/covid-19-tracker-ui",
		},
		{
			imageUrl: "/showcase/meme.jpeg",
			title:
				"Build meme  project with Next.js and tailwind ( beginner project)",
			techStack: [SiNextdotjs, SiVercel, SiTailwindcss, AiFillApi],
			link: "https://memesmash.vercel.app/",
		},
		{
			imageUrl: "/showcase/trello.png",
			title: "Trello Basic UI clone with React and Material UI.",
			techStack: [SiReact, SiNetlify, SiMaterialui],
			link: "https://dailytrello.netlify.app/",
		},
	];
	return (
		<div className="mt-20">
			<div className="flex items-center gap-2 mb-3">
				<h1 className=" text-2xl font-bold">Showcase</h1>
				<DiOpensource className="text-white text-4xl" /> 
			</div>
			<p className="dark:text-gray-300 text-gray-700 mt-10">
				All of these are come from the project for my youtube video.
			</p>

			<div className="mt-10 grid grid-cols-1 gap-20 sm:grid-cols-2">
				{listOfShowCases.map((showCase, index) => {
					return <ShowCaseCard showCase={showCase} key={index} />;
				})}
			</div>
		</div>
	);
}

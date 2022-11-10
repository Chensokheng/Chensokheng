import React from "react";
import {
	SiDocker,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export default function Skills() {
	const skills = [
		{
			Icon: SiDocker,
		},
		{
			Icon: SiPostgresql,
		},
		{
			Icon: SiJavascript,
		},
		{
			Icon: SiPython,
		},
		{
			text: "React.js",
			Icon: SiReact,
		},
		{
			text: "",
			Icon: SiNodedotjs,
		},
		{
			text: "Next.js",
			Icon: SiNextdotjs,
		},
		{
			text: "",
			Icon: SiHtml5,
			color: "text-yellow-500",
		},
		{
			text: "Tailwindcss",
			Icon: SiTailwindcss,
		},
		{
			text: "",
			Icon: SiTypescript,
			color: "text-yellow-500",
		},
		{
			text: "Supabase",
			Icon: SiSupabase,
		},
		{
			Icon: SiDocker,
		},
		{
			Icon: SiPostgresql,
		},
		{
			Icon: SiJavascript,
		},
		{
			Icon: SiPython,
		},
		{
			text: "React.js",
			Icon: SiReact,
		},
		{
			text: "",
			Icon: SiNodedotjs,
		},
		{
			text: "Next.js",
			Icon: SiNextdotjs,
		},
		{
			text: "",
			Icon: SiHtml5,
			color: "text-yellow-500",
		},
		{
			text: "Tailwindcss",
			Icon: SiTailwindcss,
		},
		{
			text: "",
			Icon: SiTypescript,
			color: "text-yellow-500",
		},
		{
			text: "Supabase",
			Icon: SiSupabase,
		},
	];
	return (
		<div className="h-96 flex justify-center items-center flex-col">
			<div className="w-full">
				<div className="w-full slider ">
					<div className="flex gap-2  w-full slide-track ">
						{skills.map(({ Icon }, index) => {
							return (
								<div className="slide" key={index}>
									<div className="w-full h-20 flex justify-center items-center cursor-pointer ">
										<Icon className=" w-11 h-11  text-gray-400 hover:scale-125 transition-all hover:text-sky-500" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="w-full slider-2 ">
					<div className="flex gap-2  w-full slide-track-2 ">
						{skills.map(({ Icon }, index) => {
							return (
								<div className="slide" key={index}>
									<div className="w-full h-20 flex justify-center items-center cursor-pointer ">
										<Icon className="w-10 h-10  text-gray-400 hover:scale-125 transition-all hover:text-sky-500" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

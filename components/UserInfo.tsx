import React from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { CgGenderMale } from "react-icons/cg";
import { MdLocationOn, MdSportsEsports, MdSportsSoccer } from "react-icons/md";

export default function UserInfo() {
	const listUserInfos = [
		{
			Icon: MdLocationOn,
			text: "Cambodia",
		},
		{
			Icon: CgGenderMale,
			text: "Male",
		},
		{
			Icon: MdSportsEsports,
			text: "Dota 2",
		},
		{
			Icon: MdSportsSoccer,
			text: "Football, Hiking",
		},
	];

	return (
		<div className="mt-20 mb-20 border-2 border-gray-800 dark:bg-secondary rounded-md p-5 transition">
			<div className="flex items-center gap-5">
				<Image
					src="/profile-image.png"
					alt="chensokheng"
					className="rounded-full"
					width={150}
					height={150}
				/>
				<div className="w-1/2 sm:w-auto">
					<div className="flex items-center gap-2 mb-3">
						<h1 className=" text-lg sm:text-xl tracking-wid font-bold">
							Chensokheng
						</h1>
						<GoVerified className="text-2xl " />
					</div>
					<div>
						<p className="dark:text-gray-400 text-gray-700 text-sm">
							Joined the world 23 years ago.
						</p>
					</div>
				</div>
			</div>
			<p className="mt-5 dark:text-gray-300 text-gray-800  tex-sm tracking-wide break-words">
				Hi there, I am a software developer/youtuber. Passionate with web
				development and like to learn new thing related to coding and sharing it
				to the internet through my youtube.
			</p>
			<div className="mt-5 grid grid-cols-2 gap-10">
				{listUserInfos.map(({ Icon, text }, index) => {
					return (
						<div className="flex  items-center gap-3" key={index}>
							<Icon className="text-3xl text-gray-800 dark:text-gray-100" />
							<h1 className="dark:text-gray-400 text-gray-700">{text}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}

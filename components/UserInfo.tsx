import React from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { CgGenderMale } from "react-icons/cg";
import { MdLocationOn, MdSportsEsports, MdSportsSoccer } from "react-icons/md";

export default function UserInfo() {
	return (
		<div className="mt-20 mb-20 bg-secondary rounded-md p-5">
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
						<h1 className="text-white text-lg sm:text-xl tracking-wid font-bold">
							Chensokheng
						</h1>
						<GoVerified className="text-2xl text-white" />
					</div>
					<div>
						<p className="text-gray-400 text-sm">
							Joined the world 23 years ago.
						</p>
					</div>
				</div>
			</div>
			<p className="mt-5 text-gray-300  tex-sm tracking-wide break-words">
				Hi there, I am a software developer/youtuber. Passionate with web
				development and like to learn new thing related to coding and sharing it
				to the internet through my youtube.
			</p>
			<div className="mt-5 grid grid-cols-2 gap-10">
				<div className="flex text-white items-center gap-3">
					<MdLocationOn className="text-3xl" />
					<h1 className="text-gray-400">Cambodia</h1>
				</div>
				<div className="flex text-white items-center gap-3">
					<CgGenderMale className="text-3xl" />
					<h1 className="text-gray-400">Male</h1>
				</div>
				<div className="flex text-white items-center gap-3">
					<MdSportsEsports className="text-3xl" />
					<h1 className="text-gray-400">Dota 2</h1>
				</div>
				<div className="flex text-white items-center gap-3">
					<MdSportsSoccer className="text-3xl" />
					<h1 className="text-gray-400">Football, Hiking</h1>
				</div>
			</div>
		</div>
	);
}

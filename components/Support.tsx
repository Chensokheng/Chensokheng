import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import { GiClothes } from "react-icons/gi";

export default function Support() {
	return (
		<div className="mt-20">
			<div className="flex items-center gap-2 mb-10">
				<h1 className="text-2xl font-bold">Support</h1>
				<FaHandsHelping className="text-3xl" />
			</div>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 pl-10 dark:border-0 border-2 border-black dark:bg-secondary py-10 rounded-md">
				<a
					href="https://www.patreon.com/dailywebcoding"
					target="_blank"
					rel="noreferrer"
				>
					<div className="flex items-center gap-2">
						<p className="text-lg">Donate to our </p>
						<SiPatreon className="text-xl" />
					</div>
				</a>
				<a
					href="https://daily-store-9.creator-spring.com"
					target="_blank"
					rel="noreferrer"
				>
					<div className="flex items-center gap-2">
						<p className="text-lg">Visit our store</p>
						<GiClothes className="text-2xl" />
					</div>
				</a>
			</div>
		</div>
	);
}

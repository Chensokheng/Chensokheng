import Link from "next/link";
import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { BiSun } from "react-icons/bi";

export default function Navbar() {
	return (
		<nav className="text-white flex justify-between items-center">
			<div className="cursor-pointer">
				<span className="flex items-center gap-2 group">
					<h1 className="font-bold text-xl">My PortFolio </h1>
					<FaCodeBranch className="text-xl text-green-500 group-hover:animate-spin" />
				</span>
			</div>
			<div className="flex items-center gap-2 cursor-pointer group">
				<h1 className="uppercase group-hover:tracking-wide transition-all">
					Light
				</h1>
				<BiSun className="text-xl" />
			</div>
		</nav>
	);
}

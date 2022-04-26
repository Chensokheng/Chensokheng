import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
	const { theme, setTheme } = useTheme();

	return (
		<nav className=" flex justify-between items-center">
			<div className="cursor-pointer">
				<span className="flex items-center gap-2 group">
					<h1 className="font-bold text-xl">My PortFolio </h1>
					<FaCodeBranch className="text-xl text-green-500 group-hover:animate-spin" />
				</span>
			</div>
			<div
				className="flex items-center gap-2 cursor-pointer group"
				onClick={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}
			>
				<h1 className="uppercase group-hover:tracking-wide transition-all">
					{theme === "dark" ? "light" : "dark"}
				</h1>
				{theme === "dark" ? (
					<BiSun className="text-xl" />
				) : (
					<MdDarkMode className="text-xl" />
				)}
			</div>
		</nav>
	);
}

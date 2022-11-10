import React from "react";
import Image from "next/image";

export default function Industry() {
	return (
		<div className="h-96 pt-10 pb-10 sm:p-0 flex flex-col sm:flex-row justify-between items-center">
			<div>
				<h1 className="mb-5 font-bold text-3xl sm:text-4xl">
					Industry Experience
				</h1>
				<p className=" sm:w-1/2 text-gray-400">
					I have 2.5+ years Industry Experience with Peppermint
					Cambodia. Peppermint is a France company that it's mission
					is help create and deliver solutions that generate
					short-term revenue and long-term growth.
				</p>
			</div>
			<div className="flex gap-2 items-center justify-between w-full sm:w-1/2">
				<Image
					src="/showcase/company.jpeg"
					alt="peppermint cambodia"
					width={100}
					height={100}
					className="rounded-full"
				/>
				<div>
					<h1 className="font-bold text-xl">Python Developer</h1>
					<p className="text-sm text-gray-400">
						Peppermint April,2020 - current
					</p>
				</div>
			</div>
		</div>
	);
}

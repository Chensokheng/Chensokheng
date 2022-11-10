import React from "react";
import { DiOpensource } from "react-icons/di";

import Image from "next/image";

export default function ShowCase() {
	return (
		<div className="min-h-80vh">
			<h1 className="mb-14 font-bold text-3xl sm:text-4xl">Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				<div>
					<div className=" aspect-video relative ">
						<Image
							src="/showcase/blog.png"
							alt="blog"
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							className=" rounded-md"
						/>
					</div>
					<h1 className="text-gray-300 mt-3">My Personal blog</h1>
					<p className="text-gray-400">
						a blog website for sharing things I have learnt.
					</p>
				</div>
				<div>
					<div className=" aspect-video relative ">
						<Image
							src="/showcase/portfolio.png"
							alt="blog"
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							className=" rounded-md"
						/>
					</div>
					<h1 className="text-gray-200 mt-3">Portfolio</h1>
					<p className="text-gray-400">
						a website that show my projects and works that I have
						worked on.
					</p>
				</div>
			</div>
		</div>
	);
}

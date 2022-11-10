import React from "react";
import { BiPhone } from "react-icons/bi";
import { MdEmail, MdOutlineContactSupport } from "react-icons/md";
import { SiGithub, SiYoutube } from "react-icons/si";

export default function Contact() {
	const listOfContact = [
		{
			Icon: BiPhone,
			text: "+855963147041",
			link: "tel:+855963147041",
		},
		{
			Icon: MdEmail,
			text: "sokhengchen@gmail.com",
			link: "mailto:sokhengchen@gmail.com",
		},
	];

	return (
		<div className="h-96 flex justify-center items-center">
			<div className="flex flex-col gap-5">
				<h1 className="text-4xl font-bold text-center">Contact</h1>
				<p className="text-center">
					Currently I am available for freelance project or tutoring
					about web development.
				</p>
				<div className="text-center">
					<a
						href="mailto:sokhengchen@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<button className="text-center bg-sky-600 text-white py-2 px-2 rounded-md">
							Send me an email
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

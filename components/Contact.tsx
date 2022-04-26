import React from "react";
import { BiPhone } from "react-icons/bi";
import { MdEmail, MdOutlineContactSupport } from "react-icons/md";
import { SiGithub, SiYoutube } from "react-icons/si";

export default function Contact() {
	const listOfContact = [
		{
			Icon: SiGithub,
			text: "@Chensokheng",
			link: "https://github.com/Chensokheng",
		},
		{
			Icon: BiPhone,
			text: "+85595419150",
			link: "tel:+85595419150",
		},
		{
			Icon: MdEmail,
			text: "sokhengchen@gmail.com",
			link: "mailto:sokhengchen@gmail.com",
		},
		{
			Icon: SiYoutube,
			text: "@Dailywebcoding",
			link: "https://www.youtube.com/c/DailyWebCoding",
		},
	];

	return (
		<div className="mt-20">
			<div className="flex items-center gap-2 mb-10">
				<h1 className="text-white text-2xl font-bold">Contact</h1>
				<MdOutlineContactSupport className="text-white text-3xl" />
			</div>
			<div className="pl-10">
				<div className="grid grid-cols-2 gap-5">
					{listOfContact.map(({ Icon, link, text }, index) => {
						return (
							<a href={link} target="_blank" rel="noreferrer" key={index}>
								<div className="flex items-center gap-3">
									<Icon className="text-white text-2xl" />
									<h1 className="text-gray-300  text-lg">{text}</h1>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

import { IconType } from "react-icons";

export type ShowCardProp = {
	showCase: {
		imageUrl: string;
		title: string;
		techStack: IconType[];
		link: string;
	};
};

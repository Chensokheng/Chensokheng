import React, { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";

interface ProgressBarProps {
	Icon?: IconType;
	text: string;
	value: string;
	width: string;
}

export default function ProgressBar({
	Icon,
	text,
	value,
	width,
}: ProgressBarProps) {
	const [transition, setTransition] = useState(false);

	useEffect(() => {
		setTransition(true);
		//eslint-disable-next-line
	}, []);

	return (
		<div className="mt-5">
			<div
				className="flex justify-between items-center mb-5 "
				style={{
					width: value,
				}}
			>
				<div className="flex items-center justify-center gap-2">
					{Icon && <Icon className="text-4xl hover:animate-spin" />}
					<h1>{text}</h1>
				</div>
				<h1>{value}</h1>
			</div>
			<div className="w-full rounded-full h-2.5 bg-gray-300 dark:bg-secondary transition">
				<div
					className={`bg-blue-900 dark:bg-blue-600 h-2.5 rounded-full duration-1000 transition-all ${
						transition ? width : "w-0"
					}
					}`}
				></div>
			</div>
		</div>
	);
}

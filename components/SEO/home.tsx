import React from "react";
import Head from "next/head";

export default function HomeSeo() {
	const description =
		"Hi there my name is Chensokheng. I am a software developer/youtuber. Passionate with web development and like to learn new thing related to coding and sharing it to the internet through my youtube.";
	return (
		<Head>
			<title>Chen Sokheng</title>
			<meta name="description" content="" />
			<meta
				name="keywords"
				content="Sokheng, Chensokheng, heng, daily web coding, chen, sok"
			/>
			<meta name="author" content="chensokheng" />
			<meta property="og:title" content="chensokheng" />
			<meta property="og:description" content={description} />

			<meta property="og:image" content="/profile-image.png" />
			{/* for twitter */}
			<meta name="twitter:title" content="chensokheng" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content="/profile-image.png" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

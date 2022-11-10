import React from "react";
import type { NextPage } from "next";

import UserInfo from "../components/UserInfo";
import Ability from "../components/Ability";
import ShowCase from "../components/ShowCase";
import Support from "../components/Support";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import HomeSeo from "../components/SEO/home";
import Achievement from "../components/Achievement";

import Hero from "../components/Hero";
import Industry from "../components/Industry";
import Skills from "../components/Skills";
import About from "../components/About";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Home: NextPage = () => {
	return (
		<>
			<HomeSeo />
			<section className="bg-yellow-100 dark:bg-primary min-h-screen transition">
				<main className="max-w-7xl mx-auto min-h-screen pt-10 px-5">
					<Hero />
					<ShowCase />
					<Industry />
					<Achievement />
					<Skills />
					<About />
					<Footer />
				</main>
			</section>
		</>
	);
};

export default Home;

import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import Ability from "../components/Ability";
import ShowCase from "../components/ShowCase";
import Support from "../components/Support";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<section className="bg-white dark:bg-primary min-h-screen">
			<main className="max-w-3xl mx-auto min-h-screen pt-10 px-5">
				<Navbar />
				<UserInfo />
				<Ability />
				<ShowCase />
				<Contact />
				<Support />
				<Footer />
			</main>
		</section>
	);
};

export default Home;

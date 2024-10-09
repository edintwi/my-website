"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LangSwitcher from "../langSwitcher/langSwitcher";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const t = useTranslations("Navbar");

	return (
		<nav
			className={`flex justify-between items-center h-10 fixed top-0 left-0 right-0 py-10 w-screen z-50 xsm:px-10 xl:px-40 transition-colors duration-300 ${
				scrolled
					? "dark:bg-black/80 backdrop-blur-md shadow-md"
					: "bg-transparent"
			}`}
		>
			<div className="flex items-center gap-2 xsm:justify-center xsm:hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
				<a href="https://github.com/edintwi" target="_blank">
					<Image src="/assets/github.svg" width={30} height={30} alt="Github" />
				</a>
				<a href="https://www.linkedin.com/in/edson-brandon/" target="_blank">
					<Image
						src="/assets/linkedin.svg"
						width={30}
						height={30}
						alt="Linkedin"
					/>
				</a>
			</div>
			<ul className="flex justify-end items-center gap-10 font-bold text-sm  xsm:gap-5 lg:text-lg text-soft-gray dark:text-light-text">
				<li>
					<Link
						to="home"
						smooth={true}
						duration={500}
						className="cursor-pointer"
						offset={-40}
					>
						{t("home")}
					</Link>
				</li>
				<Link
					to="tecstack"
					smooth={true}
					duration={500}
					className="cursor-pointer"
					offset={-80}
				>
					{t("stacks")}
				</Link>
				<li>
					<Link
						to="about"
						smooth={true}
						duration={500}
						offset={-40}
						className="cursor-pointer"
					>
						{t("about")}
					</Link>
				</li>
				<li>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						offset={-40}
						className="cursor-pointer"
					>
						{t("contact")}
					</Link>
				</li>
				<li className="cursor-pointer flex flex-row items-center gap-2">
					<ThemeSwitcher />
					<LangSwitcher />
				</li>
			</ul>
		</nav>
	);
}

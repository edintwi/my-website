"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "react-scroll";
export default function Footer() {
	const t = useTranslations("Footer");
	return (
		<footer className="flex flex-col px-5 bottom-0 self-end">
			<div className="flex flex-row justify-end items-end gap-14 py-5">
				<a className="font-thin xsm:text-sm lg:text-lg text-heading dark:text-heading-dark">
					{t("mail")}
				</a>
				<div className="flex items-center gap-2">
					<a href="https://github.com/edintwi" target="_blank">
						<Image
							src="/assets/github.svg"
							width={30}
							height={30}
							alt="Github"
						/>
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
			</div>

			<hr className="h-0.5" />
			<div className="flex flex-row justify-between py-10 flex-wrap xsm:justify-center sm:justify-center sm:flex-col sm: items-center xl:flex-row xl:justify-between">
				<ul className="flex flex-row gap-10 font-light xsm:text-sm lg:text-lg text-heading dark:text-heading-dark">
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
				</ul>
				<p className="flex flex-col font-light xsm:text-sm xsm:justify-center xsm:py-10 sm:py-10 lg:text-lg xl:flex-row text-heading dark:text-heading-dark">
					{t("text")}
					<span className="font-semibold bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent xsm:text-sm sm:text-center lg:text-lg xl:pl-2 xsm:text-center">
						{t("name")}
					</span>
				</p>
			</div>
		</footer>
	);
}

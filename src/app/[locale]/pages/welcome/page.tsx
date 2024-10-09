"use client";
import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";

export default function Welcome() {
	const t = useTranslations("Welcome");

	return (
		<main className="flex" id="home">
			<div className="flex flex-row items-center justify-between w-screen h-screen xsm:justify-around  xsm:flex-wrap xl:flex-nowrap xl:items-center xl:justify-center">
				<div className="w-full xsm:justify-center xl: justify-start">
					<p className="font-bold text-6xl xsm:text-xl xsm:text-center md:text-lg lg:text-4xl xl:text-5xl xl:text-left text-heading dark:text-light-text">
						{t("titleFirst")} 👋, <br /> {t("titleSecond")} <br />
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent lg:text-4xl">
							{t("titleThird")}
						</span>
						<br />
						{t("titleFour")} <br />
					</p>
					<div className="flex items-center justify-center xl:justify-start">
						<Typewriter
							options={{
								strings: [t("typeWriterFirst"), t("typeWriterSecond")],
								autoStart: true,
								loop: true,
								wrapperClassName:
									"xsm:text-base xsm:text-center text-6xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent lg:text-4xl xl:text-5xl",
							}}
						/>
					</div>
				</div>

				<div className="flex xsm:w-25 xsm:h-25 w-50 h-50 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-500 ">
					{/* biome-ignore lint/a11y/useAltText: <explanation> */}
					<img
						className="rounded-full p-2 xsm:w-25 xsm:h-25 xl:h-50 xl:w-50"
						src="https://avatars.githubusercontent.com/u/49498964?v=4"
					/>
				</div>
			</div>
		</main>
	);
}

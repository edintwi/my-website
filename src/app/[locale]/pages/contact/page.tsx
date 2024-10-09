import { useTranslations } from "next-intl";
import Image from "next/image";
export default function Contact() {
	const t = useTranslations("Contact");
	return (
		<section id="contact">
			<p className="text-4xl font-bold py-10 text-heading dark:text-heading-dark">
				{t("title")}
			</p>
			<div>
				<p className="text-soft-gray dark:text-p-dark">
					{t("text")}
					<span className="font-semibold bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent xsm:text-sm sm:text-center lg:text-lg xl:pl-2 xsm:text-center">
						{t("mail")}
					</span>{" "}
					<br />
					{t("textSecond")}
				</p>

				<div className="flex items-center gap-2 py-5">
					<a href="https://github.com/edintwi" target="_blank" rel="noreferrer">
						<Image
							src="/assets/github.svg"
							width={30}
							height={30}
							alt="Github"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/edson-brandon/"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="/assets/linkedin.svg"
							width={30}
							height={30}
							alt="Linkedin"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}

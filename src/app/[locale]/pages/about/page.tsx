import ExpCard from "@/components/expCard/expCard";
import { useTranslations } from "next-intl";
export default function About() {
	const t = useTranslations("About");

	const jobsT = useTranslations("Jobs");
	const jobKeys = ["job1", "job2", "job3"] as const;

	const formationsT = useTranslations("Formations");
	const formationKeys = ["formation1", "formation2"] as const;

	return (
		<section className="px-30" id="about">
			<p className="text-4xl font-bold py-10 text-heading dark:text-heading-dark">
				{t("title")}
			</p>
			<p className="font-normal text-justify  text-soft-gray dark:text-p-dark">
				{t("text")}
			</p>
			<div>
				<p className="text-4xl font-bold py-10  text-heading dark:text-heading-dark">
					{t("experienceTitle")}
				</p>
				{jobKeys.map((key) => (
					<ExpCard
						key={key}
						title={jobsT(`${key}.title`)}
						institution={jobsT(`${key}.institution`)}
						description={jobsT(`${key}.description`)}
						time={jobsT(`${key}.time`)}
					/>
				))}
			</div>
			<div>
				<p className="text-4xl font-bold py-10  text-heading dark:text-heading-dark">
					{t("formationTitle")}
				</p>
				{formationKeys.map((key) => (
					<ExpCard
						key={key}
						title={formationsT(`${key}.title`)}
						institution={formationsT(`${key}.institution`)}
						time={formationsT(`${key}.time`)}
					/>
				))}
			</div>
		</section>
	);
}

import ExpCard from "@/components/expCard/expCard";
import { Formations } from "@/components/expCard/formation";
import { jobs } from "@/components/expCard/jobs";
import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("About");
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
        {jobs.map((item, key) => (
          <ExpCard
            key={key}
            title={item.title}
            institution={item.institution}
            description={item.description}
            time={item.time}
          />
        ))}
      </div>
      <div>
        <p className="text-4xl font-bold py-10  text-heading dark:text-heading-dark">
          {t("formationTitle")}
        </p>
        {Formations.map((item, key) => (
          <ExpCard
            key={key}
            title={item.title}
            institution={item.institution}
            time={item.time}
          />
        ))}
      </div>
    </section>
  );
}

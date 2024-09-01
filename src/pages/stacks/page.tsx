import { useTranslations } from "next-intl";

export default function Stacks() {
  const icons = [
    "/assets/html.svg",
    "/assets/css.svg",
    "/assets/js.svg",
    "/assets/ts.svg",
    "/assets/react.svg",
    "/assets/flutter.svg",
    "/assets/node.svg",
    "/assets/git.svg",
    "/assets/android.svg",
    "/assets/swift.svg",
    "/assets/dart.svg",
    "/assets/expo.svg",
    "/assets/github.svg",
    "/assets/react-query.svg",
    "/assets/sequelize.svg",
    "/assets/sql.svg",
    "/assets/tailwind.svg",
    "/assets/vscode.svg",
    "/assets/next.svg",
  ];

  const t = useTranslations("Stacks");

  return (
    <div
      className="flex flex-col gap-20 w-max-screen overflow-hidden"
      id="tecstack"
    >
      <div className="flex flex-col items-center justify-evenly gap-20 pb-20">
        <p className="flex flex-col text-center gap-5 ">
          <span className="font-semibold text-3xl xsm:text-sm lg:text-3xl text-heading  dark:text-heading-dark">
            {t("title")}
          </span>

          <span className="font-light  xsm:text-sm lg:text-2xl text-heading dark:text-heading-dark">
            {t("subTitle")}
          </span>
        </p>
        <div className="flex flex-row gap-20 animate-infinite-scroll">
          {[...icons, ...icons].map((item, idx) => (
            <img className="w-12 h-12" src={item} key={idx} />
          ))}
          ,
        </div>
        <div className="flex flex-row gap-20 animate-infinite-scroll-reverse">
          {[...icons, ...icons].map((item, idx) => (
            <img className="w-12 h-12" src={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

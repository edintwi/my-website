export default function Stacks() {
  const icons = [
    "/assets/html.png",
    "/assets/css.png",
    "/assets/js.png",
    "/assets/ts.png",
    "/assets/react.png",
    "/assets/flutter.png",
    "/assets/node.png",
    "/assets/git.png",
    "/assets/android.png",
    "/assets/swift.png",
  ];

  const reverseIcons = icons.reverse();

  return (
    <div
      className="flex flex-col gap-20 w-max-screen overflow-hidden"
      id="tecstack"
    >
      <div className="flex flex-col items-center justify-evenly gap-20 pb-20">
        <p className="flex flex-col text-center gap-5 ">
          <span className="font-semibold text-3xl xsm:text-sm lg:text-3xl text-heading  dark:text-heading-dark">
            Minhas Stacks
          </span>

          <span className="font-thin  xsm:text-sm lg:text-2xl text-heading dark:text-heading-dark">
            Tecnologias que utilizo no meu dia a dia como desenvolvedor
          </span>
        </p>
        <div className="flex flex-row gap-20 animate-infinite-scroll">
          {[...icons, ...icons].map((item, idx) => (
            <img className="w-12 h-12" src={item} key={idx} />
          ))}
          ,
        </div>
        <div className="flex flex-row gap-20 animate-infinite-scroll-reverse">
          {[...reverseIcons, ...reverseIcons].map((item, idx) => (
            <img className="w-12 h-12" src={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

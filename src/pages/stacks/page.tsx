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

  return (
    <div className="flex flex-col gap-20 h-screen w-max-screen">
      <div className="flex flex-col items-center justify-evenly gap-20">
        <p className="text-center font-semibold text-3xl">Minhas Stacks</p>
        <p className="text-center font-thin">
          Tecnologias que utilizo no meu dia a dia como desenvolvedor
        </p>
        <div className="grid grid-cols-5 grid-rows-2 gap-20 self-center">
          {[...icons].map((item, idx) => (
            <div>
              <img className="w-13 h-13" src={item} key={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <main className="flex">
      <div className="flex flex-row items-center justify-between w-screen h-screen xsm:justify-around  xsm:flex-wrap">
        <div className="w-full xsm:justify-center">
          <p className="font-bold text-6xl xsm:text-base xsm:text-center md:text-lg">
            Olá 👋, <br /> Meu nome é <br />
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              Edson Brandon
            </span>
            <br />
            e sou um <br />
          </p>
          <div className="flex items-center justify-center self-center">
            <Typewriter
              options={{
                strings: ["Desenvolvedor mobile.", "Desenvolvedor front-end."],
                autoStart: true,
                loop: true,
                wrapperClassName:
                  "xsm:text-base xsm:text-center text-6xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent",
              }}
            />
          </div>
        </div>

        <div className="flex xsm:w-25 xsm:h-25 w-50 h-50 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-500 ">
          <img
            className="rounded-full p-2 xsm:w-25 xsm:h-25"
            src="https://avatars.githubusercontent.com/u/49498964?v=4"
          />
        </div>
      </div>
    </main>
  );
}

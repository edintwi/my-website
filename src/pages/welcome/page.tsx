"use client";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <main className="flex">
      <div className="flex flex-row items-center justify-between w-screen h-screen flex-wrap">
        <div>
          <p className="font-bold text-6xl">
            Olá 👋, <br /> Meu nome é <br />
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              Edson Brandon
            </span>
            <br />
            e sou um <br />
          </p>
          <Typewriter
            options={{
              strings: ["Desenvolvedor mobile.", "Desenvolvedor front-end."],
              autoStart: true,
              loop: true,
              wrapperClassName:
                "text-6xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent",
            }}
          />
        </div>

        <div className="flex w-50 h-50 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-500 ">
          <img
            className="rounded-full p-2"
            src="https://avatars.githubusercontent.com/u/49498964?v=4"
          />
        </div>
      </div>
    </main>
  );
}

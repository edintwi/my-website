import Image from "next/image";
export default function Footer() {
  return (
    <footer className="flex flex-col px-20 bottom-0 self-end">
      <div className="flex flex-row justify-end items-end gap-14 py-5">
        <a>edsonbrandon8@gmail.com</a>
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
      <div className="flex flex-row justify-between py-10">
        <ul className="flex flex-row gap-10 font-thin">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
        <p>
          Projetado e desenvolvido por{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent">
            Edson Brandon
          </span>
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 right-0 px-20 py-10">
      <div className="flex items-center gap-2">
        <a href="https://github.com/edintwi" target="_blank">
          <Image src="/assets/github.svg" width={30} height={30} alt="Github" />
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
      <ul className="flex justify-end items-center gap-10 font-bold text-sm">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Tecnologias</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

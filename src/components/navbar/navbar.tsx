"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex justify-between items-center fixed top-0 left-0 right-0 px-20 py-10 w-screen z-50 xsm:px-10 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
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
      <ul className="flex justify-end items-center gap-10 font-bold text-sm xsm:gap-5 lg:text-lg">
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
    </nav>
  );
}

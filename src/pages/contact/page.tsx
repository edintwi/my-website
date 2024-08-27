import Image from "next/image";
export default function Contact() {
  return (
    <section id="contact">
      <p className="text-4xl font-bold py-10">Contato</p>
      <div>
        <p>
          Para mais informaçoes entre em contato pelo e-mail:
          <span className="font-semibold bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent xsm:text-sm sm:text-center lg:text-lg xl:pl-2 xsm:text-center">
            edsonbrandon8@gmail.com
          </span>{" "}
          <br />
          ou se preferir:
        </p>

        <div className="flex items-center gap-2 py-5">
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
    </section>
  );
}

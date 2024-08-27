import ExpCard from "@/components/expCard/expCard";
import { Formations } from "@/components/expCard/formation";
import { jobs } from "@/components/expCard/jobs";
export default function About() {
  return (
    <section className="px-30">
      <p className="text-4xl font-bold py-10">Sobre mim</p>
      <p className="font-thin text-justify">
        <i className="font-semibold">Um jovem apaixonado por tecnologia,</i>{" "}
        <br /> com o inicio da minha trajetória educacional no ensino médio
        técnico em informática logo me encantei com o desenvolvimento, em
        seguida ingressei no curso de Sistemas de Informação pela Estácio de sá,
        onde descobri e me especializei em criar soluções mobile utilizando
        React Native e TypeScript. <br />
        Hoje atuo em projetos freelancers e pessoais utilizando tecnologias como
        TypeScript, ReactJs. , React native, NodeJS, MySQL, Javascript. <br />
        <br />
        <i className="bg-gradient-to-r from-cyan-300 to-emerald-500 bg-clip-text text-transparent">
          Sempre estou em busca de aprimoramento e aprendizado.
        </i>
      </p>
      <div>
        <p className="text-4xl font-bold py-10">Experiência</p>
        {jobs.map((item, key) => (
          <ExpCard
            title={item.title}
            institution={item.institution}
            description={item.description}
            time={item.time}
          />
        ))}
      </div>
      <div>
        <p className="text-4xl font-bold py-10">Formação</p>
        {Formations.map((item, key) => (
          <ExpCard
            title={item.title}
            institution={item.institution}
            time={item.time}
          />
        ))}
      </div>
    </section>
  );
}

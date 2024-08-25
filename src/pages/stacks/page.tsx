import { motion } from "framer-motion";

export default function Stacks() {
  const icons = [
    "/assets/css.png",
    "/assets/expo.png",
    "/assets/git.png",
    "/assets/html.png",
    "/assets/js.png",
    "/assets/node.png",
    "/assets/react.png",
    "/assets/ts.png",
    "/assets/flutter.png",
    "/assets/android.png",
    "/assets/swift.png",
  ];

  return (
    <section className="">
      <h1 className="text-4xl font-bold">Tecnologias</h1>
      <div className="relative overflow-hidden max-w-2xl mx-auto rounded-xl py-10">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex space-x-14 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="Technology Icon"
              className="h-12 w-12"
            />
          ))}
          {icons.map((icon, index) => (
            <img
              key={index + icons.length}
              src={icon}
              alt="Technology Icon"
              className="h-12 w-12"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

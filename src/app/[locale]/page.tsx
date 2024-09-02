import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import Stacks from "./pages/stacks/page";
import Welcome from "./pages/welcome/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <>
        <Welcome />
        <Stacks />
        <About />
        <Contact />
      </>
    </main>
  );
}

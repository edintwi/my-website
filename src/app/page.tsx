"use client";
import Stacks from "@/pages/stacks/page";
import Welcome from "@/pages/welcome/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Welcome />
      <Stacks />
    </main>
  );
}

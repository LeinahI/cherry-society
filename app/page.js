"use client";

import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

export default function Home() {
  return (
    <main className="h-100 container mx-auto border-l-0 border-r-0 md:border-l-2 md:border-r-2 border-[#CE6397] pb-40">
      <Navbar />
      <Hero />
    </main>
  );
}

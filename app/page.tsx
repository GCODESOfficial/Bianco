import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Howitworks from "./components/Howitworks";
import Features from "./components/Features";
import Process from "./components/Process";
import Demo from "./components/Demo";
import Security from "./components/Security";
import Community from "./components/Community";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black">
      <HeroSection />
      <Howitworks />
      <Features />
      <Process />
      <Demo/>

      <Security />
      <Community />
    </div>
  );
}

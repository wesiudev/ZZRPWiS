import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col w-full">
        <div className="w-full bg-white h-6"></div>
        <div className="w-full bg-red-500 h-6"></div>
      </div>
    </>
  );
}

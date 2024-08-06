"use client";
import Image from "next/image";
import ScrollTo from "./ScrollTo";
import { useRef, useState } from "react";
import UnderHero from "./UnderHero";
import Pause from "./Pause";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import Preambule from "./Preambule";
export default function Hero() {
  const [engagementLevel, setEngagementLevel] = useState(0);
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "start start"],
  });
  const underHeroScale = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0.4, 0.95]
  );
  return (
    <>
      <main className="h-full flex min-h-[50vh] flex-col items-center justify-between p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-heroBG bg-center bg-no-repeat bg-cover relative">
        <div
          ref={mainWrapper}
          className="absolute -bottom-[50vh] translate-y-[19.05%] left-0 w-full h-full z-[50]"
        ></div>
        <Image
          src="/assets/logo.jpg"
          width={256}
          height={256}
          style={{ boxShadow: "2px 2px 5px #000000" }}
          alt=""
          className="relative z-10 select-none"
        />
        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-40 z-0"></div>
        <div className="relative z-[9999] flex flex-col select-none">
          <p
            style={{ textShadow: "2px 2px 5px #000000" }}
            className="text-xl md:text-4xl text-white font-cardo font-bold mt-12 text-center"
          >
            Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o
            ochronę godności, praw i interesów materialnych. Nie pozwólmy na
            upadek Polskiego sektora rolnictwa.
          </p>
          <ScrollTo
            setEngagementLevel={setEngagementLevel}
            destination={"about"}
            label="Czytaj dalej"
          />
        </div>
      </main>
      <Pause />

      <UnderHero engagementLevel={engagementLevel} scale={underHeroScale} />
      {/* wojewodztwa jak na hexon */}
      {/* <div className=""></div> */}
      <div
        className="p-12 bg-white m-12"
        style={{ boxShadow: "2px 2px 5px #000000" }}
      >
        <h2 className="text-zinc-800">Nasze Współprace</h2>
      </div>
    </>
  );
}

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
export default function Hero() {
  const [engagementLevel, setEngagementLevel] = useState(0);
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const underHeroTranslateY = useTransform(
    scrollYProgress,
    [30, 5, 1],
    [0, 0.5, 1]
  );
  const underHeroScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.7, 1]
  );
  return (
    <>
      <main className="flex min-h-[50vh] flex-col items-center justify-between p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-heroBG bg-center relative">
        <Image
          src="/assets/logo.jpg"
          width={256}
          height={256}
          style={{ boxShadow: "2px 2px 5px #000000" }}
          alt=""
          className="relative z-10"
        />
        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-40 z-0"></div>
        <div className="relative z-10 flex flex-col">
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
      <UnderHero
        engagementLevel={engagementLevel}
        translateY={underHeroTranslateY}
        scale={underHeroScale}
      />
    </>
  );
}

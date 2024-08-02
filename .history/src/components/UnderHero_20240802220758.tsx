import Link from "next/link";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";

export default function UnderHero({
  engagementLevel,
  translateY,
  scale,
}: {
  engagementLevel: number;
  translateY: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  return (
    <motionDiv.div
      style={{
        scale: scale,
        translateY: translateY,
        boxShadow: "2px 2px 5px #000000",
      }}
      className={`h-[300vh] bg-white `}
    >
      <h2>Zostań członkiem Związku!!!!</h2>
      <p>
        Celem naszym jest doprowadzenie do normalności w sektorze rolnym, aby
        Polska była samo wystarczalna żywnościowo i nie stawała się rynkiem
        zbytu, a rynkiem producentów !!!
      </p>
      <p>
        Osiągniemy to poprzez wymianę poglądów, wnoszenie uwag do projektów
        procedowanych Ustaw, Rozporządzeń, poprzez udział w pracach w komisjach
        w Ministerstwie Rolnictwa jak i udział naszych kandydatów w wyborach
        Samorządowych do Rad Gmin, Powiatu, Wójtów, Prezydentów.
      </p>
      <p>Tematów i problemów mamy bardzo wiele i każdym z nich się zajmujemy.</p>
      {
        params,
        searchParams,
      }: {
        params: { slug: string };
        searchParams?: { [key: string]: string | string[] | undefined };
      }
    </motionDiv.div>
  );
}

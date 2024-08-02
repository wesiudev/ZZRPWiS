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
      <p></p>
    </motionDiv.div>
  );
}

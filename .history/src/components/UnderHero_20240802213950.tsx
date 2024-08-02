import { MotionValue } from "framer-motion";
import Link from "next/link";

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
    <motion.div
      style={{
        scale: engagementLevel >= 1 ? "scale-100" : "scale-50",
      }}
      className={`h-screen bg-blue-500 duration-[900ms]`}
      id="about"
    ></motion.divdiv>
  );
}

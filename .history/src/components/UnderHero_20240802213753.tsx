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
    <div
      className={`${
        engagementLevel >= 1
          ? "scale-100 translate-y-[0vh]"
          : "scale-50 translate-y-[100vh]"
      } h-screen bg-blue-500 duration-[900ms]`}
      id="about"
    ></div>
  );
}

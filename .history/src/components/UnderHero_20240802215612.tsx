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
        boxShadow: engagementLevel < 1 ? "2px 2px 5px #000000" : "none",
      }}
      className={`${position} h-screen bg-white`}
      id="about"
    ></motionDiv.div>
  );
}

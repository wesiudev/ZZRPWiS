import Link from "next/link";

export default function UnderHero({
  engagementLevel,
}: {
  engagementLevel: number;
}) {
  return (
    <div
      className={`${
        engagementLevel >= 0
          ? "scale-50 translate-y-[100vh]"
          : "scale-100 translate-y-[0vh]"
      } h-screen bg-blue-500`}
      id="about"
    ></div>
  );
}

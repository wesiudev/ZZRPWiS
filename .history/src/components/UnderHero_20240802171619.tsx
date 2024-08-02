import Link from "next/link";

export default function UnderHero({
  engagementLevel,
}: {
  engagementLevel: number;
}) {
  return (
    <div
      className={`${
        engagementLevel >= 1
          ? "scale-100 translate-y-[0vh]"
          : "scale-50 translate-y-[100vh]"
      } h-screen bg-blue-500 duration-1000`}
      id="about"
    ></div>
  );
}

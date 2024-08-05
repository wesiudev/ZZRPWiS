"use client";
import * as Scroll from "react-scroll";

export default function ScrollTo({
  destination,
  label,
  setEngagementLevel,
}: {
  destination: any;
  label: string;
  setEngagementLevel: Function;
}) {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      onClick={() => setEngagementLevel(1)}
      title={`Idź: ${destination}`}
      className="relative rounded-md mt-6 flex flex-row items-center cursor-pointer bg-white hover:bg-green-500 border-green-500 border-2 hover:border-green-800 text-zinc-800 font-bold p-2 px-6 duration-500 z-20 h-full mx-auto"
      to={`${destination}`}
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
    >
      {label}
    </ScrollTo>
  );
}

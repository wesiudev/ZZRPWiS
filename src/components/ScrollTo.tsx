"use client";
import * as Scroll from "react-scroll";

export default function ScrollTo({
  destination,
  label,
}: {
  destination: any;
  label: string;
}) {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      title={`Idź: ${destination}`}
      className="relative rounded-md mt-6 flex flex-row items-center cursor-pointer bg-white hover:bg-red-500 border-red-500 border-2 text-zinc-800 hover:text-white font-bold p-2 px-6 duration-500 z-[1000] h-full mx-auto"
      to={`${destination}`}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      {label}
    </ScrollTo>
  );
}

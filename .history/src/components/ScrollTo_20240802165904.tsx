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
      className="mt-6 flex flex-row items-center cursor-pointer bg-white hover:bg-green-500 border-green-500 border-2 hover:border-green-800 text-black font-bold p-2 px-6 duration-500 z-20 h-full mx-auto"
      to={`${destination}`}
      spy={true}
      smooth={true}
      offset={-12}
      duration={1000}
    >
      {label}
    </ScrollTo>
  );
}

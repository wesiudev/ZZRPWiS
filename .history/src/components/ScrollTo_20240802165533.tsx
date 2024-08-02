"use client";
import * as Scroll from "react-scroll";

export default function ScrollTo({ destination }: { destination: any }) {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      title={`Idź: ${destination}`}
      className=" flex flex-row items-center cursor-pointer bg-green-500 text-white font-bold p-2 px-6 rounded-full duration-150 z-20 h-full w-full"
      to={`#${destination}`}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      destination
    </ScrollTo>
  );
}

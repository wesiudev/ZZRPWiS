"use client";
import * as Scroll from "react-scroll";

export default function ScrollTo({ destination }: { destination: any }) {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      title={`Idź: ${destination}`}
      className=" text-black flex flex-row items-center cursor-pointer hover:bg-gray-300 p-2 duration-150 absolute left-0 top-0 z-20 h-full w-full"
      to={`#${destination}`}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <FaLink className="text-zinc-800 mr-2 min-w-[25px]" /> {section.title}
    </ScrollTo>
  );
}

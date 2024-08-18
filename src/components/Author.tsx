import Link from "next/link";

export default function Author() {
  return (
    <div id="about" className="flex flex-col w-full">
      <div className="w-full bg-zinc-500 overflow-hidden flex justify-center">
        <Link
          href={"https://www.wesiudev.com"}
          title="autor strony"
          target="_blank"
          className="text-white text-xs w-max mx-auto"
        >
          wesiudev
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="bg-heroBG min-h-screen w-full bg-center bg-no-repeat overflow-y-scroll">
      <div className="flex items-center justify-center fixed h-screen w-full left-0 top-0 bg-black bg-opacity-70">
        <div
          className="bg-white p-6"
          style={{ boxShadow: "2px 2px 5px #000000" }}
        >
          <div className="flex justify-between space-x-12">
            <Link href="/">
              <Image
                src="/assets/logo.jpg"
                width={224}
                height={224}
                alt=""
                className="w-1/2 lg:w-auto mb-12"
                style={{ boxShadow: "2px 2px 5px #000000" }}
              />
            </Link>
            <div className="underline text-lg lg:text-5xl font-bold text-zinc-800 text-right">
              NASZE
              <br />
              WSPÓŁPRACE
            </div>
          </div>
          <Link
            href="https://hexon.work"
            target="_blank"
            title="Dofinansowanie na remont domu"
          >
            <Image
              src="/logo-hexon2.png"
              width={224}
              height={224}
              alt=""
              className="w-1/2 lg:w-auto mb-12"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

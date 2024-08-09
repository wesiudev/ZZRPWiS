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
          <div className="relative flex justify-between">
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
              KONTAKT
              <br />
              ZZRPWiS
            </div>
          </div>
          <ul className="text-zinc-800">
            <li className="text-2xl">
              <span className="text-5xl font-bold">NIP</span> <br /> 9571158696{" "}
            </li>
            <li className="text-2xl">
              <span className="text-5xl font-bold">REGON</span> <br /> 525407850{" "}
            </li>
          </ul>
          <h2 className="text-3xl font-bold mt-3 text-zinc-800">
            Władysława Iv 12E / 6, 80-547 Gdańsk, Polska
          </h2>
          <div className="flex items-center text-3xl text-zinc-800 mt-6">
            <FaEnvelope className="mr-2" /> Adres email
          </div>
          <Link
            title="Wyślij email"
            href="mailto:ZZRPWOLNIISOLIDARNI@WP.PL"
            className="flex items-center text-lg lg:text-3xl mt-3 text-zinc-800 font-bold hover:underline"
          >
            ZZRPWOLNIISOLIDARNI@WP.PL
          </Link>
          <div className="flex flex-row flex-wrap space-x-3 text-zinc-800 mt-4 mx-auto">
            <Link href="/">Home</Link>
            <Link href="/aktualnosci">Aktualności</Link>
            <Link href="/nasze-wspolprace">Nasze współprace</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="bg-heroBG h-screen w-full bg-center bg-no-repeat">
      <div className="flex items-center justify-center fixed h-screen w-full left-0 top-0 bg-black bg-opacity-70">
        <div
          className="bg-white p-6"
          style={{ boxShadow: "2px 2px 5px #000000" }}
        >
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
            <FaEnvelope /> Adres email
          </div>
          <div className="flex items-center text-3xl mt-6 text-zinc-800 font-bold">
            ZZRPWOLNIISOLIDARNI@WP.PL
          </div>
        </div>
      </div>
    </div>
  );
}

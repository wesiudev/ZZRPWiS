import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-heroBG h-screen w-full bg-center bg-no-repeat">
      <div className="flex items-center justify-center fixed h-screen w-full left-0 top-0 bg-black bg-opacity-70">
        <div
          className="bg-white p-6"
          style={{ boxShadow: "2px 2px 5px #000000" }}
        >
          <ul>
            <li>NIP 9571158696 </li>
            <li>REGON 525407850 </li>
          </ul>
          Władysława Iv 12E / 6, 80-547 Gdańsk, Polska ZZRPWOLNIISOLIDARNI@WP.PL
        </div>
      </div>
    </div>
  );
}

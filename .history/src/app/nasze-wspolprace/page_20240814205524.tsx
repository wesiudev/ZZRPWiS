import Pause from "@/components/Pause";
import Regions from "@/components/Regions";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";

export default async function Page() {
  return (
    <>
      <Regions />
      <div className="bg-heroBG min-h-screen w-full bg-center bg-no-repeat flex items-center justify-center relative">
        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50" />
        <div
          className="bg-white p-6 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] rounded-xl my-12 relative z-10"
          style={{ boxShadow: "2px 2px 5px #000000" }}
        >
          <div className="grid grid-cols-2 w-full">
            <div
              style={{ lineHeight: 1.35 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 text-left"
            >
              NASZE WSPÓŁPRACE
            </div>
            <Link href="/" className="flex items-end justify-end">
              <Image
                src="/assets/logo.jpg"
                width={224}
                height={224}
                alt=""
                className="w-1/2 lg:w-auto mb-12"
                style={{ boxShadow: "2px 2px 5px #000000" }}
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              target="_blank"
              title="Dofinansowanie na remont domu"
              href="https://hexon.work/"
              className="flex flex-col mt-6 text-zinc-500 p-4 hover:bg-zinc-300 duration-100 group items-center justify-center border border-gray-400"
            >
              <Image
                src="/logo-hexon2.png"
                width={420}
                height={420}
                alt="Dofinansowanie na remont domu Hexon"
                className="w-[220px] sm:w-[270px] lg:w-[320px] mx-auto md:mx-0"
              />
              <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 italic text-center">
                Bezzwrotne dofinansowanie na remont domu do <br />{" "}
                <b>136,000,00 PLN</b>
              </div>
            </Link>
            <Link
              target="_blank"
              title="Optymalizacja kosztów prądu dla firm"
              href="https://redrayenergy.com/"
              className="flex flex-col mt-6 text-zinc-500 p-4 hover:bg-zinc-300 duration-100 group items-center justify-center border border-gray-400"
            >
              <Image
                src="/rre-logo.png"
                width={420}
                height={420}
                alt="Optymalizacja kosztów prądu dla firm"
                className="w-[220px] sm:w-[270px] lg:w-[320px] mx-auto md:mx-0"
              />
              <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 italic text-center">
                Optymalizacja kosztów prądu dla firm
              </div>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap space-x-3 text-zinc-800 mt-4 mx-auto">
            <Link href="/">Strona główna</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link href="/aktualnosci">Aktualności</Link>
          </div>
          <div className="flex items-center w-full space-x-4 text-zinc-800 py-4">
            {/* <Link href="#">
              <FaTiktok className="w-12 h-12" />
              </Link> */}
            <Link href="https://www.facebook.com/profile.php?id=61550239301123&paipv=0&eav=AfZer2jHkWSa-HmLrgFsTw3nhcupkP39hRtDJF9mHJ8yHD3mOZiyraXKsKpK0l_MQFQ">
              <FaFacebook className="w-12 h-12" />
            </Link>
            {/* <Link href="#">
              <FaYoutube className="w-12 h-12" />
              </Link> */}
          </div>
        </div>
      </div>
      <Pause />
    </>
  );
}
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "red",
  publisher: "wesiu.dev",
  manifest: "/manifest.json",
  verification: {
    google: "google85185d3abec28326.html",
  },
  icons: [
    {
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/favicons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  title:
    "NASZE WSPÓŁPRACE - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
  description:
    "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
  openGraph: {
    type: "website",
    url: "https://ZZRPWiS.pl",
    title:
      "NASZE WSPÓŁPRACE - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
    description:
      "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
    siteName: "ZZRPWiS",
  },
};

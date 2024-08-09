import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";

export default async function Page() {
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
          <div className="flex flex-row flex-wrap space-x-3 text-zinc-800 mt-4 mx-auto">
            <Link href="/">Home</Link>
            <Link href="/aktualnosci">Aktualności</Link>
            <Link href="/nasze-wspolprace">Nasze współprace</Link>
          </div>
          <div className="flex items-center w-full space-x-4 text-zinc-800 py-4">
            <Link href="#">
              <FaTiktok className="w-12 h-12" />
            </Link>
            <Link href="#">
              <FaFacebook className="w-12 h-12" />
            </Link>
            <Link href="#">
              <FaYoutube className="w-12 h-12" />
            </Link>
          </div>
        </div>
      </div>
    </div>
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

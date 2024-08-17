import Pause from "@/components/Pause";
import Regions from "@/components/Regions";
import { getProducts } from "@/firebase";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";

export default async function Page() {
  const posts = await getProducts();
  return (
    <>
      <Regions />
      <div className="w-full relative p-12">
        <h1 className="w-full py-12 text-white font-bold text-3xl 2xl:text-5xl drop-shadow-xl shadow-black">
          Aktualności ZZRPWiS
        </h1>
        <Pause />
      </div>
      <div className="min-h-[20vh] px-12">
        <h2 className="text-white text-lg">Wszystkie wpisy:</h2>
        {posts && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            {posts.map((post: any, i: number) => (
              <Link
                href={`/aktualnosci/${post.url}`}
                key={i}
                title={`Przejdź do artykułu ${post.title}`}
                className="group relative aspect-square h-max flex flex-col hover:bg-[#74B901] hover:bg-opacity-30 hover:p-1 duration-300 ease-in-out"
                style={{ boxShadow: "0px 0px 5px #000000" }}
              >
                <div className="w-full overflow-hidden flex items-start">
                  <Image
                    src={post.primaryImage}
                    width={1024}
                    height={1024}
                    alt={`Obrazek ${post.title}`}
                    className="absolute inset-0 object-cover w-full h-full "
                  />
                </div>
                <h2
                  style={{ boxShadow: "0px 0px 5px #000000" }}
                  className="group-hover:bg-gray-300 bg-gray-200 duration-300 absolute bottom-3 left-3 right-3 text-base lg:text-xl mt-3 text-black font-light text-left px-3 py-1"
                >
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>
        )}

        {!posts && (
          <div className="p-12 italic text-base text-white-800 drop-shadow-lg shadow-black font-light mt-3">
            Brak postów
          </div>
        )}
      </div>
      <div className="flex items-center w-full justify-center space-x-4 text-white py-12">
        {/* <Link href="#">
          <FaTiktok className="w-12 h-12" />
        </Link> */}
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61550239301123&paipv=0&eav=AfZer2jHkWSa-HmLrgFsTw3nhcupkP39hRtDJF9mHJ8yHD3mOZiyraXKsKpK0l_MQFQ"
        >
          <FaFacebook className="w-12 h-12" />
        </Link>
        {/* <Link href="#">
          <FaYoutube className="w-12 h-12" />
        </Link> */}
      </div>
      <div className="w-full flex justify-center pb-12">
        <Link href="/" className="w-max mx-auto">
          <Image
            src="/assets/logo.jpg"
            width={420}
            height={420}
            alt="logo zzrpwis"
            className="w-[224px]"
          />
        </Link>
      </div>
      <div className="flex flex-row flex-wrap -ml-6 text-white w-full justify-center pb-12 px-12">
        <Link
          className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-6"
          href="/kontakt"
        >
          KONTAKT
        </Link>
        <Link
          className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-6"
          href="/"
        >
          STRONA GŁÓWNA
        </Link>
        <Link
          className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-6"
          href="/nasze-wspolprace"
        >
          NASZE WSPÓŁPRACE
        </Link>
      </div>
    </>
  );
}
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#fff",
  publisher: "wesiudev.com",
  authors: [
    {
      name: "wesiudev",
      url: "https://wesiudev.com",
    },
    {
      name: "quixy",
      url: "https://quixy.pl",
    },
  ],

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
  title: "AKTUALNOŚCI - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
  description:
    "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
  openGraph: {
    type: "website",
    url: "https://ZZRPWiS.pl/aktualnosci",
    title:
      "AKTUALNOŚCI - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
    description:
      "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
    siteName: "ZZRPWiS",
  },
};

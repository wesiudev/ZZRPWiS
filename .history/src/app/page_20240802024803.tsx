import Hero from "@/components/Hero";
import Pause from "@/components/Pause";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Pause />
    </>
  );
}

import { Metadata } from "next";
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "red",
  publisher: "wesiu.dev",
  manifest: "/manifest.json",

  verification: {
    google: "google85185d3abec28326.html",
  },
  // icons: [
  //   {
  //     url: "/favicons/favicon-32x32.png",
  //     sizes: "32x32",
  //     type: "image/png",
  //   },
  //   {
  //     url: "/favicon.ico",
  //     sizes: "48x48",
  //     type: "image/x-icon",
  //   },
  //   {
  //     url: "/favicons/android-chrome-192x192.png",
  //     sizes: "192x192",
  //     type: "image/png",
  //   },
  //   {
  //     url: "/favicons/android-chrome-512x512.png",
  //     sizes: "512x512",
  //     type: "image/png",
  //   },
  // ],
  title: "Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
  description:
    "1001 Pomysłów na biznes. Skorzystaj z pomocy naszych asystentów i stwórz projekt, który będzie udaną inwestycją. Discord, Poradniki, Społeczność Biznesu.",
  openGraph: {
    type: "website",
    url: "https://quixy.pl",
    title: "Quixy.pl - Generator pomysłów | Twój nowy pomysł na biznes",
    description:
      "1001 Pomysłów na biznes. Skorzystaj z pomocy naszych asystentów i stwórz projekt, który będzie udaną inwestycją. Discord, Poradniki, Społeczność Biznesu.",
    siteName: "Quixy",
  },
};

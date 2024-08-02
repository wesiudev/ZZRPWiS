import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-heroBG relative">
      <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-80"></div>
      Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę
      godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego
      sektora rolnictwa.
    </main>
  );
}

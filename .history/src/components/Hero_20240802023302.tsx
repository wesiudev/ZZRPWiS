import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-heroBG relative">
      <Image
        src="/assets/logo.jpg"
        width={256}
        height={256}
        alt=""
        className="relative z-10"
      />
      <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col">
        <p className="text-2xl text-white font-cardo font-bold">
          Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o
          ochronę godności, praw i interesów materialnych. Nie pozwólmy na
          upadek Polskiego sektora rolnictwa.
        </p>
      </div>
    </main>
  );
}

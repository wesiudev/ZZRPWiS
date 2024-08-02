import Link from "next/link";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import Preambule from "./Preambule";

export default function UnderHero({
  engagementLevel,
  translateY,
  scale,
}: {
  engagementLevel: number;
  translateY: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  return (
    <motionDiv.div
      style={{
        scale: scale,
        translateY: translateY,
        boxShadow: "2px 2px 5px #000000",
      }}
      className={`h-[300vh] bg-white select-none`}
    >
      <div className="p-6 lg:p-12 xl:p-16 2xl:p-24">
        <h2 className="text-3xl 2xl:text-5xl mb-6 text-zinc-800 drop-shadow-xl shadow-black font-bold">
          Zostań członkiem Związku!!!!
        </h2>
        <p className="text-gray-500 2xl:text-lg max-w-[40rem] text-justify">
          Celem naszym jest doprowadzenie do normalności w sektorze rolnym, aby
          Polska była samo wystarczalna żywnościowo i nie stawała się rynkiem
          zbytu, a rynkiem producentów !!!
        </p>
        <p className="my-3 text-gray-500 2xl:text-lg max-w-[40rem] text-justify">
          Osiągniemy to poprzez wymianę poglądów, wnoszenie uwag do projektów
          procedowanych Ustaw, Rozporządzeń, poprzez udział w pracach w
          komisjach w Ministerstwie Rolnictwa jak i udział naszych kandydatów w
          wyborach Samorządowych do Rad Gmin, Powiatu, Wójtów, Prezydentów.
        </p>
        <p className="text-gray-500 2xl:text-lg max-w-[40rem] text-justify">
          Tematów i problemów mamy bardzo wiele i każdym z nich się zajmujemy.
        </p>
        <p className="my-3 text-gray-500 max-w-[40rem] text-justify">
          Uregulowań wymagają tematy: programów rolnych, Eko sche­matów,
          funkcjonowanie rynku mleka, mięsa, produkcji konwencjonalnej i
          ekologicznej, pszczelarskiej, podmiotów prowadzących agroturystykę,
          handel płodami rolnymi, podatek rolny, inwestycji drogowych, dopłat do
          energii, zasad wywłasz­czania na rzecz wiatraków, drogi i na inne cele
          publiczne!
        </p>
        <p className="text-gray-500 text-justify max-w-[40rem]">
          Wszystko to możemy zrobić razem dla siebie, naszych dzieci i wnuków,
          zmienić wizerunek Rolnika i Polskiej Wsi. Jesteśmy w 11 województwach,
          a w kolejnych Zarządy powstają.
        </p>

        <p className="text-right mt-6 text-gray-500 max-w-[40rem]">
          Zapraszamy do Związku, Rolników, podmioty i osoby pracu­jące w
          sektorze rolnictwa, handlu, produkcji, doradców, KGW, naukowców… w
          ilości Siła. - Nic bez nas o Nas{" "}
        </p>
      </div>
      <Preambule />
    </motionDiv.div>
  );
}

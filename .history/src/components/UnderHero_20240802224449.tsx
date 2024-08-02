import Link from "next/link";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import Preambule from "./Preambule";
import Image from "next/image";
import { FaMessage } from "react-icons/fa6";

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
      className={` bg-white select-none`}
    >
      <div className="p-6 lg:p-12 xl:p-16 2xl:p-24">
        <div className="flex flex-col"></div>
        <p className="mx-auto text-center max-w-[50rem] font-cardo mb-12 text-zinc-800 drop-shadow-xl shadow-black font-bold text-4xl">
          Zaangażujmy się wspólnie w prace Związku. Razem jesteśmy w stanie
          wiele zdziałać.
        </p>
        <div className="flex flex-col">
          <div className="p-6 rounded-full border-[3px] bg-blue-500 border-blue-700 aspect-square w-32 h-32">
            <FaMessage className="text-white text-4xl" />
          </div>
          <p className="mx-auto text-center max-w-[50rem] font-cardo text-zinc-800 drop-shadow-xl shadow-black font-bold text-4xl">
            Zabieraj głos w sprawach ważnych dla Ciebie i Twojego
            przedsiębiorstwa.
          </p>
        </div>
        <h2 className="text-2xl mb-6 text-zinc-800 drop-shadow-xl shadow-black font-bold mt-24">
          Zostań członkiem Związku!!!!
        </h2>
        <p className="text-gray-500 2xl:text-lg text-justify">
          Celem naszym jest doprowadzenie do normalności w sektorze rolnym, aby
          Polska była samo wystarczalna żywnościowo i nie stawała się rynkiem
          zbytu, a rynkiem producentów !!!
        </p>
        <p className="my-3 text-gray-500 2xl:text-lg text-justify">
          Osiągniemy to poprzez wymianę poglądów, wnoszenie uwag do projektów
          procedowanych Ustaw, Rozporządzeń, poprzez udział w pracach w
          komisjach w Ministerstwie Rolnictwa jak i udział naszych kandydatów w
          wyborach Samorządowych do Rad Gmin, Powiatu, Wójtów, Prezydentów.
        </p>
        <p className="text-gray-500 2xl:text-lg text-justify">
          Tematów i problemów mamy bardzo wiele i każdym z nich się zajmujemy.
        </p>
        <p className="my-3 text-gray-500 2xl:text-lg text-justify">
          Uregulowań wymagają tematy: programów rolnych, Eko sche­matów,
          funkcjonowanie rynku mleka, mięsa, produkcji konwencjonalnej i
          ekologicznej, pszczelarskiej, podmiotów prowadzących agroturystykę,
          handel płodami rolnymi, podatek rolny, inwestycji drogowych, dopłat do
          energii, zasad wywłasz­czania na rzecz wiatraków, drogi i na inne cele
          publiczne!
        </p>
        <p className="text-gray-500 2xl:text-lg text-justify">
          Wszystko to możemy zrobić razem dla siebie, naszych dzieci i wnuków,
          zmienić wizerunek Rolnika i Polskiej Wsi. Jesteśmy w 11 województwach,
          a w kolejnych Zarządy powstają.
        </p>

        <p className="text-right mt-6 2xl:text-lg text-gray-500">
          Zapraszamy do Związku, Rolników, podmioty i osoby pracu­jące w
          sektorze rolnictwa, handlu, produkcji, doradców, KGW, naukowców… w
          ilości Siła. - Nic bez nas o Nas{" "}
        </p>
        <Image
          src="/assets/logo.jpg"
          width={224}
          height={224}
          alt=""
          style={{ boxShadow: "2px 2px 5px #000000" }}
          className="mt-24 mx-auto"
        />
        <Preambule />
      </div>
    </motionDiv.div>
  );
}

import Link from "next/link";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import Preambule from "./Preambule";
import Image from "next/image";
import { FaMessage, FaUsers } from "react-icons/fa6";

export default function UnderHero({
  engagementLevel,
  scale,
}: {
  engagementLevel: number;
  scale: MotionValue<number>;
}) {
  return (
    <motionDiv.div
      style={{
        scale: scale,
        boxShadow: "2px 2px 5px #000000",
      }}
      className={`duration-500 bg-white select-none`}
    >
      <div className="p-6 lg:p-12 xl:p-16 2xl:p-24">
        <div className="flex flex-col items-center justify-center 2xl:flex-row 2xl:space-x-12 mb-12">
          <div className="flex flex-col items-center">
            <div className="mb-12 p-6 rounded-full border-[3px] bg-green-500 border-green-700 aspect-square w-32 h-32 flex items-center justify-center">
              <FaUsers className="text-white text-5xl" />
            </div>
            <p
              style={{ lineHeight: 1.35, textShadow: "1px 1px 3px gray" }}
              className="mx-auto text-center font-cardo text-zinc-800 font-bold text-4xl 2xl:text-5xl max-w-[40rem]"
            >
              Zaangażujmy się wspólnie w prace Związku. Razem jesteśmy w stanie
              wiele zdziałać.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start mt-12 2xl:mt-0">
            <div className="mb-12 p-6 rounded-full border-[3px] bg-green-500 border-green-700 aspect-square w-32 h-32 flex items-center justify-center">
              <FaMessage className="text-white text-5xl" />
            </div>
            <p
              style={{ lineHeight: 1.35, textShadow: "1px 1px 3px gray" }}
              className="mx-auto text-center font-cardo text-zinc-800 font-bold text-4xl 2xl:text-5xl max-w-[40rem]"
            >
              Zabieraj głos w sprawach ważnych dla Ciebie i Twojego
              przedsiębiorstwa.
            </p>
          </div>
        </div>
        <div className="p-4 2xl:p-12 bg-gray-200">
          <h2 className="text-5xl mb-6 text-zinc-800 drop-shadow-xl shadow-black font-bold">
            Zostań członkiem Związku!!!!
          </h2>
          <p className="text-gray-500 text-lg xl:text-xl 2xl:text-2xl text-justify">
            Celem naszym jest doprowadzenie do normalności w sektorze rolnym,
            aby Polska była samo wystarczalna żywnościowo i nie stawała się
            rynkiem zbytu, a rynkiem producentów !!!
          </p>
          <p className="my-3 text-gray-500 text-lg xl:text-xl 2xl:text-2xl text-justify">
            Osiągniemy to poprzez wymianę poglądów, wnoszenie uwag do projektów
            procedowanych Ustaw, Rozporządzeń, poprzez udział w pracach w
            komisjach w Ministerstwie Rolnictwa jak i udział naszych kandydatów
            w wyborach Samorządowych do Rad Gmin, Powiatu, Wójtów, Prezydentów.
          </p>
          <p className="text-gray-500 text-lg xl:text-xl 2xl:text-2xl text-justify">
            Tematów i problemów mamy bardzo wiele i każdym z nich się zajmujemy.
          </p>
          <p className="my-3 text-gray-500 text-lg xl:text-xl 2xl:text-2xl text-justify">
            Uregulowań wymagają tematy: programów rolnych, Eko sche­matów,
            funkcjonowanie rynku mleka, mięsa, produkcji konwencjonalnej i
            ekologicznej, pszczelarskiej, podmiotów prowadzących agroturystykę,
            handel płodami rolnymi, podatek rolny, inwestycji drogowych, dopłat
            do energii, zasad wywłasz­czania na rzecz wiatraków, drogi i na inne
            cele publiczne!
          </p>
          <p className="text-gray-500 text-lg xl:text-xl 2xl:text-2xl text-justify">
            Wszystko to możemy zrobić razem dla siebie, naszych dzieci i wnuków,
            zmienić wizerunek Rolnika i Polskiej Wsi. Jesteśmy w 11
            województwach, a w kolejnych Zarządy powstają.
          </p>

          <p className="text-right mt-6 text-lg xl:text-xl 2xl:text-2xl text-gray-500">
            Zapraszamy do Związku, Rolników, podmioty i osoby pracu­jące w
            sektorze rolnictwa, handlu, produkcji, doradców, KGW, naukowców… w
            ilości Siła. - Nic bez nas o Nas{" "}
          </p>
        </div>
        <Image
          src="/assets/logo.jpg"
          width={224}
          height={224}
          alt=""
          style={{ boxShadow: "2px 2px 5px #000000" }}
          className="mt-24 mx-auto"
        />
        <Preambule />
        <div className="text-zinc-800">
          Wesprzyj ZZRPWiS : Wpłaty mogą być dokonywane wyłącznie przez osoby
          fizyczne mające stałe miejsce zamieszkania w Polsce i posiadające
          polskie obywatelstwo. Można je zrealizować poprzez: a) przelew z konta
          osobistego (nie z konta prowadzonej działalności gospodarczej) lub b)
          za pośrednictwem przekazu pocztowego – jedna osoba może wpłacić
          maksymalnie jednorazowo 2250 zł, na rachunek: 11 1111 1111 1111 1111
          1111 1111 Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni  
          Władysława Iv 12E / 6, 80-547 Gdańsk, Polska Tytuł przelewu:
          „Darowizna na ZZRPWiS” Zsumowane wpłaty nie mogą przekroczyć 33 750 zł
          na osobę w ciągu roku kalendarzowego.
        </div>
      </div>
    </motionDiv.div>
  );
}

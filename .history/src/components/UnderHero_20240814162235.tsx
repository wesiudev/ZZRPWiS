import Link from "next/link";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import Preambule from "./Preambule";
import Image from "next/image";
import {
  FaFacebook,
  FaMessage,
  FaTiktok,
  FaUsers,
  FaYoutube,
} from "react-icons/fa6";
import { BsMegaphone } from "react-icons/bs";

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
      className={`duration-500 bg-white -mt-12`}
    >
      <div className="p-6 lg:p-12 xl:p-16 2xl:p-24">
        <div className="flex flex-col items-center justify-center 2xl:flex-row 2xl:space-x-12 mb-12">
          <div className="flex flex-col items-center select-none">
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
          <div className="flex flex-col items-center justify-start mt-12 2xl:mt-0 select-none">
            <div className="mb-12 p-6 rounded-full border-[3px] bg-green-500 border-green-700 aspect-square w-32 h-32 flex items-center justify-center">
              <BsMegaphone className="text-white text-5xl" />
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
        <div className="p-4 2xl:p-12 bg-gray-200 select-none">
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
        <div className="text-zinc-800 mt-12">
          <h2 className="font-bold text-5xl sm:text-6xl">Wesprzyj ZZRPWiS:</h2>{" "}
          <br />
          <div className="text-gray-500 mt-6 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Wpłaty mogą być dokonywane wyłącznie przez osoby fizyczne mające
            stałe miejsce zamieszkania w Polsce i posiadające polskie
            obywatelstwo. Można je zrealizować poprzez: a) przelew z konta
            osobistego (nie z konta prowadzonej działalności gospodarczej) lub
            b) za pośrednictwem przekazu pocztowego – jedna osoba może wpłacić
            maksymalnie jednorazowo 2250 zł, na rachunek: 11 1111 1111 1111 1111
            1111 1111 Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni  
            Władysława Iv 12E / 6, 80-547 Gdańsk, Polska Tytuł przelewu:
            „Darowizna na ZZRPWiS” Zsumowane wpłaty nie mogą przekroczyć 33 750
            zł na osobę w ciągu roku kalendarzowego.
          </div>
        </div>
        <div className="w-full mt-12">
          <h2 className="font-bold text-5xl sm:text-6xl text-zinc-800">
            Nasze współprace
          </h2>
          <Link
            target="_blank"
            title="Dofinansowanie na remont domu"
            href="https://hexon.work/"
            className="flex flex-col mt-6 text-zinc-500 p-4 hover:bg-zinc-300 duration-100 group"
          >
            <Image
              src="/logo-hexon2.png"
              width={224}
              height={224}
              alt="Dofinansowanie na remont domu Hexon"
              className="w-[200px] sm:w-[250px] lg:w-[300px]"
            />
            <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 italic">
              dofinansowanie na remont domu
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center w-full justify-center space-x-4 text-zinc-800 py-12">
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
      <div className="flex flex-row flex-wrap space-x-3 text-zinc-800 mt-4 w-full justify-center pb-12">
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/aktualnosci">Aktualności</Link>
        <Link href="/nasze-wspolprace">Nasze współprace</Link>
      </div>
      <div className="w-full flex items-center overflow-hidden">
        <div className="flex flex-row move-from-right-to-left ml-[100%]">
          {regions.map((region: any, i: any) => (
            <div
              key={i}
              className={`flex text-zinc-800 w-max items-center px-12 py-3 border-l-2 border-zinc-800 border-t-2 ${
                i % 2 === 0 ? "bg-green-300" : "bg-green-200"
              }`}
            >
              <Image
                src={region.image}
                width={100}
                height={100}
                alt=""
                className="w-[50px] h-auto mr-3"
              />
              <h2 className="w-max">{region.name}</h2>
            </div>
          ))}
          {regions.map((region: any, i: any) => (
            <div
              key={i}
              className={`flex text-zinc-800 w-max items-center px-12 py-3 border-l-2 border-zinc-800 border-t-2 ${
                i % 2 === 0 ? "bg-green-300" : "bg-green-200"
              }`}
            >
              <Image
                src={region.image}
                width={100}
                height={100}
                alt=""
                className="w-[50px] h-auto mr-3"
              />
              <h2 className="w-max">{region.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </motionDiv.div>
  );
}

const regions = [
  { name: "warmińsko-mazurskie", image: "/assets/regions/warm-maz.png" },
  { name: "pomorskie", image: "/assets/regions/pom.png" },
  { name: "podlaskie", image: "/assets/regions/podl.png" },
  { name: "kujawsko-pomorskie", image: "/assets/regions/kuj-pom.png" },
  { name: "mazowieckie", image: "/assets/regions/maz.png" },
  { name: "lubelskie", image: "/assets/regions/lubelskie.png" },
  { name: "małopolskie", image: "/assets/regions/mal.png" },
  { name: "dolnośląskie", image: "/assets/regions/dolnoslaskie.png" },
  { name: "wielkopolskie", image: "/assets/regions/wielk.png" },
  { name: "lodzkie", image: "/assets/regions/lodz.png" },
  { name: "świętokrzyskie", image: "/assets/regions/swiet.png" },
  { name: "zachodniopomorskie", image: "/assets/regions/zach.png" },
];

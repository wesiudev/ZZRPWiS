import { getBlogPosts } from "@/firebase";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const posts = await getBlogPosts();
  return (
    <>
      <UnderHeaderInfo />
      <ContactInfo />
      <div className="sm:mt-[130px] w-full relative flex flex-row flex-wrap p-12 space-x-12 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <h1 className="w-full py-12 text-zinc-700 font-bold text-5xl sm:text-6xl drop-shadow-xl shadow-black">
          Aktualności
          <div className="flex w-max px-12 pt-12">
            <div className="aspect-square left-0 top-0 bg-[#74B901] w-12"></div>
            <div className="aspect-square left-0 top-0 bg-[#009CE7] w-12"></div>
            <div className="aspect-square left-0 top-0 bg-[#B00285] w-12"></div>
            <div className="aspect-square left-0 top-0 bg-[#FEBE00] w-12"></div>
          </div>
        </h1>

        <p className="text-justify sm:text-left sm:max-w-[40rem] font-light">
          Serdecznie witamy na naszej stronie rezerwacji usług. Tutaj mogą
          Państwo szybko i wygodnie ogłosić swoje usługi. Oferujemy szeroki
          wachlarz opcji dostosowanych do Państwa potrzeb. Zapewniamy najnowsze
          informacje, aktualne trendy oraz szczegółowe analizy, aby pomóc w
          dokonaniu najlepszego wyboru.
        </p>
        <p className="text-justify sm:text-left sm:max-w-[40rem] font-light">
          Regularnie publikujemy artykuły, które pomogą Państwu być na bieżąco z
          dynamicznie zmieniającym się światem marketingu i reklamy. Zachęcamy
          do lektury i śledzenia naszych aktualizacji, aby nie przegapić żadnej
          istotnej wiadomości.
        </p>
      </div>
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        {posts?.posts && (
          <div className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold mt-12">
            Najnowsze wpisy
          </div>
        )}
        {posts?.posts && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 my-8">
            {posts?.posts.map((post: any, i: number) => (
              <Link
                href={`/aktualnosci/${post.url}`}
                key={i}
                className="group relative aspect-square h-max flex flex-col hover:bg-[#74B901] hover:bg-opacity-30 hover:p-1 duration-300 ease-in-out rounded-lg shadow-md  shadow-zinc-700"
              >
                <div className="w-full overflow-hidden flex items-start">
                  <Image
                    src={post.mainImage}
                    width={1024}
                    height={1024}
                    alt={post.title}
                    className="w-full object-contain rounded-lg shadow-md shadow-zinc-700"
                  />
                </div>
                <span className="group-hover:bg-gray-200 duration-300 group-hover:p-4 absolute bottom-3 left-3 right-3 text-base lg:text-xl  drop-shadow-xl shadow-black mt-3 bg-white text-zinc-700 font-bold  text-left p-3 rounded-lg">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        )}
        {posts?.posts.length === 0 && (
          <div className="text-base text-zinc-800 drop-shadow-lg shadow-black font-light mt-3">
            Brak aktualności
          </div>
        )}
      </div>
    </>
  );
}

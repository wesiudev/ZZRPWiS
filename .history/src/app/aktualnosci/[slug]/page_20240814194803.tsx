import { getProductByUrl, getProducts } from "@/firebase";
import { renderMarkdown } from "../../../lib/parseMarkdown";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import Regions from "@/components/Regions";
import Pause from "@/components/Pause";
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({
    slug: product.url,
  }));
}
export const revalidate = 30;
export default async function Page({ params }: { params: any }) {
  const product: any = await getProductByUrl(params.slug);
  const products: any = await getProducts();
  const otherProducts = products
    .filter((p: any) => p.url !== params.slug && !p.additionalPage)
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  return (
    <>
      <Regions />
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 mt-24 lg:mt-44">
        {product?.title && (
          <h1 className="text-5xl font-bold text-left mb-6 lg:hidden drop-shadow-xl shadow-black text-zinc-800 font-cocobold">
            {product?.title}
          </h1>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
          <div className="flex flex-col">
            {product?.title && (
              <h1 className="hidden lg:block text-5xl font-bold text-left mb-6 drop-shadow-xl shadow-black text-zinc-800 font-cocobold">
                {product?.title}
              </h1>
            )}
            {product?.shortDesc && (
              <div
                className="bg-[#74B901] px-3 rounded-lg text-white !font-light"
                dangerouslySetInnerHTML={renderMarkdown(product?.shortDesc)}
              />
            )}
            {!product.primaryImage && (
              <div className="bg-gray-300 hover:bg-opacity-80 duration-300 flex items-center justify-center rounded-3xl w-full aspect-square mt-6 lg:hidden text-7xl text-gray-500">
                <FaImage />
              </div>
            )}
            {product?.primaryImage !== "" && (
              <Image
                src={product?.primaryImage}
                width={1024}
                height={1024}
                alt={`Obrazek glowny ${product?.title}`}
                className="w-full h-auto rounded-xl mt-6 lg:hidden"
              />
            )}
            {product?.text1Title && (
              <h2 className="text-2xl font-bold mt-6 drop-shadow-xl shadow-black text-zinc-800 font-cocobold">
                {product?.text1Title}
              </h2>
            )}
            {product?.text1Desc && (
              <div
                className="text-gray-700 font-light"
                dangerouslySetInnerHTML={renderMarkdown(product?.text1Desc)}
              />
            )}
            {product?.text2Title && (
              <h2 className="text-2xl font-bold mt-12 drop-shadow-xl shadow-black text-zinc-800 font-cocobold">
                {product?.text2Title}
              </h2>
            )}
            {product?.text2Desc && (
              <div
                className="text-gray-700 font-light"
                dangerouslySetInnerHTML={renderMarkdown(product?.text2Desc)}
              />
            )}
          </div>
          <div className="flex flex-col">
            {!product.primaryImage && (
              <div className="bg-gray-300 hover:bg-opacity-80 duration-300 items-center justify-center rounded-3xl w-full aspect-square hidden lg:flex text-7xl text-gray-500">
                <FaImage />
              </div>
            )}
            {product?.primaryImage !== "" && (
              <Image
                src={product?.primaryImage}
                width={1024}
                height={1024}
                alt={`Reklamy Grudziądz - ${product?.title}`}
                className="w-full h-auto rounded-xl hidden lg:block"
              />
            )}
            {product?.text3Title && (
              <h2 className="text-2xl font-bold mt-6 drop-shadow-xl shadow-black text-zinc-800 font-cocobold">
                {product?.text3Title}
              </h2>
            )}
            {product?.text3Desc && (
              <div
                className="text-gray-700 font-light"
                dangerouslySetInnerHTML={renderMarkdown(product?.text3Desc)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="w-full p-4 2xl:p-12 bg-gray-200 mt-12">
        <h2 className="text-3xl sm:text-5xl mb-6 text-zinc-800 drop-shadow-xl shadow-black font-bold text-center">
          NASZE WSPÓŁPRACE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            target="_blank"
            title="Dofinansowanie na remont domu"
            href="https://hexon.work/"
            className="flex flex-col mt-6 text-zinc-500 p-4 hover:bg-zinc-300 duration-100 group items-center justify-center border border-gray-400"
          >
            <Image
              src="/logo-hexon2.png"
              width={420}
              height={420}
              alt="Dofinansowanie na remont domu Hexon"
              className="w-[220px] sm:w-[270px] lg:w-[320px] mx-auto md:mx-0"
            />
            <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 italic text-center">
              Bezzwrotne dofinansowanie na remont domu do <br />{" "}
              <b>136,000,00 PLN</b>
            </div>
          </Link>
          <Link
            target="_blank"
            title="Optymalizacja kosztów prądu dla firm"
            href="https://redrayenergy.com/"
            className="flex flex-col mt-6 text-zinc-500 p-4 hover:bg-zinc-300 duration-100 group items-center justify-center border border-gray-400"
          >
            <Image
              src="/rre-logo.png"
              width={420}
              height={420}
              alt="Optymalizacja kosztów prądu dla firm"
              className="w-[220px] sm:w-[270px] lg:w-[320px] mx-auto md:mx-0"
            />
            <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 italic text-center">
              Optymalizacja kosztów prądu dla firm
            </div>
          </Link>
        </div>
      </div>

      {product?.secondaryImage !== "" &&
        product?.text4Title !== "" &&
        product?.text4Desc !== "" && (
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 gap-4">
            <div className="relative aspect-square overflow-hidden w-full">
              {!product.secondaryImage && (
                <div className="bg-gray-300 hover:bg-opacity-80 duration-300 items-center justify-center rounded-3xl w-full aspect-square flex text-7xl text-gray-500">
                  <FaImage />
                </div>
              )}
              {product?.secondaryImage !== "" && (
                <Image
                  src={product?.secondaryImage}
                  width={1024}
                  height={1024}
                  alt={`ZZRPWIS ${product?.title}`}
                  className="rounded-xl absolute inset-0 object-cover w-full h-full"
                />
              )}
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl text-left font-bold font-cocobold drop-shadow-xl shadow-black text-zinc-800">
                {product?.text4Title}
              </h2>
              <div
                className="text-gray-700 font-light"
                dangerouslySetInnerHTML={renderMarkdown(product?.text4Desc)}
              />
            </div>
          </div>
        )}
      {product.images?.length > 2 && (
        <div className="mt-24 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
          {product?.imagesHeadingSmallText && (
            <div className="text-base text-zinc-500 drop-shadow-lg shadow-black text-center ">
              {product?.imagesHeadingSmallText}
            </div>
          )}
          {product?.imagesHeadingMainText && (
            <h2 className="text-3xl text-center font-bold text-zinc-800 drop-shadow-lg shadow-black font-cocobold">
              {product?.imagesHeadingMainText}
            </h2>
          )}
          <div className="mt-12" />
        </div>
      )}
      <Pause />
      <div className="pl-4 md:pl-8 lg:pl-12 xl:pl-20 2xl:pl-32 pb-24 w-full">
        <h2 className="text-3xl font-bold text-left mt-24 mb-12 font-cocobold drop-shadow-xl shadow-black text-zinc-800">
          Zobacz też
        </h2>
      </div>
    </>
  );
}

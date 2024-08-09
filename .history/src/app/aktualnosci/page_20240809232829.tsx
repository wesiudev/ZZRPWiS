import Pause from "@/components/Pause";
import { getBlogPosts } from "@/firebase";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const posts = await getBlogPosts();
  return (
    <>
      <div className="sm:mt-[130px] w-full relative p-12">
        <h1 className="w-full py-12 text-white font-bold text-5xl sm:text-6xl drop-shadow-xl shadow-black">
          Aktualności ZZRPWiS
        </h1>

        <Pause />
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

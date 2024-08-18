import { Metadata } from "next";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { FaList, FaUpload } from "react-icons/fa6";
export const metadata: Metadata = {
  title: "Panel administracyjny",
};
export default async function Admin() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
      <Link
        href="/admin/products/new"
        className="aspect-square flex flex-col items-center justify-center w-full bg-gray-200 text-zinc-800 font-bold text-2xl 2xl:text-4xl"
      >
        <FaUpload className="mb-6" />
        <div>Dodaj wpis</div>
      </Link>
      <Link
        href="/admin/products"
        className="aspect-square flex flex-col items-center justify-center w-full bg-gray-200 text-zinc-800 font-bold text-2xl 2xl:text-4xl"
      >
        <FaList className="mb-6" />
        <div>Wszystkie wpisy</div>
      </Link>
      <Link
        href="/admin/products/drafts"
        className="aspect-square flex flex-col items-center justify-center w-full bg-gray-200 text-zinc-800 font-bold text-2xl 2xl:text-4xl"
      >
        <FaEdit className="mb-6" />
        <div>Kopie robocze</div>
      </Link>
    </div>
  );
}

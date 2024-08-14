import Link from "next/link";

export default function UrlConfig({
  product,
  handleChange,
}: {
  product: any;
  handleChange: any;
}) {
  return (
    <div>
      <h2 className="text-xl my-3 font-bold text-zinc-800 drop-shadow-xl shadow-black">
        Link do aktualności (np.
        https://zzrpwis.pl/aktualnosci/zzrpwis-jest-juz-w-internecie)
      </h2>
      <div className="flex items-center">
        <h2 className="text-lg">https://zzrpwis.pl/aktualnosci/</h2>{" "}
        <input
          type="text"
          value={product.url}
          name="url"
          onChange={(e) => handleChange(e)}
          className="font-bold bg-gray-300 outline-none w-full p-3 ml-3"
        />
      </div>
    </div>
  );
}

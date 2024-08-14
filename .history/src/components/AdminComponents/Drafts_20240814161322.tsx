import Link from "next/link";
import Products from "./Products";

export default function Drafts() {
  return (
    <div>
      {" "}
      <h2 className="text-white font-bold text-3xl mx-auto w-max">
        Kopie robocze
      </h2>
      <Products
        array={drafts}
        deleteRows={deleteMultipleDrafts}
        place="drafts"
      />
    </div>
  );
}

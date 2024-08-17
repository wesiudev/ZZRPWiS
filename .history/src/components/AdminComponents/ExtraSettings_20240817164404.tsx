"use client";

import { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import GoogleViewConfig from "./GoogleViewConfig";
import GoogleKeywordsConfig from "./GoogleKeywordsConfig";
import UrlConfig from "./UrlConfig";

export default function ExtraSettings({
  setExtraSettingsOpen,
  extraSettingsOpen,
  product,
  setProduct,
  handleChange,
  dbUpdate,
}: {
  setExtraSettingsOpen: Function;
  extraSettingsOpen: boolean;
  product: any;
  setProduct: Function;
  handleChange: any;
  dbUpdate: Function;
}) {
  useEffect(() => {
    dbUpdate(product.id, product);
  }, [extraSettingsOpen]);
  return (
    <div>
      <button
        onClick={() => setExtraSettingsOpen(!extraSettingsOpen)}
        className="flex items-center mr-4 text-white"
      >
        <FaCog className="mr-2" />
        Ustawienia dodatkowe
      </button>
      {extraSettingsOpen && (
        <div className="fixed pt-6 w-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-[80vh] shadow-md bg-white shadow-black z-10">
          <div className="flex items-center justify-between w-full px-6">
            <h2 className="text-2xl font-bold">Ustawienia dodatkowe</h2>
            <button
              onClick={() => setExtraSettingsOpen(false)}
              className="bg-gray-600 text-white rounded-xl px-3 py-1.5 hover:bg-gray-500 duration-300"
            >
              Zamknij
            </button>
          </div>
          <div className="h-full overflow-y-scroll w-full p-6">
            <GoogleViewConfig handleChange={handleChange} product={product} />
            <GoogleKeywordsConfig
              product={product}
              handleChange={handleChange}
            />
            <UrlConfig handleChange={handleChange} product={product} />
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import Image from "next/image";
import Input from "@/components/AdminComponents/Input";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaImage,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaTh,
} from "react-icons/fa";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

import ContentButton from "@/components/AdminComponents/ContentButton";
import HtmlInput from "@/components/AdminComponents/HtmlInput";
import { v4 as uuid } from "uuid";
import {
  createDraft,
  createProduct,
  deleteDraft,
  deleteProduct,
  storage,
  updateDraft,
  updateProduct,
} from "@/firebase";
import ImagePicker from "@/components/AdminComponents/ImagePicker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { EditorState } from "draft-js";
import { useRouter } from "next/navigation";
import ExtraSettings from "@/components/AdminComponents/ExtraSettings";
import { polishToEnglish } from "@/lib/polishToEnglish";
export default function ProductEdit({
  source,
  place,
}: {
  source: any;
  place: "products" | "drafts" | "new";
}) {
  const router = useRouter();
  const [htmlContent, setHtmlContent] = useState(() =>
    EditorState.createEmpty()
  );
  const initialInput = {
    type: "",
    title: "",
    label: "",
  };
  const [imagePickerOpen, setImagePickerOpen] = useState(false);
  const [product, setProduct] = useState<any>(source);
  const [sourceOfImagePicker, setSourceOfImagePicker] = useState("");
  const [currentInput, setCurrentInput] = useState(initialInput);
  const [loading, setLoading] = useState(false);
  const [draftCreated, setDraftCreated] = useState(false);
  const [freshId, setFreshId] = useState("");
  function closeImagePicker() {
    setImagePickerOpen(false);
    setSourceOfImagePicker("");
  }
  const [savedAutomatically, setSavedAutomatically] = useState(false);
  function updateAutomatically() {
    setLoading(true);
    if (place === "products") {
      updateProduct(product.id, product).then(() => {
        setLoading(false), setSavedAutomatically(true);
      });
    } else if (place === "drafts") {
      updateDraft(product.id, product).then(() => {
        setLoading(false), setSavedAutomatically(true);
      });
    } else if (place === "new") {
      if (draftCreated) {
        setLoading(true);
        updateDraft(freshId, product).then(() => setLoading(false));
      }
    }
  }
  useEffect(() => {
    const id = uuid();
    if (!draftCreated && place === "new")
      createDraft({ ...product, id: id }, id).then(() => setFreshId(id));
    setDraftCreated(true);
  }, []);
  useEffect(() => {
    updateAutomatically();
  }, [
    currentInput,
    product.primaryImage,
    product.secondaryImage,
    product.images,
  ]);

  function handleChange(e: any) {
    if (e.target.name !== "url") {
      setProduct({ ...product, [e.target.name]: e.target.value });
    } else if (e.target.name === "url") {
      setProduct({
        ...product,
        [e.target.name]: polishToEnglish(e.target.value),
      });
    }
  }
  function closeInput() {
    setCurrentInput(initialInput);
  }
  const [isUploading, setUploading] = useState(false);
  const [uploadCount, setUploadCount] = useState();
  async function upload(files: any) {
    setUploadCount(files.length);
    setUploading(true);
    const localImagesArray: any = [];
    const uploadFile = async (file: any) => {
      const randId = uuid();
      const imageRef = ref(storage, randId);

      try {
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        const data = {
          src: url,
        };

        localImagesArray.push(data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };

    // Iterate through each file and upload
    const uploadPromises = files.map(uploadFile);

    try {
      // Wait for all uploads to complete
      await Promise.all(uploadPromises);
      setProduct({
        ...product,
        images: [...product.images, ...localImagesArray],
      });

      setLoading(false);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading files:", error);
      setLoading(false);
      setUploading(false);
    }
  }
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <div
      className={`w-full duration-500 ${
        isFullscreen ? "fixed left-0 top-0 overflow-y-scroll h-screen" : "p-24"
      }`}
    >
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className={`fixed right-8 bottom-8 flex items-center group z-[1500]`}
      >
        <div className="group-hover:opacity-100 duration-300 opacity-0 bg-green-500 h-11 px-3 rounded-l-md flex items-center text-white">
          {isFullscreen ? "Zamknij" : "Pełny ekran"}
        </div>
        <div className="text-2xl aspect-square w-11 h-11 group-hover:rounded-l-none rounded-md bg-green-500 group-hover:bg-green-400 text-white items-center justify-center flex">
          {!isFullscreen && <AiOutlineFullscreen />}
          {isFullscreen && <AiOutlineFullscreenExit />}
        </div>
      </button>
      {isUploading && (
        <div className="z-[500] flex items-center justify-center text-center fixed left-0 top-0 bg-black bg-opacity-75 w-full h-screen font-bold text-xl text-white">
          Dodawanie {uploadCount} obrazów...
        </div>
      )}
      {imagePickerOpen && (
        <ImagePicker
          handler={upload}
          imagePickerOpen={imagePickerOpen}
          closeImagePicker={closeImagePicker}
          images={product.images}
          setProduct={setProduct}
          product={product}
          sourceOfImagePicker={sourceOfImagePicker}
        />
      )}
      <Input
        value={product[currentInput.title]}
        title={currentInput.title}
        handleChange={handleChange}
        type={currentInput.type}
        label={currentInput.label}
        closeInput={closeInput}
      />
      <HtmlInput
        setProduct={setProduct}
        product={product}
        label={currentInput.label}
        type={currentInput.type}
        title={currentInput.title}
        htmlContent={htmlContent}
        setHtmlContent={setHtmlContent}
        closeInput={closeInput}
      />
      <div className={`relative w-full bg-white min-h-screen`}>
        <div
          className={`z-[50] sticky w-full flex items-center justify-between bg-slate-800 left-0 top-0 p-1.5 ${
            isFullscreen ? "px-20" : ""
          } `}
        >
          <p className="text-white font-bold w-[50%]">
            {place === "new" && (
              <p className="text-white font-bold w-max">
                Dodajesz nowy wpis na stronę
              </p>
            )}
            {place !== "new" && (
              <>
                Pracujesz nad wpisem{" "}
                <span className="text-green-400 italic">
                  {!product.title && product.id}
                  {product.title && product.title}
                </span>
              </>
            )}
          </p>
          <ExtraSettings
            handleChange={handleChange}
            setProduct={setProduct}
            product={product}
            dbUpdate={updateProduct}
          />
          <div>
            <div className="flex flex-row items-center space-x-2">
              {place !== "new" && (
                <>
                  <button
                    onClick={() => {
                      if (place === "products") {
                        deleteProduct(product.id).then(() =>
                          router.push("/admin/products")
                        );
                      } else if (place === "drafts") {
                        deleteDraft(product.id).then(() =>
                          router.push("/admin/products/drafts")
                        );
                      }
                    }}
                    className="bg-red-500 hover:bg-red-400 text-white p-1.5 rounded-md"
                  >
                    Usuń
                  </button>

                  <button
                    onClick={() => {
                      if (place === "products") {
                        updateProduct(product.id, product).then(() =>
                          setTimeout(() => {
                            router.push("/admin/products");
                          }, 2000)
                        );
                      } else if (place === "drafts") {
                        updateDraft(product.id, product).then(() =>
                          setTimeout(() => {
                            router.push("/admin/products/drafts");
                          }, 2000)
                        );
                      }
                    }}
                    className={`bg-gray-500 hover:bg-gray-400
                   text-white p-1.5 rounded-md`}
                  >
                    {loading && <div className="text-white">Wczytywanie</div>}
                    {savedAutomatically && !loading && (
                      <div className="flex items-center">
                        <FaCheck className="mr-2 text-green-500" />{" "}
                        <div className="text-white">Zapisano</div>
                      </div>
                    )}
                    {!loading && !savedAutomatically && "Zapisz zmiany"}
                  </button>
                </>
              )}
              {(place === "new" || place === "drafts") && (
                <>
                  {loading && (
                    <div className="bg-green-500 hover:bg-green-400 text-white p-3">
                      Wczytywanie
                    </div>
                  )}
                  {!loading && (
                    <button
                      onClick={() => {
                        deleteDraft(product.id).then(() =>
                          createProduct(product).then(() =>
                            router.push("/admin/products")
                          )
                        );
                      }}
                      className="w-max bg-green-500 hover:bg-green-400 text-white p-3"
                    >
                      Dodaj wpis
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`${isFullscreen ? "px-32" : ""} p-12`}>
          <div className="grid grid-cols-2 gap-4 mx-auto mt-12">
            <div className="flex flex-col">
              {" "}
              <ContentButton
                label="Tytuł wpisu"
                value={product.title}
                type="text"
                title="title"
                setInput={setCurrentInput}
                optional={false}
              />
              <div className="mt-3"></div>
              <ContentButton
                label="Krótki opis"
                value={product.shortDesc}
                type="html"
                title="shortDesc"
                setInput={setCurrentInput}
                optional={false}
                setHtmlContent={setHtmlContent}
              />
              <ContentButton
                label="Tytuł tekstu 1"
                value={product.text1Title}
                type="text"
                title="text1Title"
                setInput={setCurrentInput}
                optional={true}
              />
              <ContentButton
                label="Opis tekstu 1"
                value={product.text1Desc}
                type="html"
                title="text1Desc"
                setInput={setCurrentInput}
                optional={true}
                setHtmlContent={setHtmlContent}
              />
              <ContentButton
                label="Tytuł tekstu 2"
                value={product.text2Title}
                type="text"
                title="text2Title"
                setInput={setCurrentInput}
                optional={true}
              />
              <ContentButton
                label="Opis tekstu 2"
                value={product.text2Desc}
                type="html"
                title="text2Desc"
                setInput={setCurrentInput}
                optional={true}
                setHtmlContent={setHtmlContent}
              />
            </div>
            {/* image input */}
            <div className="flex flex-col items-center mt-3">
              <div className="w-full">
                <button
                  style={{ boxShadow: "0px 0px 5px #000000" }}
                  className={`${
                    !product.primaryImage &&
                    "add_image_btn flex flex-col items-center justify-center text-zinc-800"
                  }`}
                  onClick={() => {
                    setImagePickerOpen(true);
                    setSourceOfImagePicker("primaryImage");
                  }}
                >
                  {!product.primaryImage && <FaImage className="text-7xl" />}
                  {product.primaryImage !== "" && (
                    <div className="min-w-full">
                      <Image
                        src={product.primaryImage}
                        width={1024}
                        height={1024}
                        alt=""
                        className="min-w-full object-cover"
                      />
                    </div>
                  )}
                </button>
              </div>{" "}
              <div className="w-full flex flex-col">
                <ContentButton
                  label="Tytuł tekstu 3"
                  value={product.text3Title}
                  type="text"
                  title="text3Title"
                  setInput={setCurrentInput}
                  optional={true}
                />
                <ContentButton
                  label="Opis tekstu 3"
                  value={product.text3Desc}
                  type="html"
                  title="text3Desc"
                  setInput={setCurrentInput}
                  optional={true}
                  setHtmlContent={setHtmlContent}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 grid grid-cols-2 w-full mt-24">
          <div className="w-full mt-4">
            <button
              onClick={() => {
                setImagePickerOpen(true);
                setSourceOfImagePicker("secondaryImage");
              }}
              className={`${
                !product.secondaryImage &&
                "add_image_btn flex flex-col items-center justify-center text-zinc-800"
              }`}
            >
              {!product.secondaryImage && (
                <>
                  <FaImage className="text-7xl" /> <br />{" "}
                  <span className="text-sm font-normal">(opcjonalnie)</span>
                </>
              )}
              {product.secondaryImage && (
                <div className="min-w-full">
                  <Image
                    style={{ boxShadow: "0px 0px 5px #000000" }}
                    src={product.secondaryImage}
                    width={1024}
                    height={1024}
                    alt=""
                    className="min-w-full object-cover"
                  />
                </div>
              )}
            </button>
          </div>
          <div className="flex flex-col pl-4">
            <ContentButton
              label="Tytuł tekstu 4"
              value={product.text4Title}
              type="text"
              title="text4Title"
              setInput={setCurrentInput}
              optional={true}
            />
            <ContentButton
              label="Opis tekstu 4"
              value={product.text4Desc}
              type="html"
              title="text4Desc"
              setInput={setCurrentInput}
              optional={true}
              setHtmlContent={setHtmlContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

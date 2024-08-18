import ProductEdit from "@/components/AdminComponents/ProductEdit";
export default function Page() {
  const product = {
    title: "",
    shortDesc: "",
    text1Title: "",
    text1Desc: "",
    text2Title: "",
    text2Desc: "",
    text3Title: "",
    text3Desc: "",
    text4Title: "",
    text4Desc: "",
    imagesHeadingSmallText: "",
    imagesHeadingMainText: "",
    images: [],
    primaryImage: "",
    secondaryImage: "",
    googleTitle: "",
    googleDescription: "",
    googleKeywords: "",
    url: "",
  };

  return <ProductEdit source={product} place="new" />;
}

import SectionMain from "../components/HomePageCompo/SectionMain";
import SaleSection from "../components/HomePageCompo/SaleSection";
import BlockItemsGroup from "../components/HomePageCompo/BlockItemsGroup";
import BlockItemsGroup2 from "../components/HomePageCompo/BlockItemsGroup2";
import SectionInquiry from "../components/HomePageCompo/SectionInquiry";
import SectionRecommend from "../components/HomePageCompo/SectionRecommend";
import SectionService from "../components/HomePageCompo/SectionService";
import SectionCountry from "../components/HomePageCompo/SectionCountry";
import Newsletter from "../components/Newsletter";
import NavForMobile from "../components/navbar/NavForMobile";
import { useProductStore } from "../stores/product.store";
import HeaderForMobile from "../components/navbar/HeaderForMobile.jsx";
import { useEffect } from "react";

export default function HomePage() {
  const { getFeaturedByCategory, getfeaturedProducts, getAllProducts } =
    useProductStore();
  const interiorProducts = getFeaturedByCategory("interior");
  const techProducts = getFeaturedByCategory("tech");

  useEffect(() => {
    getfeaturedProducts();
    getAllProducts();
  }, []);

  return (
    <div
      data-theme="winter"
      className="w-full min-h-screen bg-base-200 h-auto flex flex-col items-center"
    >
      <HeaderForMobile/>
      <NavForMobile />
      <SectionMain />
      <SaleSection />
      <BlockItemsGroup interiorProducts={interiorProducts} />
      <BlockItemsGroup2 techProducts={techProducts} />
      <SectionInquiry />
      <SectionRecommend />
      <SectionService />
      <SectionCountry />

      <Newsletter />
    </div>
  );
}

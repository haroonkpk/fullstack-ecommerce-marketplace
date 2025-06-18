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

export default function HomePage() {
 const { getAllPro } = useProductStore()
 getAllPro()
  return (
    <div
      data-theme="winter"
      className="w-full min-h-screen bg-base-200 h-auto flex flex-col items-center"
    >
       
      <NavForMobile/>
      <SectionMain />
      <SaleSection/>
      <BlockItemsGroup/>
      <BlockItemsGroup2/>
      <SectionInquiry/>
      <SectionRecommend/>
      <SectionService/>
      <SectionCountry/>
      <Newsletter/>
    </div>
  );
}

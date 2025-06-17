import ContentMain from '../components/DetailPageCompo/ContentMain'
import ContentMainForMobile from '../components/DetailPageCompo/ContentMainForMobile'
import NavBreadcrumb from '../components/productListpageCompo/navBreadcrumb';
import SectionTwo from '../components/DetailPageCompo/SectionTwo';
import Section3 from '../components/DetailPageCompo/Section3';
import Banner from '../components/DetailPageCompo/Banner';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useProductStore } from '../stores/product.store';


export default function DetailPage() {
  const {id} = useParams();

  const { getProductById } = useProductStore();
    const selectedProduct = getProductById(Number(id));

    
    useEffect(() => {
      getProductById(Number(id));
      window.scrollTo(0, 0);
    }, [id,selectedProduct]);
    

  return (
    <div
      data-theme="winter"
      className="w-full min-h-screen bg-base-200 h-auto flex flex-col items-center gap-6"
    >
      <NavBreadcrumb />
      <ContentMain product={selectedProduct} />
      <ContentMainForMobile product={selectedProduct} />
      <SectionTwo />
      <Section3 />

      <Banner />
    </div>
  );
}

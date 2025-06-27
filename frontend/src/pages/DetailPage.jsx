import ContentMain from "../components/DetailPageCompo/ContentMain";
import ContentMainForMobile from "../components/DetailPageCompo/ContentMainForMobile";
import NavBreadcrumb from "../components/productListpageCompo/NavBreadcrumb";
import SectionTwo from "../components/DetailPageCompo/SectionTwo";
import Section3 from "../components/DetailPageCompo/Section3";
import Banner from "../components/DetailPageCompo/Banner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductStore } from "../stores/product.store";

export default function DetailPage() {
  const { id } = useParams();

  const { getAllProducts, getProductById } = useProductStore();
  const selectedProduct = getProductById(id);
  // useState for scrolling to top when product changes
  useEffect(() => {
     getAllProducts();
  }, [getProductById]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div
      data-theme="winter"
      className="w-full min-h-screen bg-base-200 h-auto flex flex-col items-center sm:gap-6 "
    >
      {/* Breadcrumb Navigation */}
      <NavBreadcrumb />
      {/* Main content for desktop */}
      <ContentMain product={selectedProduct} />
      {/* Main content for mobile */}
      <ContentMainForMobile product={selectedProduct} />
      {/* section for product details */}
      <SectionTwo />
      {/* section for related products */}
      <Section3 />
      {/* Banner section */}
      <Banner />
    </div>
  );
}

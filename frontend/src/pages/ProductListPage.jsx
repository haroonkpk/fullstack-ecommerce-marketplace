import NavBreadcrumb from '../components/productListpageCompo/NavBreadcrumb.jsx'
import MainCompo from '../components/productListpageCompo/MainCompo.jsx';
import NavForMobile from '../components/navbar/NavForMobile.jsx';
import HeaderForFilter from '../components/productListpageCompo/HeaderForFilter.jsx';
import Newsletter from '../components/Newsletter.jsx';
import HeaderForMobile from "../components/navbar/HeaderForMobile.jsx"
import { useProductStore } from '../stores/product.store.js';
import { useEffect } from 'react';

export default function ProductListPage() {
  const { getAllProducts } = useProductStore();
  useEffect(()=>{
    getAllProducts()
  },[])
  return (
    <div
      data-theme="winter"
      className="w-full min-h-screen bg-base-200 h-auto flex flex-col items-center"
    >
      <HeaderForMobile />
      <NavForMobile />
      <NavBreadcrumb />
      <HeaderForFilter />
      <MainCompo />
      <Newsletter />
    </div>
  );
}

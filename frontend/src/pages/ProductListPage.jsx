import NavBreadcrumb from '../components/productListpageCompo/navBreadcrumb'
import MainCompo from '../components/productListpageCompo/mainCompo';
import NavForMobile from '../components/navbar/NavForMobile';
import HeaderForFilter from '../components/productListpageCompo/HeaderForFilter';
import Newsletter from '../components/Newsletter';
import HeaderForMobile from "../components/navbar/HeaderForMobile.jsx"

export default function ProductListPage() {
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

import { ArrowLeft, Menu } from "lucide-react";
import DrawerMobile from "./Drawer.mobile";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../stores/auth.store";

export default function HeaderForOtherPages() {
  const navigate = useNavigate();
  const { authUser } = useAuthStore();
  const { category } = useParams();
  const location = useLocation();
  // Helper booleans
  const isHome = location.pathname === "/";
  const isSuccess = location.pathname === "/success";
  const isCategoryPage = location.pathname.startsWith("/category");
  const isDetailPage = location.pathname.startsWith("/product");
  const isCartPage = location.pathname === "/cart";

  return (
    <>
      <div className="md:hidden navbar w-full h-auto flex items-center justify-between bg-base-100">
        <div className="flex gap-3">
          {isHome  || isSuccess ? (
            <div className="flex items-center">
              <label
                htmlFor="my-drawer"
                className="flex md:hidden btn bg-base-100 border-0 active:bg-blue-600 active:text-white drawer-button"
              >
                <Menu />
              </label>
              <img src="Brand/logo-colored.jpg" alt="Brand Logo" />
            </div>
          ) : isCategoryPage ? (
            <>
              <Link to={"/"}>
                <ArrowLeft />
              </Link>
              <span className="font-bold text-lg uppercase">
                {category || "Category"}
              </span>
            </>
          ) : (
            <>
              <Link to={"/category/AllCategory"}>
                <ArrowLeft />
              </Link>
              <span className="font-bold text-lg uppercase">{"Back"}</span>
            </>
          )}
        </div>
        <ul className="w-auto h-auto menu menu-xs md:menu-xs  p-0 menu-horizontal rounded-box">
          {/* cart icon */}
          <li
            onClick={() => {
              !authUser
                ? document.getElementById("my_modal_3").showModal()
                : navigate("/cart");
            }}
          >
            <div className="flex flex-col bg-base-100 border-0 active:!bg-blue-600 active:!text-white gap-y-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5463 13C17.2963 13 17.9563 12.59 18.2963 11.97L21.8763 5.48C22.2463 4.82 21.7663 4 21.0063 4H6.20634L5.26634 2H1.99634V4H3.99634L7.59634 11.59L6.24634 14.03C5.51634 15.37 6.47634 17 7.99634 17H19.9963V15H7.99634L9.09634 13H16.5463ZM7.15634 6H19.3063L16.5463 11H9.52634L7.15634 6ZM7.99634 18C6.89634 18 6.00634 18.9 6.00634 20C6.00634 21.1 6.89634 22 7.99634 22C9.09634 22 9.99634 21.1 9.99634 20C9.99634 18.9 9.09634 18 7.99634 18ZM17.9963 18C16.8963 18 16.0063 18.9 16.0063 20C16.0063 21.1 16.8963 22 17.9963 22C19.0963 22 19.9963 21.1 19.9963 20C19.9963 18.9 19.0963 18 17.9963 18Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </li>
          {/* profile icon */}
          <li>
            <div
              onClick={() => {
                !authUser
                  ? document.getElementById("my_modal_3").showModal()
                  : authUser.role === "admin"
                  ? navigate("/admin")
                  : document.getElementById("my_modal_4").showModal();
              }}
              className="flex flex-col bg-base-100 border-0 active:!bg-blue-600 active:!text-white gap-y-1"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <DrawerMobile />
    </>
  );
}

import { Menu } from "lucide-react";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/auth.store";
import { useCartStore } from "../../stores/cart.store";

export default function Header() {
  const { authUser, checkAuth } = useAuthStore();
  const { cartItems} = useCartStore();
  const [searchTerm, setSearchTerm] = useState("");


  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    "/category/AllCategory"
  );

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm.trim()}`)
      return setSearchTerm("")
    }
    if (selectedCategory !== "") {
      navigate(selectedCategory);
    }
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="hidden md:flex w-full h-auto items-center justify-center bg-base-100 md:shadow-sm md:mb-0.5">
        <div className="navbar   w-full max-w-[1180px] p-2.5 flex justify-between px-0 items-center">
          <div className="flex items-center gap-4">
            <label
              htmlFor="my-drawer"
              className="flex md:hidden btn bg-base-100 border-0 active:bg-blue-600 active:text-white drawer-button"
            >
              <Menu />
            </label>
            <Link to={"/"}>
              <img
                src="/Brand/logo-colored.jpg"
                alt=""
                className="md:hidden lg:block"
              />
            </Link>
            <img
              src="/Brand/logo-symbol.jpg"
              alt=""
              className="hidden md:block lg:hidden"
            />
          </div>
          <div className="hidden md:block">
            <div className="join sm:w-xs md:w-auto focus-within:border-2 rounded-box focus-within:border-blue-600">
              <div>
                <div>
                  <input
                    className="input join-item md:w-[190px] lg:w-[400px] focus:outline-none "
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <select
                onChange={handleChange}
                className=" select join-item focus:outline-none "
              >
                <option value="/category/AllCategory">All category</option>
                <option value="/category/tech">tech</option>
                <option value="/category/cloth">cloth</option>
                <option value="/category/interior">interior</option>
              </select>
              <div className="indicator">
                <span className="indicator-item "></span>
                <button
                  onClick={handleSearch}
                  className="btn join-item bg-blue-600 border-none text-white px-4"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div>
            <ul className="w-auto h-auto menu menu-xs md:menu-xs  p-0 menu-horizontal rounded-box ">
              <li>
                <div
                  onClick={() => {
                    !authUser
                      ? document.getElementById("my_modal_3").showModal()
                      : authUser.role === "admin"
                      ? navigate("/admin")
                      : document.getElementById("my_modal_4").showModal();
                  }}
                  className="flex flex-col bg-base-100 border-0 active:!bg-blue-600 active:!text-white gap-y-1 "
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z"
                      fill="#8B96A5"
                    />
                  </svg>

                  <p>Profile</p>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    !authUser
                      ? document.getElementById("my_modal_3").showModal()
                      : "";
                  }}
                  className="hidden md:flex  flex-col bg-base-100 border-0 active:!bg-blue-600 active:!text-white gap-y-1 "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z"
                      fill="#8B96A5"
                    />
                  </svg>

                  <p>Message</p>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    !authUser
                      ? document.getElementById("my_modal_3").showModal()
                      : "";
                  }}
                  className="hidden md:flex flex-col bg-base-100 border-0 active:!bg-blue-600 active:!text-white gap-y-1 "
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3502 17.13C10.5902 17.82 9.42015 17.82 8.66015 17.12L8.55015 17.02C3.30015 12.27 -0.129847 9.16004 0.000153087 5.28004C0.0601531 3.58004 0.930153 1.95004 2.34015 0.990044C4.98015 -0.809956 8.24015 0.0300438 10.0002 2.09004C11.7602 0.0300438 15.0202 -0.819956 17.6602 0.990044C19.0702 1.95004 19.9402 3.58004 20.0002 5.28004C20.1402 9.16004 16.7002 12.27 11.4502 17.04L11.3502 17.13Z"
                      fill="#8B96A5"
                    />
                  </svg>

                  <p>Orders</p>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    !authUser
                      ? document.getElementById("my_modal_3").showModal()
                      : navigate("/cart");
                  }}
                  className="indicator flex flex-col bg-base-100 border-0 active:!bg-blue-600 active:!text-white gap-y-1 "
                >
                  {cartItems.length > 0 ? (
                    <span className="indicator-item badge bg-[#00B517] text-[10px] rounded-full px-2 py-1 text-white">
                      {cartItems.length}
                    </span>
                  ) : (
                    ""
                  )}
                  <div className=" grid place-items-center">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z"
                        fill="#8B96A5"
                      />
                    </svg>

                    <p>MyCart</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

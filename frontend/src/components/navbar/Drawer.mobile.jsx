import {
  Home,
  LayoutGrid,
  Heart,
  ShoppingBag,
  Globe,
  Phone,
  Info,
  LogOut as LogOutIcon,
} from "lucide-react";
import { useAuthStore } from "../../stores/auth.store.js";
import { useEffect } from "react";

export default function DrawerMobile() {
   const { checkAuth, authUser, LogOut } = useAuthStore();
  
    useEffect(() => {
      checkAuth();
    }, [LogOut, checkAuth]);
  
    const handleLoginClick = () => {
      document.getElementById("my_modal_3")?.showModal();
    };
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80  space-y-4">
          {/* TOP PROFILE BOX */}
          <div className="bg-blue-100 p-4 flex flex-col ">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img src="https://i.pravatar.cc/100" alt="profile" />
              </div>
            </div>
            <div className="mt-2 space-x-3">
              {!authUser ? (
                <>
                  <button
                    onClick={handleLoginClick}
                    className="link link-hover text-sm"
                  >
                    Sign Up
                  </button>
                  <span>|</span>
                  <button
                    onClick={handleLoginClick}
                    className="link link-hover text-sm"
                  >
                    Register
                  </button>
                </>
              ) : (
                <button
                  onClick={() => LogOut()}
                  className="link link-hover font-bold text-lg gap-2 items-center text-red-500 flex "
                >
                  <LogOutIcon /> Logout
                </button>
              )}
            </div>
          </div>

          {/* MAIN MENU */}
          <div className=" border-b border-gray-400 p-2">
            <li>
              <a>
                <Home size={18} /> Home
              </a>
            </li>
            <li>
              <a>
                <LayoutGrid size={18} /> Categories
              </a>
            </li>
            <li>
              <a>
                <Heart size={18} /> Favorites
              </a>
            </li>
            <li>
              <a>
                <ShoppingBag size={18} /> My Orders
              </a>
            </li>
          </div>

          {/* SUPPORT MENU */}
          <div className=" border-b border-gray-400 p-2">
            <li>
              <a>
                <Globe size={18} /> English | USD
              </a>
            </li>
            <li>
              <a>
                <Phone size={18} /> Contact Us
              </a>
            </li>
            <li>
              <a>
                <Info size={18} /> About
              </a>
            </li>
          </div>

          {/* FOOTER MENU (no icons) */}
          <div className=" p-2 text-sm">
            <li>
              <a>User Agreement</a>
            </li>
            <li>
              <a>Partnership</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

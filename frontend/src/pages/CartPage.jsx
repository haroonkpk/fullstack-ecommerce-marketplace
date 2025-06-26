import React from "react";
import CartSummary from "../components/CartCompo.jsx/CartSummary";
import { useCartStore } from "../stores/cart.store";
import { useEffect } from "react";
import HeaderForOtherPages from "../components/navbar/HeaderForMobile";
import SaveForLater from "../components/CartCompo.jsx/SaveForLater";
import Banner from "../components/DetailPageCompo/Banner";
import { SiCarto } from "react-icons/si";
import { useSaveForLaterStore } from "../stores/saveForLater.store";

export default function CartPage() {
  const { getCartItems, isLoading, cartItems, deleteCartItem } = useCartStore();
  const { getSaveForLaterItems } = useSaveForLaterStore();

  useEffect(() => {
    getCartItems();
  }, [getCartItems, deleteCartItem]);

  useEffect(() => {
    getSaveForLaterItems();
  }, [getSaveForLaterItems]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#f8f9fc]">
        Loading...
      </div>
    );
  }
  return (
    <>
      <HeaderForOtherPages />
      <div
        data-theme="winter"
        className="w-full min-h-screen bg-base-200 h-auto flex flex-col items-center gap-y-4"
      >
        <div className="w-full max-w-[1180px] p-3">
          <h1 className="text-2xl font-semibold">
            My Cart({cartItems.length})
          </h1>
        </div>

        <CartSummary cartItems={cartItems} />
        {/* add for later */}
        <SaveForLater />
        {/* banner */}
        <Banner />
      </div>
    </>
  );
}

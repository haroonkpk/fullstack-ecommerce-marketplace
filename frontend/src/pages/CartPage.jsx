import React from "react";
import CartSummary from "../components/CartCompo.jsx/CartSummary";
import { useCartStore } from "../stores/cart.store";
import { useEffect } from "react";

export default function CartPage() {
  const { getCartItems, isLoading } = useCartStore();
  
  useEffect(() => {
    getCartItems();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#f8f9fc]">
        Loading...
      </div>
    );
  }
  return (
    <div
      data-theme="winter"
      className="w-full min-h-screen bg-base-200 h-auto flex flex-col items-center"
    >
      <CartSummary />
    </div>
  );
}

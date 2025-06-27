import { ArrowLeft, MoreVertical, ShoppingCart } from "lucide-react";

import { useCartStore } from "../../stores/cart.store";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { useSaveForLaterStore } from "../../stores/saveForLater.store";
import { useState } from "react";

export default function CartSummary({ cartItems }) {
  const { deleteCartItem, getCartItems, updateCArtItem } = useCartStore();
  const { addToSaveForLater, getSaveForLaterItems } = useSaveForLaterStore();

  // cart items quantity updates for mobile
  const handleQuantityUpdate = async (productId, currentQty, type) => {
    const newQty = type === "inc" ? currentQty + 1 : currentQty - 1;
    if (newQty < 1) return;
    await updateCArtItem(productId, newQty);
    await getCartItems();
  };

  // cart items quantity updates for desctop
  const handleQuantityChange = async (productId, newQty) => {
    await updateCArtItem(productId, newQty);
    await getCartItems();
  };

  const handleDelete = async (productId) => {
    await deleteCartItem(productId);
    getCartItems();
  };

  const handleAddToSaveForLater = async (productId) => {
    await addToSaveForLater(productId);
    getSaveForLaterItems();
  };

  return (
    <div className="w-full max-w-[1180px] relative flex flex-col md:flex-row justify-between md:gap-3 ">
      <div className="p-3 container border h-fit border-b-0  md:border-gray-300 rounded  space-y-2 bg-base-100">
        {/* Empty cart ui */}
        {cartItems?.length === 0 && <EmptyCartUI />}

        {/* cart items for desctop*/}
        <div className="hidden sm:block">
          {cartItems?.map((item) => (
            <div
              key={item.product?._id}
              className="w-full flex justify-between gap-2 border-b border-gray-300 pb-2"
            >
              <div className="flex gap-2">
                <div className="w-[90px] h-[90px] border border-gray-100 rounded flex items-center justify-center">
                  <img
                    src={item.product?.images?.[0]}
                    alt={item.product?.name}
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1>{item.product?.name}</h1>
                  <h2>{item.product?.description}</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(item.product?._id)}
                      className="btn bg-white text-[#dc2626] border-gray-200"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handleAddToSaveForLater(item.product?._id)}
                      className="btn  bg-white text-blue-600 border-gray-200"
                    >
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <h1 className="font-bold">
                  ${item.product?.price * item.quantity}
                </h1>
                <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1">
                  <label>Qty:</label>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.product?._id,
                        Number(e.target.value)
                      )
                    }
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cart itme for mobile */}
        <div className=" sm:hidden">
          {cartItems.map((item) => (
            <div className="border-b border-gray-300 pb-2">
              <div key={item._id} className="w-full flex justify-between gap-2">
                <div className="flex gap-2">
                  <div className="w-[90px] h-[90px] border border-gray-100 rounded flex items-center justify-center">
                    <img
                      src={item.product?.images?.[0]}
                      alt={item.product?.name}
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1>{item.product?.name}</h1>
                    <h2>{item.product?.description}</h2>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <MoreVertical size={24} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                {/* quantity button */}
                <div className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded w-fit">
                  <button
                    onClick={() =>
                      handleQuantityUpdate(
                        item.product._id,
                        item.quantity,
                        "dec"
                      )
                    }
                    className="text-xl px-2 border-r border-gray-400"
                  >
                    -
                  </button>
                  <span className="min-w-[20px] px-4 text-center font-bold text-lg">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityUpdate(
                        item.product._id,
                        item.quantity,
                        "inc"
                      )
                    }
                    className="text-xl px-2  border-l border-gray-400"
                  >
                    +
                  </button>
                </div>
                <h1 className="font-bold">
                  ${item.product?.price * item.quantity}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-between items-center mt-4">
          {/* back to shoping button */}
          {cartItems.length > 0 && (
            <Link to="/category/AllCategory">
              <button className="btn bg-blue-600 text-white">
                <ArrowLeft />
                Back to Shopping
              </button>
            </Link>
          )}
          {/* remove all items */}
          {cartItems.length > 0 && (
            <button
              onClick={() => {
                cartItems.forEach((item) => handleDelete(item.product?._id));
              }}
              className="btn border-gray-300 bg-white text-[#dc2626] mt-2"
            >
              Remove All
            </button>
          )}
        </div>
      </div>

      {/* order summery */}
      <div className="w-full sm:max-w-[280px] h-fit flex-col gap-3">
        <div className=" hidden md:block p-5 container border border-gray-300 rounded space-y-2 bg-base-100">
          <h1>have a coupon?</h1>
          <div className="join w-full">
            <input
              type="text"
              className="input join-item"
              placeholder="Add coupon"
            />
            <button className="btn join-item bg-base-100 border border-gray-300 ">
              <span className="text-blue-600">Apply</span>
            </button>
          </div>
        </div>
        {/* Order Summary */}
        <div className="p-5 container border-t-0 md:border border-gray-300 rounded bg-base-100">
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}

const EmptyCartUI = () => (
  <div className="flex flex-col items-center justify-center space-y-4 py-16">
    <ShoppingCart className="h-24 w-24 text-gray-300" />
    <h3 className="text-2xl font-semibold ">Your cart is empty</h3>
    <p className="text-gray-400">
      Looks like you {"haven't"} added anything to your cart yet.
    </p>
    <Link
      className="mt-4 rounded-md bg-[#00B517] px-6 py-2 text-white transition-colors hover:bg-emerald-600"
      to="/category/AllCategory"
    >
      Start Shopping
    </Link>
  </div>
);

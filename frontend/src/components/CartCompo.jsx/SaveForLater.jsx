import { Link } from "react-router-dom";
import { useProductStore } from "../../stores/product.store";
import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useSaveForLaterStore } from "../../stores/saveForLater.store";
import { useCartStore } from "../../stores/cart.store";

export default function SaveForLater() {
  const { saveForLaterItems, removeFromSaveForLater, getSaveForLaterItems } =
    useSaveForLaterStore();
  const { addToCart, getCartItems } = useCartStore();

  const handleAddToCartAndRemove= async (producId)=>{
    await addToCart(producId)
    await removeFromSaveForLater(producId)
    getSaveForLaterItems()
    getCartItems()
  }
  // remove from save for later items
  const handleRemove= async (producId)=>{
    await removeFromSaveForLater(producId)
    getSaveForLaterItems()
  }
  return (
    <div className="w-full max-w-[1180px] mt-5 md:mt-0 h-auto container border border-gray-300 rounded md:bg-base-100 p-5 flex flex-col gap-4">
      <div>
        <h1 className="font-semibold">Save for later</h1>
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row gap-5 items-center overflow-auto">
        {/* product for desctop */}
        {saveForLaterItems.map((itm, i) => (
          <Link
            key={i}
            // to={`/product/${itm.product?._id}`}
            className="flex flex-col  justify-center gap-2"
          >
            <div className="w-[172px] h-[172px] bg-gray-300 rounded flex justify-center items-center">
              <img
                className="w-[150px] h-[150px]"
                src={itm.product?.images?.[0]}
                alt="recommendedItem"
              />
            </div>
            <div>
              <p>{itm.product?.price}</p>
              <h1 className="leading-tight w-[142px] text-gray-400">
                {itm.product?.name}
              </h1>
              <button
                onClick={() => handleAddToCartAndRemove(itm.product?._id)}
                className="btn flex items-center justify-center rounded mt-2 bg-white border-gray-300 text-blue-600  px-5 py-2 text-center  font-medium
					  focus:outline-none "
              >
                <ShoppingCart size={22} className="mr-2" />
                Move to cart
              </button>
            </div>
          </Link>
        ))}
      </div>
      {/* product for mobile */}
      <div className="sm:hidden space-y-2">
      {saveForLaterItems.map((item) => (
        <div
          key={item.product?._id}
          className="w-full bg-base-100 justify-between gap-2 border border-gray-300  rounded-lg p-3 pb-2"
        >
          <div className="flex gap-2">
            {/* img */}
            <div className="w-[100px] h-[100px]  flex items-center justify-center">
              <img
                src={item.product?.images?.[0]}
                alt={item.product?.name}
                className="object-cover rounded"
              />
            </div>
            {/* price and name */}
            <div className="flex flex-col gap-1.5">
              <h1>{item.product?.name}</h1>
              <h1 className="font-bold">${item.product?.price}</h1>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCartAndRemove(item.product?._id)}
                  className="btn  bg-white text-blue-600 border-gray-200"
                >
                  Move to cart
                </button>
                <button
                  onClick={() => handleRemove(item.product?._id)}
                  className="btn bg-white text-[#dc2626] border-gray-200"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

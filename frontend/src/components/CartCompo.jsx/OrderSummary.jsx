import { useMemo } from "react";
import {
  SiVisa,
  SiPaypal,
  SiApplepay,
  SiMastercard,
  SiGooglepay,
} from "react-icons/si";
import { Link } from "react-router-dom";

export default function OrderSummary({ cartItems }) {
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (abtak, item) => abtak + item.product?.price * item.quantity,
      0
    );
  }, [cartItems]);

  const discount = subtotal > 100 ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.05;
  const total = subtotal - discount + tax;

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2.5">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal ">Subtotal:</dt>
            <dd className="text-base font-medium ">${subtotal.toFixed(2)}</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal ">Discount:</dt>
            <dd className="text-base font-medium text-red-400">
              -${discount.toFixed(2)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal ">Tax (5%):</dt>
            <dd className="text-base font-medium text-[#00B517]">
              ${tax.toFixed(2)}
            </dd>
          </dl>
          <dl className="flex items-center justify-between gap-4 border-t border-gray-600 pt-2">
            <dt className="text-base font-bold ">Total</dt>
            <dd className="text-base font-bold ">${total.toFixed(2)}</dd>
          </dl>
        </div>
        <Link to={"/fingerprint"}>
          <button className="btn flex w-full items-center justify-center rounded bg-[#00B517] px-5 py-2.5 text-sm font-medium text-white cursor-pointer focus:outline-none">
            Checkout
          </button>
        </Link>
        <div className="flex gap-4 mt-2 text-2xl">
          <div className=" border border-gray-300 rounded p-1 py-0">
            <SiVisa
              className="cursor-pointer hover:scale-110 transition-transform"
              color="#1A1F71"
            />
          </div>
          <div className=" border border-gray-300 rounded p-1 py-0">
            <SiMastercard
              className="cursor-pointer hover:scale-110 transition-transform"
              color="red"
            />
          </div>
          <div className=" border border-gray-300 rounded p-1 py-0">
            <SiPaypal
              size={22}
              className="cursor-pointer hover:scale-110 transition-transform"
              color="#003087"
            />
          </div>
          <div className=" border border-gray-300 rounded p-1 py-0">
            <SiApplepay
              className="cursor-pointer hover:scale-110 transition-transform"
              color="#000000"
            />
          </div>
          <div className=" border border-gray-300 rounded p-1 py-0">
            <SiGooglepay
              className="cursor-pointer hover:scale-110 transition-transform"
              color="#4285F4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

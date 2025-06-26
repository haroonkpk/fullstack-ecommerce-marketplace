import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import Confetti from "react-confetti";

const PurchaseSuccessUI = () => {
  return (
    <div
      data-theme="winter"
      className="w-full h-screen py-5 bg-base-200 flex items-center justify-center px-4"
    >
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={0.1}
        style={{ zIndex: 99 }}
        numberOfPieces={700}
        recycle={false}
      />

      <div className="max-w-md w-full bg-base-100 rounded-lg shadow-xl overflow-hidden relative z-10">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center">
            <CheckCircle className="text-[#00B517] w-16 h-16 mb-4" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#00B517] mb-2">
            Purchase Successful!
          </h1>

          <p className="0 text-center mb-2">
            Thank you for your order. We're processing it now.
          </p>
          <p className="text-[#00B517] text-center text-sm mb-6">
            Check your email for order details and updates.
          </p>

          <div className=" rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm ">Order number</span>
              <span className="text-sm font-semibold text-[#00B517]">
                #12345
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm ">Estimated delivery</span>
              <span className="text-sm font-semibold text-[#00B517]">
                3–5 business days
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4
             rounded-lg transition duration-300 flex items-center justify-center"
            >
              <HandHeart className="mr-2" size={18} />
              Thanks for trusting us!
            </button>
            <a
              href="/"
              className="w-full  text-blue-600 font-bold py-2 px-4 
            rounded-lg transition duration-400 flex items-center justify-center"
            >
              Back to Home
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccessUI;

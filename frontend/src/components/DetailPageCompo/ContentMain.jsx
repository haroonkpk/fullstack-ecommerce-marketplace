import { useCallback, useEffect, useState } from "react";
import { useAuthStore } from "../../stores/auth.store";
import { useCartStore } from "../../stores/cart.store";
import toast from "react-hot-toast";
import { useSaveForLaterStore } from "../../stores/saveForLater.store";

export default function ContentMain({ product }) {
  const { addToCart } = useCartStore();
  const { authUser } = useAuthStore();
  const { addToSaveForLater } = useSaveForLaterStore();

  const handleAddToCart = () => {
    if (!authUser) {
      toast.error("Please login to add items to your cart.");
      return;
    }
    addToCart(product._id);
  };
  const handleAddToSaveForLater = () => {
    if (!authUser) {
      toast.error("Please login to save items for later.");
      return;
    }
    addToSaveForLater(product._id);
  };

  if (!product)
    return (
      <div className="animate-pulse h-60 w-full bg-gray-200 rounded"></div>
    );
  const [img, setImg] = useState(product?.images?.[0] || "");

  const handleThumbnailClick = useCallback((itm) => {
    setImg(itm);
  }, []);
  useEffect(() => {
    if (product?.images?.[0]) {
      setImg(product.images[0]);
    }
  }, [product]);
  return (
    <div className="hidden sm:flex w-full max-w-[1180px] h-auto container p-5 border border-gray-300 rounded bg-base-100  flex-col items-center justify-center md:grid md:grid-cols-2  lg:flex lg:flex-row lg:justify-normal gap-5">
      {/* 1st */}
      <div className="w-full h-auto lg:flex lg:flex-col md:col-span-2 overflow-auto gap-3">
        <div className="w-full h-[380px] p-4 border border-gray-300 rounded flex justify-center items-center overflow-hidden">
          <img
            src={img}
            alt="Selected product"
            className="w-full h-auto max-w-[400px] max-h-[400px] min-h-[98px] min-w-[98px] object-cover"
          />
        </div>
        <div className="w-full max-w-[895px] h-auto flex items-center sm:justify-center overflow-auto gap-1">
          {product.images?.map((itm, i) => (
            <div key={i}>
              <div
                onClick={() => handleThumbnailClick(itm)}
                className={`w-[56px] h-[56px] border rounded overflow-hidden ${
                  img === itm ? "border-gray-500" : "border-gray-300"
                }`}
              >
                <img
                  src={itm}
                  alt={`Thumbnail ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 2nd cols */}
      <div className="w-full max-w-[430px]">
        <div>
          <svg
            width="84"
            height="24"
            viewBox="0 0 84 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.8182 6.36364H27.4091V18H28.8182V6.36364ZM32.6026 12.75C32.6026 11.2273 33.5457 10.3636 34.8298 10.3636C36.0741 10.3636 36.8298 11.1761 36.8298 12.5455V18H38.1707V12.4545C38.1707 10.2273 36.9832 9.15909 35.2162 9.15909C33.898 9.15909 33.0798 9.75 32.6707 10.6364H32.5571V9.27273H31.2616V18H32.6026V12.75ZM50.9028 11.2273C50.4824 9.98864 49.5392 9.15909 47.8119 9.15909C45.971 9.15909 44.6074 10.2045 44.6074 11.6818C44.6074 12.8864 45.3233 13.6932 46.9256 14.0682L48.3801 14.4091C49.2608 14.6136 49.6756 15.0341 49.6756 15.6364C49.6756 16.3864 48.8801 17 47.6301 17C46.5335 17 45.846 16.5284 45.6074 15.5909L44.3347 15.9091C44.6472 17.392 45.8687 18.1818 47.6528 18.1818C49.6812 18.1818 51.0619 17.0739 51.0619 15.5682C51.0619 14.3523 50.3006 13.5852 48.7437 13.2045L47.4483 12.8864C46.4142 12.6307 45.9483 12.2841 45.9483 11.6136C45.9483 10.8636 46.7437 10.3182 47.8119 10.3182C48.9824 10.3182 49.4653 10.9659 49.6983 11.5682L50.9028 11.2273ZM56.6759 9.27273H54.8122V7.18182H53.4713V9.27273H52.1531V10.4091H53.4713V15.8636C53.4713 17.3864 54.6986 18.1136 55.8349 18.1136C56.3349 18.1136 56.6531 18.0227 56.8349 17.9545L56.5622 16.75C56.4486 16.7727 56.2668 16.8182 55.9713 16.8182C55.3804 16.8182 54.8122 16.6364 54.8122 15.5V10.4091H56.6759V9.27273ZM61.9446 18.1818C64.3082 18.1818 65.8991 16.3864 65.8991 13.6818C65.8991 10.9545 64.3082 9.15909 61.9446 9.15909C59.581 9.15909 57.9901 10.9545 57.9901 13.6818C57.9901 16.3864 59.581 18.1818 61.9446 18.1818ZM61.9446 16.9773C60.1491 16.9773 59.331 15.4318 59.331 13.6818C59.331 11.9318 60.1491 10.3636 61.9446 10.3636C63.7401 10.3636 64.5582 11.9318 64.5582 13.6818C64.5582 15.4318 63.7401 16.9773 61.9446 16.9773ZM71.2915 18.1818C73.2233 18.1818 74.496 17 74.7233 15.4545H73.3824C73.1324 16.4091 72.3369 16.9773 71.2915 16.9773C69.7006 16.9773 68.6778 15.6591 68.6778 13.6364C68.6778 11.6591 69.7233 10.3636 71.2915 10.3636C72.4733 10.3636 73.1778 11.0909 73.3824 11.8864H74.7233C74.496 10.25 73.1097 9.15909 71.2687 9.15909C68.9051 9.15909 67.3369 11.0227 67.3369 13.6818C67.3369 16.2955 68.8369 18.1818 71.2915 18.1818ZM76.4835 18H77.8244V14.733L78.7619 13.8636L82.029 18H83.7335L79.7733 13L83.4608 9.27273H81.8017L77.9835 13.1591H77.8244V6.36364H76.4835V18Z"
              fill="#00B517"
            />
            <path
              d="M8.795 15.875L4.625 11.705L3.205 13.115L8.795 18.705L20.795 6.70504L19.385 5.29504L8.795 15.875Z"
              fill="#00B517"
            />
          </svg>
        </div>
        <div>
          <h1 className="font-bold">{product.name}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <span>
            <svg
              width="80"
              height="15"
              viewBox="0 0 80 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z"
                fill="#D5CDC5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z"
                fill="#FF9017"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z"
                fill="#FF9017"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z"
                fill="#FF9017"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
                fill="#FF9017"
              />
            </svg>
          </span>
          <span className="text-[#FF9017]">9.3</span>
          <span>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
            </svg>
          </span>
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33332 3.33329H16.6667V13.3333H4.30832L3.33332 14.3083V3.33329ZM3.33332 1.66663C2.41666 1.66663 1.67499 2.41663 1.67499 3.33329L1.66666 18.3333L4.99999 15H16.6667C17.5833 15 18.3333 14.25 18.3333 13.3333V3.33329C18.3333 2.41663 17.5833 1.66663 16.6667 1.66663H3.33332ZM4.99999 9.99996H15V11.6666H4.99999V9.99996ZM4.99999 7.49996H15V9.16663H4.99999V7.49996ZM4.99999 4.99996H15V6.66663H4.99999V4.99996Z"
                fill="#8B96A5"
              />
            </svg>
          </span>
          <span>32 reviews</span>
          <span>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
            </svg>
          </span>
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 5.90834H14.3417L10.6917 0.441675C10.5333 0.208342 10.2667 0.0916748 10 0.0916748C9.73334 0.0916748 9.46668 0.208342 9.30834 0.450008L5.65834 5.90834H1.66668C1.20834 5.90834 0.833344 6.28334 0.833344 6.74167C0.833344 6.81667 0.841677 6.89167 0.866677 6.96667L2.98334 14.6917C3.17501 15.3917 3.81668 15.9083 4.58334 15.9083H15.4167C16.1833 15.9083 16.825 15.3917 17.025 14.6917L19.1417 6.96667L19.1667 6.74167C19.1667 6.28334 18.7917 5.90834 18.3333 5.90834ZM10 2.40834L12.3333 5.90834H7.66668L10 2.40834ZM15.4167 14.2417L4.59168 14.25L2.75834 7.57501H17.25L15.4167 14.2417ZM10 9.24167C9.08334 9.24167 8.33334 9.99167 8.33334 10.9083C8.33334 11.825 9.08334 12.575 10 12.575C10.9167 12.575 11.6667 11.825 11.6667 10.9083C11.6667 9.99167 10.9167 9.24167 10 9.24167Z"
                fill="#8B96A5"
              />
            </svg>
          </span>
          <span>154 sold</span>
        </div>
        <div className="w-full min-w-[360px] max-w-[430px] h-[72px] bg-[#FFF0DF] flex gap-10 p-4">
          <div>
            <h1 className="text-[#FA3434] font-bold">{product.price}</h1>
            <p className="text-[13px]">50-100 pcs</p>
          </div>
          <div className="border-l border-gray-400 px-2">
            <h1 className=" font-bold">{product.price}</h1>
            <p className="text-[13px]">100-700 pcs</p>
          </div>
          <div className="border-l border-gray-400 px-2">
            <h1 className=" font-bold">{product.price}</h1>
            <p className="text-[13px]">700+ pcs</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex border-b mt-4 border-gray-300   ">
            <span className="[150px]">Price: </span> <span>Negotiable</span>
          </div>
          <div className="flex flex-col  gap-4 border-b border-gray-300 ">
            <div className="flex ">
              <span className="w-[150px]">Type: </span>{" "}
              <span>Classic shoes</span>
            </div>
            <div className="flex">
              <span className="w-[150px]">Material: </span>{" "}
              <span>Plastic material</span>
            </div>
            <div className="flex">
              <span className="w-[150px]">Design: </span>{" "}
              <span>Modern nice</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-b border-gray-300 ">
            <div className="flex">
              <span className="w-[150px]">Customization: </span>
              <span>Customized logo and design</span>
            </div>
            <div className="flex">
              <span className="w-[150px]">Protection: </span>
              <span>Refund Policy</span>
            </div>
            <div className="flex">
              <span className="w-[150px]">Warranty: </span>{" "}
              <span>2 years full warranty </span>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="w-full max-w-[265px] flex flex-col items-center gap-4">
        <div className="w-full h-fit max-w-[285px] border border-gray-300 rounded p-3 flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="w-[48px] h-[48px] bg-[#C6F3F1] flex justify-center items-center">
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00852269 21V0.636363H7.64489C9.20928 0.636363 10.5218 0.908143 11.5824 1.4517C12.6496 1.99526 13.455 2.75757 13.9986 3.73864C14.5488 4.71307 14.8239 5.84991 14.8239 7.14915C14.8239 8.45502 14.5455 9.58854 13.9886 10.5497C13.4384 11.5043 12.6264 12.2434 11.5526 12.767C10.4787 13.2841 9.15956 13.5426 7.59517 13.5426H2.15625V10.4801H7.09801C8.01278 10.4801 8.76184 10.3542 9.34517 10.1023C9.9285 9.84375 10.3594 9.46922 10.6378 8.97869C10.9228 8.48153 11.0653 7.87168 11.0653 7.14915C11.0653 6.42661 10.9228 5.81013 10.6378 5.29972C10.3527 4.78267 9.91856 4.39157 9.33523 4.12642C8.75189 3.85464 7.99953 3.71875 7.07812 3.71875H3.69744V21H0.00852269ZM10.5284 11.7727L15.5696 21H11.4531L6.50142 11.7727H10.5284Z"
                  fill="#4CA7A7"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <div>
              <h1>Supplier</h1>
              <h1>Guanjoi Trading LLC</h1>
            </div>
          </div>
          <div className="w-full max-w-[247px] h-0 border-b border-gray-300"></div>
          <div className="flex items-center gap-3">
            <span>
              <img
                className="w-[21px] h-[15px]"
                src="\Image\flags\Property 1=DE.png"
                alt=""
              />
            </span>
            <span>Germany, Berlin</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z"
                  fill="#8B96A5"
                />
              </svg>
            </span>
            <span>Verified Seller</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99169 1.66663C5.39169 1.66663 1.66669 5.39996 1.66669 9.99996C1.66669 14.6 5.39169 18.3333 9.99169 18.3333C14.6 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6 1.66663 9.99169 1.66663ZM15.7667 6.66663H13.3084C13.0417 5.62496 12.6584 4.62496 12.1584 3.69996C13.6917 4.22496 14.9667 5.29163 15.7667 6.66663ZM10 3.36663C10.6917 4.36663 11.2334 5.47496 11.5917 6.66663H8.40835C8.76669 5.47496 9.30835 4.36663 10 3.36663ZM3.55002 11.6666C3.41669 11.1333 3.33335 10.575 3.33335 9.99996C3.33335 9.42496 3.41669 8.86663 3.55002 8.33329H6.36669C6.30002 8.88329 6.25002 9.43329 6.25002 9.99996C6.25002 10.5666 6.30002 11.1166 6.36669 11.6666H3.55002ZM4.23335 13.3333H6.69169C6.95835 14.375 7.34169 15.375 7.84169 16.3C6.30835 15.775 5.03335 14.7166 4.23335 13.3333ZM6.69169 6.66663H4.23335C5.03335 5.28329 6.30835 4.22496 7.84169 3.69996C7.34169 4.62496 6.95835 5.62496 6.69169 6.66663ZM10 16.6333C9.30835 15.6333 8.76669 14.525 8.40835 13.3333H11.5917C11.2334 14.525 10.6917 15.6333 10 16.6333ZM11.95 11.6666H8.05002C7.97502 11.1166 7.91669 10.5666 7.91669 9.99996C7.91669 9.43329 7.97502 8.87496 8.05002 8.33329H11.95C12.025 8.87496 12.0834 9.43329 12.0834 9.99996C12.0834 10.5666 12.025 11.1166 11.95 11.6666ZM12.1584 16.3C12.6584 15.375 13.0417 14.375 13.3084 13.3333H15.7667C14.9667 14.7083 13.6917 15.775 12.1584 16.3ZM13.6334 11.6666C13.7 11.1166 13.75 10.5666 13.75 9.99996C13.75 9.43329 13.7 8.88329 13.6334 8.33329H16.45C16.5834 8.86663 16.6667 9.42496 16.6667 9.99996C16.6667 10.575 16.5834 11.1333 16.45 11.6666H13.6334Z"
                  fill="#8B96A5"
                />
              </svg>
            </span>
            <span>Verified Seller</span>
          </div>
          {authUser ? (
            <button
              onClick={handleAddToCart}
              className="btn w-full bg-[#00B517] text-white"
            >
              Add to cart
            </button>
          ) : (
            <button className="btn w-full bg-blue-600 text-white">
              Send inquiry
            </button>
          )}
          <button className="btn w-full  bg-white text-blue-600 border border-gray-300">
            Seller’s profile
          </button>
        </div>
        <div onClick={handleAddToSaveForLater} className="flex gap-2">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z"
                fill="#0D6EFD"
              />
            </svg>
          </span>
          <span className="text-[#0D6EFD] cursor-pointer">Save for later</span>
        </div>
      </div>
    </div>
  );
}

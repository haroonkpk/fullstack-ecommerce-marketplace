import { Link } from "react-router-dom";
import { useSaveForLaterStore } from "../../stores/saveForLater.store";

export default function ListView({ searchedProducts }) {
  const { addToSaveForLater } = useSaveForLaterStore();

  return (
    <>
      {searchedProducts.map((itm, i) => {
        return (
          <div
            key={itm.id || i}
            className="w-full h-auto overflow-hidden p-5 border mb-2 border-gray-300 rounded bg-white flex"
          >
            <Link to={`/product/${itm._id}`}>
              <div className="min-w-[98px] md:max-w-[98px] h-full lg:w-[210px] md:h-auto">
                <img
                  className=""
                  src={itm.images?.[0]}
                  alt={itm.name || "Product image"}
                />
              </div>
            </Link>
            <div className="w-full  min-w-[196px] h-auto flex flex-col gap-1 relative">
              <div>{itm.name}</div>
              <div className="flex gap-2 items-center">
                <span className="text-[20px]">{itm.price}</span>
                <span className="text-gray-500 line-through">
                  {itm.price + 75}
                </span>
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
                <span className="text-[#FF9017]">7.5</span>
                <span className="hidden sm:block">
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
                  </svg>
                </span>
                <span className="hidden sm:block text-[#8B96A5]">
                  {itm.order}
                </span>
                <span className="hidden sm:block">
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
                  </svg>
                </span>
                <span className="hidden sm:block text-[#00B517]">
                  Free Shipping
                </span>
              </div>
              <div className="w-full lg:w-[607px] h-auto relative flex flex-col flex-wrap">
                <p className="hidden md:block ">{itm.description}</p>
                <div className="text-[#0D6EFD]">
                  <Link to={`/product/${itm._id}`}>
                    <span>View details</span>
                  </Link>
                </div>
              </div>
              <div
                onClick={() => addToSaveForLater(itm._id)}
                className="hidden md:flex w-[40px] h-[40px] cursor-pointer border border-gray-300 rounded justify-center items-center absolute right-0 top-0"
              >
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
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

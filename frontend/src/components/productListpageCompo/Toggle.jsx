import { LayoutGrid, ListIcon } from "lucide-react";
import useToggleStore from "../../stores/Toggle.store";

export const Toggle = () => {
  const { setView, view } = useToggleStore();
  // const [view, setView] = useState("grid"); // default grid

  return (
    <div className="flex border border-gray-200 rounded overflow-hidden">
      <button
        onClick={() => setView("grid")}
        className={`flex items-center px-3 py-2  
          ${view === "grid" ? "bg-gray-200  text-gray-900" : "bg-white "}`}
      >
        <label className="h-5 w-5 flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3H3V11H11V3Z" fill="#1C1C1C" />
            <path d="M11 13H3V21H11V13Z" fill="#1C1C1C" />
            <path d="M21 3H13V11H21V3Z" fill="#1C1C1C" />
            <path d="M21 13H13V21H21V13Z" fill="#1C1C1C" />
          </svg>
        </label>
      </button>

      <button
        onClick={() => setView("list")}
        className={`flex items-center  px-3 py-2 
          ${view === "list" ? "bg-gray-200 text-gray-900" : "bg-white "}`}
      >
        <label className="h-5 w-5 flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z"
              fill="#1C1C1C"
            />
          </svg>
        </label>
      </button>
    </div>
  );
};

import { useState } from "react";
import { ChevronUp } from "lucide-react";
export const LanguageDropdown = () => {
    const [selected, setSelected] = useState({
      name: "English (US)",
      img: "/Image/flags/Property 1=US.png",
    });

    const options = [
      {
        name: "Arabic",
        img: "/Image/flags/Property 1=AE.png",
      },
      {
        name: "English (AU)",
        img: "/Image/flags/Property 1=AU.png",
      },
      {
        name: "Chinese",
        img: "/Image/flags/Property 1=CN.png",
      },
      {
        name: "German",
        img: "/Image/flags/Property 1=DE.png",
      },
      {
        name: "Danish",
        img: "/Image/flags/Property 1=DK.png",
      },
      {
        name: "French",
        img: "/Image/flags/Property 1=FR.png",
      },
      {
        name: "English (UK)",
        img: "/Image/flags/Property 1=GB.png",
      },
      {
        name: "Italian",
        img: "/Image/flags/Property 1=IT.png",
      },
      {
        name: "Russian",
        img: "/Image/flags/Property 1=RU.png",
      },
      {
        name: "English (US)",
        img: "/Image/flags/Property 1=US.png",
      },
    ];
      

  return (
    <div className="dropdown dropdown-top dropdown-end">
      <label
        tabIndex={0}
        className="flex items-center gap-2  rounded px-3 py-1 cursor-pointer"
      >
        <img src={selected.img} alt={selected.name} className="w-5 h-4" />
        <span className="text-sm font-medium">{selected.name}</span>
        <ChevronUp className="w-4 h-4" />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48 z-50"
      >
        {options.map((opt, i) => (
          <li key={i}>
            <a
              onClick={() => setSelected(opt)}
              className="flex items-center gap-2"
            >
              <img src={opt.img} className="w-5 h-4" />
              {opt.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


import { useState } from "react";
import { ChevronDown } from "lucide-react";
export const CountryDropdown = () => {
  const [selected, setSelected] = useState({
    code: "de",
    name: "Germany",
    img: "/Image/flags/Property 1=DE.png",
  });

  const options = [
    {
      code: "ae",
      name: "United Arab Emirates",
      img: "/Image/flags/Property 1=AE.png",
    },
    { code: "au", name: "Australia", img: "/Image/flags/Property 1=AU.png" },
    { code: "cn", name: "China", img: "/Image/flags/Property 1=CN.png" },
    { code: "de", name: "Germany", img: "/Image/flags/Property 1=DE.png" },
    { code: "dk", name: "Denmark", img: "/Image/flags/Property 1=DK.png" },
    { code: "fr", name: "France", img: "/Image/flags/Property 1=FR.png" },
    {
      code: "gb",
      name: "United Kingdom",
      img: "/Image/flags/Property 1=GB.png",
    },
    { code: "it", name: "Italy", img: "/Image/flags/Property 1=IT.png" },
    { code: "ru", name: "Russia", img: "/Image/flags/Property 1=RU.png" },
    {
      code: "us",
      name: "United States",
      img: "/Image/flags/Property 1=US.png",
    },
  ];

  return (
    <div className="dropdown dropdown-center">
      <label
        tabIndex={0}
        className="flex items-center gap-2  rounded px-3 py-1 cursor-pointer"
      >
        <span className="text-sm font-medium">Ship to</span>
        <img src={selected.img} alt={selected.name} className="w-5 h-4" />
        <ChevronDown className="w-4 h-4" />
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


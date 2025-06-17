import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LanguageDropdown = () => {
  const [selected, setSelected] = useState({
    code: "en",
    label: "English - USD",
  });

  const options = [
    { code: "en", label: "English - USD" },
    { code: "ur", label: "Urdu - PKR" },
    { code: "ar", label: "Arabic - AED" },
    { code: "hi", label: "Hindi - INR" },
    { code: "fr", label: "French - EUR" },
    { code: "de", label: "German - EUR" },
    { code: "zh", label: "Chinese - CNY" },
    { code: "ja", label: "Japanese - JPY" },
  ];

  return (
    <div className="dropdown dropdown-center w-auto">
      <label
        tabIndex={0}
        className="flex items-center gap-2 rounded px-3 py-1 cursor-pointer"
      >
        <span className="text-sm font-medium">{selected.label}</span>
        <ChevronDown className="w-4 h-4" />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-max z-50"
      >
        {options.map((opt, i) => (
          <li key={i}>
            <a onClick={() => setSelected(opt)} className="text-sm font-medium">
              {opt.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;

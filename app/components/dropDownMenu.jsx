import { ChevronDown } from "lucide-react";

export default function Dropdown({
  id,
  title,
  items,
  openDropdown,
  setOpenDropdown,
}) {
  const isOpen = openDropdown === id;

  const handleClick = () => {
    if (window.innerWidth < 1000) {
      setOpenDropdown((prev) => (prev === id ? null : id));
    }
  };

  return (
    <div className="relative group">
      <button
        className="text-xl text-[#374E88] flex items-center gap-1 transition-all duration-300"
        onClick={handleClick}
      >
        {title}
        <ChevronDown
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
            md:group-hover:rotate-180
          `}
        />
      </button>

      <ul
        className={`absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md transition-all duration-200
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:group-hover:opacity-100 md:group-hover:visible
        `}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setOpenDropdown(null)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

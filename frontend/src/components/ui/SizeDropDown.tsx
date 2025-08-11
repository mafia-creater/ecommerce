import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "28"];

export default function SizeDropdown() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSize = (size: string) => {
    setSelected((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearSizes = () => setSelected([]);

  // Create display text
  const selectedText =
    selected.length === 0
      ? "SELECT"
      : selected.length <= 2
      ? selected.join(", ")
      : `${selected.slice(0, 2).join(", ")}..`;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="uppercase tracking-wide text-sm font-light z-50 outline-none flex items-center gap-1">
        SIZE +// <span className="font-bold">{selectedText}</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={8}
        className="bg-black text-white p-4 shadow-lg rounded-sm min-w-[140px] z-[1000000] font-light text-sm"
      >
        <div className="flex justify-end mb-2">
          <button
            onClick={clearSizes}
            className="uppercase text-xs text-gray-300 hover:text-white"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {sizes.map((size) => (
            <label
              key={size}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={selected.includes(size)}
                onChange={() => toggleSize(size)}
                className="appearance-none w-4 h-4 border border-white checked:bg-white checked:border-white relative"
              />
              {size}
            </label>
          ))}
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

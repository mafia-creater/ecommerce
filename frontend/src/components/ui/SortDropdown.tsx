import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const sortOptions = [
  "FEATURED",
  "BEST SELLING",
  "ALPHABETICALLY, A-Z",
  "ALPHABETICALLY, Z-A",
  "PRICE, LOW TO HIGH",
  "PRICE, HIGH TO LOW",
  "DATE, OLD TO NEW",
  "DATE, NEW TO OLD",
];

export default function SortDropdown() {
  const [selected, setSelected] = useState("BEST SELLING");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="uppercase tracking-wide text-sm font-light outline-none flex items-center gap-1">
        SORT BY +// <span className="font-bold">{selected}</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={8}
        className="bg-black text-white p-4 shadow-lg rounded-sm min-w-[220px] z-[10000] font-light text-sm"
      >
        <div className="flex flex-col gap-2">
          {sortOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="radio"
                name="sort"
                checked={selected === option}
                onChange={() => setSelected(option)}
                className="appearance-none w-4 h-4 border border-white rounded-full checked:border-white checked:bg-white relative"
              />
              {option}
            </label>
          ))}
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

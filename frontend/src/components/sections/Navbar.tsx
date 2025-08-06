import { Search } from "lucide-react";
import { useState } from "react";
import Menu from "../ui/Menu";

const Navbar = () => {
  const Categories = [
    "ALL ITEMS",
    "TEES",
    "HOODIES",
    "JACKETS",
    "LONGSLEEVES",
    "BOTTOMS",
    "ACCESSORIES",
  ];

  const Drops = [
    "New Arrivals",
    "Limited Editions",
    "Seasonal Drops",
    "Collaborations",
    "Exclusive Releases",
  ];

  const [openMenu, setOpenMenu] = useState<null | "categories" | "drops">(null);

  const handleMouseEnter = (menuType: "categories" | "drops") => {
    setOpenMenu(menuType);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <div className="flex flex-col relative z-[10001]">
      <div className="flex justify-between items-center px-10 pt-10">
        {/* Left section with navigation links */}
        <div className="flex items-center gap-4">
          <div className="hover:text-orange-400 cursor-pointer">Shop Now</div>

          {/* Categories with hover effect */}
          <div
            className="group hover:text-orange-400 cursor-pointer flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter("categories")}
            onMouseLeave={handleMouseLeave}
          >
            Categories
            <span className="text-xl group-hover:hidden">+</span>
            <span className="text-xl hidden group-hover:inline-block">-</span>
          </div>

          {/* Drop with hover effect */}
          <div
            className="group hover:text-orange-400 cursor-pointer flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter("drops")}
            onMouseLeave={handleMouseLeave}
          >
            Drop
            <span className="text-xl group-hover:hidden">+</span>
            <span className="text-xl hidden group-hover:inline-block">-</span>
          </div>
        </div>

        {/* Center section with the logo */}
        <div className="flex-shrink-0">
          <img src="/logo.svg" alt="Logo" className="w-24 h-24" />
        </div>

        {/* Right section with search and profile */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
            <span>
              <Search className="w-4 h-4" />
            </span>
            Search
          </div>
          <div className="hover:text-orange-400 cursor-pointer">Profile</div>
        </div>
      </div>

      {/* Full-width dropdown menu */}
      {(openMenu === "categories" || openMenu === "drops") && (
        <div
          className="absolute left-0 right-0 top-full p-10 mt-[-1px]"
          onMouseEnter={() => handleMouseEnter(openMenu)}
          onMouseLeave={handleMouseLeave}
        >
          {openMenu === "categories" && (
            <Menu items={Categories} />
          )}
          {openMenu === "drops" && (
            <Menu items={Drops} />
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
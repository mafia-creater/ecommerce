import { Search, ShoppingCartIcon } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "../ui/Menu";

const Navbar = () => {

  const dropdown = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    
  });

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

  return (
    <div className="flex flex-col relative z-[10001]">
      <div className="flex justify-between items-center px-10 pt-10">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <div className="hover:text-orange-400 cursor-pointer">Shop Now</div>

          {/* Categories wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("categories")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="group hover:text-orange-400 cursor-pointer flex items-center gap-1">
              Categories
              <span className="text-xl group-hover:hidden">+</span>
              <span className="text-xl hidden group-hover:inline-block">-</span>
            </div>

            {openMenu === "categories" && (
              <div className="fixed left-0 top-[80px] my-5 w-full bg-black z-50">
                <div className="h-[400px] flex flex-col justify-center">
                  <Menu items={Categories} />
                </div>
              </div>
            )}
          </div>

          {/* Drops wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("drops")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="group hover:text-orange-400 cursor-pointer flex items-center gap-1">
              Drop
              <span className="text-xl group-hover:hidden">+</span>
              <span className="text-xl hidden group-hover:inline-block">-</span>
            </div>

            {openMenu === "drops" && (
              <div className="fixed left-0 top-[80px] my-5 w-full bg-black z-50">
                <div className="h-[400px] flex flex-col justify-center">
                  <Menu items={Drops} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center logo */}
        <div className="flex-shrink-0">
          <img src="/logo.svg" alt="Logo" className="w-24 h-24" />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
            <Search className="w-4 h-4" />
            Search
          </div>
          <div className="hover:text-orange-400 cursor-pointer">Profile</div>
          <div className="hover:text-orange-400 cursor-pointer">
            <ShoppingCartIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
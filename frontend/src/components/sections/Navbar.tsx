import { Search, ShoppingCartIcon, Menu as MenuIcon, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Menu from "../ui/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {

  const Categories = [
    { label: "ALL ITEMS", route: "/all-items" },
    { label: "TEES", route: "/tees" },
    { label: "HOODIES", route: "/hoodies" },
    { label: "JACKETS", route: "/jackets" },
    { label: "LONGSLEEVES", route: "/longsleeves" },
    { label: "BOTTOMS", route: "/bottoms" },
    { label: "ACCESSORIES", route: "/accessories" },
  ];

  const Drops = [
    { label: "New Arrivals", route: "/drops/new-arrivals" },
    { label: "Limited Editions", route: "/drops/limited-editions" },
    { label: "Seasonal Drops", route: "/drops/seasonal" },
    { label: "Collaborations", route: "/drops/collaborations" },
    { label: "Exclusive Releases", route: "/drops/exclusive" },
  ];


  const [openMenu, setOpenMenu] = useState<null | "categories" | "drops">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const categoriesRef = useRef<HTMLDivElement>(null);
  const dropsRef = useRef<HTMLDivElement>(null);

  // Delay timer for dropdown close
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper to clear close timer
  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  // Delayed close
  const delayedClose = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 120); // 120ms delay
  };

  // Desktop dropdown animation
  useEffect(() => {
    const refs = {
      categories: categoriesRef.current,
      drops: dropsRef.current,
    };

    Object.keys(refs).forEach((key) => {
      const el = refs[key as "categories" | "drops"];
      if (!el) return;

      if (openMenu === key) {
        const tl = gsap.timeline();
        tl.fromTo(
          el,
          { height: 0, opacity: 0 },
          { height: 400, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
        tl.fromTo(
          el.querySelectorAll(".menu-item"),
          { y: "100%", opacity: 0, filter: "blur(8px)" },
          {
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.2"
        );
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        });
      }
    });
  }, [openMenu]);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: "100%" },
          { x: "0%", duration: 0.5, ease: "power3.out" }
        );
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll(".mobile-link"),
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.5,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.4,
          ease: "power3.in",
        });
      }
    }
  }, [mobileOpen]);

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full z-[10001] bg-white ">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 md:px-10 pt-6">
        {/* Left */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hover:text-orange-400 cursor-pointer">Shop Now</div>

          {/* Categories */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimeout();
              setOpenMenu("categories");
            }}
            onMouseLeave={delayedClose}
          >
            <div className="group hover:text-orange-400 cursor-pointer flex items-center gap-1">
              Categories
              <span className="text-xl group-hover:hidden">+</span>
              <span className="text-xl hidden group-hover:inline-block">-</span>
            </div>
            <div
              ref={categoriesRef}
              className="fixed left-0 top-[80px] my-5 w-full bg-black z-[9999] overflow-hidden"
              style={{ height: 0 }}
              onMouseEnter={clearCloseTimeout}
              onMouseLeave={delayedClose}
            >
              {openMenu === "categories" && (
                <div className="flex flex-col justify-center h-full">
                  <Menu items={Categories} />
                </div>
              )}
            </div>
          </div>

          {/* Drops */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimeout();
              setOpenMenu("drops");
            }}
            onMouseLeave={delayedClose}
          >
            <div className="group hover:text-orange-400 cursor-pointer flex items-center gap-1">
              Drop
              <span className="text-xl group-hover:hidden">+</span>
              <span className="text-xl hidden group-hover:inline-block">-</span>
            </div>
            <div
              ref={dropsRef}
              className="fixed left-0 top-[80px] my-5 w-full bg-black z-[9999] overflow-hidden"
              style={{ height: 0 }}
              onMouseEnter={clearCloseTimeout}
              onMouseLeave={delayedClose}
            >
              {openMenu === "drops" && (
                <div className="flex flex-col justify-center h-full">
                  <Menu items={Drops} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Logo */}
        
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
          </Link>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
            <Search className="w-4 h-4" /> Search
          </div>
          <div className="hover:text-orange-400 cursor-pointer">Profile</div>
          <div className="hover:text-orange-400 cursor-pointer">
            <ShoppingCartIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-full h-full bg-black text-white z-[10002] p-6 md:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setMobileOpen(false)}>
            <X size={32} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col mt-8 gap-6 text-3xl font-[DrukWide]">
          <div className="mobile-link cursor-pointer">Shop Now</div>
          <div className="mobile-link cursor-pointer">Categories</div>
          <div className="mobile-link cursor-pointer">Drop</div>
          <div className="mobile-link cursor-pointer">Search</div>
          <div className="mobile-link cursor-pointer">Profile</div>
          <div className="mobile-link cursor-pointer">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

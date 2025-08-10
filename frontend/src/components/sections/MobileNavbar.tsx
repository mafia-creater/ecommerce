import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Search, ShoppingCart, X } from "lucide-react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement[]>([]);

  const mainMenu = [
    { label: "SHOP", sub: ["All Items", "Tees", "Hoodies"] },
    { label: "DROP", sub: ["New Arrivals", "Limited Editions"] },
    { label: "VAULT", sub: [] },
  ];

  const socials = ["INSTAGRAM", "FACEBOOK", "TIKTOK", "DISCORD"];
  const info = ["LEGAL & PRIVACY", "SHIPPING", "RETURNS"];

  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        overlayRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        menuItemsRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, [open]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button onClick={() => setOpen(true)} className="p-4 bg-black text-white">
        Open Menu
      </button>

      {/* Overlay */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black text-white z-[2000] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
            <div className="flex items-center gap-4">
              <button onClick={() => setOpen(false)} className="flex items-center gap-1">
                <X size={16} /> CLOSE
              </button>
              <Search size={16} />
            </div>
            <div className="font-bold text-lg">LOGO</div>
            <div className="flex items-center gap-4">
              VIP
              <div className="flex items-center gap-1">
                <ShoppingCart size={16} /> -1
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-4 p-6 text-lg font-bold uppercase">
            {mainMenu.map((item, idx) => (
              <div
                key={item.label}
                ref={(el) => {
                  if (el) menuItemsRef.current[idx] = el;
                }}
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setActive(active === item.label ? null : item.label)}
                >
                  {item.label} <span>+</span>
                </div>
                {active === item.label && item.sub.length > 0 && (
                  <div className="pl-4 mt-2 space-y-2 text-sm font-normal">
                    {item.sub.map((sub) => (
                      <div key={sub} className="opacity-80 hover:opacity-100">
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto p-6 text-xs uppercase space-y-4">
            <div>
              Social:
              <div className="flex gap-4 mt-2">
                {socials.map((s) => (
                  <span key={s} className="cursor-pointer hover:text-orange-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              Info:
              <div className="flex gap-4 mt-2">
                {info.map((i) => (
                  <span key={i} className="cursor-pointer hover:text-orange-400">
                    {i}
                  </span>
                ))}
              </div>
            </div>
            <div>Contact us support@example.com</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;

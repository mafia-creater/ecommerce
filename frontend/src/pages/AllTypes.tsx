import ProductGrid from "../components/ui/ProductGrid"
import SizeDropdown from "../components/ui/SizeDropDown";
import SortDropdown from "../components/ui/SortDropdown";

const mockProducts = [
  {
    name: "Toasty Longsleeve",
    price: 78,
    front: "/images/toasty-front.webp",
    back: "/images/toasty-back.webp",
    originalPrice: 99,
  },
  {
    name: "Crusty Jeans",
    price: 100,
    front: "/images/crusty-front.webp",
    back: "/images/crusty-back.webp",
  },
  {
    name: "Cream Puff Ninja Fleece",
    price: 74,
    originalPrice: 124,
    front: "/images/cream-front.webp",
    back: "/images/cream-back.webp",
  },
  {
    name: "Freshly Baked Hat",
    price: 44,
    front: "/images/hat-front.webp",
    back: "/images/hat-back.webp",
  },
  {
    name: "Sakura Hoodie",
    price: 90,
    front: "/images/sakura-front.webp",
    back: "/images/sakura-back.webp",
  },
  {
    name: "Sakura Cap",
    price: 35,
    front: "/images/cap-front.webp",
    back: "/images/cap-back.webp",
  },
];


const AllTypes = () => {
  return (
    // Use a fragment or a div as the root
    <>
      {/* MAIN HEADER CONTAINER
        - Mobile: Smaller padding (px-4), vertical stacking (flex-col)
        - Desktop (md and up): Larger padding (md:px-16), horizontal layout (md:flex-row)
      */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-16">
        
        {/* SECTION 1: Title */}
        <div>
          {/* Mobile: Smaller text. Desktop: Larger text */}
          <h1 className="font-[DrukWide] uppercase  text-2xl md:text-4xl font-bold">
            All
          </h1>
        </div>

        {/* SECTION 2: Product Count */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          {/* Hide on mobile, show on desktop for a cleaner look */}
          <p className="hidden md:block text-center">67 //</p>
        </div>
        
        {/* SECTION 3: Filter & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          {/* - Mobile (default): Stacks vertically (flex-col)
            - Small screens and up (sm): Side-by-side (sm:flex-row)
          */}
          <div className="flex items-center gap-2">
            
          </div>
          <div>
            <SizeDropdown />
          </div>
          <div>
            <SortDropdown />
          </div>
        </div>

      </div>

      <div className="py-8 md:py-16">
        <ProductGrid products={mockProducts} />
      </div>
    </>
  );
};

export default AllTypes
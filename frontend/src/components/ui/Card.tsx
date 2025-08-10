import { useState } from "react";

const ProductCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-72 mx-auto cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-96 overflow-hidden rounded-md">
        {/* Front Image */}
        <img
          src="/images/phantom-front.webp"
          alt="Phantom Web Hoodie Front"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Back Image */}
        <img
          src="/images/phantom-back.webp"
          alt="Phantom Web Hoodie Back"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <p className="font-mono text-sm uppercase tracking-widest">
          PHANTOM WEB HOODIE (PREORDER: SHIPS AUGUST 18)
        </p>
        <p className="font-mono mt-1">$100</p>
      </div>
    </div>
  );
};

export default ProductCard;

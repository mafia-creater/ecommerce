import { useState } from "react";

interface Product {
  name: string;
  price: number;
  originalPrice?: number;
  front: string;
  back: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
          src={product.front}
          alt={product.name + " Front"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Back Image */}
        <img
          src={product.back}
          alt={product.name + " Back"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <p className="font-mono text-sm uppercase tracking-widest">
          {product.name}
        </p>
        {product.originalPrice ? (
          <p className="font-mono mt-1">
            <span className="line-through mr-1">${product.originalPrice}</span>
            <span className="text-red-500">${product.price}</span>
          </p>
        ) : (
          <p className="font-mono mt-1">${product.price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

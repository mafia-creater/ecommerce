import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const collections = {
  "BEST SELLERS": [
    { name: "Product 1", price: 50, front: '/public/images/FANGS1.webp', back: '/public/images/FANGS2.webp' },
    { name: "Product 2", price: 80, front: "/images/MEDUSA2.webp", back: "/images/MEDUSA1.webp" },
  ],
  SAKURA: [
    { name: "Sakura Hoodie", price: 90, front: "/images/SLINGBAG.webp", back: "/images/BAG4.webp" },
    { name: "Sakura Cap", price: 35, front: "/images/cap-front.webp", back: "/images/cap-back.webp" },
  ]
};

export default function ShopPage() {
  const [activeCollection, setActiveCollection] = React.useState("BEST SELLERS");

  return (
    <div className="p-6">
      {/* Collection Tabs */}
      <div className="flex gap-8 justify-center mb-10 font-[F.] text-2xl uppercase tracking-wide text-gray-500">
        {Object.keys(collections).map((collection) => (
          <button
            key={collection}
            onClick={() => setActiveCollection(collection)}
            className={`relative pb-1 ${
              activeCollection === collection ? "text-black" : ""
            }`}
          >
            {collection}
            {activeCollection === collection && (
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black"></span>
            )}
          </button>
        ))}
      </div>

      {/* Animated Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCollection} // triggers animation when collection changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ProductGrid products={collections[activeCollection]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="text-center group cursor-pointer">
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
            <img
              src={product.front}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            <img
              src={product.back}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="mt-4 font-mono text-sm uppercase tracking-wide">
            <p>{product.name}</p>
            {product.originalPrice ? (
              <p className="mt-1">
                <span className="line-through mr-1">${product.originalPrice}</span>
                <span className="text-red-500">${product.price}</span>
              </p>
            ) : (
              <p className="mt-1">${product.price}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

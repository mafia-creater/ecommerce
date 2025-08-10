export default function CategoryGrid() {
  const categories = [
    { name: "TEES", image: "/images/tees.webp" },
    { name: "HOODIES", image: "/images/hoodies.webp" },
    { name: "LONGSLEEVES", image: "/images/longsleeves.webp" },
    { name: "BOTTOMS", image: "/images/bottoms.webp" },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">SHOP BY CATEGORY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
            <div key={cat.name} className="group cursor-pointer overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <p className="mt-2 text-center font-mono text-xs tracking-widest uppercase">
                {cat.name}
            </p>
            </div>
        ))}
        </div>
    </>
  );
}

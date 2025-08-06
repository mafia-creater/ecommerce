// src/ui/Menu.jsx

interface MenuProps {
  items: string[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <div className="h-100 min-h-40 w-full bg-black text-white px-6 py-4 font-[DrukWide] border-t border-solid border-orange-400">
      <div className="flex justify-between items-start">
        {items.map((item, idx) => (
          <div key={idx} className="hover:text-orange-400 cursor-pointer text-4xl">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
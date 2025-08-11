import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  route: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <div className="bg-black text-white font-[DrukWide]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {items.map((item, idx) => {
          const indexLabel = (idx + 1).toString().padStart(2, "0");
          return (
            <Link
              key={idx}
              to={item.route}
              className="menu-item cursor-pointer text-4xl hover:text-orange-400 flex items-start gap-2 overflow-hidden transition-colors"
            >
              <sup className="text-sm text-orange-400 font-bold">[{indexLabel}]</sup>
              <span className="block">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;

import { FaMoon } from "react-icons/fa";

const ThemeMenu: React.FC = () => {
  return (
    <div className="absolute top-10 right-20 bg-white text-black z-50 py-4 px-8">
      {/* theme */}
      <section className="flex items-center gap-x-2">
        <span className="">THEME: </span>
        <span className="p-2 rounded-full bg-darkBrown dark:text-gray-300 cursor-pointer">
          <FaMoon />
        </span>
      </section>
      {/* color */}
      <section>
        <span className="">COLOR: </span>
        <div className="flex gap-x-2">
          <span className="cursor-pointer w-7 h-7 rounded-full bg-yellowColor"></span>
          <span className="cursor-pointer w-7 h-7 rounded-full bg-blue-500"></span>
          <span className="cursor-pointer w-7 h-7 rounded-full bg-green-500"></span>
          <span className="cursor-pointer w-7 h-7 rounded-full bg-red-500"></span>
          <span className="cursor-pointer w-7 h-7 rounded-full bg-orange-500"></span>
          <span className="cursor-pointer w-7 h-7 rounded-full bg-cyan-600"></span>
        </div>
      </section>
    </div>
  );
};

export default ThemeMenu;

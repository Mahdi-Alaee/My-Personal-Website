import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
// import { useAppDispatch } from "../Redux/store";
// import { changeTheme } from "../Redux/reducers/isDarkMode";

interface ThemeMenuProps {
  isThemeMenuOpen: boolean;
}

const ThemeMenu: React.FC<ThemeMenuProps> = ({ isThemeMenuOpen }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const themeHandler = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    }
  };

  return (
    <div
      className={`fixed z-40 top-20 md:top-6 bg-gray-300 dark:bg-darkBrown text-black py-4 px-8 transition-all duration-300
    ${
      isThemeMenuOpen ? "opacity-100 right-20" : "opacity-0 -right-72"
    } rounded-lg`}
    >
      {/* theme */}
      <section className="flex items-center gap-x-2">
        <span className="dark:text-white">THEME: </span>
        <span
          onClick={themeHandler}
          className="p-2 rounded-full bg-darkBrown dark:bg-gray-300 dark:text-gray-300 cursor-pointer"
        >
          {resolvedTheme === "light" ? (
            <FaMoon className="text-white text-xl" />
          ) : (
            <BiSun className="text-xl text-black" />
          )}
        </span>
      </section>
      {/* color */}
      <section>
        <span className="dark:text-white">COLOR: </span>
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

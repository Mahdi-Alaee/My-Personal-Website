import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
// import { useAppDispatch } from "../Redux/store";
// import { changeTheme } from "../Redux/reducers/isDarkMode";

interface ThemeMenuProps {
  isThemeMenuOpen: boolean;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeMenu: React.FC<ThemeMenuProps> = ({
  isThemeMenuOpen,
  isDark,
  setIsDark,
}) => {
//   const dispatch = useAppDispatch();
  const themeHandler = () => {
    // dispatch(changeTheme());
    setIsDark((prev) => {
      if (prev) document.documentElement.classList.remove("dark");
      else document.documentElement.classList.add("dark");

      return !prev;
    });
  };

  return (
    <div
      className={`fixed top-6 bg-white text-black py-4 px-8 transition-all duration-300 z-50 
    ${
      isThemeMenuOpen ? "opacity-100 right-20" : "opacity-0 -right-72"
    } rounded-lg`}
    >
      {/* theme */}
      <section className="flex items-center gap-x-2">
        <span className="">THEME: </span>
        <span
          onClick={themeHandler}
          className="p-2 rounded-full bg-darkBrown dark:text-gray-300 cursor-pointer"
        >
          {isDark ? (
            <BiSun className="text-xl" />
          ) : (
            <FaMoon className="text-white text-xl" />
          )}
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

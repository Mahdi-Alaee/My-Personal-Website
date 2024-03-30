import { GrClose } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";

interface ThemeButtonProps {
  isThemeMenuOpen: boolean;
  setIsThemeMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  setIsThemeMenuOpen,
  isThemeMenuOpen,
}) => {
  return (
    <button
      className="fixed top-24 right-7 z-50 bg-gray-300 dark:bg-darkBrown p-3 rounded-full 
        duration-200 hover:bg-yellowColor lg:top-10 lg:right-8"
      onClick={() => setIsThemeMenuOpen((prev) => !prev)}
    >
      {isThemeMenuOpen ? (
        <GrClose className="dark:text-white text-4xl lg:text-2xl" />
      ) : (
        <SlSettings className="dark:text-white text-4xl lg:text-2xl" />
      )}
    </button>
  );
};

export default ThemeButton;

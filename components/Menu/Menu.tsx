import {
  FaHome,
  FaBriefcase,
  FaEnvelopeOpen,
  FaUser,
  FaComments,
} from "react-icons/fa";
import MenuItem from "./MenuItem";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = [
    { to: "/", text: "HOME", icon: <FaHome /> },
    { to: "/about", text: "ABOUT", icon: <FaUser /> },
    { to: "/portfolio", text: "PORTFOLIO", icon: <FaBriefcase /> },
    { to: "/contact", text: "CONTACT", icon: <FaEnvelopeOpen /> },
    { to: "/articles", text: "BLOG", icon: <FaComments /> },
  ];

  return (
    <ul
      className={`fixed w-screen h-screen z-50 pt-16 px-8 bg-gray-300 dark:bg-darkBrown dark:text-white 
       text-lg duration-500 sm:text-2xl 
        ${isMenuOpen ? "left-0" : "-left-[100vw]"} 
       dark:lg:bg-transparent lg:bg-transparent lg:right-0 lg:w-60 lg:h-auto lg:text-lg lg:top-20 lg:left-auto lg:flex lg:flex-col lg:items-end`}
    >
      {menuItems.map((menuItem, index) => (
        <MenuItem setIsMenuOpen={setIsMenuOpen} key={index} {...menuItem} />
      ))}
    </ul>
  );
};

export default Menu;

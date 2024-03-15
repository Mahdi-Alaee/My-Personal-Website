import { Link } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaEnvelopeOpen,
  FaUser,
  FaComments,
} from "react-icons/fa";

interface MenuProps {
  isMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen }) => {
  return (
    <ul
      className={`absolute w-screen h-screen pt-16 px-8 bg-darkBrown text-white 
     text-lg sm:text-2xl ${
       isMenuOpen ? "" : "-left-[100vw]"
     } lg:bg-transparent lg:right-1 lg:w-auto lg:h-auto lg:text-lg lg:top-24`}
    >
      <Link
        className="group flex items-center gap-x-4 py-4 border-b duration-200 border-lightBrown last:border-none 
        hover:gap-x-4 sm:gap-x-6 sm:py-5 lg:flex-row-reverse lg:border-none lg:gap-0 lg:py-0 lg:my-3 lg:hover:bg-yellowColor lg:rounded-full"
        to="/"
      >
        <div className="lg:bg-lightBrown lg:p-4 lg:rounded-full duration-200 lg:group-hover:bg-yellowColor">
          <FaHome />
        </div>
        <span className="duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:pl-6 lg:text-base">HOME</span>
      </Link>
      <Link
        className="group flex items-center gap-x-4 py-4 border-b duration-200 border-lightBrown last:border-none 
        hover:gap-x-4 sm:gap-x-6 sm:py-5 lg:flex-row-reverse lg:border-none lg:gap-0 lg:py-0 lg:my-3 lg:hover:bg-yellowColor lg:rounded-full"
        to="/"
      >
        <div className="lg:bg-lightBrown lg:p-4 lg:rounded-full duration-200 lg:group-hover:bg-yellowColor">
          <FaUser />
        </div>
        <span className="duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:pl-6 lg:text-base">ABOUT</span>
      </Link>
      <Link
        className="group flex items-center gap-x-4 py-4 border-b duration-200 border-lightBrown last:border-none 
        hover:gap-x-4 sm:gap-x-6 sm:py-5 lg:flex-row-reverse lg:border-none lg:gap-0 lg:py-0 lg:my-3 lg:hover:bg-yellowColor lg:rounded-full"
        to="/"
      >
        <div className="lg:bg-lightBrown lg:p-4 lg:rounded-full duration-200 lg:group-hover:bg-yellowColor">
          <FaBriefcase />
        </div>
        <span className="duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:pl-6 lg:text-base">PORTFOLIO</span>
      </Link>
      <Link
        className="group flex items-center gap-x-4 py-4 border-b duration-200 border-lightBrown last:border-none 
        hover:gap-x-4 sm:gap-x-6 sm:py-5 lg:flex-row-reverse lg:border-none lg:gap-0 lg:py-0 lg:my-3 lg:hover:bg-yellowColor lg:rounded-full"
        to="/"
      >
        <div className="lg:bg-lightBrown lg:p-4 lg:rounded-full duration-200 lg:group-hover:bg-yellowColor">
          <FaEnvelopeOpen />
        </div>
        <span className="duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:pl-6 lg:text-base">CONTACT</span>
      </Link>
      <Link
        className="group flex items-center gap-x-4 py-4 border-b duration-200 border-lightBrown last:border-none 
        hover:gap-x-4 sm:gap-x-6 sm:py-5 lg:flex-row-reverse lg:border-none lg:gap-0 lg:py-0 lg:my-3 lg:hover:bg-yellowColor lg:rounded-full"
        to="/"
      >
        <div className="lg:bg-lightBrown lg:p-4 lg:rounded-full duration-200 lg:group-hover:bg-yellowColor">
          <FaComments />
        </div>
        <span className="duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:pl-6 lg:text-base">BLOG</span>
      </Link>
    </ul>
  );
};

export default Menu;

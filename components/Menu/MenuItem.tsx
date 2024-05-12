import React, { Dispatch, ReactNode, SetStateAction } from "react";
import Link from "next/link";

interface MenuItemProps {
  to: string;
  icon: ReactNode;
  text: string;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuItem: React.FC<MenuItemProps> = ({
  to,
  icon,
  text,
  setIsMenuOpen,
}) => {
  return (
    <Link
      className="group flex items-center gap-x-4 py-4 border-b duration-200 border-lightBrown last:border-none 
        hover:gap-x-4 sm:gap-x-6 sm:py-5 lg:flex-row-reverse lg:border-none lg:gap-0 lg:py-0 lg:my-3 lg:hover:bg-yellowColor 
        lg:rounded-full"
      href={to}
      onClick={() => setIsMenuOpen(false)}
    >
      <div className="lg:bg-gray-300 lg:dark:bg-lightBrown lg:p-4 lg:rounded-full duration-200 lg:group-hover:bg-yellowColor">
        {icon}
      </div>
      <span className="duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:pl-6 lg:text-sm">
        {text}
      </span>
    </Link>
  );
};

export default MenuItem;

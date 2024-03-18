import React from "react";
import { Link } from "react-router-dom";
import { MenuItem as MenuItemType } from "../../types";

interface MenuItemProps extends MenuItemType {}

const MenuItem: React.FC<MenuItemProps> = ({
  to,
  icon,
  text,
}) => {
  return (
    <Link
      className="group flex items-center gap-x-4 py-4 border-b duration-200 border-lightBrown last:border-none 
        hover:gap-x-4 sm:gap-x-6 sm:py-5 lg:flex-row-reverse lg:border-none lg:gap-0 lg:py-0 lg:my-3 lg:hover:bg-yellowColor lg:rounded-full"
      to={to}
    >
      <div className="lg:bg-lightBrown lg:p-4 lg:rounded-full duration-200 lg:group-hover:bg-yellowColor">
        {icon}
      </div>
      <span className="duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:pl-6 lg:text-sm">
        {text}
      </span>
    </Link>
  );
};

export default MenuItem;

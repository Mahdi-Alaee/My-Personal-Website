import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
    to:string;
    icon: React.ReactNode;
}

const LinkButton: React.FC<PropsWithChildren<LinkButtonProps>> = ({to, icon, children}) => {
    return (
        <Link
          className="group relative flex mt-5 pl-8 border border-yellowColor gap-x-5 
          items-center rounded-full overflow-hidden"
          to={to}
        >
          <span className="block font-bold tracking-tighter">
            {children}
          </span>
          <span className="block bg-yellowColor p-4 rounded-full">
            {icon}
          </span>
          {/* background hover */}
          <div
            className="absolute w-0 h-full right-0 bg-yellowColor -z-10 transition-all 
          duration-300 group-hover:w-full"
          ></div>
        </Link>
    )
}

export default LinkButton;
import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  to: string;
  icon: React.ReactNode;
  className?: string;
  children: ReactNode;
}

export default function LinkButton({
  to,
  icon,
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      className={`group relative flex mt-5 pl-8 border border-yellowColor gap-x-5 
          items-center rounded-full py-4 overflow-hidden uppercase pr-20 ${className}`}
      href={to}
    >
      <span className="block font-bold tracking-tighter">{children}</span>
      <span className="absolute right-0 flex items-center justify-center bg-yellowColor w-14 h-14 rounded-full">
        {icon}
      </span>
      {/* background hover */}
      <div
        className="absolute w-0 h-full right-0 bg-yellowColor -z-10 transition-all 
          duration-300 group-hover:w-full"
      ></div>
    </Link>
  );
}

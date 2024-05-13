import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";

interface SocialProps {
  to: string;
  icon: ReactNode
}

const Social: React.FC<SocialProps> = ({ to, icon }) => {
  return (
    <Link
      href={to}
      className="bg-gray-300 dark:bg-midBrown rounded-full p-3 transition-all duration-200 cursor-pointer hover:bg-yellowColor"
      target="_blank"
    >
      {icon}
    </Link>
  );
};

export default Social;

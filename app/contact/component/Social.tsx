import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

interface SocialProps {
  to: string;
}

const Social: React.FC<SocialProps> = ({ to }) => {
  return (
    <Link
      href={to}
      className="bg-gray-300 dark:bg-midBrown rounded-full p-3 transition-all duration-200 cursor-pointer hover:bg-yellowColor"
    >
      <FaFacebookF />
    </Link>
  );
};

export default Social;

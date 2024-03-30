import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SocialProps {
  to: string;
}

const Social: React.FC<SocialProps> = ({ to }) => {
  return (
    <Link
      to={to}
      className="bg-gray-300 dark:bg-midBrown rounded-full p-3 transition-all duration-200 cursor-pointer hover:bg-yellowColor"
    >
      <FaFacebookF />
    </Link>
  );
};

export default Social;

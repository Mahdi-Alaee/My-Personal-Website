import { FaCode, FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

const PortfolioModal: React.FC = () => {
  return ReactDOM.createPortal(
    <div>
      {/* title */}
      <h2>IMAGE PROJECT</h2>
      {/* infos */}
      <div>
        {/* info 1 */}
        <div>
          {/* icon */}
          <FiFileText />
          {/* title */}
          <span>Project : </span>
          {/* content */}
          <span>Website</span>
        </div>
        {/* info 2 */}
        <div>
          {/* icon */}
          <FaUser />
          {/* title */}
          <span>Client : </span>
          {/* content */}
          <span>Envato</span>
        </div>
        {/* info 3 */}
        <div>
          {/* icon */}
          <FaCode />
          {/* title */}
          <span>languages and tools : </span>
          {/* content */}
          <span>HTML, CSS, Javascript</span>
        </div>
        {/* info 4 */}
        <div>
          {/* icon */}
          <FaExternalLinkAlt />
          {/* title */}
          <span>Preview : </span>
          {/* content */}
          <Link to="https://digikala.com" target="_blank">
            www.digikala.com
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById("modals-wrapper") as HTMLDivElement
  );
};

export default PortfolioModal;

import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { CgClose } from "react-icons/cg";
import { BiUser } from "react-icons/bi";

interface PortfolioModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return ReactDOM.createPortal(
    // modal container
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 transition-all duration-200 lg:bg-black/90 lg:flex 
    lg:justify-center lg:items-center ${
      isModalOpen ? "z-50 opacity-100" : "opacity-0 -z-10"
    }`}
    >
      {/* desktop close button */}
      <p
        onClick={() => setIsModalOpen(false)}
        className="hidden absolute  top-5 right-5 dark:text-[#ababab] cursor-pointer text-5xl lg:block"
      >
        <CgClose />
      </p>
      {/* modal box */}
      <div className="dark:bg-darkBrown w-full h-full pb-8 dark:text-white overflow-y-scroll lg:w-max lg:h-max lg:py-8 lg:rounded-xl lg:overflow-hidden">
        {/* wrapper */}
        <div className="max-w-2xl mx-auto">
          {/* close button */}
          <p
            onClick={() => setIsModalOpen(false)}
            className="py-4 border-b border-lightBrown text-3xl dark:text-[#ababab] flex justify-center cursor-pointer md:text-5xl lg:hidden"
          >
            <CgClose />
          </p>
          {/* title */}
          <h2 className="mt-28 text-center text-2xl font-bold text-yellowColor sm:text-4xl lg:mt-0">
            IMAGE PROJECT
          </h2>
          {/* infos */}
          <div className="px-6 grid grid-cols-1 gap-y-3 mt-10 text-sm md:grid-cols-2">
            {/* info 1 */}
            <div className="flex items-center gap-x-2">
              {/* icon */}
              <FiFileText className="text-base" />
              {/* title */}
              <span>Project : </span>
              {/* content */}
              <span className="font-medium text-yellowColor">Website</span>
            </div>
            {/* info 2 */}
            <div className="flex items-center gap-x-2">
              {/* icon */}
              <BiUser className="text-base" />
              {/* title */}
              <span>Client : </span>
              {/* content */}
              <span className="font-medium text-yellowColor">Envato</span>
            </div>
            {/* info 3 */}
            <div className="flex items-center gap-x-2 flex-wrap">
              {/* icon */}
              <FaCode className="text-base" />
              {/* title */}
              <span>languages and tools : </span>
              {/* content */}
              <span className="font-medium text-yellowColor">
                HTML, CSS, Javascript
              </span>
            </div>
            {/* info 4 */}
            <div className="flex items-center gap-x-2">
              {/* icon */}
              <FaExternalLinkAlt className="text-base" />
              {/* title */}
              <span>Preview : </span>
              {/* content */}
              <Link
                className="text-yellowColor underline"
                to="https://digikala.com"
                target="_blank"
              >
                www.digikala.com
              </Link>
            </div>
          </div>

          {/* media */}
          <div className="px-6 mt-6">
            <img
              src="https://tunis-next.netlify.app/assets/img/projects/project-2.jpg"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals-wrapper") as HTMLDivElement
  );
};

export default PortfolioModal;

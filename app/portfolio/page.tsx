import { portfolio } from "@/data";
import PortfolioBox from "./components/PortfolioBox";
import PortfolioModal from "./components/PortfolioModal";

interface PortfolioProps {
  searchParams: { show?: string; selectedPortfolio?: string };
}

const Portfolio: React.FC<PortfolioProps> = ({ searchParams }) => {
  const isModalOpen = searchParams.show === "true" ? true : false;
  const selectedPortfolio = searchParams?.selectedPortfolio || 'false'

  return (
    <div
      className={`max-w-xl mx-auto px-6 pt-32 sm:pt-16 md:max-w-3xl lg:max-w-7xl lg:px-24 ${
        isModalOpen ? "overflow-hidden h-screen" : ""
      }`}
    >
      {/* title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-gray-100 dark:text-white/5 text-9xl sm:block">
          works
        </span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto bg-white dark:bg-darkBrown 
           flex items-center sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent sm:dark:bg-transparent"
        >
          <span>my</span> <span className="text-yellowColor">portfolio</span>
        </div>
      </h1>

      {/* content */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:mt-20 lg:grid-cols-3">
        {portfolio.map(({ id, title, banner }) => (
          <PortfolioBox key={id} banner={banner} id={id} title={title} />
        ))}
      </div>

      <PortfolioModal isModalOpen={isModalOpen} selectedPortfolio={selectedPortfolio} />
    </div>
  );
};

export default Portfolio;

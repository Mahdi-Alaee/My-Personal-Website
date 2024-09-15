import { getPortfolio } from "@/graphql/queries";
import PortfolioBox from "./components/PortfolioBox";
import PortfolioModal from "./components/PortfolioModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};
export const revalidate = 10;

interface PortfolioProps {
  searchParams: { show?: string; selectedPortfolio?: string };
}

const Portfolio: React.FC<PortfolioProps> = async ({ searchParams }) => {
  const isModalOpen = searchParams.show === "true" ? true : false;
  const selectedPortfolio = searchParams?.selectedPortfolio || "false";

  const portfolio = await getPortfolio();

  return (
    <div
      className={`max-w-xl mx-auto px-6 pt-32 pb-6 sm:pt-16 md:max-w-3xl lg:max-w-7xl lg:px-24 ${
        isModalOpen ? "overflow-hidden h-screen" : ""
      }`}
    >
      {/* title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-gray-100 dark:text-white/5 text-9xl sm:block">
          works
        </span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto bg-gray-300 dark:bg-darkBrown 
           flex items-center sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent sm:dark:bg-transparent"
        >
          <span>my</span> <span className="text-yellowColor">portfolio</span>
        </div>
      </h1>

      {/* content */}
      <div className="grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
        {portfolio && portfolio?.length > 0 ? (
          portfolio.map(({ _id, title, banner }) => (
            <PortfolioBox
              key={_id}
              banner={banner?.url!}
              id={_id}
              title={title!}
            />
          ))
        ) : (
          <p className="text-red-500">No portfolio is avalible 😞</p>
        )}
      </div>

      <PortfolioModal
        isModalOpen={isModalOpen}
        selectedPortfolio={selectedPortfolio}
      />
    </div>
  );
};

export default Portfolio;

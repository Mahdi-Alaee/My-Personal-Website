import PortfolioBox from "./components/PortfolioBox";

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-white/5 text-9xl sm:block">works</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto 
           flex items-center bg-darkBrown sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent"
        >
          <span>my</span> <span className="text-yellowColor">portfolio</span>
        </div>
      </h1>

      {/* content */}
      <div className="grid grid-cols-3 gap-8">
        <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox />
      </div>
    </div>
  );
};

export default Portfolio;

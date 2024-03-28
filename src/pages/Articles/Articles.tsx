import ArticleBox from "../../components/ArticleBox";

const Articles: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-16">
      {/* title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-white/5 text-9xl sm:block">works</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto 
           flex items-center bg-darkBrown sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent"
        >
          <span>my</span> <span className="text-yellowColor">BLOG</span>
        </div>
      </h1>

      {/* articles container */}
      <div
        className="px-6 mt-16 grid grid-cols-1 w-max mx-auto gap-y-8 md:grid-cols-2 
      md:w-auto md:gap-x-8 md:px-8 md:max-w-3xl lg:max-w-5xl lg:px-6 xl:grid-cols-3 xl:max-w-6xl"
      >
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
      </div>
    </div>
  );
};

export default Articles;

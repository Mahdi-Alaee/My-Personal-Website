import ArticleBox from "../../components/ArticleBox";

const Articles: React.FC = () => {
  return (
    <div className="pt-20">
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
      <div>
        <ArticleBox />
      </div>
    </div>
  );
};

export default Articles;

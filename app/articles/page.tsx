import ArticleBox from "@/components/ArticleBox";
import { getArticles } from "@/graphql/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};
export const revalidate = 10;

const Articles: React.FC = async () => {
  const data = await getArticles();
  const articles = data?.items;

  return (
    <div className="pt-24 sm:pt-16">
      {/* title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-gray-100 dark:text-white/5 text-9xl sm:block">
          POSTS
        </span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto bg-white dark:bg-darkBrown 
           flex items-center sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent sm:dark:bg-transparent"
        >
          <span>my</span> <span className="text-yellowColor">BLOG</span>
        </div>
      </h1>

      {/* articles container */}
      <div
        className="px-6 mt-16 grid grid-cols-1 w-max mx-auto gap-y-8 md:grid-cols-2 
      md:w-auto md:gap-x-8 md:px-8 md:max-w-3xl lg:max-w-5xl lg:px-6 xl:grid-cols-3 xl:max-w-6xl"
      >
        {articles?.map((article) => (
          <ArticleBox key={article._id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

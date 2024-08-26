
import RichImage from "@/components/RichImage";
import { getArticle } from "@/graphql/queries";
import Image from "next/image";
import { FaCalendar, FaTags, FaUser } from "react-icons/fa";

interface ArticleProps {
  params: { article: string };
}

const Article: React.FC<ArticleProps> = async ({ params }) => {
  const articleId = params.article;
  const article = await getArticle(articleId);

  console.log(article);

  return (
    <div className="pt-44 sm:pt-16">
      {/* title */}
      <h2 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-gray-100 dark:text-white/5 text-9xl sm:block">
          POST
        </span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto 
           flex items-center sm:absolute sm:bottom-0 sm:w-max sm:text-6xl dark:bg-darkBrown 
           bg-white sm:bg-transparent sm:dark:bg-transparent"
        >
          <span>my</span> <span className="text-yellowColor">BLOG</span>
        </div>
      </h2>

      {/* content */}
      <div className="px-12 mx-auto sm:px-6 sm:max-w-3xl">
        {/* article infos */}
        <ul className="flex flex-col gap-y-3 md:gap-x-2 md:flex-row sm:mt-14">
          <li className="flex gap-x-2">
            <FaUser className="text-xs text-yellowColor" />
            <span className="text-xs">steve</span>
          </li>
          <li className="flex gap-x-2">
            <FaCalendar className="text-xs text-yellowColor" />
            <span className="text-xs">09 December 2023</span>
          </li>
          <li className="flex gap-x-2">
            <FaTags className="text-xs text-yellowColor" />
            <span className="text-xs">
              {article?.tags?.map((tag, index) => (
                <span key={tag?._id!}>
                  {tag?.body} {index !== article?.tags?.length! - 1 && "_"}{" "}
                </span>
              ))}
            </span>
          </li>
        </ul>
        {/* title */}
        <h1 className="text-2xl font-bold my-4 sm:text-4xl">
          {article?.title}
        </h1>
        {/* banner */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <RichImage
          src={article?.banner?.url!}
          alt={article?.title!}
          width="10000"
          height="10000"
          imageLoadedClass="opacity-100"
          imageLoadingClass="h-0 opacity-0"
          loadingHeight={400}
        />
        {/* article body */}
        <div className="flex flex-col gap-y-10 leading-7">
          <article dangerouslySetInnerHTML={{ __html: article?.body! }} />
        </div>
      </div>
    </div>
  );
};

export default Article;

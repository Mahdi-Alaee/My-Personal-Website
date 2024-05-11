import Image from "next/image";
import Link from "next/link";

const ArticleBox: React.FC = () => {
  return (
    <div className="dark:bg-darkBrown rounded-md overflow-hidden max-w-lg">
      {/* banner */}
      <Link
        className="block border-b-[6px] border-yellowColor"
        href="/articles/test-article"
      >
        <Image
          src="https://tunis-next.netlify.app/assets/img/blog/blog-post-1.jpg"
          alt="article banner"
          width="10000"
          height="10000"
        />
      </Link>
      {/* title */}
      <Link
        className="block px-6 my-4 text-xl font-bold transition-colors duration-200
      tracking-wider hover:text-yellowColor"
        href="/articles/test-article"
      >
        How to Own Your Audience by Creating an Email List
      </Link>
      {/* description */}
      <p className="px-6 pb-6 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore ...
      </p>
    </div>
  );
};

export default ArticleBox;

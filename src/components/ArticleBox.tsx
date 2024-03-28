import { Link } from "react-router-dom";

const ArticleBox: React.FC = () => {
  return (
    <div className="bg-darkBrown rounded-md overflow-hidden max-w-lg">
      {/* banner */}
      <Link className="block border-b-[6px] border-yellowColor" to='/blog/test-article'>
        <img
          src="https://tunis-next.netlify.app/assets/img/blog/blog-post-1.jpg"
          alt="article banner"
        />
      </Link>
      {/* title */}
      <Link className="block px-6 my-4 text-xl font-bold transition-colors duration-200
      tracking-wider hover:text-yellowColor" to='/blog/test-article'>How to Own Your Audience by Creating an Email List</Link>
      {/* description */}
      <p className="px-6 pb-6 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore ...
      </p>
    </div>
  );
};

export default ArticleBox;

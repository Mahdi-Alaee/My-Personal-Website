import { Link } from "react-router-dom";

const ArticleBox: React.FC = () => {
  return (
    <div>
      {/* banner */}
      <Link to=''>
        <img
          src="https://tunis-next.netlify.app/assets/img/blog/blog-post-1.jpg"
          alt=""
        />
      </Link>
      {/* title */}
      <Link to=''>How to Own Your Audience by Creating an Email List</Link>
      {/* description */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
    </div>
  );
};

export default ArticleBox;

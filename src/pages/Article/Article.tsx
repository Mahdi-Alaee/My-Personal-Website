import { FaCalendar, FaTags, FaUser } from "react-icons/fa";

const Article: React.FC = () => {
  return (
    <div>
      {/* title */}
      <h2 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-white/5 text-9xl sm:block">POST</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto 
           flex items-center bg-darkBrown sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent"
        >
          <span>my</span> <span className="text-yellowColor">BLOG</span>
        </div>
      </h2>

      {/* content */}
      <div>
        {/* article infos */}
        <ul>
          <li>
            <FaUser />
            <span>steve</span>
          </li>
          <li>
            <FaCalendar />
            <span>09 December 2023</span>
          </li>
          <li>
            <FaTags />
            <span>wordpress, business, economy, design</span>
          </li>
        </ul>
        {/* title */}
        <h1>How To Own Your Audience By Creating An Email List</h1>
        {/* banner */}
        <img
          src="https://tunis-next.netlify.app/assets/img/blog/blog-post-1.jpg"
          alt="article banner"
        />
        {/* article body */}
        <div>
          {/* paragraph */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* paragraph */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* paragraph */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;

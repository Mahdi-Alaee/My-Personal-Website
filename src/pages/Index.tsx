import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div>
      {/* profile image */}
      <img
        src="https://tunis-next.netlify.app/assets/img/dark.jpg"
        alt="mahdi alaee | مهدی علایی"
      />
      {/* page content */}
      <div>
        {/* introduction */}
        <h1>I'M MAHDI ALAEE.</h1>
        {/* job */}
        <p>FRONT-END DEVELOPER</p>
        {/* description */}
        <p>
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
        <Link to="/about">
          <span>MORE ABOUT ME</span>
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Index;

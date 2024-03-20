import { FaDownload } from "react-icons/fa";
import LinkButton from "../components/LinkButton";

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* page title */}
      <h1 className="relative uppercase  font-black text-center">
        <span className="text-white/5 text-9xl">resume</span>
        <div className="absolute left-0 right-0 bottom-0 top-0 m-auto w-max flex items-center text-6xl">
          <span>About</span> <span className="text-yellowColor">Me</span>
        </div>
      </h1>
      {/* personal infos */}
      <section>
        {/* left */}
        <div>
          {/* title */}
          <h2>PERSONAL INFOS</h2>
          {/* personal data container */}
          <div>
            {/* personal data item */}
            <p>
              <span>First Name :</span> <span>Mahdi</span>
            </p>
          </div>
          <LinkButton
            to="https://digikala.com"
            icon={<FaDownload />}
            className="max-w-56"
          >
            Download CV
          </LinkButton>
        </div>
        {/* right */}
        <ul>
          {/* info box */}
          <li>
            {/* count */}
            <h6>
              12
              {/* absolute element */}
              <span>+</span>
            </h6>
            {/* entity */}
            <span>
              YEARS OF EXPERIENCE
              {/* absolute element */}
              <span></span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;

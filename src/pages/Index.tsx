import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="w-screen h-screen pt-48 px-6 sm:pt-12">
      {/* profile image */}
      <img
        src="https://tunis-next.netlify.app/assets/img/dark.jpg"
        alt="mahdi alaee | مهدی علایی"
        className="w-64 h-64 rounded-full border-2 border-gray-800 object-cover hidden mx-auto mb-10 sm:block"
      />
      {/* page content */}
      <div className="flex flex-col items-start sm:text-center sm:items-center">
        {/* introduction */}
        <h1 className="text-3xl font-bold text-yellowColor sm:text-4xl">
          I'M MAHDI ALAEE.
        </h1>
        {/* job */}
        <p className="text-3xl font-bold sm:text-4xl sm:mt-2">
          FRONT-END DEVELOPER
        </p>
        {/* description */}
        <p className="mt-3 leading-8 max-w-xl font-semibold">
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
        <Link className="group relative flex mt-5 pl-8 border border-yellowColor gap-x-5 items-center rounded-full overflow-hidden" to="/about">
          <span className="block font-bold tracking-tighter">MORE ABOUT ME</span>
          <span className="block bg-yellowColor p-4 rounded-full">
            <FaArrowRight className="text-xl" />
          </span>
          {/* background hover */}
          <div className="absolute w-0 h-full right-0 bg-yellowColor -z-10 transition-all duration-300 group-hover:w-full">

          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;

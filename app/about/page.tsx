import { Metadata } from "next";
import ExperienceAndEducation from "./components/ExperienceAndEducation";
import MySkills from "./components/MySkills";
import PersonalInfos from "./components/PersonalInfos";

export const metadata: Metadata = {
  title: 'About Me'
}

export const revalidate = 10;

const About: React.FC = () => {

  return (
    <div className="pt-28 sm:pt-16 container mx-auto px-6">
      {/* page title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-gray-100 dark:text-white/5 text-9xl sm:block">resume</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto bg-gray-300 dark:bg-darkBrown 
           flex items-center sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent sm:dark:bg-transparent"
        >
          <span>About</span> <span className="text-yellowColor">Me</span>
        </div>
      </h1>
      <PersonalInfos />

      {/* sections among border */}
      <div className="border-b border-black-3 w-2/4 my-20 mx-auto"></div>

      <MySkills />

      {/* sections among border */}
      <div className="border-b border-black-3 w-2/4 my-20 mx-auto"></div>

      <ExperienceAndEducation />

      <br />
      <br />
      <br />
    </div>
  );
};

export default About;

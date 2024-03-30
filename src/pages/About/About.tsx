import { useEffect } from "react";
import ExperienceAndEducation from "./components/ExperienceAndEducation";
import MySkills from "./components/MySkills";
import PersonalInfos from "./components/PersonalInfos";
import { useAppDispatch } from "../../Redux/store";
import { setExperiences } from "../../Redux/reducers/experience";
import { setEducations } from "../../Redux/reducers/education";

const About: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setExperiences([
        {
          id: 1,
          date: "2005 - 2013",
          title1: "CONSULTANT",
          title2: "VIDEOHIVE",
          desription:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
          icon: "work",
        },
        {
          id: 2,
          date: "2013 - 2018",
          title1: "UI/UX DESIGNER",
          title2: "THEMEFOREST",
          desription:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
          icon: "work",
        },
        {
          id: 3,
          date: "2018 - PRESENT",
          title1: "WEB DEVELOPER",
          title2: "ENVATO",
          desription:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
          icon: "work",
        },
      ])
    );
    dispatch(
      setEducations([
        {
          id: 1,
          date: "2009",
          title1: "BACHELOR DEGREE",
          title2: "TUNIS HIGH SCHOOL",
          desription:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
          icon: "education",
        },
        {
          id: 2,
          date: "2012",
          title1: "MASTER DEGREE",
          title2: "KIEV UNIVERSITY",
          desription:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
          icon: "education",
        },
        {
          id: 3,
          date: "2015",
          title1: "ENGINEER DEGREE",
          title2: "OXFORD UNIVERSITY",
          desription:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
          icon: "education",
        },
      ])
    );
  }, []);

  return (
    <div className="pt-28 sm:pt-16 container mx-auto px-6">
      {/* page title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden dark:text-white/5 text-9xl sm:block">resume</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto 
           flex items-center dark:bg-darkBrown sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent"
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

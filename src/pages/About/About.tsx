import PersonalInfos from "./components/PersonalInfos";

const About: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-16 container mx-auto px-6">
      {/* page title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-white/5 text-9xl sm:block">resume</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto 
           flex items-center bg-darkBrown sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent"
        >
          <span>About</span> <span className="text-yellowColor">Me</span>
        </div>
      </h1>
      {/* personal infos */}
      <PersonalInfos />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;

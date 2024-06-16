// import { useAppSelector } from "../../../Redux/store";
import { getEducations, getExperiences } from "@/graphql/queries";
import Education from "./Education";
import Experience from "./Experience";

const ExperienceAndEducation: React.FC = async () => {
  const educations = await getEducations();
  const experiences = await getExperiences();

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-0">
      {/* title */}
      <h1 className="text-center text-2xl font-bold mb-14">
        EXPERIENCE & EDUCATION
      </h1>

      {/* content */}
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-6 lg:gap-x-16">
        {/* experience section */}
        <div className="grid grid-cols-1 gap-y-12">
          {experiences!.map((experience) => (
            <Experience key={experience._id} {...experience} />
          ))}
        </div>
        {/* education section */}
        <div className="grid grid-cols-1 gap-y-12">
          {educations!.map((education) => (
            <Education key={education._id} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;

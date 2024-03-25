import { useAppSelector } from "../../../Redux/store";
import EBox from "../../../components/EBox";

const ExperienceAndEducation: React.FC = () => {
  const state = useAppSelector((state) => state);

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
          {[...state.experience.experiences].reverse().map((experience) => (
            <EBox key={experience.id} {...experience} />
          ))}
        </div>
        {/* education section */}
        <div className="grid grid-cols-1 gap-y-12">
          {[...state.education.educations].reverse().map((education) => (
            <EBox key={education.id} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;

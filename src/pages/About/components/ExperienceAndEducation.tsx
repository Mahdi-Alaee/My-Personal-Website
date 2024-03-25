import { useAppSelector } from "../../../Redux/store";
import EBox from "../../../components/EBox";

const ExperienceAndEducation: React.FC = () => {
  const state = useAppSelector((state) => state);

  return (
    <section>
      {/* title */}
      <h1 className="text-center text-2xl font-bold mb-14">
        EXPERIENCE & EDUCATION
      </h1>

      {/* content */}
      <div>
        {/* experience section */}
        <div>
          {state.experience.experiences.map((experience) => (
            <EBox key={experience.id} {...experience} />
          ))}
        </div>
        {/* education section */}
        <div>
          {state.education.educations.map((education) => (
            <EBox key={education.id} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;

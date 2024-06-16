import { getSkills } from "@/graphql/queries";
import SkillBox from "./SkillBox";

const MySkills: React.FC = async () => {
  const skills = await getSkills();

  return (
    <section className="max-w-6xl mx-auto">
      {/* title */}
      <h2 className="text-center text-2xl font-bold mb-14">MY SKILLS</h2>
      {/* content */}
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {skills!.map((skill) => (
          <SkillBox key={skill._id} percentage={+skill.percentage!} title={skill.title!} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;

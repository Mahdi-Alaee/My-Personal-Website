import SkillBox from "./SkillBox";

const MySkills: React.FC = () => {
  return (
    <section>
      {/* title */}
      <h2>MY SKILLS</h2>
      {/* content */}
      <div>
        <SkillBox percentage={25} text="HTML" />
      </div>
    </section>
  );
};

export default MySkills;

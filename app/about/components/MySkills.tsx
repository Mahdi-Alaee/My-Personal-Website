import SkillBox from "./SkillBox";

const MySkills: React.FC = () => {
  const skills = [
    { id: 1, percentage: 91, text: "HTML" },
    { id: 2, percentage: 89, text: "CSS" },
    { id: 3, percentage: 82, text: "JavaScript" },
    { id: 4, percentage: 91, text: "REACT" },
    { id: 5, percentage: 81, text: "TypeScript" },
    { id: 6, percentage: 97, text: "Redux" },
    { id: 7, percentage: 93, text: "tailwind" },
    { id: 8, percentage: 50, text: "bootstrap" },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      {/* title */}
      <h2 className="text-center text-2xl font-bold mb-14">MY SKILLS</h2>
      {/* content */}
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {skills.map((skill) => (
          <SkillBox key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;

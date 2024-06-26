"use client";

import { useTheme } from "next-themes";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface SkillBoxProps {
  title: string;
  percentage: number;
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, percentage }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-y-6">
      {/* progressBar wrapper */}
      <div className="w-24 h-24 sm:w-32 sm:h-32">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "#ffb400",
            textColor: `${theme === "light" ? "#333" : "#fff"}`,
            trailColor: `${theme === "light" ? "#EEEEEE" : "#252525"}`,
          })}
        />
      </div>
      <h6 className="text-lg">{title}</h6>
    </div>
  );
};

export default SkillBox;

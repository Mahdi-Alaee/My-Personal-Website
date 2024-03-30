import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAppSelector } from "../../../Redux/store";
interface SkillBoxProps {
  text: string;
  percentage: number;
}

const SkillBox: React.FC<SkillBoxProps> = ({ text, percentage }) => {
  const isDarkMode = useAppSelector((state) => state.isDarkMode);

  return (
    <div className="flex flex-col items-center gap-y-6">
      {/* progressBar wrapper */}
      <div className="w-24 h-24 sm:w-32 sm:h-32">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "#ffb400",
            textColor: `${isDarkMode ? "#fff" : "#333"}`,
            trailColor: `${isDarkMode ? '#252525' : '#EEEEEE'}`,
          })}
        />
      </div>
      <h6 className="text-lg">{text}</h6>
    </div>
  );
};

export default SkillBox;

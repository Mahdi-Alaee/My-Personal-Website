import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface SkillBoxProps {
  text: string;
  percentage: number;
}

const SkillBox: React.FC<SkillBoxProps> = ({ text, percentage }) => {
  return (
    <div>
      {/* progressBar wrapper */}
      <div className="w-28 h-28">
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
            pathColor: '#ffb400',
            textColor: '#fff',
            trailColor: '#252525'
        })} />
      </div>
      <h6>{text}</h6>
    </div>
  );
};

export default SkillBox;

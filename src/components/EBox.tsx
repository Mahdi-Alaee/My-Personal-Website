import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { EBoxType } from "../types";

const EBox: React.FC<EBoxType> = ({
  date,
  desription,
  icon,
  title1,
  title2,
}) => {
  return (
    <div>
      {/* absolote icon */}
      <span>{icon === "work" ? <FaBriefcase /> : <FaGraduationCap />}</span>

      {/* date element */}
      <p>2018 - PRESENT</p>

      {/* title */}
      <p>
        {/* title 1 */}
        <span>WEB DEVELOPER</span>
        {/* title 2 */}
        <span>ENVATO</span>
      </p>

      {/* description */}
      <p>
        Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit,
      </p>
    </div>
  );
};

export default EBox;

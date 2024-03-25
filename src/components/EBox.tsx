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
    <div className="border-l border-[#333] pl-10 relative flex flex-col items-start gap-y-5">
      {/* absolote icon */}
      <span className="absolute bg-yellowColor p-3 rounded-full -left-5">
        {icon === "work" ? <FaBriefcase className="text-lg" /> : <FaGraduationCap className="text-lg" />}
      </span>

      {/* date element */}
      <p className="bg-[#212121] text-[#cfcfcf] rounded-full px-2 py-1 text-xs font-bold">{date}</p>

      {/* title */}
      <p className="flex gap-x-2 items-center">
        {/* title 1 */}
        <span className="text-lg">{title1}</span>
        {/* title 2 */}
        <span className="relative opacity-80 pl-5 before:absolute before:left-0 before:bg-[#cfcfcf] before:w-3 before:h-[2px] before:top-0 before:bottom-0 before:m-auto">{title2}</span>
      </p>

      {/* description */}
      <p className="text-sm leading-6 opacity-90">{desription}</p>
    </div>
  );
};

export default EBox;

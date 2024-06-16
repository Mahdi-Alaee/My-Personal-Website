import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { ExperienceType } from "@/types/about";
import Link from "next/link";

const Experience: React.FC<ExperienceType> = ({
  company,
  description,
  related_link_text,
  related_link_url,
  start_end_date,
  work,
}) => {
  return (
    <div className="border-l border-[#333] pl-10 relative flex flex-col items-start gap-y-5">
      {/* absolote icon */}
      <span className="absolute bg-yellowColor p-3 rounded-full -left-5">
        <FaBriefcase className="text-lg" />
      </span>

      {/* date element */}
      <p className="bg-[#212121] text-[#cfcfcf] rounded-full px-2 py-1 text-xs font-bold">
        {start_end_date}
      </p>

      {/* title */}
      <p className="flex gap-x-2 items-center">
        {/* title 1 */}
        <span className="text-lg">{company}</span>
        {/* title 2 */}
        <span className="relative opacity-80 pl-5 before:absolute before:left-0 before:bg-[#cfcfcf] before:w-3 before:h-[2px] before:top-0 before:bottom-0 before:m-auto">
          {work}
        </span>
      </p>

      {/* description */}
      <p className="text-sm leading-6 opacity-90">{description}</p>

      {/* related links */}
      <Link
        className="text-yellowColor"
        href={related_link_url!}
        target="_blank"
      >
        {related_link_text}
      </Link>
    </div>
  );
};

export default Experience;

import { useState } from "react";
import LinkButton from "../../../components/LinkButton";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import InfoBox from "./InfoBox";

const PersonalInfos: React.FC = () => {
  const [boxInfos] = useState([
    { id: 1, count: 12, text: "YEARS OF EXPERIENCE" },
    { id: 2, count: 97, text: "COMPLETED PROJECTS" },
    { id: 3, count: 81, text: "HAPPY CUSTOMERS" },
    { id: 4, count: 53, text: "AWARDS WON" },
  ]);

  return (
    <section className="flex flex-col gap-y-12 sm:mt-16 lg:flex-row lg:gap-x-12 xl:justify-between">
      {/* left */}
      <div>
        {/* title */}
        <h2 className="text-xl font-extrabold sm:text-3xl">PERSONAL INFOS</h2>
        {/* profile image */}
        <img
          src="https://tunis-next.netlify.app/assets/img/dark.jpg"
          alt="mahdi alaee | مهدی علایی"
          className="w-60 h-60 rounded-full border-2 border-gray-800 object-cover 
            mx-auto mt-5 sm:hidden"
        />
        {/* personal data container */}
        <div className="grid grid-cols-2 mt-8 gap-y-6">
          {/* personal data item */}
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">First Name :</span>{" "}
            <span className="font-semibold">Mahdi</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Address :</span>{" "}
            <span className="font-semibold">iran/tehran</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Last Name :</span>{" "}
            <span className="font-semibold">Alaee</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Phone :</span>{" "}
            <span className="font-semibold">+98 933 431 8411</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Age :</span>{" "}
            <span className="font-semibold">18 Years</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1 lg:flex-col xl:flex-row">
            <span className="opacity-80">Email :</span>{" "}
            <span className="font-semibold">mahdi.alaee.dev@gmail.com</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Nationality :</span>{" "}
            <span className="font-semibold">Iranian</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">GitHub :</span>{" "}
            <Link
              className="font-semibold text-blue-500"
              to="https://github.com/Mahdi-Alaee/"
              target="_blank"
            >
              Mahdi-Alaee
            </Link>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Instagram :</span>{" "}
            <Link
              to="https://www.instagram.com/mahdi.alaee1/"
              target="_blank"
              className="font-semibold text-blue-500"
            >
              mahdi.alaee1
            </Link>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Language :</span>{" "}
            <span className="font-semibold">English : 70%</span>
          </p>
        </div>
        <LinkButton
          to="https://digikala.com"
          icon={<FaDownload />}
          className="max-w-56 mt-8"
        >
          Download CV
        </LinkButton>
      </div>
      {/* right */}
      <ul className="grid grid-cols-2 gap-8 xl:gap-y-6">
        {boxInfos.map((info) => (
          // info box
          <InfoBox {...info} />
        ))}
      </ul>
    </section>
  );
};

export default PersonalInfos;

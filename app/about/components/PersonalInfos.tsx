import LinkButton from "@/components/LinkButton/LinkButton";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import InfoBox from "./InfoBox";
import Image from "next/image";
import RichImage from "@/components/RichImage";

const PersonalInfos: React.FC = () => {
  const boxInfos = [
    { id: 1, count: 2, text: "YEARS OF EXPERIENCE" },
    { id: 2, count: 10, text: "COMPLETED PROJECTS" },
    { id: 3, count: 2, text: "HAPPY CUSTOMERS" },
    { id: 4, count: 3, text: "AWARDS WON" },
  ];

  return (
    <section className="flex flex-col gap-y-12 sm:mt-16 lg:flex-row lg:gap-x-12 xl:justify-between">
      {/* left */}
      <div>
        {/* title */}
        <h2 className="text-xl font-extrabold sm:text-3xl">PERSONAL INFOS</h2>
        {/* profile image */}
        <div
          className="w-60 h-60 
            mx-auto mt-5 sm:hidden"
        >
          <RichImage
            src="/images/my-profile.jpg"
            alt="mahdi alaee | مهدی علایی"
            className="object-cover w-full h-full rounded-full border-2 border-gray-800"
            loadingClass="w-full h-full rounded-full border-2 border-gray-800"
            isImg={true}
          />
        </div>
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
            <Link
              className="font-semibold text-yellowColor"
              href="tel:09334318411"
            >
              +98 933 431 8411
            </Link>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Age :</span>{" "}
            <span className="font-semibold">19 Years</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1 lg:flex-col xl:flex-row">
            <span className="opacity-80">Email :</span>{" "}
            <Link
              className="font-semibold text-yellowColor"
              href="mailto:mahdi.alaee.dev@gmail.com"
              target="_blank"
            >
              mahdi.alaee.dev@gmail.com
            </Link>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Nationality :</span>{" "}
            <span className="font-semibold">Iranian</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Instagram :</span>{" "}
            <Link
              href="https://www.instagram.com/mahdi.alaee1/"
              target="_blank"
              className="font-semibold text-yellowColor"
            >
              mahdi.alaee1
            </Link>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">Language :</span>{" "}
            <span className="font-semibold">English : 70%</span>
          </p>
          <p className="text-sm flex flex-col sm:flex-row sm:gap-x-1">
            <span className="opacity-80">GitHub :</span>{" "}
            <Link
              className="font-semibold text-yellowColor"
              href="https://github.com/Mahdi-Alaee/"
              target="_blank"
            >
              Mahdi-Alaee
            </Link>
          </p>
        </div>
        <LinkButton
          to="https://s33.picofile.com/file/8483114334/mahdi_alaee.pdf.html"
          icon={<FaDownload />}
          className="max-w-64 mt-8"
          target="_blank"
        >
          Download CV
        </LinkButton>
      </div>
      {/* right */}
      <ul className="grid grid-cols-2 gap-8 xl:gap-y-6">
        {boxInfos.map((info) => (
          // info box
          <InfoBox key={info.id} {...info} />
        ))}
      </ul>
    </section>
  );
};

export default PersonalInfos;

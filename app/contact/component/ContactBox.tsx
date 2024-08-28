import Link from "next/link";
import { Component, ReactNode } from "react";
import { IconType } from "react-icons";

interface ContactBoxProps {
  title: string;
  content: string;
  icon: ReactNode;
  href:string
}

const ContactBox: React.FC<ContactBoxProps> = ({ title, content, icon,href }) => {
  return (
    <Link href={href} className="flex items-center gap-x-4">
      {/* icon */}
      <div className="text-4xl text-yellowColor">{icon}</div>

      {/* content */}
      <div className="text-sm">
        {/* title */}
        <h6 className="opacity-80">{title}</h6>
        {/* content */}
        <p>{content}</p>
      </div>
    </Link>
  );
};

export default ContactBox;

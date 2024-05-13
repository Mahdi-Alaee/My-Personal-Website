import { Component, ReactNode } from "react";
import { IconType } from "react-icons";

interface ContactBoxProps {
  title: string;
  content: string;
  icon: ReactNode;
}

const ContactBox: React.FC<ContactBoxProps> = ({ title, content, icon }) => {
  return (
    <div className="flex items-center gap-x-4">
      {/* icon */}
      <div className="text-4xl text-yellowColor">{icon}</div>

      {/* content */}
      <div className="text-sm">
        {/* title */}
        <h6 className="opacity-80">{title}</h6>
        {/* content */}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContactBox;

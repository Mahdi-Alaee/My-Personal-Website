import LinkButton from "@/components/LinkButton/LinkButton";
import ContactBox from "./component/ContactBox";
import Input from "./component/Input";
import Social from "./component/Social";
import { BiSend } from "react-icons/bi";

const Contact: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-16">
      {/* title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-gray-100 dark:text-white/5 text-9xl sm:block">CONTACT</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto bg-white dark:bg-darkBrown 
           flex items-center sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent sm:dark:bg-transparent"
        >
          <span>GET IN</span> <span className="text-yellowColor">TOUCH</span>
        </div>
      </h1>

      {/* content */}
      <div className="px-6 flex flex-col gap-y-12 mx-auto sm:mt-16 sm:max-w-xl md:max-w-3xl lg:flex-row lg:max-w-7xl lg:gap-x-12 lg:px-24">
        {/* left */}
        <div>
          {/* title */}
          <h2 className="text-xl font-semibold sm:text-2xl">DON{"\'"}T BE SHY !</h2>
          {/* description */}
          <p className="my-6 text-sm leading-6 max-w-96">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          {/* contactBox wrapper */}
          <div className="flex flex-col gap-y-6">
            <ContactBox />
            <ContactBox />
          </div>
          {/* socials */}
          <div className="mt-4 flex gap-x-2">
            <Social to="" />
            <Social to="" />
            <Social to="" />
            <Social to="" />
          </div>
        </div>
        {/* right */}
        <form>
          {/* textboxes wrapper */}
          <div className="flex flex-col gap-y-8 md:grid md:grid-cols-3 md:gap-x-8">
            <Input placeholder="YOUR NAME" />
            <Input placeholder="YOUR EMAIL" />
            <Input placeholder="YOUR SUBJECT" />
          </div>
          <Input className="my-8 w-full min-h-44 max-h-96" type='textarea' placeholder="YOUR MESSAGE" />
          <LinkButton className="w-max mt-0" icon={<BiSend className="text-2xl" />} to="">
            SEND MESSAGE
          </LinkButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;

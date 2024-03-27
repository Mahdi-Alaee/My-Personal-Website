import { FaTelegram } from "react-icons/fa";
import LinkButton from "../../components/LinkButton";
import ContactBox from "./component/ContactBox";
import Input from "./component/Input";
import Social from "./component/Social";

const Contact: React.FC = () => {
  return (
    <div>
      {/* title */}
      <h1 className="uppercase font-black text-center sm:relative">
        <span className="hidden text-white/5 text-9xl sm:block">CONTACT</span>
        <div
          className="fixed z-10 text-3xl p-5 w-full left-0 right-0  top-0 m-auto 
           flex items-center bg-darkBrown sm:absolute sm:bottom-0 sm:w-max sm:text-6xl sm:bg-transparent"
        >
          <span>GET IN</span> <span className="text-yellowColor">TOUCH</span>
        </div>
      </h1>

      {/* contact */}
      <div>
        {/* left */}
        <div>
          {/* title */}
          <h2>DON'T BE SHY !</h2>
          {/* description */}
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <ContactBox />
          <ContactBox />
          {/* socials */}
          <ul>
            <Social />
            <Social />
            <Social />
            <Social />
          </ul>
        </div>
        {/* right */}
        <form>
          {/* textboxes wrapper */}
          <div>
            <Input placeholder="YOUR NAME" />
            <Input placeholder="YOUR EMAIL" />
            <Input placeholder="YOUR SUBJECT" />
          </div>
          <Input placeholder="YOUR MESSAGE" />
          <LinkButton icon={<FaTelegram />} to="">
            SEND MESSAGE
          </LinkButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;

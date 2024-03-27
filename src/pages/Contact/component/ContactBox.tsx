import { FaEnvelopeOpen } from "react-icons/fa";

const ContactBox: React.FC = () => {
    return (
        <div className="flex items-center gap-x-4">
            {/* icon */}
            <FaEnvelopeOpen className="text-4xl text-yellowColor" />
            {/* content */}
            <div className="text-sm">
                {/* title */}
                <h6 className="opacity-80">MAIL ME</h6>
                {/* content */}
                <p>steve@mail.com</p>
            </div>
        </div>
    )
}

export default ContactBox;
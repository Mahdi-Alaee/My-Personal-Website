import { MdEmail } from "react-icons/md"

const ContactBox: React.FC = () => {
    return (
        <div>
            {/* icon */}
            <MdEmail />
            {/* content */}
            <div>
                {/* title */}
                <h6>MAIL ME</h6>
                {/* content */}
                <p>steve@mail.com</p>
            </div>
        </div>
    )
}

export default ContactBox;
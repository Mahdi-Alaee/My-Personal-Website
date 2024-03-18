import { SlSettings } from "react-icons/sl";


const ThemeButton: React.FC = () => {
    return (
        <button className="absolute top-24 right-7 z-50 bg-darkBrown p-3 rounded-full duration-200 hover:bg-yellowColor lg:top-10 lg:right-8">
            <SlSettings className="text-white text-4xl lg:text-2xl" />
        </button>
    )
}

export default ThemeButton;
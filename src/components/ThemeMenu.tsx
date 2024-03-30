import { FaMoon } from "react-icons/fa";

const ThemeMenu:React.FC = () => {
    return (
        <div>
            {/* theme */}
            <section>
                <span>THEME: </span>
                <FaMoon />
            </section>
            {/* color */}
            <section>
                <span>COLOR: </span>
                <div>
                    <span className="block w-5 h-5 rounded-full bg-red-500"></span>
                </div>
            </section>
        </div>
    )
}

export default ThemeMenu;
import { FaArrowsRotate } from "react-icons/fa6";

export default function Loading(){
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 dark:bg-black bg-white flex justify-center items-center">
            <FaArrowsRotate className="text-yellowColor text-9xl animate-spin" />
        </div>
    )
}
import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 dark:bg-black bg-white flex justify-center items-center">
      <HashLoader color="#ffb400" size={120} />
    </div>
  );
}

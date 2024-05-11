import Image from "next/image";
import Link from "next/link";

const PortfolioBox: React.FC = () => {
  return (
    <Link href='/portfolio?show=true' className="group overflow-hidden rounded-lg relative cursor-pointer">
      {/* image */}
      <Image
        className="object-cover"
        src="https://tunis-next.netlify.app/assets/img/projects/project-2.jpg"
        alt="mahdi alaee | portfolio image"
        width="10000"
        height="10000"
      />
      {/* hover element */}
      <div
        className="absolute top-0 w-full h-0 flex justify-center items-center text-xl bg-yellowColor 
            overflow-hidden transition-all duration-300 group-hover:h-full"
      >
        some text...
      </div>
    </Link>
  );
};

export default PortfolioBox;

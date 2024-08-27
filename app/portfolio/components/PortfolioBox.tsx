import RichImage from "@/components/RichImage";
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  title: string;
  banner: string;
  id: string
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({banner,id,title}) => {
  return (
    <Link href={`/portfolio?show=true&selectedPortfolio=${id}`} className="group overflow-hidden rounded-lg relative cursor-pointer shadow">
      {/* image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <RichImage
        className="object-cover"
        src={banner}
        alt="mahdi alaee | portfolio image"
        imageLoadedClass="h-52"
        imageLoadingClass="h-0"
        loadingHeight={210}
      />
      {/* hover element */}
      <div
        className="absolute top-0 w-full h-0 flex justify-center items-center text-xl bg-yellowColor 
            overflow-hidden transition-all duration-300 group-hover:h-full"
      >
        {title}
      </div>
    </Link>
  );
};

export default PortfolioBox;

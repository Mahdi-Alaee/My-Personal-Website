"use client";

import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { getPortfolioById } from "@/graphql/queries";
import RichImage from "@/components/RichImage";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { Portfolio } from "@/types/portfolio";

interface PortfolioModalProps {
  isModalOpen: boolean;
  selectedPortfolio: string;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isModalOpen,
  selectedPortfolio,
}) => {
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState<Portfolio>();

  useEffect(() => {
    if (isModalOpen) {
      getPortfolioById(selectedPortfolio).then((data) => {
        setPortfolio(data as Portfolio);
      });
    } else {
      setPortfolio({});
      setLoading(true);
    }
  }, [isModalOpen, selectedPortfolio]);

  useEffect(() => {
    if (portfolio && "title" in portfolio) {
      setLoading(false);
    }
  }, [portfolio]);

  if (selectedPortfolio === "false") {
    return false;
  }
  return (
    // modal container
    <>
      {!loading ? (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 transition-all duration-200 lg:bg-black/90 lg:flex 
    lg:justify-center lg:items-center ${
      isModalOpen ? "z-50 opacity-100" : "opacity-0 -z-50"
    }`}
        >
          {/* desktop close button */}
          <Link
            href="/portfolio?show=false"
            className={`hidden absolute top-5 right-5 text-gray-500 cursor-pointer text-5xl lg:block ${
              isModalOpen ? "z-20" : "-z-50"
            }`}
          >
            <CgClose />
          </Link>
          {/* modal box */}
          <div className="bg-gray-100 dark:bg-darkBrown w-full h-full pb-8 dark:text-white overflow-y-scroll lg:w-max lg:h-max lg:py-8 lg:rounded-xl lg:overflow-hidden">
            {/* wrapper */}
            <div className="max-w-2xl mx-auto">
              {/* close button */}
              <Link
                href="/portfolio?show=false"
                className="py-4 border-b border-lightBrown text-3xl dark:text-[#ababab] flex justify-center cursor-pointer md:text-5xl lg:hidden"
              >
                <CgClose />
              </Link>
              {/* title */}
              <h2 className="mt-28 text-center text-2xl font-bold text-yellowColor sm:text-4xl lg:mt-0">
                {portfolio?.title}
              </h2>
              {/* infos */}
              <div className="px-6 grid grid-cols-1 gap-y-3 mt-10 text-sm md:grid-cols-2">
                {/* info 1 */}
                <div className="flex flex-wrap items-center gap-x-2 mr-1">
                  {/* icon */}
                  <FiFileText className="text-base" />
                  {/* title */}
                  <span className="shrink-0">Project : </span>
                  {/* content */}
                  <span className="font-medium text-yellowColor">
                    {portfolio?.description}
                  </span>
                </div>
                {/* info 2 */}
                <div className="flex items-center gap-x-2 flex-wrap">
                  {/* icon */}
                  <FaCode className="text-base" />
                  {/* title */}
                  <span className="shrink-0">languages and tools : </span>
                  {/* content */}
                  <span className="font-medium text-yellowColor">
                    {portfolio?.tags?.map((tag, index) => (
                      <span key={tag?._id}>
                        {tag?.body}
                        {portfolio.tags?.length! - 1 > index && ", "}
                      </span>
                    ))}
                  </span>
                </div>
                {/* info 3 */}
                <div className="flex items-center gap-x-2">
                  {/* icon */}
                  <BiUser className="text-base" />
                  {/* title */}
                  <span className="shrink-0">Client : </span>
                  {/* content */}
                  <span className="font-medium text-yellowColor">
                    {portfolio?.client}
                  </span>
                </div>
                {/* info 4 */}
                <div className="flex items-center gap-x-2">
                  {/* icon */}
                  <FaExternalLinkAlt className="text-base" />
                  {/* title */}
                  <span className="shrink-0">Preview : </span>
                  {/* content */}
                  <Link
                    className="text-yellowColor underline"
                    href={portfolio?.preview! || ""}
                    target="_blank"
                  >
                    {portfolio?.preview}
                  </Link>
                </div>
              </div>

              {/* media */}
              <div className="px-6 mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <RichImage
                  src={portfolio?.banner?.url!}
                  alt={portfolio?.title!}
                  className="w-full rounded-md"
                  loadingHeight={300}
                  imageLoadingClass="h-0"
                  imageLoadedClass="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PortfolioModal;

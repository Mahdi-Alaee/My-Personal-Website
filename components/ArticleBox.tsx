"use client";

import { Article } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import RichImage from "./RichImage";

const ArticleBox: React.FC<Article> = ({ title, description, banner, _id }) => {
  return (
    <div className="mx-auto shadow-xl rounded-md overflow-hidden max-w-lg dark:bg-darkBrown">
      {/* banner */}
      <Link
        className="block border-b-[6px] border-yellowColor"
        href={`/articles/${_id}`}
      >
        <RichImage
          src={banner?.url!}
          alt={title!}
          className=""
          imageLoadedClass="h-60 sm:h-72 md:h-52 lg:h-64 xl:h-52"
          imageLoadingClass="h-0"
          loadingHeight={208}
        />
      </Link>
      {/* title */}
      <Link
        className="block px-6 my-4 text-xl font-bold transition-colors duration-200
      tracking-wider hover:text-yellowColor"
        href={`/articles/${_id}`}
      >
        {title}
      </Link>
      {/* description */}
      <p className="px-6 pb-6 leading-7">
        {description?.length! > 100
          ? description?.slice(0, 100) + " . . ."
          : description}
      </p>
    </div>
  );
};

export default ArticleBox;

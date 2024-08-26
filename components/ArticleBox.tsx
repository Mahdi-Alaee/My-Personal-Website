"use client";

import { Article } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";

const ArticleBox: React.FC<Article> = ({ title, description, banner, _id }) => {
  const [imageLoading, setImageLoading] = useState(true);

  console.log(imageLoading);

  return (
    <div className="dark:bg-darkBrown rounded-md overflow-hidden max-w-lg">
      {/* banner */}
      <Link
        className="block border-b-[6px] border-yellowColor"
        href={`/articles/${_id}`}
      >
        <div
          className={`bg-black h-52 justify-center items-center ${
            imageLoading ? "flex" : "hidden"
          }`}
        >
          <PropagateLoader color="#ffb400" />
        </div>

        <Image
          src={banner?.url!}
          alt={title!}
          width="10000"
          height="10000"
          onLoad={() => {
            console.log("load");

            setImageLoading(false);
          }}
          loading="lazy"
          className={`${imageLoading ? "h-0 opacity-0" : "h-52 opacity-100"}`}
        />
      </Link>
      {/* title */}
      <Link
        className="block px-6 my-4 text-xl font-bold transition-colors duration-200
      tracking-wider hover:text-yellowColor"
        href="/articles/test-article"
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

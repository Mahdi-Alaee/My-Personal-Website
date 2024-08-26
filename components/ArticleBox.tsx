'use client'

import { Article } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ArticleBox: React.FC<Article> = ({ title, description, banner, _id }) => {
  const [imageFailed,setImageFailed] = useState();
  console.log({banner:banner?.url,title});
  
  return (
    <div className="dark:bg-darkBrown rounded-md overflow-hidden max-w-lg">
      {/* banner */}
      <Link
        className="block border-b-[6px] border-yellowColor"
        href={`/articles/${_id}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={banner?.url!}
          alt={title!}
          width="10000"
          height="10000"
          onLoad={e => {
            console.log(e);
            
          }}
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

"use client";

import Image, { ImageProps } from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { PropagateLoader } from "react-spinners";

interface RichImageProps extends ImageProps {
  imageLoadingClass?: string;
  imageLoadedClass?: string;
  loadingHeight?: number;
}

export default function RichImage({
  alt,
  src,
  className,
  imageLoadedClass,
  imageLoadingClass,
  loadingHeight
}: RichImageProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      <div
        className={`dark:bg-black bg-gray-100 justify-center items-center ${
          imageLoading ? "flex" : "hidden"
        }`}
        style={{height: loadingHeight}}
      >
        <PropagateLoader color="#ffb400" />
      </div>

      <Image
        src={src}
        alt={alt}
        width="10000"
        height="10000"
        onLoad={() => setImageLoading(false)}
        className={`${className} ${
          imageLoading ? imageLoadingClass + ' opacity-0' : imageLoadedClass + ' opacity-100'
        }`}
      />
    </>
  );
}
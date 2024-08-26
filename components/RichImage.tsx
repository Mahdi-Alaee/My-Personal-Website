"use client";

import Image, { ImageProps } from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { PropagateLoader } from "react-spinners";

interface RichImageProps extends ImageProps {
  imageLoading: boolean;
  setImageLoading: Dispatch<SetStateAction<boolean>>;
}

export default function RichImage({ alt, src, className,imageLoading,setImageLoading }: RichImageProps) {

  return (
    <>
      <div
        className={`bg-black h-52 justify-center items-center ${
          imageLoading ? "flex" : "hidden"
        }`}
      >
        <PropagateLoader color="#ffb400" />
      </div>

      <Image
        src={src}
        alt={alt}
        width="10000"
        height="10000"
        onLoad={() => {
          console.log("load");

          setImageLoading(false);
        }}
        className={className}
      />
    </>
  );
}

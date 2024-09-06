import LinkButton from "@/components/LinkButton/LinkButton";
import RichImage from "@/components/RichImage";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Loading from "./loading";
import { useState } from "react";

export default async function HomePage() {
  return (
    <div
      className="w-screen h-screen pt-80 px-6 sm:pt-40 lg:flex lg:pr-24 lg:p-10 lg:gap-x-16 
    lg:justify-between xl:justify-normal xl:gap-x-36 xxl:gap-x-56"
    >
      {/* profile image */}
      <div
        className="w-64 h-64 rounded-full border-2 border-gray-800  hidden 
        mx-auto mb-10 sm:block lg:w-5/12 lg:h-full  
        lg:gap-x-12 lg:rounded-3xl lg:border-none lg:m-0 xl:w-4/12"
      >
        <RichImage
          src="/images/my-profile.jpg"
          alt="mahdi alaee | مهدی علایی"
          className="object-cover rounded-full lg:rounded-3xl"
          style={{ boxShadow: "0 0 8px #000" }}
          imageLoadedClass="h-full"
          imageLoadingClass="h-0"
          loadingClass="rounded-full w-full h-full lg:rounded-3xl"
        />
      </div>
      {/* page content */}
      <div
        className="flex flex-col items-start sm:text-center sm:items-center lg:justify-center 
      lg:items-start lg:text-left"
      >
        {/* introduction */}
        <h1 className="text-3xl font-bold text-yellowColor sm:text-4xl xl:text-5xl">
          I{"'"}M MAHDI ALAEE.
        </h1>
        {/* job */}
        <p className="text-3xl font-bold sm:text-4xl sm:mt-2 xl:text-5xl">
          FRONT-END DEVELOPER
        </p>
        {/* description */}
        <p className="mt-4 leading-7 max-w-xl lg:mt-6 lg:mb-2 lg:leading-8 lg:text-lg">
          I{"'"}m a react-based front‑end developer focused on crafting clean &
          user‑friendly experiences, I am passionate about building excellent
          software that improves the lives of those around me.
        </p>
        {/* bottom button link */}
        <LinkButton to="/about" icon={<FaArrowRight />}>
          MORE ABOUT ME
        </LinkButton>
      </div>
    </div>
  );
}

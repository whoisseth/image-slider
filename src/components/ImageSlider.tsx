/** @format */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
  images: string[];
};

export default function ImageSlider({ images }: Props) {
  const [currectImageIndex, setCurrectImageIndex] = useState(0);
  const [animationParent] = useAutoAnimate();

  function preImage() {
    const newIndex = (currectImageIndex - 1 + images.length) % images.length;
    setCurrectImageIndex(newIndex);
  }
  function nextImage() {
    const newIndex = (currectImageIndex + 1) % images.length;
    setCurrectImageIndex(newIndex);
  }

  return (
    <div className="relative">
      {/* image */}
      <section
        ref={animationParent}
        className="flex justify-center items-center h-[375px] w-[600px]"
      >
        {images.map((image, index) => (
          <>
            {currectImageIndex === index ? (
              <Image
                key={index}
                height={1280}
                width={720}
                src={image}
                alt={` Slide ${index + 1}`}
                className="rounded h-full w-full transition-all object-cover "
              />
            ) : null}
          </>
        ))}
      </section>
      {/* pre and next button */}
      <section className="absolute  inset-x-0 flex justify-between inset-y-0 items-center px-4 text-white text-4xl">
        <button onClick={preImage} className="hover:text-[40px] transition-all">
          <FaCircleChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="hover:text-[40px] transition-all"
        >
          <FaCircleChevronRight />
        </button>
      </section>
      {/* dots */}
      <section className="absolute flex justify-center inset-x-0 bottom-5 w-full gap-3 items-center transition-all">
        {images.map((image, index) => (
          <>
            {index === currectImageIndex ? (
              <div
                onClick={() => setCurrectImageIndex(index)}
                className="h-5 w-5  cursor-pointer bg-blue-500 rounded-full transition-all"
              />
            ) : (
              <div
                onClick={() => setCurrectImageIndex(index)}
                className="h-3 w-3 hover:h-5 transition-all hover:w-5 cursor-pointer bg-white rounded-full"
              />
            )}
          </>
        ))}
      </section>
    </div>
  );
}

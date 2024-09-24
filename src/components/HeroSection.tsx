"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";

export default function HeroSection() {
  return (
    <>
      <div className=" mx-auto rounded-md w-full h-[40rem] overflow-hidden p-0 m-0">
        <Vortex
          backgroundColor="black"
          rangeSpeed={1.0}
          rangeY={300}
          baseHue={30}
          baseSpeed={0.001}
          className="flex items-center flex-col justify-center px-2 m-0 md:px-10 py-4 w-full h-full"
        >
          <h2 className=" text-2xl md:text-6xl font-bold text-center text-primaryColor">
            Praestantia 2k24
          </h2>
          <p className="text-primaryColor text-sm md:text-2xl max-w-xl mt-6 text-center">
            Some quotes and Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Illo.
          </p>
        </Vortex>
      </div>
    </>
  );
}

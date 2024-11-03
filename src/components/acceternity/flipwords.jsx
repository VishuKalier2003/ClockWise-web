import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Team management", "Work Optimization", "Report generation"];

  return (
    (<div className="relative w-[50vw] h-full flex justify-start items-center px-4 -left-[10%]">
      <div
        className="text-lg md:text-xl lg:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <p className='relative text-2xl md:text-3xl lg:text-6xl font-semibold c-teal z-10'>Clockwise</p><br />
        A Collaborative <br />
        <FlipWords words={words} /> <br />
        application
      </div>
    </div>)
  );
}

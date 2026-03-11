// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-1/2 -translate-y-1/2 -right-20 xl:-right-24 pointer-events-none z-0">
        <span className="bg-[#2F2F2F] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#2F2F2F]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
          <p className="font-bold mb-5 text-[#008080] text-xl uppercase">
            Who am I?
          </p>
          <p className="text-black text-justify text-sm lg:text-lg mb-6">
            {personalData.description}
          </p>
          <p className="text-black text-justify text-sm lg:text-lg">
            {personalData.description2}
          </p>
        </div>

        <div className="flex justify-center lg:justify-center items-center order-1 lg:order-2 relative z-10">
          <div className="w-full max-w-[520px] overflow-hidden rounded-lg">
            <Image
              src={personalData.profile}
              width={5568}
              height={3712}
              alt="Bhaskara Vanacharla"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

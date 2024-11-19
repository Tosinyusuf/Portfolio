import React from "react";
import Project1 from "@/assets/image/niyolabs.svg";
import Project2 from "@/assets/image/eze.svg";
import Project3 from "@/assets/image/clubarant.svg";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <section
      className="min-h-screen business-section scroll-snap-start flex items-center justify-center px-5 md:px-8 pt-14 md:pt-1"
      id="project"
    >
      <div className="w-full">
        <div className="flex flex-col justify-center items-center w-fit mx-auto">
          <div>
            <div className="w-[70%] border border-[#1E1E1E]"></div>
            <div className="font-spartans text-[1.7rem] md:text-[2.25rem] leading-[2.07rem] font-[400] pt-2">
              Projects
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <div className="rounded-lg min-h-[15rem] w-full h-full relative">
            <Link href={"/niyolabs"} target="_blank" rel="noopener noreferrer">
              <div>
                <Image
                  src={Project1}
                  className="h-full w-full"
                  alt="projects"
                />
              </div>
            </Link>
            <div className="font-mainlux font-[300] text-[1.5rem] leading-[3.44rem] pt-4">
              NiyoLabs
            </div>
          </div>
          <div className="rounded-lg min-h-[15rem]">
            <Link
              href={"/enterprise"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src={Project2}
                  className="h-full w-full"
                  alt="projects"
                />
              </div>
              <div className="font-mainlux font-[300] text-[1.5rem] leading-[3.44rem] pt-4">
                Eze Enterprise
              </div>
            </Link>
          </div>
          <div className="rounded-lg min-h-[15rem]">
            <Link
              href={"/clubarant"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src={Project3}
                  className="h-full w-full"
                  alt="projects"
                />
              </div>
              <div className="font-mainlux font-[300] text-[1.5rem] leading-[3.44rem] pt-4">
                Clubarant
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

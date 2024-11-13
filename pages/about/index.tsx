import React from "react";
import "./index.scss";

const About = () => {
  return (
    <section className="h-[100vh] business-section relative scroll-snap-start flex items-center justify-center" id="about">
    <div className="w-full">
      <div className="flex flex-col justify-center items-center w-fit mx-auto">
        <div>
          <div className="w-[70%] border border-[#1E1E1E]"></div>
          <div className="font-spartans text-[1.7rem] md:text-[2.25rem] leading-[2.07rem] font-[400] pt-2 text-[#1E1E1E]">
            About me
          </div>
        </div>
      </div>
  
      <div className="about_section flex-col md:flex-row mt-[2rem] md:mt-[5rem]">
        <div className="flex-1 md:pl-8 px-5">
          {/* First child takes majority space */}
          <p className="font-mainlux leading-[2rem] md:leading-[3rem] font-[300] text-[1.5rem] md:text-[2rem]">
            I’m a Fullstack Engineer Based in Lagos, Nigeria
          </p>
          <p className="font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-5">
            I started my journey as a front-end developer three years ago, drawn by my passion for turning designs into functional, interactive websites.
          </p>
          <p className="font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-9">
            I enjoy exploring new technologies and creating web applications that are fast, responsive, and accessible. When I’m not coding, I enjoy reading about the latest trends in tech and contributing to open-source projects.
          </p>
        </div>
  
        <div className="flex-none w-[1px] mx-4 border border-[#1E1E1E]"></div>
  
        <div className="overflow-hidden whitespace-nowrap relative h-64 flex-1 flex items-center justify-center">
          <div className="flex animate-scroll items-center justify-center">
            {/* Individual cards */}
            <div className="w-64 h-full m-4">
              <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                Senior Engineer
              </div>
              <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                Eze
              </div>
            </div>
            <div className="w-64 h-full m-4">
              <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                Senior Engineer
              </div>
              <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                Niyo
              </div>
            </div>
            <div className="w-64 h-full m-4">
              <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                Senior Engineer
              </div>
              <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                Oluapede
              </div>
            </div>
            {/* Duplicate items for seamless scroll */}
            <div className="w-64 h-full m-4">
              <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                Senior Engineer
              </div>
              <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                Eze
              </div>
            </div>
            <div className="w-64 h-full m-4">
              <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                Senior Engineer
              </div>
              <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                Niyo
              </div>
            </div>
            <div className="w-64 h-full m-4">
              <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                Senior Engineer
              </div>
              <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                Oluapede
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default About;

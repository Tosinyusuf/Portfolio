import React from "react";
import logo from "img/full-Logo.svg";
import Image from "next/image";

const Explore = () => {
  return (
    <section
      className="relative business-section py-[2rem] px-8 2-[9999]"
      style={{ borderTop: "1px solid #8585853B" }}
      id="contact"
    >
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div>
            <Image width={100} height={50} src={logo} alt="Logo" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div>
            <p className="font-mainlux font-[300] text-[1rem] leading-[1.74rem]">
              yusuftosco66@gmail.com
            </p>
          </div>
          <div>
            <a
              href={"https://www.linkedin.com/in/oluwatosin-yusuf-7a9b7b1b5/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-mainlux font-[300] text-[1rem] leading-[1.74rem]">
                LinkedIn
              </p>
            </a>
          </div>
          <div>
            <a
              href={"https://github.com/Tosinyusuf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-mainlux font-[300] text-[1rem] leading-[1.74rem]">
                Githubs
              </p>
            </a>
          </div>
          <div>
            <a
              href="Yusuf_Oluwatosin_Abdulazeez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="OluwatosinYusuf.pdf"
            >
              <p className="font-mainlux font-[300] text-[1rem] leading-[1.74rem]">
                Download resume
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;

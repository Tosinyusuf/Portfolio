"use client";
import { split } from "@/animation/common";
import Landing from "@/pages/hero";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Tools from "@/pages/tools";
import Footer from "@/component/footer";
import Tosin from "@/pages/explore";

// import { useEffect, useState } from "react";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "img/white-full-logo.svg";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    split();
  }, []);

  const navList = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Contact",
      link: "#contact",
    },
    {
      text: "Join waitlist",
      link: "#joinWaitlist",
    },
  ];

  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToogle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <main>
      <div className="all-businesses scroll-snap-y scroll-snap-mandatory">
        <Landing />
        <About />
        <Projects />
        <Tosin />
        <div className="footer">
          <Tools />
        </div>
        <Footer />
      </div>

      {/* <nav className="relative z-50">
        <ul className="navList md:flex hidden justify-between items-center gap-5 text-white  p-5 md:p-8">
          <div>
            <Image width={100} height={40} src={logo} alt="Logo" />
          </div>
        </ul>
        <div
          className={`bg-[#181818] md:hidden transition-all flex items-start justify-between px-5 pt-10 fixed top-0 w-full min-h-screen left-0 
         // ${menuToggle ? "opacity-1" : "opacity-0 hidden"}
        `}
        >
          <ul className="pt-14 flex-1 flex flex-col gap-10 text-white">
            {navList.map((item, index) => (
              <Link href={item.link} key={index} onClick={handleMenuToogle}>
                <li>{item.text}</li>
              </Link>
            ))}
          </ul>
          close
        </div>

        <div className="flex justify-between px-5 items-center md:hidden">
          <div>
            <Image width={50} height={57} src={logo} alt="Logo" />
          </div>
          <div onClick={handleMenuToogle}>menu</div>
        </div>
      </nav> */}
    </main>
  );
}

"use client";

import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import logo from "img/white-full-logo.svg";
import menu from "img/menu.svg";
import Link from "next/link";

const Nav = () => {
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const navList = [
    {
      text: "Tosin",
      link: "#tosin",
    },
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Projects",
      link: "#project",
    },
    {
      text: "Tools",
      link: "#tools",
    },
  ];

  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToogle = () => {
    console.log(`menuToggle`, menuToggle);
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menuToggle]);

  useEffect(() => {
    // GSAP timeline for controlling animations
    const tl = gsap.timeline({ paused: true });

    // Define the slide-in effect for the menu container
    tl.fromTo(
      menuRef.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "easeIn" }
    );

    // Play or reverse the animation based on menuToggle
    if (menuToggle) {
      tl.play();
    } else {
      tl.reverse();
    }

    return () => {
      // Clear timeline to prevent memory leaks
      tl.kill();
    };
  }, [menuToggle]);

  return (
    <nav className="relative z-50">
      <ul className="navList md:flex hidden justify-between items-center gap-5 text-white p-5 md:p-8">
        <div>
          <Image width={100} height={40} src={logo} alt="Logo" />
        </div>
      </ul>
      <div
        ref={menuRef}
        className={`bg-[#181818] md:hidden  flex items-start justify-between px-5 fixed top-0 w-full min-h-screen left-0 
          ${menuToggle ? "opacity-1  pt-5" : "opacity-0 -translate-x-full"}
        `}
      >
        <ul className="pt-14 flex-1 flex flex-col gap-10 text-white">
          {navList.map((item, index) => (
            <Link href={item.link} key={index} onClick={handleMenuToogle}>
              <li>{item.text}</li>
            </Link>
          ))}
        </ul>
        <div onClick={handleMenuToogle}>
          <Image width={30} height={40} src={menu} alt="Logo" />
        </div>
      </div>

      <div className="flex justify-between px-5 py-5 items-center md:hidden bg-[#181818] fixed w-full">
        <div>
          <Image width={70} height={57} src={logo} alt="Logo" />
        </div>
        <div onClick={handleMenuToogle}>
          {" "}
          <Image width={30} height={40} src={menu} alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

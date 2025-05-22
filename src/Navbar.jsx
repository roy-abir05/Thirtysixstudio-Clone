import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { GiSoundWaves } from "react-icons/gi";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

const Navbar = () => {
  // useGSAP(() => {
  //   gsap.to('.nav-link-underline', {
  //     duration: 0.3,
  //     ease: 'power1.inOut',
  //     repeat: 0,
  //   })
  // })

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [sound, setSound] = useState(false);

  return (
    <div className="relative w-screen h-[50px] px-3 bg-background text-foreground flex justify-between items-center  border-red-500">
      <div className="font-semibold text-[15px] leading-3 tracking-tighter">
        <a href="/">Thirtysixstudio</a>
      </div>

      <div className="w-[60px] h-[25px] flex items-center justify-evenly border-[1px] border-tertiary rounded-[30px] select-none">
        <button
          className={`w-[50%] h-full rounded-[30px] flex items-center justify-center ${isDarkTheme?'bg-background':'bg-foreground'}`}
          onClick={() => {
            setIsDarkTheme(false);
            document.body.classList.remove("dark");
            document.body.classList.add("light");
          }}
        >
          <IoMdSunny className="text-[#fffafa]" />
        </button>
        <button
          className={`w-[50%] h-full rounded-[30px] flex items-center justify-center ${isDarkTheme?'bg-foreground':'bg-background'} transition-all duration-200`}
          onClick={() => {
            setIsDarkTheme(true);
            document.body.classList.remove("light");
            document.body.classList.add("dark");
          }}
        >
          <IoMdMoon className="text-[#000000]" />
        </button>
      </div>

      <div className="h-full w-[500px]">
        <ul className="w-full h-full flex items-center justify-evenly font-serif font-[500] tracking-tighter">
          <li className="h-full group">
            <a href="" className="h-full flex items-center justify-center">
              What we do
            </a>
            <span className="nav-link-underline block group-hover:visible invisible w-0 group-hover:w-full h-[1px] bg-foreground transition-all duration-300"></span>
          </li>
          <li className="h-full group">
            <a href="" className="h-full flex items-center justify-center">
              Who we are
            </a>
            <span className="nav-link-underline block group-hover:visible invisible w-0 group-hover:w-full h-[1px] bg-foreground transition-all duration-300"></span>
          </li>
          <li className="h-full group">
            <a href="" className="h-full flex items-center justify-center">
              How we give back
            </a>
            <span className="nav-link-underline block group-hover:visible invisible w-0 group-hover:w-full h-[1px] bg-foreground transition-all duration-300"></span>
          </li>
          <li className="h-full group">
            <a href="" className="h-full flex items-center justify-center ">
              Talk to us
            </a>
            <span className="nav-link-underline block group-hover:visible invisible w-0 group-hover:w-full h-[1px] bg-foreground transition-all duration-300"></span>
          </li>
        </ul>
      </div>

      <div className="w-[30px] h-[30px] flex items-center justify-center border-[1px] border-tertiary/50 hover:border-tertiary rounded-full transition-all duration-150" onClick={() => setSound(!sound)}>
        <div>
          <GiSoundWaves className={`${sound?'block':'hidden'}`}/>
        </div>
        <div>
          <IoEllipsisHorizontalOutline className={`${sound?'hidden':'block'}`}/>
        </div>
      </div>

      <div className="absolute bottom-0 left-[1%] w-[98%] h-[1px] bg-tertiary"></div>
    </div>
  );
};

export default Navbar;

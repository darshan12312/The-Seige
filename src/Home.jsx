import React, { useState } from "react";
import ArtistImg from "./assets/Artist.png";
import ArtistName from "./assets/ArtistName.png";
import "./index.css";

function Navbar() {
  const [rotateText, setrotateText] = useState(true);

  const ToggleInfo = () => {
    setrotateText(!rotateText);
  };

  const scrollDown = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown1 = () => {
    const element = document.getElementById("About");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown2 = () => {
    const element = document.getElementById("Video");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=' h-FULL w-full bg-custom-gradient'>
      <div className="Navbar  2xl:text-2xl xl:text-2xl  h-[8vw] text-[white] bg-transparent text-base list-none flex items-center  justify-evenly ">
        <li>
          <a className=" hover:text-red-500 " onClick={scrollDown} href="#work">
            Music
          </a>
        </li>
        <li>
          <a
            className="hover:text-red-500 "
            onClick={scrollDown2}
            href="#Video"
          >
            Video
          </a>
        </li>
        <li>
          <a
            className="hover:text-red-500 "
            onClick={scrollDown1}
            href="#About"
          >
            About
          </a>
        </li>
      </div>

      <div className="2Div flex">
        <div className="text w-1/2 h-[41vw] flex flex-col  pl-[3vw] pt-[2vw]  text-[white] list-none text-[3.1vw] overflow-hidden ">
          <li>RENT IS DUE</li>
          <li className="text-outline">CBSC</li>
          <li className="text-outline">BHAAGNA</li>
          <li className="text-outline">REALLY BROWN</li>
          <li className="text-outline">GADBAD</li>
          <li className="text-outline">ZINDAGI QUESTION PAPER</li>
          <li className="text-outline">SALIM</li>
          <li className="text-outline">REALLYRARE</li>
          <li className="text-outline">BUBBLECARS</li>
        </div>

        <div className=" relative artistPic w-1/2 h-[41vw] overflow-hidden ">
          <div
            className={`cicularText absolute right-8   w-[20vw] sm:right-14 md:right-16 lg:right-20 xl:right-28  2xl:right-36 ${
              rotateText ? "rotate-180" : ""
            }  duration-1000 `}
          >
            <img src={ArtistName} alt="" />
          </div>
          <div onMouseEnter={ToggleInfo} className="Artist z-[4] absolute">
            <img src={ArtistImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

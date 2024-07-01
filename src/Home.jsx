import React, { useState } from "react";
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
    <div className=' h-screen w-full bg-custom-gradient font-["Varent_Grotesk_Regular"] '>
      <div className="Navbar h-[8vw] text-[white] bg-transparent text-2xl list-none flex items-center  justify-evenly ">
        <li>
          <a onClick={scrollDown} href="#work">
            Music
          </a>
        </li>
        <li>
          <a onClick={scrollDown2}  href="#Video">Video</a>
        </li>
        <li>
          <a onClick={scrollDown1} href="#About">About</a>
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
            className={`cicularText absolute  w-[20vw]  right-36 top-4 ${
              rotateText ? "rotate-180" : ""
            }  duration-1000 `}
          >
            <img src="./src/assets/ArtistName.png" alt="" />
          </div>
          <div onMouseEnter={ToggleInfo} className="Artist z-[4] absolute">
            <img src=" ./src/assets/Artist.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

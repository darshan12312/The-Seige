import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa6";
import Footer from "./Footer";
import AboutImg from  "./assets/AboutImg1.jpg"

function About() {
  const controls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className=" h-screen" >
    <div className="  w-full flex  p-[2vw]  items-center ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className=" relative images w-1/2 h-[40vw]  overflow-hidden "
      >
        <img
          className="  absolute  h-[40vw] w-[40vw] rounded-tl-[15vw] rounded-tr-[5vw] rounded-br-[15vw] rounded-bl-[5vw]  "
          src={AboutImg}
          alt=""
        />
      </motion.div>

      <div id="About" className="Abouttext   w-1/2  text-white  text-2xl ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h4 className=" text-3xl pb-5 ">ABOUT THE ARTIST </h4>
          <h1 className=" text-[#d9d5d5]  text-[1.2vw] tracking-wide leading-10 ">
            Siegen Moopanar was born in Bangalore to a South Indian family, with
            his father hailing from Tamil Nadu and his mother from Karnataka.
            Life took an unexpected turn when, at the age of two, his family
            moved to Mira Road,(now his rap den). Life in Mira Road wasn't a
            fairy tale for our ‘movie character’ as he calls himself on his
            social media and was a mix of challenges and triumphs. Listening to
            rap provided an outlet for his emotions, particularly anger. He
            found peace in the powerful verses of artists who, like him, used
            rap as a means of expression. Reflecting on his own musical journey,
            he candidly shares, “My songs have a lot of anger, and i'm the best
            when im angry” In the intricate juggle between his South Indian
            roots and the urban hustle of Mira Road, this young man discovered
            not only the power of words but also the cathartic releases that
            music, particularly rap, could offer.{" "}
          </h1>

          <div className="logo list-none text-[#d9d5d5] flex  h-[4vw] items-center text-[1.9vw] pt-[2vw] ">
            <a href="https://www.facebook.com/thesiegecircle/">
              <li className=" ml-0 m-[1vw] hover: cursor-pointer ">
                <FaFacebookF />
              </li>
            </a>
            <a href="https://x.com/reallifesiege">
              <li className=" m-[1vw] hover: cursor-pointer ">
                <FaTwitter />
              </li>
            </a>
            <a href="https://www.instagram.com/reallifesiege">
              <li className=" m-[1vw] hover: cursor-pointer ">
                <FaInstagram />
              </li>
            </a>
            <a href="https://www.youtube.com/@thesiegemusic">
              {" "}
              <li className=" m-[1vw] hover: cursor-pointer ">
                <FaYoutube />
              </li>
            </a>
            <a href="https://open.spotify.com/artist/5HrGNVmY12srDtUFxDd49Z">
              {" "}
              <li className=" m-[1vw] hover: cursor-pointer ">
                <FaSpotify />
              </li>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;

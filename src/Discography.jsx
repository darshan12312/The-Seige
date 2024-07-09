import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function Discography() {

  const textVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const controls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  const textVariants1 = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const controls1 = useAnimation();
  
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.7,
    triggerOnce:true,
  });


  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);



  return (
    <div className="w-full min-h-screen pt-[3vw] ">
      <div
        id="work"
        className="Heading h-[5vw]  w-full flex items-center justify-center flex-col  "
      >
        <div className="line w-[10vw] h-[0.6vw] bg-red-500 "></div>
        <div className=" text-[white] mt-[1vw] sm:text-base lg:text-3xl ">MUSIC</div>
      </div>

      <motion.div ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants} >
        <div className="songCards flex justify-evenly items-center ">
          <div className=" w-[14vw]  ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/74gx2Y2MNxNR2K4nCY4EJI?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-[14vw]  ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/08PHYM5cB7FytGe9W6uAsv?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-[14vw]  ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/3rNoYrX0Y9FQdqC1eoVSu0?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-[14vw] ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/7wHSZvDMvZpIMM6iYPjapF?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-[14vw] ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/0mUizssTAh6N1vNyaBvnoQ?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="allSongs w-full flex justify-center items-center pl-[10vw] pr-[10vw] pt-[5vw]  ">
          <iframe
            className="w-[50vw] "
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/53WywrACNxV2mcH8kFSi8y?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      <div
        id="Video"
        className="Heading h-[5vw]  mt-[3vw]    w-full flex items-center justify-center flex-col  "
      >
        <div className="line w-[10vw] h-[0.6vw] bg-red-500 "></div>
        <div className="sm:text-base lg:text-3xl text-[white] mt-[1vw] ">VIDEO</div>
      </div>

      <div className="videoContainer flex justify-center gap-10 items-center pb-[5vw] ">
        <motion.iframe
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={textVariants1}
          className=" w-[40vw] h-[25vw] "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/koAPmSOwchQ?si=DzdUyEVGYis52Ogx"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></motion.iframe>
        <motion.iframe
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={textVariants1}
          className="w-[40vw] h-[25vw]"
          src="https://www.youtube.com/embed/7lUuiv7txQs?si=1m5QsmhYCugpPRqy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></motion.iframe>
      </div>
    </div>
  );
}

export default Discography;

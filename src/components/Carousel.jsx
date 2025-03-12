import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

import oscillate1 from "../assets/oooscillate1.svg";
import oscillate2 from "../assets/oooscillate2.svg";
import oscillate3 from "../assets/oooscillate3.svg";
import oscillate4 from "../assets/oooscillate4.svg";

const Carousel = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [ImageArray, setImageArray] = useState([
    {
      imgSrc: oscillate1,
      title: "Gemini Trip Planner AI",
      timeline: "Jul 2024 - Aug 2024",
      lang: "Python",
      resp: "Responsible for writing Python code for prompt generation, calling Gemini API and parsing the data.",
      details:
        " The web app was made as a part of google gemini api developer competition, the trip planner is a simple web app which takes in minimal input (Destination and number of places to visit, start and end date) and calls in Gemini api, and gets the response, the response is then parsed and the detailed trip plan is displayed on the front end, with google maps location, time that one can spend in the particular place, and also description about the places mentioned.",
      link: "http://gemini-api-web-app.onrender.com/",
      status: "View Live Page",
      number: "01",
    },
    {
      imgSrc: oscillate2,
      title: "Interactive Bot",
      timeline: "Aug 2020",
      hardware: "Arduino Uno (ATmega328P)",
      lang: "C",
      resp: "Responsible for writing C code to enable voice recognition-based pattern matching.",
      details:
        "Input data obtained from the sensors are stored in its memory (SRAM). A comparison is made against a predefined set of voice data (Arduino Library). If the comparison is successful, binary data associated with the pattern match is displayed on the serial monitor and a .wav file is played from the library (SDCard).",
      link: "/",
      status: "View on GitHub",
      number: "02",
    },
    {
      imgSrc: oscillate3,
      title: "Mimicking Bot",
      timeline: "Feb 2020 - Mar 2020",
      hardware: "Arduino Uno (ATmega328P)",
      lang: "C",
      resp: "Responsible for writing C code for robotic arm movements.",
      details:
        "System consists of two Robotic arms, one with servo motors and another with 4 potentiometers. Based on the values of the potentiometer (SRAM), servomotors associated with the robotic arm are made to rotate at a particular angle to match the movements. ",
      link: "/",
      status: "View on GitHub",
      number: "03",
    },
    {
      imgSrc: oscillate4,
      title: "Automated Aquatic Filtration System",
      timeline: "Dec 2018 - Jan 2019",
      hardware: "Arduino Uno (ATmega328P)",
      lang: "C",
      resp: "Responsible for writing C code for movement of the hovercraft.",
      details:
        "System consisted of an Integrated HC05 Bluetooth module with the microcontroller (uno). 6 Set of buttons on the Bluetooth application have the capability to send unique ASCII values. These ASCII values are compared against the existing set from the library (SRAM). Based on the match found, hovercraft arms are moved left, right, forward & backwards.",
      link: "/",
      status: "View on GitHub",
      number: "04",
    },
  ]);

  const ForwardSlide = () => {
    const data = ImageArray[0];

    setImageArray([...ImageArray, data]);

    setImageArray((prevArr) => {
      const newArr = [...prevArr];
      newArr.shift();
      return newArr;
    });
  };

  const BackwardSlide = () => {
    const data = ImageArray[ImageArray.length - 1];

    setImageArray([data, ...ImageArray]);

    setImageArray((prevArr) => {
      const newArr = [...prevArr];
      newArr.pop();
      return newArr;
    });
  };

  return (
    <div className="w-full h-[45rem] md:h-[30rem] flex items-center justify-end relative rounded-xl bg-gradient-to-tr from-zinc-800/70 via-purple-700/50 to-zinc-800/70 backdrop:blur-lg  ">
      <div className="flex">
        {ImageArray.map((item, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "absolute top-0 left-0 w-full h-full z-0 rounded-xl"
                : "hidden"
            }
          >
            <img
              className="h-full w-full object-cover object-center rounded-xl"
              src={item.imgSrc}
              alt={item.title}
            />
            <div className="h-full w-full absolute top-0 left-0 flex items-center justify-start z-20 text-white p-10">
              {index === 0 ? (
                <div className="backdrop-blur-lg rounded-xl p-4">
                  {/* TITLE */}
                  <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    className="text-4xl md:text-6xl font-semibold backdrop-blur-md mb-2 tracking-tight"
                  >
                    {item.title}
                  </motion.h2>
                  {/* TIMELINE */}
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    className="text-md md:text-xl text-zinc-300 mb-2"
                  >
                    {item.timeline}
                  </motion.p>
                  {/* HARDWARE PLATFORM */}
                  {item.hardware && (
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={textVariants}
                      className="text-md md:text-xl text-zinc-300 mb-2"
                    >
                      <span className="text-blue-300 font-bold">
                        Hardware Platform{" "}
                      </span>
                      : {item.hardware}
                    </motion.p>
                  )}
                  {/* PROGRAMMING LANGUAGE */}
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    className="text-md md:text-xl text-zinc-300 mb-2"
                  >
                    <span className="text-blue-300 font-bold">
                      Programming Language
                    </span>
                    : {item.lang}
                  </motion.p>
                  {/* DESCRIPTION */}
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    className="text-sm md:text-lg mb-4"
                  >
                    {item.details}
                  </motion.p>
                  {/* LINK BUTTON */}
                  <motion.button
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    className="text-sm md:text-md px-4 py-2 my-1 text-black bg-white rounded-2xl hover:scale-105 transition"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.status}
                    </a>
                  </motion.button>
                </div>
              ) : null}
            </div>
            <p className="absolute top-0 right-0 text-xl font-bold m-4 px-3 py-2 border-2 rounded-xl">
              {item.number}
            </p>
          </div>
        ))}
        <div className="w-full absolute left-0 bottom-0 py-5 flex items-center justify-center z-20">
          <div className="flex items-center justify-center gap-2">
            <button onClick={BackwardSlide}>
              <FaCircleChevronLeft className="w-8 h-8 text-white hover:scale-110 cursor-pointer transition-transform" />
            </button>
            <button onClick={ForwardSlide}>
              <FaCircleChevronRight className="w-8 h-8 text-white hover:scale-110 cursor-pointer transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

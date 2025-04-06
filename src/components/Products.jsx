import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import arqitel from "../assets/arqitel-94yUcBU8.mp4";
import rainfall from "../assets/rainfall-WQuxxtU2.mp4";
import ttr from "../assets/ttr-lEHQxwYz.mp4";
import yahoo from "../assets/yahoo--1sy27pr.mp4";
import yir from "../assets/yir-cyYkW6sc.mp4";

const Products = () => {
  var products = [
    {
      title: "arqital",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2025",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        " We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
    },
  ];

  const [postion, setPostion] = useState(0);
  const mover = (val) => {
    setPostion(val * 23);
  };
  return (
    <div className=" mt-5 lg:mt-16 relative flex flex-col flex-wrap">
      {products.map((val, index) => (
        <Product data={val} mover={mover} count={index} />
      ))}
      <div className="w-full h-full pointer-events-none absolute top-0">
        <motion.div
          initial={{ y: postion, x: "-50%" }}
          animate={{ y: postion + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="absolute w-[20rem] h-[15rem] mt-16 lg:mt-0 lg:w-[32rem] lg:h-[23rem] bg-sky-500 left-[40%] rounded-xl -translate-x-[50%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -postion + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-white rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              src={arqitel}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            animate={{ y: -postion + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300 rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              src={yir}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            animate={{ y: -postion + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400 rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              src={yahoo}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            animate={{ y: -postion + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500 rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              src={ttr}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            animate={{ y: -postion + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-600 rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              src={rainfall}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

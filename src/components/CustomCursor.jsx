import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

const Customcursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const MouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // console.log(e.clientX);
    };

    window.addEventListener("mousemove", MouseMove);

    return () => {
      window.addEventListener("mousemove", MouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className=" z-[9999] cursor w-[32px] h-[32px] pointer-events-none mix-blend-difference rounded-full bg-white border-[1px] border-b-yellow-400 fixed top-0 left-0"
    ></motion.div>
  );
};

export default Customcursor;

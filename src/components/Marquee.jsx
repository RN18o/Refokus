import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="relative flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? "0" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0"}}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-16 lg:gap-40 py-5 lg:py-10 pr-40"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? "0" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0"}}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-16 lg:gap-40 py-5 lg:py-10 pr-40"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
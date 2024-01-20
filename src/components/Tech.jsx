import React from "react";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <motion.div variants={fadeIn("","pop-up",0.1,2)}>
    <div className="w-full flex justify-center items-center ">
      <h3 className={`${styles.sectionHeadText} text-center mb-20`}>Femiliar With</h3>
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-7'>
      {technologies.map((technology,index) => (
        <Tilt className='' key={technology.name}>
          <motion.div variants={fadeIn("right","pop-up",0.5*index,0.3)}
           className="border rounded-full p-2 bg-[#fff] hover:bg-gray-600 hover:border-4 hover:border-white"><img src={technology.icon} alt="" className="w-20" /></motion.div>
        </Tilt>
      ))}
    </div>
    </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
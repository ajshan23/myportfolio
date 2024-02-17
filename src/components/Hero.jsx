import { motion } from "framer-motion";
import { styles } from "../style";
import { FaInstagram, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

import { FaBehanceSquare, FaDribbbleSquare, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex-col items-center py-44`}>
      <div
        className={` inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Ajmal
            </span>
          </h1>
          <p
            className={`mt-2 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] `}
          >
            Full stack developer
          </p>

          <div className="flex flex-col flex-wrap mt-3">
            <p className="text-secondary">
              Passionate MERN stack newbie with a strong foundation in front-end
              <br /> and back-end development.Excited to tackle real-world
              projects and
              <br /> hone my skills. Open to exploring new libraries and
              frameworks to tackle <br /> any challenge
            </p>
          </div>
          <div className="font-bold mt-6">Follow Me On</div>
          <div className="mt-4 gap-3 flex flex-row flex-wrap w-full justify-start">
            <a href="https://github.com/ajshan23" target="__blank">
              <FaSquareGithub className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/ajml_shahn/" target="__blank">
              <FaSquareInstagram  className="w-10 h-10 " />
            </a>
            <a
              href="https://www.linkedin.com/in/ajmal-shahan-590381151"
              target="_blank"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute hidden sm:flex xs:bottom-10 bottom-32 w-full  justify-center items-center">
        <a href="#about">
          <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { styles } from "../style";
import { git, github } from "../assets";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Hero = () => {
  const code="var age=21 \nlet place='kuttikatoor'\nconst more={more:'click button'}"
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Ajmal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full stack Developer, <br className="sm:block hidden" />
            {/* user interfaces and web applications */}
            
            Crafting Web Experiences
          </p>
          
          {/* <div className="mt-6">
            <SyntaxHighlighter language="javascript" style={materialDark} className="rounded-xl  " >
              {code}
            </SyntaxHighlighter>
          </div> */}
          <div className="flex flex-col flex-wrap mt-6">
            <p className="text-secondary">Passionate MERN stack newbie with a strong foundation in front-end and back-end development. Excited to tackle real-world projects and hone my skills. Open to exploring new libraries and frameworks to tackle any challenge</p>
          </div>
          <div className="mt-4 gap-7 flex flex-row flex-wrap w-full justify-start">
            <a href="https://github.com/ajshan23" target="__blank"><img src={github} alt="github" className="w-14"  /></a>
            <a href="https://www.instagram.com/ajml_shahn/" target="__blank"><FaInstagram className="w-14 h-14 " /></a>
            <a href="https://www.linkedin.com/in/ajmal-shahan-590381151" target="_blank"><CiLinkedin className="w-14 h-14" /></a>
              
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

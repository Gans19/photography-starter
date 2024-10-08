import React, { useContext } from "react";
import WomenImg from "../img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import  { CursorContext } from "../context/CursorContext";
const Home = () => {
const {mouseEnter,mouseLeave}= useContext(CursorContext)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className=" section bg-blue-200"
    >
      <div className="container mx-auto h-full relative">
        <div className=" flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1,y:0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className=" w-full h-full pt-36 pb-14 lg:pt-0 lg:pb-32 lg:w-auto z-10 lg:absolute flex items-center lg:items-center flex-col justify-center"
          >
            <h1 className="h1">
              photographer <br /> & film director
            </h1>
            <p className=" text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Coimbatore, IND
            </p>
            <Link to={"/contact"} className=" btn mb-[30px]">
              Hire me
            </Link>
          </motion.div>
          <div className=" flex justify-end max-h-96 lg:max-h-max">
            <motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             exit={{ scale: 0 }}
             transition={transition1}
            className=" relative lg:-right-40  overflow-hidden">
              <motion.img whileHover={{scale:1.1}} transition={transition1} src={WomenImg} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

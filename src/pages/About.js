import React, { useContext } from 'react';
import WomenImg from "../img/about/woman.png"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import  { CursorContext } from "../context/CursorContext";



const About = () => {
  const {mouseEnter,mouseLeave}= useContext(CursorContext)
  return <motion.section
  initial={{ opacity: 0 ,y:'100%'}}
  animate={{ opacity: 1,y:0 }}
  exit={{ opacity: 0 ,y:'100%'}}
  transition={transition1}
   className='section '>
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="container mx-auto h-full relative">
<div className='  flex flex-col lg:flex-row h-full items-center justify-center  lg:text-left lg:pt-16 text-center gap-x-24'>
  <motion.div
   initial={{ scale: 0 }}
   animate={{ scale: 1 }}
   exit={{ scale: 0 }}
   transition={transition1}
  className=' flex flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
    <motion.img whileHover={{scale:1.1}} transition={transition1} src={WomenImg} alt="" />
  </motion.div>
  <motion.div
  initial={{ opacity: 0 ,y:'-80%'}}
  animate={{ opacity: 1,y:0 }}
  exit={{ opacity: 0 ,y:'-80%'}}
  transition={transition1}
  className=' flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start '>
    <h1 className='
     h1'>About me</h1>
    <p className=' mb-12 max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <b>Consectetur magnam dicta</b>  tempora. Atque esse itaque est eaque ab, vel asperiores.
  <br/>
  <br/>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aspernatur voluptatum harum itaque unde fuga tempore voluptas. Tempore, nobis rerum.

    </p>
  <Link className=' btn' to={'/portfolio'}>View my work</Link>
  </motion.div>
</div>
    </div>
  </motion.section>;
};

export default About;

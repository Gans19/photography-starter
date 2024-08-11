import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";





const menuVarients = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  const Location = useLocation()
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(()=>{
    setOpenMenu(false)
  },[Location])

  return (
    <nav className=" text-primary xl:hidden">
      <div
        onClick={() => {
          console.log("fd");
          setOpenMenu(true);
        }}
        className=" text-3xl  cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVarients}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className=" bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className=" text-4xl absolute z-30 left-4  top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className=" h-full ">
          <li className="  h-full flex flex-col  justify-center text-primary font-primary font-bold text-3xl items-center gap-y-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;

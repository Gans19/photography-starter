import React, { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState('default');

  const MobileViw = window.innerWidth < 768

  useEffect(() => {
    if(!MobileViw){
      window.addEventListener("mousemove", (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      });
  
      return () => {
        window.removeEventListener("mousemove", (e) => {
          setCursorPos({
            x: e.clientX,
            y: e.clientY,
          });
        });
      };
    }else{
      setCursorBG('none')
    }
  
  });

  const cursorVarients ={
    default:{
      x: cursorPos.x - 16, 
      y: cursorPos.y - 16,
      backgroundColor:'#0e1112',
    },
    text :{
      width : '150px',
      height : '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor:'#fff',
      mixBlendMode : 'difference'
    },
    none :{
      width: 0,
      height: 0,
    }
  }
  const mouseEnter =()=>{
    setCursorBG('text')
  }
  const mouseLeave =()=>{
    setCursorBG('default')
  }
  

  return (
    <CursorContext.Provider value={{cursorVarients,cursorBG, setCursorBG,mouseEnter,mouseLeave}}>{children}</CursorContext.Provider>
  );
};

export default CursorProvider;

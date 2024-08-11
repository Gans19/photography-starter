import React, { useContext } from 'react';
import {ImFacebook,ImInstagram,ImLinkedin} from "react-icons/im"
import { CursorContext } from "../context/CursorContext";


const Socials = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return <div className=' hidden xl:flex ml-24'>
    <ul
     onMouseEnter={mouseEnter}
     onMouseLeave={mouseLeave}
    className=' flex gap-x-4'>
      <li><a href='https://wwww.facebook.com' rel="noreferrer" target='_blank'><ImFacebook /></a></li>
      <li><a href='https://wwww.facebook.com' rel="noreferrer" target='_blank'><ImInstagram /></a></li>
      <li><a href='https://wwww.facebook.com' rel="noreferrer" target='_blank'><ImLinkedin /></a></li>
    </ul>
  </div>;
};

export default Socials;

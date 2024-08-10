import React from 'react';
import WomenImg from "../img/about/woman.png"
import { Link } from 'react-router-dom';

const About = () => {
  return <section className='section bg-yellow-200'>
    <div className="container mx-auto h-full relative">
<div className='  flex flex-col lg:flex-row h-full items-center justify-center  lg:text-left lg:pt-16 text-center gap-x-24'>
  <div className=' flex flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
    <img src={WomenImg} alt="" />
  </div>
  <div className=' flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start '>
    <h1 className='
     h1'>About me</h1>
    <p className=' mb-12 max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <b>Consectetur magnam dicta</b>  tempora. Atque esse itaque est eaque ab, vel asperiores.
  <br/>
  <br/>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aspernatur voluptatum harum itaque unde fuga tempore voluptas. Tempore, nobis rerum.

    </p>
  <Link className=' btn' to={'/portfolio'}>View my work</Link>
  </div>
</div>
    </div>
  </section>;
};

export default About;

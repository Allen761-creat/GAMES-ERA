import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Marquee = () => {

  return (
    <div className='h-[200px] bg-green-800 flex center  rounded-tl-lg rounded-tr-lg border-t-2 border-b-2 border-[silver] '>
      <div className='w-full z-10 flex whitespace-nowrap font-extrabold overflow-hidden '>
    <marquee className='text-8xl heading2'>ITS FUN TIME ENJOY YOUR BEST GAME</marquee>
    <h1 className='text-8xl heading3'>ITS FUN TIME ENJOY YOUR BEST GAME</h1>
      </div>
    </div>
  )
}

export default Marquee

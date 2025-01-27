import  {useState } from 'react'
import Button from'./Button'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Link } from 'react-router-dom';

const Videoframe = () => {
  const [click, setclick] = useState(false);
  const [index, setindex] = useState(0);
  const handleClick = () => {
    setclick(true);
    setindex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
  };
  const videos = [
    "videos/hero-1.mp4",
    "videos/hero-2.mp4",
    "videos/hero-3.mp4",
    "videos/hero-3.mp4",
  ];

  useGSAP(function (){
   
    
    var tl =gsap.timeline()
    tl.from(".heading",{
      y:-100,
      opacity: 0,
      duration: 1,
      ease: "elastic.inOut(1.5)",
      delay: 0.5,
    })
    tl.from(".btn",{
      x:-100,
      opacity: 0,
      ease: "easeOut",
      duration:0.5,  
      
    })
  })

  

 
  return (
    <div >
       
       <div className="relative   bg-black w-screen flex items-center justify-center  overflow-x-hidden min-h-screen">
      <div
        onClick={handleClick}
        className="smallscreen 
         hover:scale-125 scale-50 transition-all  rounded-lg
      ease-in absolute 
       overflow-hidde  w-[130px] h-[130px]
      opacity-[0] hover:opacity-[1] z-50
      
      "
      >
        <video
          loop
          autoPlay
          muted
          className=" object-center w-full smallscreen h-full size-[130px] rounded-lg origin-center ease-in object-cover     cursor-pointer"
          src={videos[index < 3 ? index + 1 : 0]}
        />
      </div>
      <div  className=" w-screen  bg-[#00000042] min-h-screen">
        <video
        id="largescreen"
          src={videos[index]}
          className="w-screen h-screen object-cover object-center "
          autoPlay
          loop
          muted
        />
      </div>
      <div className="absolute top-32 left-2 ">
        <div className='heading'>
        <p className="md:text-9xl xs:text-7xl  bg-gradient-to-tr text-transparent from-red-500  to-yellow-400 bg-clip-text font-comic hover:animate-pulse ">EXPL<b className='font-extrabold text-red-800'>O</b>RE</p>
        <p className='font-comic text-xl bg-gradient-to-tr text-transparent from-orange-500  to-purple-400 bg-clip-text font-bold tracking-widest '>&nbsp;CLICK TO ENJOY AND WATCH<br/>&nbsp; MORE GAMES </p>
        </div>
        <div className='btn'>
          <Link to='/games'>
        <Button/>
        </Link>
        </div>
        
      </div>
     
    </div>
    {/* <Marquee/> */}
    </div>
   
  )
}

export default Videoframe


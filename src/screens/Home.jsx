import Videoframe from '../Components/Videoframe'
import { TextParallaxContentExample } from './Bestgames'
// import HoverImageLinks from './HoverImageLinks'
import Homep2 from './Homep2'
import { animate, motion,  useMotionTemplate, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'
import { HoverImageLinks } from './HoverImageLinks'
import Footer from './Footer'
const Home = () => {
  const COLORS = ['#FF5B88', '#FFC03E', '#86D3FF']
  const color =useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% ,#020617,70%,${color})`
  useEffect(()=>{
    animate(color,COLORS,{
ease:'easeInOut',
repeat:Infinity,
duration:6,
repeatType:'mirror'
    }) 
 })


  return (
    <>
    <motion.div style={{
      backgroundImage
    }} className='w-full h-full   overflow-hidden'>
    <div>
        <Videoframe />
        <Homep2 />
        <TextParallaxContentExample/>
{/* <HoverImageLinks /> */}
<HoverImageLinks />
<Footer/>
        </div>
    </motion.div>
    </>
  )
  }

export default Home

import { animate,  motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import  { useEffect } from 'react'

const Aura = () => {
    const COLORS = ['#FF5B88', '#FFC03E', '#86D3FF']
    const color =useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% ,#020617,70%,${color})`
 useEffect(()=>{
    animate(color,COLORS,{
ease:'easeInOut',
repeat:Infinity,
duration:10,
repeatType:'mirror'


    })

      
        
    
 })
    return (
    <div>
      <motion.div style={{
        backgroundImage
      }} className='h-screen  flex items-center justify-center'>

      </motion.div>
    </div>
  )
}

export default Aura

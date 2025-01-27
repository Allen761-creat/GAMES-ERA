import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import {  useState } from "react"
import { Container, Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navibar = () => {
const [hide, sethide] = useState(false)
const {scrollY} =useScroll()
 
 const nav = useMotionValueEvent(scrollY,"change",(latest)=>{
  const previous = scrollY.getPrevious();
if(latest > previous && latest > 150){
  sethide(true)
}
else{
  sethide(false)
 
}
 }
)
console.log(nav)
  return (
    <>
    <motion.div
    variants={{
      visible: {  y: 0 },
      hidden: { y: -100 },
    }}
    animate={hide? "hidden" : "visible"}
    transition={{ duration: 0.5,ease:'easeInOut' }}

    className=" py-1 fixed z-[999]  hover:bg-green-400  w-full text-white  ">
      <Container className=" ">
        <Row className="p-0">
            <Col className="">
            <div className="center justify-between ">
            <div className="">
          <h1 className="font-comic  sm:text-3xl md:text-4xl xs:text-xl whitespace-nowrap">GAMES ERA</h1>
            </div>
           <div className="center gap-6 xs:ml-8 ">
            
          <Link to="/home" className="font-comic  lg:text-2xl   hover:scale-150 hover:text-[#00000087] xs:text-[13px]  ">HOME</Link>
          <Link to="/games" className="font-comic   lg:text-2xl xs:text-[13px] hover:scale-150 hover:text-[#00000087] whitespace-nowrap">MORE GAMES</Link>
          <Link to="/contactus" className="font-comic lg:text-2xl xs:text-[13px] hover:scale-150 hover:text-[#00000087]">CONTACT</Link>
          <Link to="/services" className="font-comic lg:text-2xl hover:scale-150 hover:text-[#00000087] xs:text-[13px]">LOGIN</Link>
          
           </div>
           </div>
            </Col>
        </Row>
      </Container>
    </motion.div>
    </>
  )
}

export default Navibar

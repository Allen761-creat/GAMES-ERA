import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import {useNavigate} from "react-router-dom"

const Loadingpg = () => {
  const [counter, setcounter] = useState(0);
  const [run, setrun] = useState(false);
  const navigate  =  useNavigate();
  useEffect(() => {
    const count = setInterval(() => {
      setcounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setcounter(100), setrun(true))
      );
    }, 300);
  }, []);

  useGSAP(() => {
    if (run) {
      const tl = gsap.timeline();
      tl.to(".secondline", {
        duration: 2,
        width: "100%",
        ease: "linear",
      })
        .to(".secondline", {
          duration: 1,
          width: "100%",
          height: "100%",
          ease: "linear",
        })
        .to(".secondline", {
          duration: 1,
          width: "-0%",
          height: "100%",
          ease: "linear",
          onComplete: () => {
            // After animation completes, navigate to '/Home'
            navigate('/Home');
          }
        });
  

    }
  }, [run]);

  return (
    <div>
      <div className="bg-gradient-to-b z-[999] w-full h-screen relative flex items-center justify-center from-orange-500  to-purple-400">
        <div className="flex flex-col justify-center w-full h-full top-0  items-center">
          <div
            style={{ width: counter + "%" }}
            className="firstline   h-[2px] w-0 left-0  absolute bg-red-600"
          ></div>
          <div
            className={`secondline bg-gradient-to-tr    from-red-500  to-yellow-400   h-[2px] w-0 left-0   absolute z-10`}
          ></div>
          <p className="cnt  font-comic  text-[100px] font-bold z-20">
            {counter} <p className="inline font-serif">%</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loadingpg;

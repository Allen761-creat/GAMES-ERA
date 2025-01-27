
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Homep2 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const gallery = [
    { src: '/Images/game1.avif', title: 'thunder world' },
    { src: '/Images/game2.avif', title: 'skyLand' },
    { src: '/Images/game3.jpg', title: 'zombiworld' },
    { src: '/Images/game4.jpg', title: 'snippershooter' },
    { src: '/Images/game5.avif', title: 'asplatate9' },
    { src: '/Images/game6.avif', title: 'racers' },
    { src: '/Images/game7.jpeg', title: 'bikeracer' },
    { src: '/Images/game8.avif', title: 'biker world' },
    { src: '/Images/game9.avif', title: 'bataman world' },
    { src: '/Images/game10.avif', title: 'subway surf' },
    { src: '/Images/game11.jpeg', title: 'tom gold' },
    { src: '/Images/game13.jpg', title: 'dogrunner' },
    { src: '/Images/game14.webp', title: 'masterchef' },
    { src: '/Images/game15.jpg', title: 'starchef' },
    { src: '/Images/game16.avif', title: 'resturantlife' },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mousexspring = useSpring(x);
  const mouseyspring = useSpring(y);

  const rotateX = useTransform(mouseyspring, [-0.5, 0.5], ['30.5deg', '-30.5deg']);
  const rotateY = useTransform(mousexspring, [-0.5, 0.5], ['30.5deg', '-30.5deg']);

  const handledmouse = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mousex = e.clientX - rect.left;
    const mousey = e.clientY - rect.top;

    const xpcr = mousex / width - 0.5;
    const ypcr = mousey / height - 0.5;
    x.set(xpcr);
    y.set(ypcr);
  };

  return (
    <div className="">
      <div className="h-[200px]">
        <motion.h1
          initial={{ opacity: 0, y: 100, visibility: 'hidden', color: 'white' }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible', color: 'yellow' }}
          transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20 font-comic text-7xl md:text-7xl p-2 xs:text-4xl overflow-auto"
        >
          FUN TIME
        </motion.h1>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.7 }}
            className="font-comic text-[yellow] text-3xl xs:text-xl md:text-3xl text-center"
          >
            This is a place for you to explore new experiences and discover new things
          </motion.p>
        </div>
      </div>

      <Container className='p-0'>
        <Row className="p-0 m-0">
          {gallery.map((item, index) => (
            <Col
              key={index}
              md={4}
              xs={6}
              className="mb-9  cursor-pointer rounded-md"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{
                  rotateX: hoverIndex === index ? rotateX : 0,
                  rotateY: hoverIndex === index ? rotateY : 0,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={handledmouse}
                initial={{ opacity: 0, y: 200, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className="relative rounded-md  flex overflow-hidden items-center justify-center flex-col"
              >
                {/* Top overlay */}
                <motion.div
                  className="bg-[#000000ae] z-10 w-full h-[100px] top-0 absolute"
                  initial={{ height: '0', opacity: 0 }}
                  animate={{
                    height: hoverIndex === index ? '100px' : '0',
                    opacity: hoverIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                ></motion.div>

                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[200px] shrink-0 object-cover object-center"
                />

                <motion.div className="text-center whitespace-nowrap font-comic text-3xl text-white z-20 absolute">
                  {item.title.split(' ').map((word, wordIndex) => (
                    <motion.div key={wordIndex} className="inline-block">
                      {word.split('').map((letter, letterIndex) => (
                        <motion.span
                          key={letterIndex}
                          className="inline-block"
                          initial={{ y: -100, opacity: 0 }}
                          animate={{
                            y: hoverIndex === index ? 0 : 100,
                            opacity: hoverIndex === index ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: wordIndex * 0.2 + letterIndex * 0.1, // Stagger animation for each letter
                            ease: 'easeInOut',
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom overlay */}
                <motion.div
                  className="bg-[#000000ae] z-10 w-full h-[120px] bottom-0 absolute"
                  initial={{ height: '0', opacity: 0 }}
                  animate={{
                    height: hoverIndex === index ? '100px' : '0',
                    opacity: hoverIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                ></motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className='text-center font-comic text-yellow-600  xs:text-2xl mt-5 px-3 mb-5 sm:text-4xl md:text-7xl'>
          TOP 5 GAMES OF THE YAER IN 2024
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homep2;

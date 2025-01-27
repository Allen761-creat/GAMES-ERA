


const MoreGames = () => {
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
    { src: '/Images/game5.avif', title: 'asplatate9' },
    { src: '/Images/game6.avif', title: 'racers' },
    { src: '/Images/game7.jpeg', title: 'bikeracer' },
    { src: '/Images/game8.avif', title: 'biker world' },
    { src: '/Images/game9.avif', title: 'bataman world' },
    { src: '/Images/game10.avif', title: 'subway surf' },
    { src: '/Images/game11.jpeg', title: 'tom gold' },
    { src: '/Images/game13.jpg', title: 'dogrunner' },
    { src: '/Images/game1.avif', title: 'thunder world' },
    { src: '/Images/game2.avif', title: 'skyLand' },
    { src: '/Images/game3.jpg', title: 'zombiworld' },
    { src: '/Images/game4.jpg', title: 'snippershooter' },
    { src: '/Images/game5.avif', title: 'asplatate9' },
    { src: '/Images/game6.avif', title: 'racers' },
    { src: '/Images/game7.jpeg', title: 'bikeracer' },
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
    { src: '/Images/game5.avif', title: 'asplatate9' },
    { src: '/Images/game6.avif', title: 'racers' },
    { src: '/Images/game7.jpeg', title: 'bikeracer' },
    { src: '/Images/game8.avif', title: 'biker world' },
    { src: '/Images/game9.avif', title: 'bataman world' },
    { src: '/Images/game10.avif', title: 'subway surf' },
    { src: '/Images/game11.jpeg', title: 'tom gold' },
    { src: '/Images/game13.jpg', title: 'dogrunner' },
    { src: '/Images/game1.avif', title: 'thunder world' },
    { src: '/Images/game2.avif', title: 'skyLand' },
    { src: '/Images/game3.jpg', title: 'zombiworld' },
    { src: '/Images/game4.jpg', title: 'snippershooter' },
    { src: '/Images/game5.avif', title: 'asplatate9' },
    { src: '/Images/game6.avif', title: 'racers' },
    { src: '/Images/game7.jpeg', title: 'bikeracer' },
  ]
  return (
    <div className='p-3'>
      <br/>
      <br/>
      <br/>
    <div className='w-full   mx-auto  columns-4 gap-2'>
      {
        gallery.map((game, index) => (
          <div key={index} className='w-full hover:scale-105 cursor-pointer hover:animate-pulse    mb-2'>
            <img
              src={game.src}
              alt={game.title}
              className='max-w-full rounded-lg'
            />
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default MoreGames

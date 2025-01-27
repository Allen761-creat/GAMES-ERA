


import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navibar from './Components/Navibar';
import Home from './screens/Home';
import Services from './screens/Services';
import Contactus from './screens/Contactus';
import Loading from './Components/Loadingpg'
import MoreGames from './screens/MoreGames';

// Animatepage component to handle page transitions
const Animatepage = () => {
  const location = useLocation(); // Current location from react-router

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Loading/>}/>
        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/games" element={<PageWrapper><MoreGames /></PageWrapper>} />
        <Route path="/contactus" element={<PageWrapper><Contactus /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// Wrapper component to add animation to pages
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ y: '100%' }} // Initial position
      animate={{ y: 0 }} // Move to normal position
      exit={{ y: '-100%',opacity:0,}} // When exiting, move down
      transition={{ ease: 'linear', duration: 0.4 }} // Transition time
    >
      {children}
    </motion.div>
  );
};

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <Navibar />
      <Animatepage />
    </BrowserRouter>
  );
}

export default App;

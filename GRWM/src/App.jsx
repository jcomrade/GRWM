import NavBar from './components/Header/NavBar'
import * as React from "react";
import Description from './components/Hero/Description'
import { useLocation, useRoutes } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
import BeginNavBar from './components/Header/BeginNavBar';
import Results from './components/Results/result';

function App() {
  const element = useRoutes([
    {
      path: "/home",
      element:
        <motion.div
          className="bg-black h-screen">
          <Description />
        </motion.div>
    },
    {
      path: "/begin",
      element:
        <div className='bg-black h-screen'>
          <BeginNavBar />
        </div>
    },
    {
      path: "/results",
      element:
        <div className='bg-black h-screen'>
          <Results />
        </div>
    }
  ])
  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode='wait'>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  )
}

export default App

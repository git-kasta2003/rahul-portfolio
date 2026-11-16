import './App.css';

import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import {
  AnimatePresence,
  motion
} from 'framer-motion';

import Navbar from './components/Navbar';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';


function PageTransition({ children }) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}

      exit={{
        opacity: 0,
        y: -20,
        scale: 0.98
      }}

      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}

    >

      {children}

    </motion.div>

  );

}


function App() {

  const location = useLocation();

  return (

    <>

      <Navbar />

      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />

          <Route
            path="/education"
            element={
              <PageTransition>
                <Education />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

      </AnimatePresence>

    </>

  );

}

export default App;
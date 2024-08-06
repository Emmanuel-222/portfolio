import { motion } from 'framer-motion';


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </motion.div>
  )
}

export default App;
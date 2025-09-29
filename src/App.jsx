import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";


function App() {
  const Location = useLocation();
  
  return (
    <>
      <Header />
      <AnimatePresence mode="wait"> 
        <Routes location={Location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
    </AnimatePresence>
    </>
  );
};

<div className="p"></div>

export default App;



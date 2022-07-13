import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  return (
    <div className="App">
      <SideNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
          <Route
            path="/projects"
            element={<Projects setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/about"
            element={<About setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/contact"
            element={<Contact setCurrentPage={setCurrentPage} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

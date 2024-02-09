// import libaries
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/home";
import DogFriendly from "./pages/portfolio/dogfriendy";
import HundSokerHem from "./pages/portfolio/hundsokerhem";
import BokaMote from "./pages/portfolio/bokamote";
import Calendar from "./pages/portfolio/calendar";
import About from "./pages/about";

// import components
import Navbar from "./components/navigation/navbar";
import Sidebar from "./components/navigation/sidebar";
import Footer from "./components/footer/footer";
import { getWindowDimensions } from "./components/window-dimensions/window-dimensions";

function App() {
  // show or hide sidebar
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  // get window dimensions
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar
          sidebar={sidebar}
          toggleSidebar={toggleSidebar}
          windowDimensions={windowDimensions}
        />
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/dog-friendly" element={<DogFriendly />} />
          <Route path="/portfolio/hund-soker-hem" element={<HundSokerHem />} />
          <Route path="/portfolio/boka-mote" element={<BokaMote />} />
          <Route path="/portfolio/calendar" element={<Calendar />} />
          <Route
            path="/about"
            element={<About windowDimensions={windowDimensions} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

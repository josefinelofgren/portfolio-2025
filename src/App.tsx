// import libaries
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// import pages
import Home from "./pages/home";

// import components
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { useEffect, useState } from "react";
import Menu from "./components/menu/menu";
import About from "./pages/about";
import Work from "./pages/work";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:subPath" element={<Work />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

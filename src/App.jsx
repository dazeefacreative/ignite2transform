import React, { useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import CookieBanner from "./components/Cookies";

import Home from "./pages/Home";
import WorkWithMe from "./pages/WorkWithMe";
import TheAlignment from "./pages/TheAlignment";
import Podcast from "./pages/Podcast"
import About from "./pages/About"
import Legal from "./pages/Legal";
import NotFound from "./pages/PageNotFound";

// Global scroll reveal effect
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-up");
    const reveal = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("animate-fade-up");
        } else {
          el.classList.remove("animate-fade-up");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);
}

function App(){

    useScrollReveal();

    return(
        <>
            <Header />
            <CookieBanner />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work_with_me" element={<WorkWithMe />} />
                <Route path="/the_alignment" element={<TheAlignment />} />
                <Route path="/podcast" element={<Podcast />} />
                <Route path="/about" element={<About />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App

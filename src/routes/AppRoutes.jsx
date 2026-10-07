import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
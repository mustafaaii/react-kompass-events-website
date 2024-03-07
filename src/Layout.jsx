import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/bootstrap/bootstrap.css"
import "./assets/css/bootstrap/bootstrap-grid.css"
import "./assets/css/fontawsome/fontawesome.css"
import "./assets/css/fontawsome/brands.css"
import "./assets/css/fontawsome/regular.css"
import "./assets/css/fontawsome/solid.css"
import "./assets/css/kompass.event.css"


import Index from "./page/Index";
import Module from "./libs/module";
import { useEffect } from "react";

function Layout() {

  const location = useLocation()
  useEffect(() => {
    if (document.getElementById("refScroll")) {
      document.getElementById("refScroll").scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])
  return (
    <div id="refScroll">
      <Module module="header" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:page" element={<Index />} />
        <Route path="/:page/:type/:name/:id" element={<Index />} />
      </Routes>
      <Module module="footer" />
    </div>
  );
}

export default Layout;

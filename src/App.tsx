import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import SidebarButtonGroup from "./components/SidebarButtonGroup";

function App() {
  const [activePage, setActivePage] = useState("main");

  return (
    <div className="relative">
      <SidebarButtonGroup active={activePage} onChange={setActivePage} />

      {activePage === "main" && <Home />}
      {activePage === "projects" && <Projects />} 
      {activePage === "experiences" && <Experiences />}
      {/* {activePage === "contact" && <Contact />}  */}
    </div>
  );
}

export default App;

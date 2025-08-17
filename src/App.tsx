import { useState } from "react";
import Home from "./pages/Home";
import SidebarButtonGroup from "./components/SidebarButtonGroup";

function App() {
  const [activePage, setActivePage] = useState("main");

  return (
    <div className="relative">
      <SidebarButtonGroup active={activePage} onChange={setActivePage} />

      {activePage === "main" && <Home />}
      {/* Diğer sayfalar da bu şekilde eklenecek:
          {activePage === "projects" && <Projects />} */}
    </div>
  );
}

export default App;

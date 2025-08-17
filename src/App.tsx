import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

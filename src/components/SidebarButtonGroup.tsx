import '../styles/global.css';
import { useState } from 'react';
import mainicon from '/main.svg';
import meicon from '/me.svg';
import contacticon from '/contact.svg';
import projecticon from '/project.svg';
import { Menu, X } from 'lucide-react'; // Hamburger ve kapatma ikonları

type SidebarButtonGroupProps = {
  active: string;
  onChange: (value: string) => void;
};

const SidebarButtonGroup = ({ active, onChange }: SidebarButtonGroupProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttons = [
    { id: "main", label: <img src={mainicon} alt="main" className="w-8 h-8" /> },
    { id: "experiences", label: <img src={meicon} alt="me" className="w-8 h-8" /> },
    { id: "projects", label: <img src={projecticon} alt="projects" className="w-8 h-8" /> },
    { id: "contact", label: <img src={contacticon} alt="contact" className="w-8 h-8" /> },
  ];

  return (
    <>
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        {buttons.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`w-20 h-20 flex items-center justify-center rounded-full border border-gray-300 
              shadow-md bg-pink-500 hover:bg-pink-900 transition duration-300
              ${active === id ? 'ring-2 ring-pink-400' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-pink-500 rounded-full shadow-lg"
        >
          {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {menuOpen && (
          <div className="absolute top-14 right-0 bg-transparent rounded-lg p-4 flex flex-col gap-4">
            {buttons.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  onChange(id);
                  setMenuOpen(false);
                }}
                className={`w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 
                  bg-pink-500 hover:bg-pink-900 transition duration-300
                  ${active === id ? 'ring-2 ring-pink-400' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarButtonGroup;

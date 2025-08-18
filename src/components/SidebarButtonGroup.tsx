import '../styles/global.css';
import mainicon from '/main.svg';
import meicon from '/me.svg';
import contacticon from '/contact.svg';
import projecticon from '/project.svg';

type SidebarButtonGroupProps = {
  active: string;
  onChange: (value: string) => void;
};

const SidebarButtonGroup = ({ active, onChange }: SidebarButtonGroupProps) => {
  const buttons = [
    { id: "main", label: <img src={mainicon} alt="main" className="w-10 h-10 mx-auto" /> },
    { id: "experiences", label: <img src={meicon} alt="me" className="w-10 h-10 mx-auto" /> },
    { id: "projects", label: <img src={projecticon} alt="projects" className="w-10 h-10 mx-auto" /> },
    { id: "contact", label: <img src={contacticon} alt="contact" className="w-10 h-10 mx-auto" /> },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
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
    
  );
};

export default SidebarButtonGroup;
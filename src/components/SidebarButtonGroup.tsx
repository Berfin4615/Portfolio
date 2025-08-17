import '../styles/global.css';
import mainicon from '/main.svg';
import meicon from '/me.svg';
import contacticon from '/contact.svg';
import projecticon from '/project.svg';

const SidebarButtonGroup = ({ active, onChange }) => {
  const buttons = [
    { id: "main", label: <img src={mainicon} alt="main" className="w-10 h-10 mx-auto" /> },
    { id: "projects", label: <img src={projecticon} alt="projects" className="w-10 h-10 mx-auto" /> },
    { id: "about", label: <img src={meicon} alt="me" className="w-10 h-10 mx-auto" /> },
    { id: "contact", label: <img src={contacticon} alt="contact" className="w-10 h-10 mx-auto" /> },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {buttons.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`px-4 py-2 rounded-full transition w-20 h-20 text-white border 
            ${active === id
              ? "bg-transparent border-violet-700"
              : "bg-transparent border-violet-500 hover:bg-violet-100"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
    
  );
};

export default SidebarButtonGroup;
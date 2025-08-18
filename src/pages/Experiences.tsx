import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import "../styles/global.css";
import Typewriter from "typewriter-effect";

const experiences = [
  {
    title: "Junior Robotics Developer",
    company: "Güriş Teknoloji",
    date: "July 2024 – Present",
    description:
      "Developed software for robotic projects using ROS, Gazebo, and React. Built damage detection systems and real-time control interfaces.",
    tech: ["ROS", "Gazebo", "React", "Python", "Reinforcement Learning"],
  },
  {
    title: "Software Developer",
    company: "Anayurt Teknoloji",
    date: "Oct 2023 – Apr 2024",
    description:
      "Worked on AI and R&D projects for clients like ASELSAN and Huawei. Developed using Python, C++, PHP.",
    tech: ["Python", "C++", "PHP", "AI", "R&D"],
  },
  {
    title: "Frontend Developer",
    company: "Cubicl",
    date: "Jan – May 2023",
    description:
      "Contributed to a web-based automation system. Used React, Vue, and JavaScript.",
    tech: ["React", "Vue", "JavaScript", "Linux"],
  },
  {
    title: "Robotics Intern",
    company: "Emsar Mutfak",
    date: "Feb – Jun 2022",
    description:
      "Participated in a robotic arm barista project. Focused on software and control logic.",
    tech: ["Embedded Systems", "R&D", "Robotics"],
  },
  {
    title: "Programming Instructor",
    company: "Algorithmics",
    date: "October 2022 – September 2024",
    description:
      "Taught programming concepts and robotics to students. Developed course materials and hands-on projects.",
    tech: ["Python", "Scratch", "Education", "Teaching"],
  },
];

const Experiences = () => {
  return (
    <section className="min-h-screen w-full py-16 px-6 sm:px-12 overflow-hidden relative">
      <AnimatedBackground />
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        <Typewriter
          options={{
            strings: ["My Experiences"],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
        <span className="ml-2">💼</span>
      </h2>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-6 w-max px-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="min-w-[300px] max-w-sm bg-white/70 backdrop-blur border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl"
            >
              <h3 className="text-pink-600 text-lg font-bold mb-1">
                {exp.title}
              </h3>
              <div className="text-sm font-semibold text-gray-800 mb-2">
                {exp.company}
              </div>
              <p className="text-xs text-gray-600 mb-2">{exp.date}</p>
              <p className="text-sm text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

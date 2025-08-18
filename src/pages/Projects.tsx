import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import "../styles/global.css";
import Typewriter from 'typewriter-effect';

const projects = [
  {
    title: "Microsoft Women in AI Hackathon 2024",
    description:
      "An AI-powered travel planner developed with a diverse team of women. I contributed to creating a system using Microsoft Azure to offer personalized holiday routes.",
    tech: ["React", "Azure Cognitive Services", "Python"],
  },
  {
    title: "Anadolu Agency & Bilişim Vadisi Hackathon 2024",
    description:
      "An AI-driven news assistant that generates headlines, full news texts, and spot summaries. I developed the frontend and contributed to integrating AI services.",
    tech: ["React", "OpenAI API", "RapidAPI"],
  },
  {
    title: "HUAWEI R&D Coding Marathon 2023",
    description:
      "A mobile app that recommends DIY videos based on materials photographed. I worked on integrating Huawei Cloud’s ML capabilities.",
    tech: ["Java", "Huawei ML Kit", "Android Studio"],
  },
  {
    title: "ITURO 2023 - Traffic Robot (1st Place)",
    description:
      "A traffic sign recognition robot that navigates roads accordingly using OpenCV and Raspberry Pi. I developed the image processing system.",
    tech: ["Python", "OpenCV", "Raspberry Pi"],
  },
  {
    title: "BROCUP & KELEBEKRO Robotics Competitions",
    description:
      "Developed various competition robots including sumo, mini-sumo, and maze solvers. I contributed to software, electronics, and mechanical design. Earned multiple top placements.",
    tech: ["Arduino", "C++", "SolidWorks"],
  },
  {
    title: "Güriş Technology - Robotics Development",
    description:
      "Built robotic software for damage detection in the energy sector using ROS, LiDAR, IMU, and camera data. Implemented autonomous behavior in Gazebo simulations and developed data logging systems.",
    tech: ["ROS", "Gazebo", "Python", "React"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen w-full bg-white text-gray-800 px-6 sm:px-8 md:px-14 lg:px-24 xl:px-28 overflow-hidden py-24">
        <AnimatedBackground />
        <h2 className="text-4xl font-bold text-center mb-8">
            <Typewriter
                options={{
                  strings: ["My Projects"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
            />🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition p-6 shadow-md rounded-xl bg-white/70 backdrop-blur"
            >
                <h3 className="text-xl font-semibold mb-2 text-pink-500">
                {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                    <span
                    key={i}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </motion.div>
            ))}
      </div>
    </section>
  );
};

export default Projects;

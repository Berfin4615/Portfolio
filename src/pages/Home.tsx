import { motion } from "framer-motion";
import profileImage from "/profile.png";
import "../styles/global.css";
import AnimatedBackground from "../components/AnimatedBackground";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="relative min-h-screen h-full w-full">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-noise pointer-events-none z-0" />

      <motion.div className="relative z-10 flex items-center justify-center h-full px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full gap-12">
          <motion.img
            src={profileImage}
            alt="profile"
            className="w-60 h-60 lg:w-200 lg:h-200 object-contain rounded-full"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
          />
          <div className="text-center lg:text-left max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
              <Typewriter
                options={{
                  strings: ["Hi,", "I'm Berfin 👋"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
            <div className="space-y-4 text-base md:text-md text-gray-700 leading-relaxed tracking-wide">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I’m a developer who speaks robot fluently and builds sleek,
                modern interfaces with real-world functionality.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                🤖 Built robotics systems? Yep. <br />
                🧠 Designed AI assistants? Absolutely. <br />
                📊 Laravel apps with Excel export? Been there, coded that.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                I develop in React, Python, Java, and Laravel, and I thrive in
                projects where design meets engineering.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                If you want a dev who communicates clearly, documents cleanly,
                and codes like it’s second nature — <br />
                let’s build something together.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

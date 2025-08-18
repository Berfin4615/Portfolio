import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="h-full w-full absolute inset-0 overflow-hidden z-0">
      {/* Daire 1 */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-400 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "20%", left: "10%" }}
      />
      {/* Daire 2 */}
      <motion.div
        className="absolute w-96 h-96 bg-fuchsia-500 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -120, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "5%" }}
      />
      {/* Daire 3 */}
      <motion.div
        className="absolute w-52 h-52 bg-yellow-400 rounded-full opacity-20 blur-2xl"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "50%", left: "45%" }}
      />
    </div>
  );
};

export default AnimatedBackground;

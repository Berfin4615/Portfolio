import { motion } from "framer-motion";
import profileImage from "/profile.png"; 
import '../styles/global.css';

const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl"
      >
        <img
          src={profileImage}
          alt="profil"
          className="mx-auto w-48 h-48 rounded-full shadow-lg border-4 border-white mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Merhaba, Ben Berfin 👋</h1>
        <p className="text-lg text-gray-300">
          Yazılım geliştiriyorum, tasarlıyorum ve projeler üretiyorum.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;

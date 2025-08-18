import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

const Contact = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 bg-white overflow-hidden">
      <AnimatedBackground />

      <motion.div
        className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Let's Connect 💌
        </h2>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

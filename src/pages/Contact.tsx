import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/xgvzblol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition"
          >
            Send Message
          </button>

          {/* Success / Error Message */}
          {status === "success" && (
            <p className="text-green-600 text-sm mt-2">Your message has been sent successfully! 🎉</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm mt-2">Oops! Something went wrong. Please try again later.</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

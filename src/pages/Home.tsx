import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <section className="text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hello, I'm <span className="text-pink-400">Berfin</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg max-w-xl mx-auto"
        >
          A creative developer passionate about robotics, AI, and building things that matter.
        </motion.p>
        <div className="mt-8 space-x-4">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">View Projects</Button>
          <Button variant="outline" className="border-white text-white">Contact Me</Button>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-[#1f1f2f] border-none shadow-xl hover:shadow-pink-500/40 transition">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Project Title {i}</h2>
                <p className="text-sm text-gray-300">
                  Brief description of what the project does, the stack, and its purpose.
                </p>
                <Button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white">View</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="text-center py-10 text-gray-400">
        <p>Designed with ❤️ by Berfin</p>
      </footer>
    </main>
  );
}

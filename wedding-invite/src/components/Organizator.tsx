"use client";
import { motion } from "framer-motion";

export default function Organizer() {
  const telegramLink = "https://t.me/+375292761451";
  const instagramLink = "https://instagram.com/logvinova_wedding";

  return (
    <section
      className="relative min-h-[80vh] flex text-white px-6"
      style={{
        backgroundImage: "url('/fotos/anna.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* затемнение */}
      <div className="absolute inset-0 bg-black/50" />

      {/* КОНТЕНТ */}
      <div className="relative z-10 flex flex-col justify-between w-full max-w-4xl mx-auto py-10">
        {/* ВЕРХ */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-12 text-4xl text-center font-alexbrush"
        >
          Наш организатор
        </motion.h2>

        {/* НИЗ */}
        <div className="text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[1.4rem] md:text-[1.75rem] font-alexbrush text-gray-200 leading-tight"
          >
            В день свадьбы мы будем заняты, поэтому по всем вопросам пишите
            нашему организатору.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <a
              href={telegramLink}
              target="_blank"
              className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition text-[1.3rem] font-alexbrush "
            >
              Telegram
            </a>
            <a
              href={instagramLink}
              target="_blank"
              className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition text-[1.3rem] font-alexbrush"
            >
              Instagram
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-[1.4rem] font-alexbrush leading-tight"
          >
            Организатор поможет вам с трансфером, размещением и всеми вопросами
            в день свадьбы.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

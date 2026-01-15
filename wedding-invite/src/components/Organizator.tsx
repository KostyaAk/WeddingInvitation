"use client";
import { motion } from "framer-motion";

export default function Organizer() {
  const telegramLink = "https://t.me/+375292761451";
  const instagramLink = "https://instagram.com/logvinova_wedding";

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white px-6"
      style={{
        backgroundImage: "url('fotos/anna.jpg')", // положите фото в /public
        backgroundSize: "cover", // <--- вся фотография видна
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-black/50" />

      {/* контент поверх фона */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl italic mb-6"
        >
          Наш организатор
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-6"
        >
          В день свадьбы мы будем заняты, поэтому по всем вопросам пишите нашему
          организатору.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center gap-6 mb-8 flex-wrap"
        >
          <a
            href={telegramLink}
            target="_blank"
            className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Telegram
          </a>
          <a
            href={instagramLink}
            target="_blank"
            className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300"
        >
          Организатор поможет вам с трансфером, размещением и всеми вопросами в
          день свадьбы.
        </motion.p>
      </div>
    </section>
  );
}

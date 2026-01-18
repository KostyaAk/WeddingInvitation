"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="bg-white text-black px-8 py-8">
      {/* ТЕКСТ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-[1.5rem] leading-relaxed font-alexbrush leading-tight">
          Мы рады пригласить вас разделить с нами один из самых важных дней
          нашей жизни.
        </p>
        <h1 className="text-4xl leading-relaxed font-alexbrush">01.05.2026</h1>
      </motion.div>

      {/* ФОТО-ТРИПТИХ */}
      <div className="relative flex justify-center items-center gap-4 max-w-5xl mx-auto py-8">
        {/* ЛЕВОЕ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="w-1/4 overflow-hidden rounded-lg"
        >
          <img
            src="/fotos/rings.jpg"
            className="w-full h-[260px] object-cover"
          />
        </motion.div>

        {/* ЦЕНТРАЛЬНОЕ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="w-1/2 overflow-hidden rounded-lg -my-[65px]"
        >
          <img
            src="/fotos/we_black_filter.jpg"
            className="w-full h-[390px] object-cover object-[50%_20%]"
          />
        </motion.div>

        {/* ПРАВОЕ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="w-1/4 overflow-hidden rounded-lg"
        >
          <img
            src="/fotos/tableflow.jpg"
            className="w-full h-[260px] object-cover"
          />
        </motion.div>
      </div>

      {/* ПОДПИСЬ ПОД ФОТО */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center max-w-xl mx-auto font-alexbrush"
      >
        <p className="text-[1.5rem] ">С нетерпением ждем Вас!</p>
      </motion.div>
    </section>
  );
}

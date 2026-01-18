"use client";
import { motion } from "framer-motion";

export default function DressCode() {
  return (
    <section className="bg-white text-black px-6 py-8 md:py-18">
      {/* Заголовок */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center mb-8 font-alexbrush"
      >
        Дресс-код
      </motion.h2>

      {/* Пояснение */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-full md:max-w-3xl mx-auto text-center md:text-lg mb-8 font-alexbrush"
      >
        <p className="text-[1.4rem] text-lg mb-1 font-alexbrush leading-tight ">
          Мы будем очень рады, если вы поддержите цветовую палитру нашего
          торжества. Если у вас не получится, пожалуйста, отдайте предпочтение
          нейтральным оттенкам.
        </p>
        <p className="text-[1.4rem] text-lg mb-1 font-alexbrush leading-tight ">
          Для мужчин: костюмы черных, графитовых, коричневых оттенков с белой
          рубашкой.
        </p>
        <p className="text-[1.4rem] text-lg mb-1 font-alexbrush leading-tight ">
          Для дам: вечерние наряды коричневых, бежевых, черных, графитовых,
          серых оттенков. Просим оставить белый цвет для невесты.
        </p>
      </motion.div>

      {/* Цветовая палитра */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-4xl mx-auto mb-4"
      >
        <img
          src="/fotos/dress_code.jfif"
          className="w-full rounded-lg object-cover"
        />
      </motion.div>
    </section>
  );
}

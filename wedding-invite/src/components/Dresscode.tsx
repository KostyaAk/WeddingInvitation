"use client";
import { motion } from "framer-motion";

export default function DressCode() {
  const colors = [
    { name: "Песочный", hex: "#dbc09d" },
    { name: "Коричневый", hex: "#422612" },
    { name: "Серый", hex: "#808080" },
    { name: "Черный", hex: "#000000" },
  ];

  return (
    <section className="bg-white text-black px-6 py-14 md:py-18">
      {/* Заголовок */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl text-center italic mb-6"
      >
        Дресс-код
      </motion.h2>

      {/* Пояснение */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-full md:max-w-3xl mx-auto text-center text-base md:text-lg text-gray-900 mb-8"
      >
        <p className="text-lg mb-4">
          Мы будем очень рады, если вы поддержите цветовую палитру нашего
          торжества. Если у вас не получится, пожалуйста, отдайте предпочтение
          нейтральным оттенкам.
        </p>
        <p className="text-lg mb-4">
          Просим девушек не использовать белый цвет при выборе нарядов. Также
          уместен черный цвет при выборе образа.
        </p>
      </motion.div>

      {/* Цветовая палитра */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-full border border-gray-900 mb-2"
              style={{ backgroundColor: color.hex }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

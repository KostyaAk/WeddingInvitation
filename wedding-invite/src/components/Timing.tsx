"use client";
import { motion } from "framer-motion";

const events = [
  {
    time: "15.30 - 16:30",
    title: "Сбор гостей и Фуршет",
    desc: "Встречаемся, наслаждаемся фуршетом, настраиваемся на веселый праздник",
  },
  {
    time: "16:30",
    title: "Свадебная церемония",
    desc: "Скажем друг другу «да»",
  },
  {
    time: "17:30",
    title: "Банкет",
    desc: "Время вкусной еды, музыки, приятных пожеланий и танцев",
  },
  {
    time: "22:30",
    title: "Торт",
    desc: "Будет вкусной 'вишенкой' нашего праздника",
  },
  {
    time: "24:00",
    title: "Afterparty",
    desc: "Продолжение праздника в менее официальном формате",
  },
];

export default function Timeline() {
  return (
    <section className="min-h-screen bg-white text-black px-8 py-8">
      <h2 className="text-4xl text-center mb-16 font-alexbrush">
        Программа дня
      </h2>

      <div className="space-y-12 max-w-xl mx-auto">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-l border-gray-700 pl-6"
          >
            <p className="text-[1.3rem] text-lg font-alexbrush">{e.time}</p>
            <h3 className="text-2xl mt-1 font-alexbrush">{e.title}</h3>
            <p className="text-[1.3rem] text-lg mt-1 font-alexbrush leading-tight">
              {e.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

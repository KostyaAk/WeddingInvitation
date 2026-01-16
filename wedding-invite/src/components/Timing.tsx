"use client";
import { motion } from "framer-motion";

const events = [
  {
    time: "14.30 - 15:00",
    title: "Сбор гостей и Фуршет",
    desc: "Встречаемся, наслаждаемся фуршетом, настраиваемся на веселый праздник",
  },
  {
    time: "16:00",
    title: "Свадебная церемония",
    desc: "Скажем друг другу «да»",
  },
  {
    time: "17:00",
    title: "Банкет",
    desc: "Время вкусной еды, музыки, приятных пожеланий и танцев",
  },
  {
    time: "22:00",
    title: "Торт",
    desc: "Будет вкусной 'вишенкой' нашего праздника",
  },
  {
    time: "23:00",
    title: "Afterparty",
    desc: "Продолжение праздника в менее официальном формате",
  },
];

export default function Timeline() {
  return (
    <section className="min-h-screen bg-white text-black px-8 py-24">
      <h2 className="text-4xl text-center mb-16">Программа дня</h2>

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
            <p className="text-gray-900 text-lg">{e.time}</p>
            <h3 className="text-xl italic mt-1">{e.title}</h3>
            <p className="text-gray-900 text-lg mt-1">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

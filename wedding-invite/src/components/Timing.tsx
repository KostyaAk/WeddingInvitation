"use client";
import { motion } from "framer-motion";

const events = [
  {
    time: "14:00",
    title: "Сбор гостей",
    desc: "Встречаемся и настраиваемся на праздник",
  },
  { time: "15:00", title: "Церемония", desc: "Скажем друг другу «да»" },
  { time: "16:00", title: "Фотосессия", desc: "Сохраним эмоции этого дня" },
  { time: "17:00", title: "Банкет", desc: "Праздничный ужин и тёплые тосты" },
  { time: "21:00", title: "Вечеринка", desc: "Танцы и веселье до вечера" },
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
            <h3 className="text-xl mt-1">{e.title}</h3>
            <p className="text-gray-900 text-lg mt-1">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

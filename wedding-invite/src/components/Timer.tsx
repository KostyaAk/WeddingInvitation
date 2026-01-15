"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Timer() {
  const weddingDate = new Date("2026-05-01T00:00:00"); // дата свадьбы
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('fotos/timer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        //backgroundAttachment: "fixed",
      }}
    >
      {/* затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-black/40" />

      {/* контент поверх фона */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-center mb-10 italic"
        >
          До свадьбы осталось
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex gap-8 text-center text-2xl md:text-4xl"
        >
          <div>
            <div className="font-bold">{timeLeft.days}</div>
            <div className="text-gray-300 text-sm mt-1">Дней</div>
          </div>
          <div>
            <div className="font-bold">{timeLeft.hours}</div>
            <div className="text-gray-300 text-sm mt-1">Часов</div>
          </div>
          <div>
            <div className="font-bold">{timeLeft.minutes}</div>
            <div className="text-gray-300 text-sm mt-1">Минут</div>
          </div>
          <div>
            <div className="font-bold">{timeLeft.seconds}</div>
            <div className="text-gray-300 text-sm mt-1">Секунд</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

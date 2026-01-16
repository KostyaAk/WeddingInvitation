"use client";
import { motion } from "framer-motion";

export default function Details() {
  return (
    // <section className="min-h-screen bg-white text-black px-8 py-24 flex flex-col justify-center">
    <section className="bg-white text-black px-8 py-14 md:py-18">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center mb-10 italic"
      >
        Детали
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-md mx-auto text-center text-lg text-gray-900 space-y-4"
      >
        <p>
          К сожалению, банкетная площадка не имеет возможности пригласить
          аниматора или безопасно расположить детей. Поэтому, позаботьтесь о
          том, кому Вы сможете оставить ребенка на время проведения мероприятия
        </p>
        <p>
          P.S. Просим Вас не дарить нам живые цветы. Вместо этого можете
          подарить бутылочку вашего любимого алкоголя в нашу коллекцию !
        </p>
      </motion.div>
    </section>
  );
}

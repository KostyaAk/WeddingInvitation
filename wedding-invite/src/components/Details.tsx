"use client";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <section className="bg-white text-black px-8 pt-8 pb-4 md:pt-18 md:pb-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center mb-8 font-alexbrush"
      >
        Детали
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-[1.4rem] max-w-md mx-auto text-center text-lg space-y-4 font-alexbrush leading-tight"
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
      <div className="relative flex justify-center items-center gap-4 max-w-5xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="w-1/2 overflow-hidden rounded-lg mb-12"
        >
          <img
            src="/fotos/beautiful.jpg"
            className="w-full h-[390px] object-cover object-[100%_100%]"
          />
        </motion.div>
      </div>
    </section>
  );
}

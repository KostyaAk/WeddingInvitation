"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ФОНОВОЕ ФОТО */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('fotos/wetoo.jpg')",
        }}
      />

      {/* затемнение для контраста текста */}
      <div className="absolute inset-0 bg-black/40" />

      {/* КОНТЕНТ */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          src="/fotos/logo_without_names.png"
          alt="Константин и Алина"
          className="w-60 md:w-76 mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-white text-4xl md:text-6xl font-alexbrush"
        >
          {/* Mobile */}
          <span className="block md:hidden">
            KONSTANTIN
            <span className="text-2xl block">and</span>
            ALINA
          </span>

          {/* Desktop */}
          <span className="hidden md:block">KONSTANTIN & ALINA</span>
        </motion.h1>
      </div>
    </section>
  );
}

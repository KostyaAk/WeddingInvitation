"use client";
import { motion } from "framer-motion";

export default function Location() {
  const mapLink =
    "https://yandex.ru/maps/?text=Усадьба%20La%20Dolce%20Vita,%20д.%20Русаково,%20Русаковская%20ул.,%2014";

  return (
    <section className="bg-white text-black px-8 py-24">
      {/* Заголовок секции */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center italic mb-8"
      >
        Место проведения
      </motion.h2>

      {/* Название места и описание */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        <h3 className="text-3xl italic mb-2">Усадьба "La Dolce Vita"</h3>
        <p className="text-2xl text-gray-900">
          Авторский стиль усадьбы с нотками Италии, Испании и Франции поражает
          воображение даже самых требовательных гостей. Просторная уютная
          территория с водоемом и фонтаном. Большой банкетный зал, комфортные
          номера для ночлега.
        </p>
        <p className="text-2xl text-gray-900">Именно здесь мы будем отмечать</p>
        <h3 className="text-3xl italic mb-2">день рождения нашей семьи !</h3>
      </motion.div>

      {/* Фото */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-4xl mx-auto mb-4"
      >
        <img
          src="fotos/house.jpg"
          alt="Усадьба La Dolce Vita"
          className="w-full rounded-lg object-cover"
        />
        <p className="text-base text-gray-900 mt-2 text-center">
          Минская область, Узденский район, д. Русаково, ул. Русаковская дом 14
        </p>
      </motion.div>

      {/* Кнопка карта */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center mb-6"
      >
        <a
          href={mapLink}
          target="_blank"
          className="inline-block px-6 py-3 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Смотреть на карте
        </a>
      </motion.div>

      {/* Небольшое описание маршрута */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center text-base text-gray-900"
      >
        Для вашего комфорта предлагаем прокладывать маршрут через деревню
        Яченка!
      </motion.p>
    </section>
  );
}

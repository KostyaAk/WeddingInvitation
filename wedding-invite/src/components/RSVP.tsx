"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("да, я буду");
  const [guests, setGuests] = useState("");
  const [transfer, setTransfer] = useState("Нет не нужен");
  const [overnight, setOvernight] = useState("Нет не планирую");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        "https://weddinginvitation-production-0e2a.up.railway.app/rsvp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            attending,
            guests,
            transfer,
            overnight,
            comment,
          }),
        },
      );

      if (res.ok) {
        setStatus("success");
        setName("");
        setAttending("да, я буду");
        setGuests("");
        setTransfer("Не нужен");
        setOvernight("Не планирую");
        setComment("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 p-4">
      <h2 className="text-4xl text-center font-alexbrush mb-8">
        Подтверждение приглашения
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-[1.42rem] text-center text-lg mb-8 font-alexbrush leading-tight"
      >
        Пожалуйста, подтвердите ваше присутствие до
        <br />
        <b>01 апреля 2026</b>
      </motion.p>

      {/* Имя */}
      <div>
        <label className="text-[1.5rem] block text-lg mb-1 font-alexbrush">
          Ваше имя и фамилия
        </label>
        <input
          type="text"
          placeholder="Имя Фамилия"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-[1.3rem] w-full px-4 py-3 border rounded focus:outline-none focus:border-black font-alexbrush"
        />
      </div>

      {/* Присутствие — RADIO */}
      <div>
        <label className="text-[1.5rem] block text-lg mb-1 font-alexbrush">
          Сможете ли вы присутствовать?
        </label>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
            <input
              type="radio"
              name="attending"
              value="да, я буду"
              checked={attending === "да, я буду"}
              onChange={(e) => setAttending(e.target.value)}
            />
            Да, я буду
          </label>

          <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
            <input
              type="radio"
              name="attending"
              value="к сожалению не смогу"
              checked={attending === "к сожалению не смогу"}
              onChange={(e) => setAttending(e.target.value)}
            />
            К сожалению, не смогу
          </label>
        </div>
      </div>

      {/* УСЛОВНЫЕ ПОЛЯ */}
      <AnimatePresence>
        {attending === "да, я буду" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 overflow-hidden"
          >
            {/* Гости */}
            <div>
              <label className="text-[1.5rem] block text-lg mb-1 font-alexbrush">
                Количество гостей (включая вас)
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Например, 2"
                value={guests}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setGuests(value);
                  }
                }}
                className="no-spinner w-full px-4 py-3 border rounded focus:outline-none focus:border-black text-[1.3rem] font-alexbrush"
              />
            </div>

            {/* Трансфер */}
            <div>
              <label className="text-[1.5rem] block text-lg mb-1 font-alexbrush">
                Нужен ли вам трансфер из Минска и обратно?
              </label>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
                  <input
                    type="radio"
                    name="transfer"
                    value="Нужен туда и обратно"
                    checked={transfer === "Нужен туда и обратно"}
                    onChange={(e) => setTransfer(e.target.value)}
                  />
                  Нужен туда и обратно
                </label>

                <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
                  <input
                    type="radio"
                    name="transfer"
                    value="Нужен только туда"
                    checked={transfer === "Нужен только туда"}
                    onChange={(e) => setTransfer(e.target.value)}
                  />
                  Нужен только туда
                </label>

                <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
                  <input
                    type="radio"
                    name="transfer"
                    value="Нужен только обратно"
                    checked={transfer === "Нужен только обратно"}
                    onChange={(e) => setTransfer(e.target.value)}
                  />
                  Нужен только обратно
                </label>

                <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
                  <input
                    type="radio"
                    name="transfer"
                    value="Не нужен"
                    checked={transfer === "Не нужен"}
                    onChange={(e) => setTransfer(e.target.value)}
                  />
                  Не нужен
                </label>
              </div>
            </div>

            {/* Ночёвка */}
            <div>
              <label className="text-[1.5rem] block text-lg mb-1 font-alexbrush">
                Планируете ли вы оставаться на ночь?
              </label>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
                  <input
                    type="radio"
                    name="overnight"
                    value="Да планирую"
                    checked={overnight === "Да планирую"}
                    onChange={(e) => setOvernight(e.target.value)}
                  />
                  Да, планирую
                </label>

                <label className="flex items-center gap-2 text-[1.3rem] font-alexbrush">
                  <input
                    type="radio"
                    name="overnight"
                    value="Нет не планирую"
                    checked={overnight === "Нет не планирую"}
                    onChange={(e) => setOvernight(e.target.value)}
                  />
                  Нет, не планирую
                </label>
              </div>
            </div>
            <div>
              <label className="text-[1.5rem] block text-lg mb-1 font-alexbrush">
                Есть ли пищевая аллергия (если да, напишите на что)
              </label>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="text-[1.3rem] w-full px-4 py-3 border rounded focus:outline-none focus:border-black font-alexbrush"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Кнопка */}
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition text-[1.5rem] font-alexbrush"
      >
        Подтвердить
      </button>

      {/* Статусы */}
      {status === "loading" && (
        <p className="text-center text-gray-500 font-alexbrush">Отправка...</p>
      )}
      {status === "success" && (
        <p className="text-center text-green-600 font-alexbrush">
          Спасибо! Ваш ответ получен.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-red-600 font-alexbrush">
          Ошибка. Попробуйте ещё раз.
        </p>
      )}
    </form>
  );
}

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function RSVP() {
//   const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

//   async function submit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus("sending");

//     const form = e.currentTarget;
//     const data = {
//       name: form.fullname.value,
//       attending: form.attending.value,
//       guests: form.guests.value,
//       transfer: form.transfer.value,
//       overnight: form.overnight.value,
//     };

//     await fetch("http://localhost:4000/rsvp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     setStatus("sent");
//     form.reset();
//   }

//   return (
//     <section className="min-h-screen bg-white text-black px-8 py-24 flex flex-col justify-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl text-center mb-6 italic"
//       >
//         Подтверждение приглашения
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-center text-gray-600 max-w-md mx-auto mb-12"
//       >
//         Пожалуйста, подтвердите ваше участие до{" "}
//         <span className="text-black">1 апреля 2026</span>, чтобы мы могли всё
//         правильно спланировать.
//       </motion.p>

//       <form onSubmit={submit} className="max-w-md mx-auto space-y-6">
//         <input
//           name="fullname"
//           required
//           placeholder="Имя и фамилия"
//           className="w-full p-3 bg-transparent border border-gray-700 rounded text-black"
//         />

//         <div>
//           <label className="block text-sm text-gray-600 mb-2">
//             Вы сможете присутствовать?
//           </label>
//           <select
//             name="attending"
//             required
//             className="w-full p-3 bg-white border border-gray-700 rounded text-black"
//           >
//             <option value="">Выберите вариант</option>
//             <option value="yes">Да, я буду</option>
//             <option value="no">К сожалению, не смогу</option>
//           </select>
//         </div>

//         <input
//           name="guests"
//           type="number"
//           min="1"
//           required
//           placeholder="Количество гостей (включая вас)"
//           className="w-full p-3 bg-transparent border border-gray-700 rounded text-black"
//         />

//         <div>
//           <label className="block text-sm text-gray-600 mb-2">
//             Нужен ли вам трансфер из Минска и обратно?
//           </label>
//           <select
//             name="transfer"
//             required
//             className="w-full p-3 bg-white border border-gray-700 rounded text-black"
//           >
//             <option value="">Выберите вариант</option>
//             <option value="yes">Да, нужен</option>
//             <option value="no">Нет, не нужен</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm text-gray-600 mb-2">
//             Планируете ли вы оставаться на ночь?
//           </label>
//           <select
//             name="overnight"
//             required
//             className="w-full p-3 bg-white border border-gray-700 rounded text-black"
//           >
//             <option value="">Выберите вариант</option>
//             <option value="yes">Да, планирую</option>
//             <option value="no">Нет, не планирую</option>
//           </select>
//         </div>

//         <button
//           disabled={status === "sending"}
//           className="w-full border border-black py-3 mt-6 hover:bg-white hover:text-black transition"
//         >
//           {status === "sending" ? "Отправка..." : "Отправить"}
//         </button>

//         {status === "sent" && (
//           <p className="text-center text-gray-600 mt-4">
//             Спасибо! Ваш ответ отправлен.
//           </p>
//         )}
//       </form>
//     </section>
//   );
// }
"use client";
import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("да, я буду");
  const [guests, setGuests] = useState(1);
  const [transfer, setTransfer] = useState("Нет не нужен");
  const [overnight, setOvernight] = useState("Нет не планирую");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:4000/rsvp", {
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
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setAttending("да, я буду");
        setGuests(1);
        setTransfer("Нет не нужен");
        setOvernight("Нет не планирую");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl italic text-center mb-4">
        Подтверждение приглашения
      </h2>

      <input
        type="text"
        placeholder="Имя и Фамилия"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded"
      />

      <select
        value={attending}
        onChange={(e) => setAttending(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="да, я буду">Да, я буду</option>
        <option value="к сожалению не смогу">К сожалению, не смогу</option>
      </select>

      <input
        type="number"
        min={1}
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        className="w-full px-4 py-2 border rounded"
      />

      <select
        value={transfer}
        onChange={(e) => setTransfer(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="Да нужен">Да нужен</option>
        <option value="Нет не нужен">Нет не нужен</option>
      </select>

      <select
        value={overnight}
        onChange={(e) => setOvernight(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="Да планирую">Да планирую</option>
        <option value="Нет не планирую">Нет не планирую</option>
      </select>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
      >
        Подтвердить
      </button>

      {status === "loading" && (
        <p className="text-center text-gray-500">Отправка...</p>
      )}
      {status === "success" && (
        <p className="text-center text-green-600">
          Спасибо! Ваш ответ получен.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-red-600">Ошибка. Попробуйте ещё раз.</p>
      )}
    </form>
  );
}

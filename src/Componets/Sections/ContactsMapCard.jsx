import React, { useMemo, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** FRONT-ONLY */
const TG_TOKEN = "8462021874:AAFCWHXq-NGVc2Y3RVRZbNNkysrLCxsEww8";
const TG_CHAT_ID = "-5202828539";

// MAP
const MAP_IFRAME_SRC = "https://www.google.com/maps?q=Tashkent&output=embed";

async function sendTG(text) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        signal: controller.signal,
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text,
          disable_web_page_preview: true,
        }),
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Ожидается в DB:
 * t.contacts = {
 *   addressTitle,
 *   phoneTitle,
 *   hoursTitle,
 *   socialTitle,
 *   formTitle,
 *   namePh,
 *   phonePh,
 *   btn,
 *   fill,
 *   sent,
 *   err,
 *   tgTitle,
 *   tgName,
 *   tgPhone,
 *   tgPage
 * }
 */
export default function ContactsMapCard({ t, loading }) {
  const C = useMemo(() => t?.contacts || {}, [t]);

  const CONTACT = {
    addressLine1: "Yunusobod 12, Kulol Qo‘rg‘on",
    addressLine2: "ko‘chasi 31",
    phone: "78 122 15 05",
    hours: "Пн. – Сб.: 9:00 – 18:00",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      telegram: "https://t.me/",
    },
  };

  const [name, setName] = useState("");
  // ✅ empty so placeholder is visible
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);

  const canSend = useMemo(() => {
    if (!name.trim()) return false;
    // if empty -> fail, else count digits
    if (phone.replace(/\D/g, "").length < 9) return false;
    return true;
  }, [name, phone]);

  const onSubmit = async () => {
    if (!canSend || sending) {
      toast.error(C?.fill || "Введите имя и номер");
      return;
    }

    setSending(true);
    const toastId = toast.loading("...");

    const normalizedPhone = phone.trim().startsWith("+")
      ? phone.trim()
      : `+${phone.trim()}`;

    const msg = [
      C?.tgTitle || "📩 ЗАЯВКА (Контакты)",
      "",
      `${C?.tgName || "Имя"}: ${name.trim()}`,
      `${C?.tgPhone || "Телефон"}: ${normalizedPhone}`,
      "",
      `${C?.tgPage || "Страница"}: ${
        typeof window !== "undefined" ? window.location.href : ""
      }`,
    ].join("\n");

    try {
      await sendTG(msg);
      toast.update(toastId, {
        render: C?.sent || "✅ Отправлено",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });
      setName("");
      setPhone(""); // ✅ keep placeholder visible after reset
    } catch {
      toast.update(toastId, {
        render: C?.err || "❌ Ошибка отправки",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setSending(false);
    }
  };

  if (loading) return null;

  return (
    <section className="relative">
      <ToastContainer position="top-right" newestOnTop pauseOnHover />

      {/* MAP */}
      <div className="relative h-[520px] md:h-[640px] w-full">
        <iframe
          title="map"
          src={MAP_IFRAME_SRC}
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      </div>

      {/* CARD */}
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white shadow-2xl border border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_10px_1fr]">
            {/* LEFT */}
            <div className="p-8 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 text-red-600">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="font-black text-lg">
                      {C?.addressTitle || "Адрес"}
                    </div>
                    <div className="mt-2 text-black/80 leading-relaxed">
                      {CONTACT.addressLine1}
                      <br />
                      {CONTACT.addressLine2}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-red-600">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="font-black text-lg">
                      {C?.phoneTitle || "Телефон"}
                    </div>
                    <div className="mt-2 text-black/80">{CONTACT.phone}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-red-600">
                    <FaRegClock />
                  </div>
                  <div>
                    <div className="font-black text-lg">
                      {C?.hoursTitle || "Часы работы"}
                    </div>
                    <div className="mt-2 text-black/80">{CONTACT.hours}</div>
                  </div>
                </div>

                <div>
                  <div className="font-black text-lg">
                    {C?.socialTitle || "Соцсети"}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={CONTACT.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full bg-red-600 text-white grid place-items-center hover:bg-red-700"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={CONTACT.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full bg-red-600 text-white grid place-items-center hover:bg-red-700"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={CONTACT.socials.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full bg-red-600 text-white grid place-items-center hover:bg-red-700"
                      aria-label="Telegram"
                    >
                      <FaTelegramPlane />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:block bg-red-600" />

            {/* RIGHT */}
            <div className="p-8 md:p-10">
              <div className="text-center font-extrabold text-black/85">
                {C?.formTitle || ""}
              </div>

              <div className="mt-8 space-y-5 max-w-md mx-auto">
                <input
                  className="w-full h-12 bg-neutral-200 px-4 outline-none border border-black/10"
                  placeholder={C?.namePh || "Ваше имя"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="w-full h-12 bg-neutral-200 px-4 outline-none border border-black/10"
                  placeholder={C?.phonePh || "+998"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={sending}
                  className={`w-full h-14 font-black text-white ${
                    sending ? "bg-red-300" : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {sending ? "..." : C?.btn || "Отправить"}
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden h-2 bg-red-600" />
        </div>
      </div>
    </section>
  );
}
 
// ContactsMapCardSimple.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaTelegramPlane } from "react-icons/fa";

/** ⚠️ FRONT-ONLY */
const TG_TOKEN = "8462021874:AAFCWHXq-NGVc2Y3RVRZbNNkysrLCxsEww8";
const TG_CHAT_ID = "-5202828539";

const MAP_IFRAME_SRC =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7367.102660964102!2d69.29442499999998!3d41.38242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIyJzU2LjciTiA2OcKwMTcnMzkuOSJF!5e1!3m2!1sen!2suk!4v1770748861360!5m2!1sen!2suk";

const MAP_OPEN_URL = "https://www.google.com/maps?q=41.38242,69.294425";

const PHONE_DISPLAY = "+998 33 195 15 05";
const PHONE_TEL = "+998331951505";
const TG_USERNAME = "umartoyirov";
const TG_LINK = `https://t.me/${TG_USERNAME}`;

// ---- helpers
function useMapLazyMount({ rootMargin = "300px", fallbackMs = 1500 } = {}) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // if no IO support -> load immediately
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }

    // hard fallback: never hang
    const t = setTimeout(() => setReady(true), fallbackMs);

    const el = ref.current;
    if (!el) {
      // if ref not attached yet, fallback will fire anyway
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );

    io.observe(el);

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [rootMargin, fallbackMs]);

  return [ref, ready];
}

async function sendTG(text) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      signal: controller.signal,
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } finally {
    clearTimeout(timeout);
  }
}

export default function ContactsMapCardSimple({ t, loading }) {
  const C = useMemo(() => t?.contacts || t?.map || {}, [t]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [sending, setSending] = useState(false);

  const canSend = useMemo(() => {
    return name.trim().length > 1 && phone.replace(/\D/g, "").length >= 9;
  }, [name, phone]);

  const [mapRef, mapReady] = useMapLazyMount({ rootMargin: "400px", fallbackMs: 1200 });

  const onSubmit = async () => {
    if (!canSend || sending) {
      toast.error(C?.fill || "Введите имя и номер");
      return;
    }

    setSending(true);
    const toastId = toast.loading(C?.sending || "ОТПРАВКА...");

    const msg = [
      C?.tgTitle || "📩 ЗАЯВКА (Контакты)",
      "",
      `${C?.tgName || "Имя"}: ${name.trim()}`,
      `${C?.tgPhone || "Телефон"}: ${phone.trim()}`,
      "",
      `${C?.tgPage || "Страница"}: ${typeof window !== "undefined" ? window.location.href : ""}`,
      `Дата: ${new Date().toLocaleString()}`,
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
      setPhone("+998");
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
    <section className="bg-neutral-900">
      <div className="flex flex-col">
        {/* MAP */}
        <div ref={mapRef} className="w-full h-[520px] sm:h-[620px] bg-neutral-200">
          {mapReady ? (
            <iframe
              title="map"
              src={MAP_IFRAME_SRC}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              onError={() => toast.error("Map load error")}
            />
          ) : (
            <div className="w-full h-full grid place-items-center text-neutral-700">
              Loading map…
            </div>
          )}
        </div>

        {/* CARD */}
        <div className="mx-auto w-full max-w-6xl px-4 -mt-20 sm:-mt-24 lg:-mt-32">
          <div className="bg-white shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            {/* LEFT */}
            <div className="p-8 sm:p-10">
              <p className="text-neutral-600 mb-5">{C?.small || "Контакты"}</p>

              <h2 className="text-2xl sm:text-4xl font-black uppercase leading-tight text-neutral-900">
                {C?.title || "Куда обращаться"}
              </h2>

              <div className="w-16 h-[3px] bg-red-500 my-7" />

              <div className="space-y-4 text-neutral-800">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-red-600" />
                  <div>
                    <div className="font-bold">{C?.addressTitle || "Адрес"}</div>
                    <div className="text-neutral-700">
                      Yunusobod 12, Kulol Qo‘rg‘on <br /> ko‘chasi 31
                    </div>
                    <a
                      href={MAP_OPEN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 text-red-600 font-semibold hover:underline"
                    >
                      {C?.openMaps || "Открыть в Google Maps"}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1 text-red-600" />
                  <div>
                    <div className="font-bold">{C?.phoneTitle || "Телефон"}</div>
                    <a href={`tel:${PHONE_TEL}`} className="text-red-600 font-semibold hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaRegClock className="mt-1 text-red-600" />
                  <div>
                    <div className="font-bold">{C?.hoursTitle || "Часы работы"}</div>
                    <div className="text-neutral-700">{t?.workHoursText || "Пн. – Сб.: 9:00 – 18:00"}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaTelegramPlane className="mt-1 text-red-600" />
                  <div>
                    <div className="font-bold">{C?.helpTitle || "Telegram"}</div>
                    <a href={TG_LINK} target="_blank" rel="noreferrer" className="text-red-600 font-semibold hover:underline">
                      @{TG_USERNAME}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-neutral-800 p-8 sm:p-10 flex flex-col gap-5">
              <div>
                <div className="text-white/80 text-sm">{C?.formTitle || "Оставьте заявку"}</div>
                <div className="text-white text-2xl font-black mt-1">{C?.cta || t?.cta || "Связаться"}</div>
                <div className="text-white/70 text-sm mt-2">{C?.fill || "Напишите имя и номер — ответим быстро"}</div>
              </div>

              <div>
                <label className="block text-white mb-2">{C?.nameLabel || "Имя:"}</label>
                <input
                  className="w-full h-12 px-4 outline-none input"
                  placeholder={C?.namePh || "Введите имя"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-white mb-2">{C?.phoneLabel || "Телефон:"}</label>
                <input
                  type="tel"
                  className="w-full h-12 px-4 outline-none input"
                  placeholder={C?.phonePh || "+998 ..."}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                onClick={onSubmit}
                disabled={sending}
                className={`h-14 font-bold text-white ${sending ? "bg-red-300" : "bg-red-600 hover:bg-red-700"}`}
              >
                {sending ? (C?.sending || "ОТПРАВКА...") : (C?.btn || "ОТПРАВИТЬ")}
              </button>

              <div className="flex gap-3">
                <a
                  href={MAP_OPEN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-12 grid place-items-center bg-white/10 text-white hover:bg-white/15"
                >
                  {C?.mapsBtn || "Google Maps"}
                </a>
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-12 grid place-items-center bg-white/10 text-white hover:bg-white/15"
                >
                  {C?.tgBtn || "Telegram"}
                </a>
              </div>

              <p className="text-xs text-white/50">{C?.sentHint || "Нажимая кнопку, вы соглашаетесь на обработку данных"}</p>
            </div>
          </div>
        </div>

        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}

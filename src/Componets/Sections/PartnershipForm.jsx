import React, { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ⚠️ FRONT-ONLY */
const TG_TOKEN = "8462021874:AAFCWHXq-NGVc2Y3RVRZbNNkysrLCxsEww8";
const TG_CHAT_ID = "-5202828539";

function buildMessage({ name, phone }, P) {
  const lines = [
    P?.tgTitle || "🤝 ЗАЯВКА НА ПАРТНЁРСТВО",
    "",
    `${P?.tgName || "Имя"}: ${name}`,
    `${P?.tgPhone || "Телефон"}: ${phone}`,
    "",
    `${P?.tgPage || "Страница"}: ${typeof window !== "undefined" ? window.location.href : ""}`,
    `Дата: ${new Date().toLocaleString()}`,
  ];
  return lines.join("\n");
}

async function sendToTG(text) {
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

/**
 * Использование:
 * <PartnershipForm t={t} loading={loading} />
 * где t = site.i18n[lang]
 */
export default function PartnershipForm({ t, loading }) {
  // ✅ перевод из DB
  const P = useMemo(() => t?.partner || {}, [t]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [sending, setSending] = useState(false);

  const canSend = useMemo(() => {
    return name.trim().length > 1 && phone.replace(/\D/g, "").length >= 9;
  }, [name, phone]);

  const onSubmit = async () => {
    if (!canSend || sending) {
      toast.error(P?.fill || "Введите имя и номер");
      return;
    }

    setSending(true);
    const toastId = toast.loading(P?.sending || "ОТПРАВКА...");

    try {
      await sendToTG(buildMessage({ name: name.trim(), phone: phone.trim() }, P));
      toast.update(toastId, {
        render: P?.sent || "✅ Заявка отправлена, мы свяжемся с вами",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });
      setName("");
      setPhone("+998");
    } catch {
      toast.update(toastId, {
        render: P?.err || "❌ Ошибка отправки",
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
    <section className="bg-neutral-100 py-16">
      <ToastContainer position="top-right" newestOnTop pauseOnHover />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl">
          {/* LEFT */}
          <div className="p-10 md:p-14">
            <p className="text-neutral-600 mb-6">
              {P?.small || ""}
            </p>

            <h2 className="text-2xl md:text-4xl font-black uppercase leading-tight text-neutral-900">
              {P?.title || ""}
            </h2>

            <div className="w-16 h-[3px] bg-red-500 my-8" />

            <p className="text-neutral-700">
              {P?.note || ""}
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-neutral-800 p-10 md:p-14 flex flex-col gap-6">
            <div>
              <label className="block text-white mb-2">
                {P?.nameLabel || "Имя:"}
              </label>
              <input
                type="text"
                placeholder={P?.namePh || "Введите имя"}
                className="w-full h-12 px-4 outline-none input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                {P?.phoneLabel || "Телефон:"}
              </label>
              <input
                type="tel"
                placeholder={P?.phonePh || "(___) ___-__-__"}
                className="w-full h-12 px-4 outline-none input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              onClick={onSubmit}
              disabled={sending}
              className={`mt-4 h-14 font-bold text-white ${
                sending ? "bg-red-300" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {sending ? (P?.sending || "ОТПРАВКА...") : (P?.btn || "ОТПРАВИТЬ")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

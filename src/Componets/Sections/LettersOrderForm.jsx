import React, { useEffect, useMemo, useState } from "react";
import { FiMonitor, FiShield, FiType } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ⚠️ FRONT-ONLY: токен будет в коде */
const TG_TOKEN = "8462021874:AAFCWHXq-NGVc2Y3RVRZbNNkysrLCxsEww8";
const TG_CHAT_ID = "-5202828539";

async function sendTG(text, attempt = 1) {
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
    return true;
  } catch (e) {
    if (attempt < 2) return sendTG(text, attempt + 1);
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}

function formatMsg(payload, L, lightingLabel) {
  const kindLabel =
    payload.kind === "acryl" ? (L?.tgTypeA || "Акриловые") : (L?.tgTypeN || "Неоновые");
  const cm = L?.cm || "см";

  return [
    L?.tgTitle || "🟥 ЗАЯВКА: ОБЪЁМНЫЕ БУКВЫ",
    "",
    `${L?.tgType || "Тип"}: ${kindLabel}`,
    `${L?.tgLighting || "Подсветка"}: ${lightingLabel || payload.lighting || ""}`,
    `${L?.tgColor || "Цвет"}: ${payload.palette}`,
    `${L?.tgHeight || "Высота"}: ${payload.height} ${cm}`,
    `${L?.tgWidth || "Ширина"}: ${payload.width} ${cm}`,
    "",
    `${L?.tgName || "Имя"}: ${payload.name}`,
    `${L?.tgPhone || "Телефон"}: ${payload.phone}`,
    "",
    `${L?.tgPage || "Страница"}: ${typeof window !== "undefined" ? window.location.href : ""}`,
  ].join("\n");
}

/**
 * EXPECTED DB SHAPE:
 * t.letters.lightingOptions = [
 *   { id: "logo", label: "..." },
 *   { id: "front", label: "..." },
 *   { id: "back", label: "..." }
 * ]
 */
export default function LettersCalculator({ t, loading }) {
  // ✅ translation block from DB
  const L = useMemo(() => t?.letters || {}, [t]);

  const lightingOptions = useMemo(() => {
    return Array.isArray(L?.lightingOptions) ? L.lightingOptions : [];
  }, [L]);

  const [kind, setKind] = useState("neon");
  const [palette, setPalette] = useState("#63c000");
  const [height, setHeight] = useState(60);
  const [width, setWidth] = useState(60);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [sending, setSending] = useState(false);

  // ✅ store lighting by ID (stable across languages)
  const [lightingId, setLightingId] = useState("");

  // set default lightingId when translations arrive / language changes
  useEffect(() => {
    if (!lightingId && lightingOptions.length) {
      setLightingId(lightingOptions[0].id);
    }
  }, [lightingId, lightingOptions]);

  const lightingLabel = useMemo(() => {
    return lightingOptions.find((o) => o.id === lightingId)?.label || "";
  }, [lightingOptions, lightingId]);

  const canSend = useMemo(() => {
    if (!name.trim()) return false;
    if (phone.replace(/\s/g, "").length < 7) return false;
    return true;
  }, [name, phone]);

  const onSubmit = async () => {
    if (!canSend || sending) {
      toast.error(L?.fill || "Заполните имя и телефон");
      return;
    }

    setSending(true);
    const toastId = toast.loading(L?.sending || "ОТПРАВКА...");

    const payload = {
      kind,
      lighting: lightingLabel, // send label to TG
      palette,
      height,
      width,
      name: name.trim(),
      phone: phone.trim(),
    };

    try {
      await sendTG(formatMsg(payload, L, lightingLabel));
      toast.update(toastId, {
        render: L?.sent || "✅ Отправлено! Мы свяжемся с вами.",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });
      setName("");
      setPhone("+998");
      // optional: keep selected lightingId
    } catch {
      toast.update(toastId, {
        render: L?.err || "❌ Ошибка отправки",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setSending(false);
    }
  };

  if (loading) return null;

  const cm = L?.cm || "см";

  return (
    <section className="bg-white">
      <ToastContainer position="top-right" newestOnTop pauseOnHover />

      <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              {L?.title || "ОБЪЁМНЫЕ БУКВЫ"}
            </h1>

            <h2 className="mt-8 text-xl md:text-3xl font-black uppercase leading-tight whitespace-pre-line">
              {L?.subtitle || ""}
            </h2>

            <div className="mt-12 space-y-10">
              <div className="flex items-center gap-6">
                <FiMonitor className="w-12 h-12 text-red-500" />
                <p className="text-base md:text-lg text-neutral-700">{L?.p1 || ""}</p>
              </div>

              <div className="flex items-center gap-6">
                <FiShield className="w-12 h-12 text-red-500" />
                <p className="text-base md:text-lg text-neutral-700">{L?.p2 || ""}</p>
              </div>

              <div className="flex items-center gap-6">
                <FiType className="w-12 h-12 text-red-500" />
                <p className="text-base md:text-lg text-neutral-700">{L?.p3 || ""}</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => setKind("acryl")}
                className={`btn rounded-none h-14 ${
                  kind === "acryl"
                    ? "btn-outline border-red-500 text-red-500"
                    : "btn-outline border-neutral-300"
                }`}
              >
                {L?.tabA || "Акриловые"}
              </button>

              <button
                onClick={() => setKind("neon")}
                className={`btn rounded-none h-14 ${
                  kind === "neon" ? "bg-red-500 text-white" : "btn-outline border-neutral-300"
                }`}
              >
                {L?.tabN || "Неоновые"}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="label px-0">{L?.lightingLabel || "Тип подсветки"}</label>

                <select
                  className="select select-bordered w-full rounded-none"
                  value={lightingId}
                  onChange={(e) => setLightingId(e.target.value)}
                >
                  {lightingOptions.length ? (
                    lightingOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))
                  ) : (
                    <>
                      <option value="logo">Буквенная вывеска с логотипом</option>
                      <option value="front">Лицевая подсветка</option>
                      <option value="back">Контражурная подсветка</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="label px-0">{L?.colorLabel || "Цвет"}</label>
                <div className="border h-12">
                  <input
                    type="color"
                    value={palette}
                    onChange={(e) => setPalette(e.target.value)}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex justify-between">
                  <span>{L?.heightLabel || "Высота"}</span>
                  <span className="text-red-500 font-bold">
                    {height} {cm}
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={120}
                  value={height}
                  onChange={(e) => setHeight(+e.target.value)}
                  className="range range-error"
                />
              </div>

              <div className="md:col-span-2">
                <div className="flex justify-between">
                  <span>{L?.widthLabel || "Ширина"}</span>
                  <span className="text-red-500 font-bold">
                    {width} {cm}
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={120}
                  value={width}
                  onChange={(e) => setWidth(+e.target.value)}
                  className="range range-error"
                />
              </div>

              <input
                className="input input-bordered rounded-none"
                placeholder={L?.namePh || "Ваше имя"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input input-bordered rounded-none"
                placeholder={L?.phonePh || "+998"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <div className="md:col-span-2 flex justify-end">
                <button
                  onClick={onSubmit}
                  disabled={sending}
                  className="btn rounded-none px-12 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  {sending ? (L?.sending || "ОТПРАВКА...") : (L?.btn || "ЗАКАЗАТЬ")}
                </button>
              </div>
            </div>

            <p className="mt-6 text-xs text-neutral-400">{L?.agree || ""}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

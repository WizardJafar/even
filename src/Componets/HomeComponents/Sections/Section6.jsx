import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import teaStation from '../../../assets/teaStation.png'
import maska from '../../../assets/maska.png'
import vaza from '../../../assets/vaza.png'
import fen from '../../../assets/fen.png'
import hand from '../../../assets/hand.png'
import ochki from '../../../assets/ochki.png'
import maskawomen from '../../../assets/maskawomen.png'
import ochki2 from '../../../assets/ochki2.png'
import maskaOq from '../../../assets/maskaOq.png'
import naushnik from '../../../assets/naushnik.png'
import nos from '../../../assets/nos.png'
import cheto from '../../../assets/cheto.png'
import naushniknax from '../../../assets/naushniknax.png'
import hydrogenium from '../../../assets/hydrogenium.png'
import capsula from '../../../assets/capsula.png'

export default function Section6() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "+998",
  });

  const products = [
    {
      id: 1,
      title: "SUISOMED TS BTL",
      subtitle: "Vodorodli choy stansiyasi",
      image: teaStation,
      description: "SuisoMed TS BTL vodorodli choy stansiyasi bilan choy ichish marosimingizni mutlaqo yangi bosqichga olib chiqing. Ushbu yuqori texnologiyali uskuna sizni molekulyar vodorod bilan boyitilgan suv bilan ta’minlaydi va sevimli ichimliklaringizning foydasini sezilarli darajada oshiradi.Imkoniyatni qo‘ldan boy bermang va choyga bo‘lgan yondashuvingizni o‘zgartiring! SuisoMed TS BTL vodorodli choy stansiyasi bilan har bir qultum nafaqat lazzat, balki sog‘lig‘ingizga qo‘yilgan sarmoyaga aylanadi. Oddiy choy ichishni o‘zingiz va yaqinlaringiz uchun g‘amxo‘rlik lahzasiga aylantiring." // umumiy tavsif
    },
    {
      id: 2,
      title: "LED MASKA",
      subtitle: "Uch diapazonli yuz maskasi",
      image: maska,
      description: " Teringa parvarish qilishda tengsiz natijalarni ta’minlaydigan innovatsion uch diapazonli LED maska.Maskadagi har bir rang o‘ziga xos foydali ta’sirga ega bo‘lib, muolajani aynan sizning ehtiyojlaringizga mos ravishda tanlash imkonini beradi.Muolaja davomiyligi: 30 daqiqa 3 ta rang Har bir seans atigi 30 daqiqa davom etadi va har bir rang uchun 10 daqiqadan iborat uch bosqichda amalga oshiriladi.Shu tariqa, ko‘p vaqt sarflamasdan teringizga samarali g‘amxo‘rlik qilishingiz mumkin. 1. Qizil nur Muolaja faol terapiyadan — qizil nurdan boshlanadi.U ultrabinafsha nurlar bilan uyg‘unlashib, kuchli ta’sir hosil qiladi.Ushbu kombinatsiya mikrotsirkulyatsiyani sezilarli darajada yaxshilaydi va hujayralar metabolizmini tezlashtiradi.Natijada teringiz yanada tarang, yorqin va sog‘lom ko‘rinishga ega bo‘ladi. 2. Ko‘k nur Keyingi bosqichda yallig‘lanishga qarshi kuchli ta’siri bilan mashhur bo‘lgan ko‘k nur qo‘llaniladi.Qisqa to‘lqinlar terining yuzaki qatlamlariga kirib, yallig‘lanish jarayonlariga samarali qarshi kurashadi.Ushbu bosqich muammoli teri egalari orasida ayniqsa mashhur bo‘lib, akne va turli toshmalarni kamaytirishga, dermani mustahkamlab tinchlantirishga yordam beradi. 3. Sariq nur Seans sariq rang bilan yakunlanadi — bu kollagen sintezini faollashtiruvchi bosqichdir.Sariq nur ta’sirida kollagen va elastin ishlab chiqarilishi rag‘batlantiriladi, bu esa teri tuzilmasini sezilarli darajada yaxshilaydi.Siz teringizning yanada silliq bo‘lib, yuz konturlari aniqroq bo‘lib borayotganini sezasiz. Uch diapazonli LED maska — bu shunchaki muolaja emas, balki teringizni sog‘lomlik va tabiiy yorqinlik bilan ta’minlaydigan to‘liq go‘zallik marosimidir."
    },
    {
      id: 3,
      title: "SUISOMED X3",
      subtitle: "Vodorod dekantri",
      image: vaza,
      description: "Kuchli hamda yengil alkogolli ichimliklarni vodorod bilan boyitishga mo‘ljallangan dunyodagi ilk noyob qurilma bo‘lib, u sevimli ichimliklaringizning ta’mi va hidini tubdan o‘zgartiradi, ularni yangi darajaga olib chiqadi hamda yanada boy va nafis ta’m hissiyotlarini yaratadi; 800 ml hajmga ega dekantor uy sharoitida ham, professional bar va restoranlarda ham foydalanish uchun mos bo‘lib, noyob boyitish texnologiyasi 2000 PPB dan ortiq ko‘rsatkichni ta’minlaydi va ichimlik ta’mini chuqur hamda uyg‘un tarzda o‘zgartiradi; vodorodli dekantor alkogolli ichimliklarni metanol va formaldegid kabi zararli birikmalardan tozalashga yordam beradi, bu esa yanada sof va xavfsiz mahsulotdan bahramand bo‘lish imkonini yaratadi; qulay simsiz quvvatlash tizimi va zamonaviy, nafis dizayn esa qurilmadan maksimal qulaylik bilan foydalanish hamda har qanday interyerga mukammal moslashishni ta’minlaydi." // umumiy tavsif
    },
    {
      id: 4,
      title: "SuisoMed SMHS-01",
      subtitle: "Aromaterapiyali vodorodli dush boshi",
      image: fen,
      description: "Aromaterapiya funksiyasiga ega vodorodli dush lyevkasi suv muolajalariga bo‘lgan tasavvuringizni butunlay o‘zgartiradi, ilg‘or texnologiyalarni funksional yechimlar bilan uyg‘unlashtirgan ushbu qurilma hammomingizning ajralmas qismiga aylanib, nafaqat yuqori darajadagi qulaylik, balki sog‘liq uchun ham sezilarli foyda taqdim etadi; vodorodli dush lyevkasi yaqinlaringiz va oila a’zolaringiz uchun a’lo darajadagi sovg‘a bo‘lib, hayot sifatini yaxshilash yo‘lidagi ilk qadamga aylanishi hamda terining yoshga bog‘liq o‘zgarishlarini oldini olish strategiyasida muhim element bo‘lib xizmat qiladi; o‘zingizga individual parvarishning kelajagiga nazar tashlab, go‘zallik va yoshlikning yangi ufqlarini kashf eting." // umumiy tavsif
    },
    {
      id: 5,
      title: "Kokteyl dispenser",
      subtitle: "Vodorodli ichimliklar tayyorlash",
      image: hand,
      description: "Kokteyllar va vodorodli ichimliklarni tayyorlash uchun mo‘ljallangan dispenser bo‘lib, ichimliklarni tez va qulay tarzda tayyorlash imkonini beradi, molekulyar vodorod bilan boyitish orqali ularning ta’mi va sifatini yangi bosqichga olib chiqadi hamda uy sharoitida, bar va restoranlarda foydalanish uchun ideal yechim hisoblanadi." // umumiy tavsif
    },
    {
      id: 6,
      title: "Ochki",
      subtitle: "",
      image: ochki,
      description: "Vodorodli terapiya uchun ko‘zoynaklar, vodorodni yuqori bosim ostida (ko‘zoynakning zich joylashishi tufayli) yetkazib beradi; vodorod kornea orqali erkin o‘tib, ko‘zning barcha tuzilmalariga — retinaga, shisha tanaga, linza va optik nervga ta’sir ko‘rsatadi." // umumiy tavsif
    },
    {
      id: 7,
      title: "Maska",
      subtitle: "",
      image: maskawomen,
      description: "Vodorod maskasiga vodorod silikonli muhr orqali tashqi muhitdan to‘liq izolatsiya qilingan holda yetkaziladi; ichki isitish elementi va bug‘ generatori tomonidan ta’minlangan issiqlik va namlik vodorodning teri qatlamlariga kirish qobiliyatini oshiradi, yuz terisi tuzilmalarini tiklaydi, mikrotsirkulyatsiyani yaxshilaydi, metabolizmni rag‘batlantiradi, hujayralarni yoshartiradi va namlaydi; SPA maskada burun portali orqali tashqi havoni olish imkoniyati mavjud bo‘lib, maska ichidagi vodorodning maksimal kontsentratsiyasini ta’minlaydi." // umumiy tavsif
    },
    {
      id: 8,
      title: "Ochki",
      subtitle: "",
      image: ochki2,
      description: "Vodorodli terapiya uchun ko‘zoynaklar, vodorodni yuqori bosim ostida (ko‘zoynakning zich joylashishi tufayli) yetkazib beradi; vodorod kornea orqali erkin o‘tib, ko‘zning barcha tuzilmalariga — retinaga, shisha tanaga, linza, optik nerv va boshqa qismlarga ta’sir ko‘rsatadi va ko‘zning tomir qobig‘i orqali tizimli qon aylanishiga ham kiradi." // umumiy tavsif
    },
    {
      id: 9,
      title: "SuisoMed СAPP-01",
      subtitle: "Vodorod terapiyasi uchun SPA niqobi",
      image: maskaOq,
      description: "Go‘zallik olamida noyob yechimni kashf eting — vodorodli terapiya uchun SPA maska. Ushbu kosmetik asar ilg‘or kosmetologiya usullarini birlashtiradi: vodorod terapiyasi, karboksiterapiya va ozonterapiya. Terini chuqur yoshartirish va tiklash olamiga sho‘ng‘ing, teridagi kamchiliklarni oson va ishonch bilan bartaraf eting. Maskaning 30–60 daraja oralig‘idagi maxsus isitish tizimi teringizga foydali ta’sir ko‘rsatib, teshikchalarni ochadi, namlik beradi va har bir hujayrani yoshartiradi. Ushbu maskaning afzalligi — o‘rnatilgan bug‘ generatori orqali mezoterapiya preparatlarini qo‘shish imkoniyati, bu muolajani yanada samarali qiladi. Noyob burun portali preparatlarning nafas yo‘llariga tushishini oldini olib, xavfsizligingizni ta’minlaydi. Har bir bosqichni qulay pult yordamida nazorat qiling: bug‘ haroratini, muolaja vaqtini va bug‘ hosil bo‘lish intensivligini sozlang. SPA maska — teringizni mukammallikka va uzoq muddatli go‘zallikka yetaklovchi yo‘l." // umumiy tavsif
    },
    {
      id: 10,
      title: "Naushniki",
      subtitle: "",
      image: naushnik,
      description: "Vodorod yuqori bosim ostida (naushnik ichki yostiqchalari zich joylashishi tufayli) yetkaziladi; vodorod tashqi eshitish kanali va quloq parda orqali o‘tib, eshitish va muvozanat organining barcha tuzilmalariga kiradi." // umumiy tavsif
    },
    {
      id: 11,
      title: "Burun kanalari tozalash",
      subtitle: "",
      image: nos,
      description: "Vodorodli terapiya uchun 1,5 m uzunlikdagi burun kanulyasi abzorber bilan ta’minlangan; vodorod nafas yo‘llari orqali o‘pkalarga yetkaziladi, bu yerda alveolalarda bosim gradienti orqali alveolyar membranalardan o‘tib, kislorodga o‘xshash tarzda tizimli qon aylanishiga kiradi. Qonga tushgan vodorod tanaga tarqalib, hujayralararo makon va hujayralarga kirib, o‘z ta’sirini ko‘rsatadi. " // umumiy tavsif
    },
    {
      id: 12,
      title: "Mobil inhaler Hydrogenium MHG 18",
      subtitle: "Nano vodorod generatori",
      image: cheto,
      description: "Noyob texnologiya tufayli ushbu generator vodorodli inhalyatsiyalarni elektr tarmog‘i bo‘lmagan joylarda ham amalga oshirish imkonini beradi — mashinada, samolyotda, hatto Oyda ham! 80 ml vodorodli inhalyatsiyalar muntazam qo‘llanilganda ajoyib natijalar berib, sizga faol uzoq umr va energiya baxsh etishi mumkin; Hydrogenium MHG 18 inhalyatori zamonaviy sensorli ekran bilan jihozlangan bo‘lib, texnologik va qulay ishlatilishini ta’minlaydi, hatto intensiv mashqlar vaqtida ham; mashqlar davomida vodorodli inhalyatsiyalar aerobik samaradorlikni oshiradi va jarohat olish xavfini kamaytirishga yordam beradi; sog‘ligingizni unutmang — Hydrogenium MHG 18 bilan siz 18000 PPB gacha vodorod bilan boyitilgan suvni iste’mol qilishingiz mumkin, tadqiqotlar shuni ko‘rsatdiki, bunday boyitish umumiy farovonlikni yaxshilashga xizmat qiladi; o‘zingiz va yaqinlaringiz uchun sovg‘a bering, hamkorlaringizga uzoq muddatli hamkorlikka intilishingizni namoyish eting; Hydrogenium MHG 18 — g‘amxo‘rlik va innovatsiya ramzi!" // umumiy tavsif
    },
    {
      id: 13,
      title: "SuisoMed-1200 PRO",
      subtitle: "Vodorod ingalyatorlari",
      image: naushniknax,
      description: "SuisoMed-1200 PRO vodorodli inhalyator — vodorod terapiyasi va inhalyatsiya jarayonlari uchun innovatsion uskuna bo‘lib, vodorod ishlab chiqarish quvvati 1200 ml/min, kislorod quvvati 600 ml/min va vodorod tozaligi 99,99% ni ta’minlaydi; yuqori oqimli inhalyator ikki vodorod chiqishi bilan jihozlangan bo‘lib, portativ dizayni orqali sog‘liqni saqlash markazlari, sport klublari yoki uy sharoitida samarali foydalanish imkonini beradi; SuisoMed-1200 PRO a’lo narx/sifat nisbatini taklif qiladi, 24 soatlik ishlashga mo‘ljallangan va klinik tadqiqotlarga asoslangan molekulyar vodorod terapiyasi xavfsiz va samarali bo‘lishini kafolatlaydi; ushbu inhalyator hayot sifatini va sog‘likni yaxshilash uchun ishonchli hamkor bo‘lib, 34 x 29 x 42 sm o‘lchamga ega va sog‘ligingizga kelajakdagi sarmoya sifatida xizmat qiladi." // umumiy tavsif
    },
    {
      id: 14,
      title: "Hydrogenium 6000",
      subtitle: "4000 ml/min quvvatga ega vodorod ingalyatorlar",
      image: hydrogenium,
      description: "Hydrogenium 6000 kompressorli inhalyator — vodorod ishlab chiqarish quvvati 4000 ml/min, vodorod tozaligi 99,99% bo‘lgan uskuna; u tibbiyot muassasalari va sanatoriy-kurort tashkilotlari uchun mo‘ljallangan va ro‘yxatdan o‘tgan; qurilma juft elektroliz bo‘limi bilan jihozlangan bo‘lib, 4000 ml vodorod ishlab chiqaradi va oqimni 1000, 1500 yoki 2000 ml/min darajalarida sozlash imkonini beradi." // umumiy tavsif
    },
    {
      id: 15,
      title: "Hydrogenium 4200",
      subtitle: "2800 ml/min quvvatga ega vodorod ingalyatorlar",
      image: hydrogenium,
      description: "Hydrogenium 4200 kompressorli inhalyator — vodorod ishlab chiqarish quvvati 2800 ml/min, vodorod tozaligi 99,99% bo‘lgan uskuna; u tibbiyot muassasalari va sanatoriy-kurort tashkilotlari uchun mo‘ljallangan va ro‘yxatdan o‘tgan; qurilma bitta elektroliz bo‘limi bilan jihozlangan bo‘lib, 2800 ml vodorod ishlab chiqaradi va oqimni 925, 1850 yoki 2800 ml/min darajalarida sozlash mumkin." // umumiy tavsif
    },
    {
      id: 16,
      title: "Hydrogenium SPA H 01",
      subtitle: "Multimodal reabilitatsiya uchun gorizontal tizim",
      image: capsula,
      description: "Hydrogenium SPA H 01 tizimi — bu vodorodli kapsula bo‘lib, teri orqali va inhalyatsiya orqali vodorod berish, issiqlik terapiyasi, aroma-, fito- va xromo terapiya bilan birlashtirilgan; tibbiy uskuna kodi 326 010 bo‘lib, 788n va 878n buyruqlariga kiradi va barcha fizioterapiya bo‘limlari jihoz standartlariga mos keladi; molekulyar vodorod generatori sifatida Hydrogenium 4200/6000/8400 kompressorli inhalyatorlari ishlatiladi; kapsulada muolajalar loyqa va dengiz o‘simliklari bilan o‘rash, preparatlar qo‘llash bilan birlashtirilishi mumkin; noyob imkoniyat — Hydrogenium NAD+ gelidan NAD+ terapiyasi; o‘rnatmaning afzalliklari: muolaja samarali davomiyligi 20 daqiqa, o‘tish quvvati soatda 2 bemor, bir nechta terapevtik usullarni birlashtirish orqali reabilitatsiya sifatini oshirish, foydalanish va texnik xizmat ko‘rsatishning qulayligi, bu esa uni har qanday darajadagi fizioterapiya bo‘limlari uchun ideal qiladi." // umumiy tavsif
    },
    {
      id: 17,
      title: "Hydrogenium 8400",
      subtitle: "5600 ml/min quvvatga ega vodorod ingalyatorlar",
      image: hydrogenium,
      description: "Hydrogenium 8400 kompressorli inhalyator — vodorod ishlab chiqarish quvvati 5600 ml/min, vodorod tozaligi 99,99% bo‘lgan uskuna; u tibbiyot muassasalari va sanatoriy-kurort tashkilotlari uchun mo‘ljallangan va ro‘yxatdan o‘tgan; qurilma juft elektroliz bo‘limi bilan jihozlangan bo‘lib, 5600 ml vodorod ishlab chiqaradi va oqimni 925, 1850 yoki 2800 ml/min darajalarida sozlash mumkin." // umumiy tavsif
    },
    {
      id: 18,
      title: "Hydrogenium SPA V 01",
      subtitle: "Multimodal reabilitatsiya uchun vertikal tizim",
      image: capsula,
      description: "Hydrogenium SPA V 01 tizimi — vodorodli kapsula bo‘lib, teri orqali va inhalyatsiya orqali vodorod berish, issiqlik terapiyasi, aroma-, fito- va xromo terapiya bilan birlashtirilgan; tibbiy uskuna kodi 326 010 bo‘lib, 788n va 878n buyruqlariga kiradi va barcha fizioterapiya bo‘limlari jihoz standartlariga mos keladi; molekulyar vodorod generatori sifatida Hydrogenium 4200/6000/8400 kompressorli inhalyatorlari ishlatiladi; kapsulada muolajalar loyqa va dengiz o‘simliklari bilan o‘rash, preparatlar qo‘llash bilan birlashtirilishi mumkin; noyob imkoniyat — Hydrogenium NAD+ gelidan NAD+ terapiyasi; o‘rnatmaning afzalliklari: muolaja samarali davomiyligi 20 daqiqa, o‘tish quvvati soatda 2 bemor, bir nechta terapevtik usullarni birlashtirish orqali reabilitatsiya sifatini oshirish, foydalanish va texnik xizmat ko‘rsatishning qulayligi, bu esa uni har qanday darajadagi fizioterapiya bo‘limlari uchun ideal qiladi.." // umumiy tavsif
    }
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!value.startsWith("+998")) return;
      if (!/^\+998\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const submitOrder = async () => {
    if (!formData.firstName || !formData.lastName || formData.phone.length < 13) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    try {
      const TOKEN = "8559354625:AAFOExAj1BTe2tR2A4O8r_htOMl0ATtPk60";
      const CHAT_ID = "-5083792285";

      const message = `
🛒 <b>Yangi buyurtma</b>

📦 <b>Mahsulot:</b> ${orderProduct.title}
📝 <b>Tavsif:</b> ${orderProduct.subtitle}

👤 <b>Ism:</b> ${formData.firstName}
👤 <b>Familiya:</b> ${formData.lastName}
📞 <b>Telefon:</b> ${formData.phone}
      `;

      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });

      toast.success("Sizning arizangiz yuborildi, tez orada javob kuting.");
      setOrderProduct(null);
      setFormData({ firstName: "", lastName: "", phone: "+998" });
    } catch {
      toast.error("Xatolik yuz berdi. Qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <section className="py-20 px-6" id="catalog">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-[#4a86ad] rounded-full text-sm font-semibold">
                Mahsulotlar
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4a86ad] to-[#5a96bd] bg-clip-text text-transparent">
              Vodorod uskunalari katalogi
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Zamonaviy texnologiyalar asosida ishlab chiqarilgan yuqori sifatli mahsulotlar
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full  object-coverv bg-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{product.title}</h3>
                    <p className="text-[#4a86ad] text-sm sm:text-base font-medium tracking-wide uppercase">{product.subtitle}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <button
                      className="flex-1 px-4 py-3 sm:py-4 rounded-xl text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95 bg-gradient-to-r from-[#4a86ad] to-[#5a96bd]"
                      onClick={() => setSelectedProduct(product)}
                    >
                      TAVSIF
                    </button>

                    <button
                      className="flex-1 px-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold border-2 border-[#4a86ad] text-[#4a86ad] transition-all duration-300 hover:bg-[#4a86ad] hover:text-white hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
                      onClick={() => setOrderProduct(product)}
                    >
                      BUYURTMA
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-3xl w-full p-6 rounded-xl flex flex-col">
            {/* Заголовок */}
            <div className="mb-6 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-snug">
                {selectedProduct.title}
              </h3>
              <p className="text-[#2a6dad] font-semibold text-lg sm:text-xl uppercase tracking-wide">
                {selectedProduct.subtitle}
              </p>
            </div>

            {/* Описание */}
            <div className="mb-6 text-left ">
              <p className="text-gray-900 text-lg sm:text-xl leading-relaxed font-normal">
                {selectedProduct.description}
              </p>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 px-8 py-5 rounded-xl text-white text-xl sm:text-2xl font-bold bg-[#4a86ad] hover:bg-[#5a96bd] transition-colors duration-300"
                onClick={() => {
                  setSelectedProduct(null);
                  setOrderProduct(selectedProduct);
                }}
              >
                BUYURTMA BERISH
              </button>

              <button
                className="flex-1 px-8 py-5 rounded-xl text-xl sm:text-2xl font-bold border-2 border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setSelectedProduct(null)}
              >
                Yopish
              </button>
            </div>
          </div>

          <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}></div>
        </dialog>
      )}



      {/* Order Form Modal */}
      {orderProduct && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-xl w-full max-h-[90vh] p-0 rounded-3xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#4a86ad] to-[#5a96bd] p-6 sm:p-10 text-white flex-shrink-0">
              <h3 className="text-2xl sm:text-4xl font-bold mb-2">Buyurtma berish</h3>
              <p className="text-blue-100 text-base sm:text-lg">{orderProduct.title}</p>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 flex flex-col">
              <div className="space-y-5 mb-6">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">Ism</label>
                  <input
                    name="firstName"
                    placeholder="Ismingizni kiriting"
                    className="input input-bordered w-full rounded-xl border-2 focus:border-[#4a86ad] focus:outline-none text-base h-12 sm:h-14"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">Familiya</label>
                  <input
                    name="lastName"
                    placeholder="Familiyangizni kiriting"
                    className="input input-bordered w-full rounded-xl border-2 focus:border-[#4a86ad] focus:outline-none text-base h-12 sm:h-14"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">Telefon raqam</label>
                  <input
                    name="phone"
                    placeholder="+998 XX XXX XX XX"
                    className="input input-bordered w-full rounded-xl border-2 focus:border-[#4a86ad] focus:outline-none text-base h-12 sm:h-14"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4 mt-auto">
                <button
                  className="w-full px-6 py-4 rounded-xl text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95 bg-gradient-to-r from-[#4a86ad] to-[#5a96bd]"
                  onClick={submitOrder}
                >
                  BUYURTMA BERISH
                </button>

                <button
                  className="w-full px-6 py-4 rounded-xl text-base sm:text-lg font-semibold border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 active:scale-95"
                  onClick={() => setOrderProduct(null)}
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setOrderProduct(null)}></div>
        </dialog>
      )}
    </div>


  );
}

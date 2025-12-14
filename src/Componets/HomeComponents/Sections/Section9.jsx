export default function Section9() {
    const results = [
        { num: 1, title: "Antioksidant ta’siri", desc: "Oksidativ stress va uning natijasidagi zararlanishlarga (DNK, oqsillar va lipidlar shikastlanishi) tabiiy qarshi turish." },
        { num: 2, title: "Yoshartirish jarayonlarini ishga tushirish", desc: "Reparatsiya, regeneratsiya va yoshartirish jarayonlarini faollashtirish" },
        { num: 3, title: "Antifibroz ta’siri", desc: "Fibrozga qarshi kurash" },
        { num: 4, title: "Tiklanish", desc: "Shikastlangan hujayra tuzilmalarini (shu jumladan miya, jigar, teri hujayralari va boshq.) tiklash" },
        { num: 5, title: "Hujayralarni faollashtirish", desc: "Apoptoz jarayonlarini faollashtirish — «qarigan» hujayralarga qarshi kurash" },
        { num: 6, title: "Mikrosirkulyatsiyani yaxshilash", desc: "Peroksinitritni zararsizlantirish va aerob energiya ishlab chiqarishni faollashtirish natijasida mikrosirkulyatsiyani global yaxshilash" },
        { num: 7, title: "Chidamlilikni oshirish", desc: "Jismoniy yuklamalarga chidamlilikni oshirish" },
        { num: 8, title: "Kuch-quvvatni tiklash", desc: "Astenik sindromni bartaraf etish" },
        { num: 9, title: "Revaskulyarizatsiya", desc: "Neoangiogenezni (ayniqsa ishemiya o‘choqlarida) rag‘batlantirish" },
        { num: 10, title: "Modda almashinuvini yaxshilash", desc: "Bazal metabolizm darajasini kuchaytirish" },
        { num: 11, title: "Kislorod iste’molini oshirish", desc: "Erkin yog‘ kislotalarini aerob energiya ishlab chiqarishda ishlatishni faollashtirish orqali kislorod iste’molini oshirish" },
        { num: 12, title: "Glyukoza darajasini pasaytirish", desc: "Glyukoza, triglitseridlar va past zichlikdagi lipoproteinlar darajasini kamaytirish" },
        { num: 13, title: "Miya samaradorligini oshirish", desc: "Kognitiv funksiyalarni yaxshilash" },
        { num: 14, title: "Yoshartirish", desc: "Biologik yoshni pasaytirish va yoshartirish jarayonlarini ishga tushirish" },
    ];
// fksdkl;fds;lkf
    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="results"  >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold" style={{ color: '#4a86ad' }}>
                        Muolaja <br />ta’siri
                    </h2>
                    <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
                        Vodorod — organizm uchun tabiiy gaz bo‘lib, inson tanasida ijobiy jarayonlarni ishga tushiradi.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {results.map((item) => (
                        <div
                            key={item.num}
                            className="flex gap-6 group hover:bg-white hover:shadow-xl rounded-2xl p-6 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#4a86ad] text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {item.num}
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
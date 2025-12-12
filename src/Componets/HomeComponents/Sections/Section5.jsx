// Section5 — Где применяется?
import AnimatedContent from "../../ReactBits/AnimatedContent";

export default function Section5() {
  const items = [
    {
      title: "Anti-age",
      description:
        "Vodorod terapiyasi ushbu muammoning innovatsion va samarali yechimini taklif etadi, organizmga uch tomonlama ta’sir ko‘rsatadi",

    },
    {
      title: "Sport",
      description:
        "Vodorod terapiyasi ushbu muammoning innovatsion va samarali yechimini taklif etadi, organizmga uch tomonlama ta’sir ko‘rsatadi",

    },
    {
      title: "Kardiologiya",
      description:
        "Vodorod terapiyasi ushbu muammoning innovatsion va samarali yechimini taklif etadi, organizmga uch tomonlama ta’sir ko‘rsatadi",

    },
    {
      title: "Pulmonologiya",
      description:
        "Vodorod terapiyasi ushbu muammoning innovatsion va samarali yechimini taklif etadi, organizmga uch tomonlama ta’sir ko‘rsatadi",

    },
    {
      title: "Nevrologiya",
      description:
        "Vodorod terapiyasi ushbu muammoning innovatsion va samarali yechimini taklif etadi, organizmga uch tomonlama ta’sir ko‘rsatadi",

    },
    {
      title: "Endokrinologiya",
      description:
        "Vodorod terapiyasi ushbu muammoning innovatsion va samarali yechimini taklif etadi, organizmga uch tomonlama ta’sir ko‘rsatadi",

    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="apply">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={1}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            scale={1.05}
            threshold={0.2}
            delay={0.2}
            once={true}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ color: "#4a86ad" }}
            >
              Qayerda qo‘llaniladi?
            </h2>
          </AnimatedContent>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <AnimatedContent
              key={index}
              distance={100}
              direction="vertical"
              duration={1.2}
              ease="power2.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.05}
              threshold={0.2}
              delay={0.2 * index}
              once={true}
            >
              <div className="group relative bg-[#2d3748] rounded-2xl overflow-hidden h-72 sm:h-80 md:h-96 cursor-pointer transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d3748] to-[#1a202c] transition-all duration-500" />

                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div
                      className="
                        transform
                        translate-y-0
                        lg:translate-y-full
                        lg:group-hover:translate-y-0
                        transition-transform
                        duration-700
                        ease-out
                        flex flex-col
                      "
                    >
                      <p className="text-sm sm:text-base leading-relaxed mb-2 opacity-90">
                        {item.description}
                      </p>

                      {item.hasLink && (
                        <p className="text-[#4a86ad] font-medium flex items-center gap-2">
                          Batafsil
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a86ad]/20 to-transparent" />
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}

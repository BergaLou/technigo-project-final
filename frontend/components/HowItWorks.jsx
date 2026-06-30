const steps = [
    { id: "01", title: "Create or choose", desc: "Choose a category or create your own challenge.", icon: "/plus.png" },
    { id: "02", title: "CHALLENGE SOMEONE", desc: "Send the challenge to a friend or accept someone else's.", icon: "/person.png" },
    { id: "03", title: "THE DUEL BEGINS", desc: "You have a time limit. Whoever performs best wins.", icon: "/duel.png" },
    { id: "04", title: "WIN & CLIMB", desc: "Win duels, collect points and climb to the top.", icon: "/crown.png" }
];

export const HowItWorks = () => {
    return (
        <section className="bg-black py-20 text-white">
            <h2 className="text-4xl font-black italic text-center mb-16">that's how it works</h2>

            <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-6xl mx-auto px-6">
                {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center w-full md:w-60">
                {/* Nummer */}
                <span className="text-[#f92e5d] font-bold text-xl mb-4 italic">{step.id}</span>
        
                {/* Ikon-cirkel - OBS! img ligger nu INUTI här */}
                <div className="w-24 h-24 rounded-full border border-zinc-800 flex items-center justify-center mb-6 hover:border-[#f92e5d] transition-all">
                <img 
                    src={step.icon} 
                    alt={step.title}
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
            </div>

            {/* Text */}
                <h3 className="font-bold mb-2 uppercase text-sm">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
            ))}
            </div>
        </section>
    )
}
export const CTA = () => {
    return (
        <section className="relative overflow-hidden bg-black py-16 md:py-20 md:min-h-150 border-t border-zinc-900">
            {/* Full-bleed left image on md+, stacked image on mobile */}
            <div className="hidden md:block absolute inset-y-0 left-0 w-1/2">
                <img
                    src="/footer.png"
                    alt="No Excuses"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "left center" }}
                />
            </div>

            {/* Mobile: image above content */}
            <div className="block md:hidden w-full">
                <img
                    src="/footer.png"
                    alt="No Excuses"
                    className="w-full h-auto object-contain mb-6"
                    style={{ objectPosition: "left center" }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto md:pl-[50%] px-8 py-16">

                <div className="w-full text-left">
                    <h2 className="text-4xl md:text-5xl font-black italic text-white mb-6">
                        NO EXCUSES.<br />
                        <span className="text-[#f92e5d]">JUST RESULTS.</span>
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Join iSwear today. <br />
                        It's free. It's real. It's your turn.
                    </p>
                    <button className="inline-flex flex-row items-center justify-center gap-2 bg-[#f92e5d] text-white px-10 py-4 font-black uppercase tracking-wider hover:bg-[#7a7a7a5e] transition-all transform hover:scale-105 whitespace-nowrap">
                        Take the challenge
                        <img
                            src="/flash.png"
                            alt="Blixt"
                            className="w-5 h-5 object-contain"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}
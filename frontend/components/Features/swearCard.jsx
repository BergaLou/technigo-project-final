export const SwearCard = ({ title, logoSrc, desc }) => {
    return (
        <div className="w-64 bg-zinc-950 p-8 border border-zinc-800 hover:border-[#f92e5d] transition-all group">
            <div className="text-4xl mb-6 flex flex-row justify-center items-center">
                <img
                src={logoSrc}
                className="h-16 w-16 object-contain gap-6"
                style={{ filter: "brightness(0) saturate(100%) invert(35%) sepia(85%) saturate(2256%) hue-rotate(320deg) brightness(100%) contrast(95%)" }}
                alt={title}
                />
            </div>
            <h3 className="font-black text-xl uppercase mb-3 text-white text-center">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed text-center">{desc}</p>
        </div>
    )
}
export const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 border-b border-gray-800 w-full overflow-hidden">
            <div className="flex items-start text-5xl font-black italic tracking-tighter text-white">
                <div className="relative">
                <span className="text-[#f92e5d]">i</span>SWEAR
                </div>
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-bold uppercase">
                <a href="#" className="hover:text-[#f92e5d] transition-colors">Challenge</a>
                <a href="#" className="hover:text-[#f92e5d] transition-colors">Duels</a>
                <a href="#" className="hover:text-[#f92e5d] transition-colors">Leaderboard</a>
            </nav>
            <div className="flex gap-4">
                <button className="border border-white px-8 text-sm font-bold uppercase hover:bg-white hover:text-black ">Enter Arena</button>
                <button className="bg-[#f92e5d] px-4 py-2 rounded text-sm font-bold uppercase hover:bg-[#7a7a7a5e] transition-all">Take the Challenge</button>
            </div>
        </header>
    )
}

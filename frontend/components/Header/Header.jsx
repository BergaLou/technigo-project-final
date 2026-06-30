import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="flex flex-wrap justify-between items-center p-6 border-b border-gray-800 w-full">

            <Link to="/" className="text-5xl font-black italic tracking-tighter text-white">
                <span className="text-[#f92e5d]">i</span>SWEAR
            </Link>

            <nav className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 text-sm font-bold uppercase w-full md:w-auto">
                <Link to="/challenge" className="hover:text-[#f92e5d] transition-colors">Challenge</Link>
                <Link to="/duels" className="hover:text-[#f92e5d] transition-colors">Duels</Link>
                <Link to="/leaderboard" className="hover:text-[#f92e5d] transition-colors">Leaderboard</Link>
                
                <Link to="/arena" className="border border-white px-4 py-2 hover:bg-white hover:text-black w-full md:w-auto text-center">
                    Enter Arena
                </Link>
                <Link to="/ttc" className="bg-[#f92e5d] px-4 py-2 rounded hover:bg-[#7a7a7a5e] transition-all w-full md:w-auto text-center">
                    Take the Challenge
                </Link>
            </nav>
        </header>
    );
}
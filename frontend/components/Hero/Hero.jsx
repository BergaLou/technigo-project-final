import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="relative w-full min-h-150 md:min-h-200 flex items-center overflow-hidden">

        <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
        src='/hero.png' 
        className="h-full w-full object-cover object-center md:object-top"
        alt="Hero background"
         />
        </div>    

        <div className="relative z-10 px-6 md:pl-50 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mt-10 md:mt-30 mb-10">
        Break your Limits.<br />
        <span className="text-[#f92e5d]">Crush the Opposition.</span><br />
        No Excuses.
        </h1>
        <p className="text-gray-400 mb-8 max-w-md">
        The ultimate challenge platform. Why just say it when you can prove it? Set your terms, hunt your rivals, and rise to the top.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/ttc" className="inline-flex bg-[#f92e5d] px-8 py-3 font-bold uppercase hover:bg-[#7a7a7a5e] transition-all whitespace-nowrap">
                Initiate Duel   
                <img
                    src="/flash.png"
                    alt="Blixt"
                    className="w-5 h-5 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
            </Link>
            <Link to="/arena" className="border border-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black transition-all">
                Enter the Arena
            </Link>
        </div>
        </div>
        </section>
    )
}
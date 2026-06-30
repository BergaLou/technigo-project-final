import { SwearCard } from './swearCard';

export const Features = () => {
    const cardData = [
        { title: "CHALLENGE", logoSrc: "/flash.png", desc: "Set the terms. Don't back down." },
        { title: "DUEL", logoSrc: "/duel.png", desc: "Face your rival. No snack." },
        { title: "PROVE", logoSrc: "/proof.png", desc: "Submit Proof. Claim victory." },
        { title: "ASCEND", logoSrc: "/trophy.png", desc: "Climb the ranks. Become legendary." }
    ];

    return (
        <section className="bg-black py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
                
                <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white text-center md:text-left md:w-1/3">
                    YOUR RULES. <br />
                    YOUR RIVALS.<br />
                    <span className="text-[#f92e5d]">YOUR REIGN.</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {cardData.map((card, index) => (
                        <SwearCard
                            key={index}
                            title={card.title}
                            logoSrc={card.logoSrc}
                            desc={card.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
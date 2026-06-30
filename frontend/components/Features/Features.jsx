import { SwearCard } from './swearCard';

export const Features = () => {
    const cardData = [
        { title: "CHALLENGE", logoSrc: "/flash.png", desc: "Set the terms. Don't back down." },
        { title: "DUEL", logoSrc: "/duel.png", desc: "Face your rival. No snack." },
        { title: "PROVE", logoSrc: "/proof.png", desc: "Submit Proof. Claim victory." },
        { title: "ASCEND", logoSrc: "/trophy.png", desc: "Climb the ranks. Become legendary." }
    ];

    return (
        <section className="bg-black py-16 px-6 ">
            <div className="max-w-6-xl mx-auto flex flex-row justify-center gap-6 overflow-x-auto">
        
                    <h2 className="text-3xl font-black italic uppercase text-white p-10 mb-10 object-contain items-center">
                    YOUR RULES. <br />
                    YOUR RIVALS.<br />
                    <span className="text-[#f92e5d]">
                    YOUR REIGN.</span>
                    </h2>
                <div className="flex flex-row justify-center gap-6 overflow-x-auto">
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
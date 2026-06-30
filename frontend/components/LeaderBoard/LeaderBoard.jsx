import { useContext } from "react";
import { SwearContext } from "../../src/context/SwearContext.jsx"

export const LeaderBoard = () => {
    const { swears, loading } = useContext(SwearContext);

    if (loading) {
        return <div>Laddar listan...</div>;
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-5">Leaderboard</h1>
            <ul>
                {swears.map((swear) => (
                    <li key={swear.id} className="border-b p-2">
                        {swear.word} - {swear.score} score
                    </li>
                ))}
            </ul>
        </div>
    );
};
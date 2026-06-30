import { useContext } from "react";
import { SwearContext } from "../../src/context/SwearContext.jsx";

export const TTC = () => {
    const { swears } = useContext(SwearContext);
    const randomSwear = swears[0]; 

    return (
        <div className="p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Take the Challenge</h1>
            {randomSwear ? (
                <div className="bg-gray-800 p-6 rounded">
                    <p>Challenge: How many points does the word: <strong>{randomSwear.word}</strong>?</p>
                </div>
            ) : <p>Loading challenge...</p>}
        </div>
    );
};
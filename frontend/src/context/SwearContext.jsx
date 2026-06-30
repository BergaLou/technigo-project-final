import { createContext, useState, useEffect } from "react";
import { getSwears } from "../../services/api";

export const SwearContext = createContext();

export const SwearProvider = ({ children }) => {
    const [swears, setSwears] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSwears()
        .then((data) => {
            setSwears(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        });
    }, []);

    return (
        <SwearContext.Provider value={{ swears, setSwears, loading }}>
            {children}
        </SwearContext.Provider>
    );
};
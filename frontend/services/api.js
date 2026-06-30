const API_URL = 'http://localhost:8080/swears';

export const getSwears = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Cant pick up the challenges');
    return response.json();
};

export const  createSwear = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Cant create the challenge');
    return response.json();
};
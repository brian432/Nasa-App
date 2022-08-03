import { returnDate } from "./fecha";
const {
    REACT_APP_API_KEY: API_KEY,
    REACT_APP_API_PLANETARY: API_PLANETARY,
    REACT_APP_API_EPIC: API_EPIC,
    REACT_APP_API_ROVER: API_ROVER
} = process.env

export const getNasaApi = async () => {
    try {
        const results = await Promise.all([
            fetch(`${API_PLANETARY}${API_KEY}`),
            fetch(`${API_EPIC}${API_KEY}`),
            fetch(`${API_ROVER}${returnDate()}`)
        ])
        const [planetary, epic, rover] = await Promise.all(results.map(result => result.json()))
        return { planetary, epic, rover }
    } catch (error) {
        console.log(error)
    }
};
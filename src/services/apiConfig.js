import { returnDate } from "./fecha";
const {
    REACT_APP_API_KEY: API_KEY,
    REACT_APP_API_PLANETARY: API_PLANETARY,
    REACT_APP_API_EPIC: API_EPIC,
    REACT_APP_API_ROVER: API_ROVER
} = process.env

export const getNasaApi = async () => {
    //imagen astronomica del dia
    const responsePlanetary = await fetch(`${API_PLANETARY}${API_KEY}`);
    const planetary = await responsePlanetary.json()

    //imagenes de la tierra
    const responseEpic = await fetch(`${API_EPIC}${API_KEY}`)
    const epic = await responseEpic.json()

    //imagenes del rover
    const responseRover = await fetch(`${API_ROVER}${returnDate()}`)
    const rover = await responseRover.json()
    return { planetary, epic, rover }
};
import { useState, useEffect } from "react";
import { getNasaApi } from '../services/apiConfig';
export const useApi = () => {
    const [rover, setRover] = useState([])
    const [epic, setEpic] = useState([]);
    const [planetary, setPlanetary] = useState([]);
    useEffect(() => {
        getNasaApi().then(({ epic, rover, planetary }) => {
            setEpic(epic)
            setRover(rover.photos)
            setPlanetary(planetary)
        })
    }, [])
    return { rover, epic, planetary }
}
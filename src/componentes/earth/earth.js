import { useCallback, useState } from "react";
import data from '../../data.json'
import { useApi } from "../../hooks/useApi";
const { REACT_APP_API_KEY: API_KEY, REACT_APP_API_IMG: API_IMG } = process.env
export const Earth = () => {
    const [numero, setNumero] = useState(0);
    const [imagen, setImagen] = useState("");
    const { epic } = useApi()
    const src_img = epic[numero] && `${API_IMG}${epic[numero]?.date.split(" ")[0].split("-").join("/")}/png/${epic[numero]?.image}.png${API_KEY}`
    
    const handleNumero = useCallback((e) => {
        if (e.target.id === "siguiente") {
            setNumero(numero + 1)
            setImagen("1")
        } else {
            setNumero(numero - 1)
            setImagen("1")
        }
    },[numero])

    return (
        <section id="TierraApi">
            <h2 className="titulos">Imagenes diarias del planeta tierra</h2>
            <p className="margin">{data[1].apiTierra}</p>
            {
                epic.length > 0 &&
                    imagen !== "2" ?
                        <div className="div-img">
                            <img src={src_img} onLoad={() => setImagen("2")} alt="" />
                            <div className="lds-dual-ring img-carga">
                            </div>
                        </div> :
                        <div className="div-img">
                            <img src={src_img} alt="" />
                            {numero < epic.length - 1 && <button id="siguiente" onClick={handleNumero}>&#10095;</button>}
                            {numero > 0 && <button id="anterior" onClick={handleNumero}>&#10094;</button>}
                            <p id="fecha">{epic[numero]?.date}</p>
                        </div> 
            }
        </section >
    )
}
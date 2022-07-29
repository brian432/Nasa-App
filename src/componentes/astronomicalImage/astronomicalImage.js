import React from "react"
import { useApi } from "../../hooks/useApi"
export const AstronomicalImage = () => {
    const { planetary } = useApi()
    return (
        <section id="AstronomicalImage">
            <h2 className="margin">Imagen astronómica del día</h2>
            <a href={planetary.hdurl} className="div-img" target="_blank" rel="noreferrer">
                <img src={/youtube/.test(planetary.url) ? 'imagenes/fotoDeCarga.jpg' : planetary.url} alt="" />
            </a>
            <div id="descripcion">
                {planetary.date && <p>Fecha: {planetary.date}</p>}
                {planetary.copyright && <p>Copyright: {planetary.copyright}</p>}
            </div>
        </section>
    )
}
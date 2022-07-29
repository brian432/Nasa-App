import data from '../../data.json'
import { useState } from 'react';
import { useApi } from '../../hooks/useApi'
export const Mars = () => {
    const [numero, setNumero] = useState(0);
    const [imagen, setImagen] = useState("");
    const { rover } = useApi()
    return (
        <section id="MarteApi">
            <div className="Info">
                <h2 className="titulos">Mars Rover Fotos</h2>
                <p>Datos de imágenes recopilados por el rover Curiosity de la NASA en Marte.</p>
                <p><strong>Fecha de lanzamiento del Rover desde la Tierra:</strong> 2011-11-26.</p>
                <p><strong>Fecha de aterrizaje del Rover en Marte:</strong> 2012-08-06</p>
            </div>
            <h1 className="titulos">Tipos de camaras</h1>
            <div className="camarasDescripcion margin">
                {Object.keys(data[1].apimarte).map((propiedad, indice) =>
                    <div id={propiedad} key={indice} className="margin camaras">
                        <h4>{propiedad}</h4>
                        {data[1].apimarte[propiedad] instanceof Array ?
                            data[1].apimarte[propiedad].map((elemento, indice) => <p key={indice}>{elemento}</p>) :
                            <p>{data[1].apimarte[propiedad]}</p>}
                    </div>
                )}
            </div>
            {rover.length > 0 &&
                imagen !== "2" ?
                    <div className="div-img">
                        <img src={rover[numero]?.img_src} onLoad={() => setImagen("2")} alt="" />
                        <div className="lds-dual-ring img-carga">
                        </div>
                    </div> :
                    <div className="div-img">
                        <img src={rover[numero]?.img_src} alt="" />
                        {numero < rover.length - 1 && <button id="siguiente" onClick={() => { setNumero(numero + 1); setImagen("1") }}>&#10095;</button>}
                        {numero > 0 && <button id="anterior" onClick={() => { setNumero(numero - 1); setImagen("1") }}>&#10094;</button>}
                        <p id="fecha">{rover[numero]?.camera?.name}<br /> {rover[numero]?.earth_date}</p>
                    </div> 
            }
        </section >
    )
}
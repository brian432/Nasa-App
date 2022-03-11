import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Planetas = ({ state, data, setState }) => {
    const {id}=useParams();
    console.log(id)
    useEffect(()=>{
        setState(id)
    },[id])
    return (
        <div id="planetas" >
            <div className="div-section">
                <div className="relleno"></div>
                <div className="div-img">
                    <img src={`/Nasa-App/imagenes/${state}.png`} alt={state} />
                </div>
                <div className="descripcion">
                    <h2>{state}</h2>
                    <p className="lista">{data.descripcion}</p>
                </div>
            </div>
            {Object.keys(data).map((propiedad, indice) =>
                propiedad !== "descripcion" &&
                <div className="div-section" key={indice}>
                    <div className="relleno"></div>
                    <div className="descripcion">
                        <h2>{propiedad}</h2>
                        {propiedad === "Planetas" ?
                            Object.keys(data.Planetas).map((elemento, indice) => <div key={indice}><p className="lista planetas" onClick={() => { setState(elemento); window.scroll({ top: 0 }) }}>{elemento}</p></div>) :
                            data[propiedad] instanceof Array ?
                                data[propiedad].map((elemento, indice) => <p key={indice} className="lista">{elemento}</p>) :
                                typeof data[propiedad] === "object" ?
                                    Object.keys(data[propiedad]).map((elemento, indice) => <p key={indice} className="lista"><strong>{elemento}:</strong> {data[propiedad][elemento]}</p>) :
                                    <p className="lista">{data[propiedad]}</p>
                        }
                    </div>
                </div>
            )}
        </div >
    )
}

export default Planetas;
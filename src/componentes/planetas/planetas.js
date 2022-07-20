import { useParams } from "react-router-dom";
import { useEffect } from "react";
import data from '../../data.json'
const Planetas = ({ state, setState }) => {

    const info = data[0].Sistema_Solar.Planetas[state]
    const { id } = useParams();
    useEffect(() => {
        setState(id)
    }, [id])

    const propiedadesPlanetas = (propiedad, indice) => {
        return (
            <div className="div-section" key={indice} >
                <div className="relleno"></div>
                <div className="descripcion">
                    <h2>{propiedad}</h2>
                    {propiedad === "Planetas" ?
                        Object.keys(info.Planetas).map((elemento, indice) => <div key={indice}><p className="lista planetas" onClick={() => { setState(elemento); window.scroll({ top: 0 }) }}>{elemento}</p></div>) :
                        info[propiedad] instanceof Array ?
                            info[propiedad].map((elemento, indice) => <p key={indice} className="lista">{elemento}</p>) :
                            typeof info[propiedad] === "object" ?
                                Object.keys(info[propiedad]).map((elemento, indice) => <p key={indice} className="lista"><strong>{elemento}:</strong> {info[propiedad][elemento]}</p>) :
                                <p className="lista">{info[propiedad]}</p>
                    }
                </div>
            </div>
        )
    }

    return (
        <div id="planetas" >
            <div className="div-section">
                <div className="relleno"></div>
                <div className="div-img">
                    <img src={`/Nasa-App/imagenes/${state}.png`} alt={state} />
                </div>
                <div className="descripcion">
                    <h2>{state}</h2>
                    <p className="lista">{info.descripcion}</p>
                </div>
            </div>
            {Object.keys(info).map((propiedad, indice) =>
                propiedad !== "descripcion" && propiedad !== "Intro" && propiedad !== "Satélites" &&
                propiedadesPlanetas(propiedad, indice)
            )}
        </div >
    )
}

export default Planetas;
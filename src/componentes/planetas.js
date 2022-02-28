import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";

const Planetas = ({ state, data, setState }) => {

    const params = useParams();
    useEffect(() => {
        params.id!==undefined&&setState(params.id);
    }, [params.id])
    console.log(state)
    return (
        <div id="planetas" >
            <div className="div-section">
                <div className="relleno"></div>
                <div className="div-img">
                    <img src={`imagenes/${state}.png`} alt="" />
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
import data from '../../../data.json'

export const SistemaSolar = () => {
    const info = data[0].Sistema_Solar
    return (
        <div id="planetas" >
            <div className="div-section">
                <div className="relleno"></div>
                <div className="div-img">
                    <img src='imagenes\Sistema Solar.png' alt="Sistema Solar" />
                </div>
                <div className="descripcion">
                    <h2>Sistema Solar</h2>
                    <p className="lista">{info.descripcion}</p>
                </div>
            </div>
            {Object.keys(info).map((propiedad, indice) =>
                propiedad !== "descripcion" &&
                <div className="div-section" key={indice}>
                    <div className="relleno"></div>
                    <div className="descripcion">
                        <h2>{propiedad}</h2>
                        {propiedad === "Planetas" ?
                            Object.keys(info.Planetas).map((elemento, indice) => <div key={indice}><p className="lista planetas" >{elemento}</p></div>) :
                            info[propiedad] instanceof Array ?
                                info[propiedad].map((elemento, indice) => <p key={indice} className="lista" >{elemento}</p>) :
                                typeof info[propiedad] === "object" ?
                                    Object.keys(info[propiedad]).map((elemento, indice) => <p key={indice} className="lista"><strong>{elemento}:</strong> {info[propiedad][elemento]}</p>) :
                                    <p className="lista">{info[propiedad]}</p>
                        }
                    </div>
                </div>
            )}
        </div >
    )
}
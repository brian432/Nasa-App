const SistemaSolar = ({ data, setState }) => {
    
    return (
        <div id="planetas" >
            <div className="div-section">
                <div className="relleno"></div>
                <div className="div-img">
                    <img src='imagenes\Sistema Solar.png' alt="Sistema Solar" />
                </div>
                <div className="descripcion">
                    <h2>Sistema Solar</h2>
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
                            Object.keys(data.Planetas).map((elemento, indice) => <div key={indice}><p className="lista planetas" >{elemento}</p></div>) :
                            data[propiedad] instanceof Array ?
                                data[propiedad].map((elemento, indice) => <p key={indice} className="lista" >{elemento}</p>) :
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

export default SistemaSolar;
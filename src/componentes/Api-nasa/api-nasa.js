import { useState, useEffect } from "react";
import data from '../../data.json'

//Apis
const ApiKey = "DaFi4M1aSffvFg0EGzfCxWruc6FyhR7wStWMPtxf";
const ApiPlanetary = "https://api.nasa.gov/planetary/apod?api_key=";
const ApiEpic = "https://api.nasa.gov/EPIC/api/natural/images?api_key=";
const ApiImagen = "https://api.nasa.gov/EPIC/archive/natural/";
const ApiRover = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${ApiKey}&page=1&earth_date=`;

const Nasa = () => {
    //Estados del componente
    const [planetary, setPlanetary] = useState([]);
    const [epic, setEpic] = useState([]);
    const [rover, setRover] = useState([]);
    const [numero, setNumero] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [imagen, setImagen] = useState("");
    const [imagen2, setImagen2] = useState("");
    const [loading, setLoading] = useState("");
    useEffect(() => {
        json();
    }, []);

    //Funcion peticion api
    const json = async () => {
        //peticion imagen astronomica del dia
        let peticion = await fetch(`${ApiPlanetary}${ApiKey}`);
        let resultado = await peticion.json();
        setPlanetary(resultado);

        //peticion imagenes de la tierra
        let peticion2 = await fetch(`${ApiEpic}${ApiKey}`);
        let resultado2 = await peticion2.json();
        setEpic(resultado2);

        //peticion imagenes del rover
        let peticion3 = await fetch(`${ApiRover}${devolverFecha()}`);
        let resultado3 = await peticion3.json();
        setRover(resultado3.photos);
    };
    //Funcion devolver fecha actual -2 dias para asegurar que las peticiones de las imagenes funcione
    const devolverFecha = () => {
        const fecha = [new Date().getDate() - 2, new Date().getMonth(), new Date().getFullYear()];
        const meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const resultado = (fecha[0] < 1 ? `${fecha[2]}-${meses[fecha[1]] - 1}-29` : `${fecha[2]}-${meses[fecha[1]]}-${fecha[0]}`);
        return resultado
    }
    /*loading*/
    const cargar = () => {
        setLoading("cargo")
    }
    //devolver slider de imagenes para las imagenes de la tierra y las de el rover en marte.
    const retorno = (tipo, img, src_img) => {
        return (
            (tipo === "tierra" ? epic[numero].image : rover.length > 0) ?
                img !== "2" ?
                    <div className="div-img">
                        <img src={src_img} onLoad={() => tipo === "tierra" ? setImagen("2") : setImagen2("2")} alt="" />
                        <div className="lds-dual-ring img-carga">
                        </div>
                    </div> :
                    <div className="div-img">
                        <img src={src_img} alt=""/>
                        {(tipo === "tierra" ? numero < epic.length - 1 : numero2 < rover.length - 1) && <button id="siguiente" onClick={tipo === "tierra" ? () => { setNumero(numero + 1); setImagen("1") } : () => { setNumero2(numero2 + 1); setImagen2("1") }}>&#10095;</button>}
                        {(tipo === "tierra" ? numero : numero2) > 0 && <button id="anterior" onClick={tipo === "tierra" ? () => { setNumero(numero - 1); setImagen("1") } : () => { setNumero2(numero2 - 1); setImagen2("1") }}>&#10094;</button>}
                        <p id="fecha">{(tipo === "tierra" ? epic[numero].date : rover[numero2].camera.name)}<br /> {tipo !== "tierra" && rover[numero2].earth_date}</p>
                    </div> :
                <div className="div-img">
                    <img src="imagenes/no-img.jpg" alt="" />
                    {numero > 0 && <button id="anterior" style={{ color: "black" }} onClick={() => setNumero(numero - 1)}>&#10094;</button>}
                </div>
        )
    }

    if (!loading) {
        return (
            <div className="lds-dual-ring img-carga"><div style={{ display: "none" }}>{setTimeout(cargar, 3000)}</div></div>
        )
    } else {
        return (
            <div id="Nasa" >
                <section id="ImagenAStronomica">
                    <h2 className="margin">Imagen astronómica del día</h2>
                    <a href={planetary.hdurl} className="div-img" target="_blank">
                        <img src={/youtube/.test(planetary.url)?'imagenes/fotoDeCarga.jpg':planetary.url} alt="" />
                    </a>
                    <div id="descripcion">
                        {planetary.date && <p>Fecha: {planetary.date}</p>}
                        {planetary.copyright && <p>Copyright: {planetary.copyright}</p>}
                    </div>
                </section>
                <section id="TierraApi">
                    <h2 className="titulos">Imagenes diarias del planeta tierra</h2>
                    <p className="margin">{data[1].apiTierra}</p>
                    {
                        epic.length > 0 &&
                        retorno("tierra", imagen, `${ApiImagen}${epic[numero].date.split(" ")[0].split("-").join("/")}/png/${epic[numero].image}.png?api_key=${ApiKey}`)
                    }
                </section >
                <section id="MarteApi">
                    <div className="Info">
                        <h2 className="titulos">Mars Rover Fotos</h2>
                        <p>Datos de imágenes recopilados por el rover Curiosity de la NASA en Marte.</p>
                        <p><strong>Fecha de lanzamiento del Rover desde la Tierra:</strong> 2011-11-26.</p>
                        <p><strong>Fecha de aterrizaje del Rover en Marte:</strong> 2012-08-06</p>
                    </div>
                    <h1 className="titulos">Tipos de camaras</h1>
                    <div className="camarasDescripcion margin">
                        {Object.keys(data[1].apiMarte).map((propiedad, indice) =>
                            <div id={propiedad} key={indice} className="margin camaras">
                                <h4>{propiedad}</h4>
                                {data[1].apiMarte[propiedad] instanceof Array ?
                                    data[1].apiMarte[propiedad].map((elemento, indice) => <p key={indice}>{elemento}</p>) :
                                    <p>{data[1].apiMarte[propiedad]}</p>}
                            </div>
                        )}
                    </div>
                    {rover.length > 0 &&
                        retorno("marte", imagen2, rover[numero2].img_src)
                    }
                </section >
            </div >
        )
    }
}

export default Nasa;
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import data from '../../../data.json';
export const Home = ({ setState }) => {
    const [contador, setContador] = useState(0);
    const [clases, setClases] = useState("");
    const [boton, setBoton] = useState("Sol");
    const planetas = ["Sol", "Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"]
    const info = data[0].Sistema_Solar.Planetas[planetas[contador]];
    
    return (
        <div id="home">
            <div className={contador === 1 ? 'siguiente' : contador === 2 ? 'atras' : contador === 3 ? 'adelante' : 'planetaFuera'}>
                <img src="imagenes/Venus.png" alt="" onClick={() => { setContador(2); setClases(""); setBoton("Venus") }} />
            </div>
            <div className={contador === 1 ? 'atras' : contador === 2 ? 'adelante' : contador !== 0 ? 'none' : 'siguiente'} onClick={() => { setContador(1); setClases("click"); setBoton("Mercurio") }}>
                <img src="imagenes/Mercurio.png" alt="" />
            </div>
            <div className={contador === 1 ? 'adelante' : contador !== 0 ? 'none' : 'atras'}>
                <img src="imagenes/Sol.png" alt="" />
            </div>
            <div className={contador === 2 ? 'siguiente' : contador === 3 ? 'atras' : contador === 4 ? 'adelante' : 'planetaFuera'} onClick={() => { setContador(3); setClases("click"); setBoton("Tierra") }}>
                <img src="imagenes/Tierra.png" alt="" />
            </div>
            <div className={contador === 3 ? 'siguiente' : contador === 4 ? 'atras' : contador === 5 ? 'adelante' : 'planetaFuera'} onClick={() => { setContador(4); setClases(""); setBoton("Marte") }}>
                <img src="imagenes/Marte.png" alt="" />
            </div>
            <div className={contador === 4 ? 'siguiente' : contador === 5 ? 'atras' : contador === 6 ? 'adelante' : 'planetaFuera'} onClick={() => { setContador(5); setClases("click"); setBoton("Júpiter") }}>
                <img src="imagenes/Júpiter.png" alt="" />
            </div>
            <div className={contador === 5 ? 'siguiente' : contador === 6 ? 'atras2' : contador === 7 ? 'adelante' : 'planetaFuera'} onClick={() => { setContador(6); setClases(""); setBoton("Saturno") }}>
                <img src="imagenes/Saturno.png" alt="" />
            </div>
            <div className={contador === 6 ? 'siguiente' : contador === 7 ? 'atras' : contador === 8 ? 'adelante' : 'planetaFuera'} onClick={() => { setContador(7); setClases("click"); setBoton("Urano") }}>
                <img src="imagenes/Urano.png" alt="" />
            </div>
            <div className={contador === 7 ? 'siguiente' : contador === 8 ? 'atras' : 'planetaFuera'} onClick={() => { setContador(8); setClases(""); setBoton("Neptuno") }}>
                <img src="imagenes/Neptuno.png" alt="" />
            </div>
            {
                <div id="datos">
                    <div className={clases ? "titulo fadeIn" : 'titulo fadeOut'}>
                        <h1>{planetas[contador]}</h1>
                        <p className="descripcion">{info.Intro}</p>
                    </div>
                    <ul className={clases ? 'ul fadeInLeft' : 'ul fadeOutLeft'}>
                        <h3>{info.Satélites.length > 0 && 'Satélites'}</h3>
                        {info.Satélites.length > 0 && info.Satélites.map((elemento, indice) =>
                            <li key={indice}>{elemento}</li>
                        )}
                    </ul>
                    <div className={clases ? 'info fadeInRight' : 'info fadeOutRight'}>
                        <div className='contenedorButton'>
                            <Link to={`/planetas/${boton}`} className='hover button' onClick={()=> setState(boton)}>LEER MÁS</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

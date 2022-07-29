import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
export const Header = ({ setState }) => {
    const [menu, setMenu] = useState("");

    const listas = ["home", "sistema-solar", "api-nasa"];

    const handleMenu = useCallback(() => {
        !menu ? setMenu("encendido") : setMenu("")
    },[menu])
    
    return (
        <nav>
            <div className="logo">
                <h4>NASA</h4>
            </div>
            <ul className={!menu ? "nav-links" : "nav-links nav-active"}>
                {listas.map((link, index) =>
                    <li key={index} style={menu === "" ? {} : { "animation": `navLinkFade 0.5s ease forwards ${index / 7 + .2}s` }} onClick={() => { link === 'sistema_solar' && setState(link); setMenu(""); window.scroll({ top: 0 }) }}>
                        <Link to={link === 'home' ? '/' : `/${link}`} className="links hover">{link}</Link>
                    </li>
                )}
            </ul>
            <div id="hamburguesa" onClick={handleMenu}>
                <div className={!menu ? "" : "linea1"}></div>
                <div className={!menu ? "" : "linea2"}></div>
                <div className={!menu ? "" : "linea3"}></div>
            </div>
        </nav>
    )
}

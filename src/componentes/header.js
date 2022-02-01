import { useState } from "react";
const Header = ({setState}) => {
    const [menu, setMenu] = useState("");
    const listas = ["Inicio", "Sistema Solar", "Api NASA"];
    return (
        <nav>
            <div className="logo">
                <h4>NASA</h4>
            </div>
            <ul className={!menu ? "nav-links" : "nav-links nav-active"}>
                {listas.map((link, index) =>
                    <li key={index} style={menu === "" ? {} : { "animation": `navLinkFade 0.5s ease forwards ${index / 7 + .2}s` }} onClick={()=>{setState(link); setMenu(""); window.scroll({top: 0})}}>
                        <a href={`#${link}`} className="links hover">{link}</a>
                    </li>
                )}
            </ul>
            <div id="hamburguesa" onClick={() => !menu ? setMenu("encendido") : setMenu("")}>
                <div className={!menu ? "" : "linea1"}></div>
                <div className={!menu ? "" : "linea2"}></div>
                <div className={!menu ? "" : "linea3"}></div>
            </div>
        </nav>
    )
}

export default Header;
import React from 'react';
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = (props) => {
    return (

        <nav className="Navigation">
             <ul>
                <li><CardWidget /></li>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="compra.html">Beer Market</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
             </ul>
        </nav>
    ); 
};

export default NavBar;
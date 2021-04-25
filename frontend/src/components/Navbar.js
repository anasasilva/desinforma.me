import React from 'react';
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";


function Navbar() {
    
    return (

        <nav className="navbar navbar-expand-md navbar-light bg-light">

            <Link to="/" className="navbar-brand">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt={"logo"}/> 
                <span className="ml-3">Desinforma-me</span>
            </Link>
        
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/howtoplay" className="mr-3 nav-link">Instruções</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;
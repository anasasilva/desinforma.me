import React, { useState } from 'react';
import Logo from './Logo';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const NavbarItem = ({ children, isLast, extraClasses="", to = '/' }) => {

    let currentPath = useLocation();
    let isActive = (to === currentPath.pathname && !isLast);

    return (
        <li  className="nav-item  my-auto">
            <ReactLink className={(isLast ? "" : "nav-link ") + extraClasses} to={to}>{children}</ReactLink>
            <div style={{backgroundColor: "#3182CE", width: "100%", height: (isActive ? "2px" : "0px") }}/>
        </li>
    );
};


const Navbar = props => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <nav className="navbar  navbar-expand-lg navbar-light top-navbar container" data-toggle="sticky-onscroll">
            
            <Logo />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span >   
                        <FontAwesomeIcon icon={faBars} color="white" size="3x"/>
                    </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav pull-right nav-stacked row">
                    <li  className="nav-item  my-auto">
                        <NavbarItem to="/como-jogar">Como Jogar</NavbarItem>
                    </li>
                    <li className="nav-item  my-auto">
                        <NavbarItem to="/sobre" >Sobre</NavbarItem>
                    </li>
                    <li className="nav-item  my-auto">
                        <NavbarItem to="/novo-jogo" extraClasses="btn btn-primary p-2 px-3" isLast="true">Novo Jogo</NavbarItem>
                    </li>

                </ul>

            </div>
        </nav>
        
    );
};

export default Navbar;

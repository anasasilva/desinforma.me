import React, { useContext } from 'react';
import Logo from './Logo';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import GameContext from '../../GameContext';


const NavbarItem = ({ children, isFirst, isLast, to = '/' }) => {

    let currentPath = useLocation();
    let isActive = (to === currentPath.pathname && !isLast);

    if (isLast) {
        return (
            <li className="nav-item active my-auto ml-md-4 pl-md-3 ml-lg-5 pl-lg-3">
                <Link className="px-0 btn btn-outline-dark p-2 px-3 d-md-none" to={to}>{children}</Link>
                <Link className="px-0 btn btn-primary p-2 px-3 d-none d-md-block" to={to}>{children}</Link>
                <div className="active-underline" style={{ backgroundColor: "#3182CE", width: "100%", height: (isActive ? "2px" : "0px") }} />
            </li>
        );
    }
    else {
        return (
            <li className={"nav-item active my-auto " + (!isFirst ? "ml-md-4 pl-md-3 ml-lg-5 pl-lg-3" : "")}>
                <Link className="px-0 nav-link" to={to}>{children}</Link>
                <div className="active-underline" style={{ backgroundColor: "#3182CE", width: "100%", height: (isActive ? "2px" : "0px") }} />
            </li>
        );
    }
}

const Navbar = () => {

    const { getGameState } = useContext(GameContext);

    let currentPath = useLocation();

    let btnText = '';
    if (getGameState() === 'INGAME') {
        if (currentPath.pathname === '/jogo')
            btnText = 'Jogar'
        else
            btnText = 'Voltar ao Jogo'
    }
    else if (getGameState() === 'ENDGAME')
        btnText = 'Novo Jogo'
    else
        btnText = 'Jogar'

    return (
        <nav className="navbar navbar-expand-md navbar-light top-navbar" data-toggle="sticky-onscroll">
            <div className="container">
                <Logo />
                <button className="navbar-toggler" type="button" style={{ borderColor: "#dee2e682" }} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} color="white" size="2x" />
                </button>
                <div className="pl-4 pr-3 pl-md-0 pr-md-0 mt-3 mt-md-0 mb-2 mb-md-0 navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav pull-right nav-stacked row no-gutters justify-content-between justify-content-between justify-content-md-end">
                        <NavbarItem to="/como-jogar" isFirst>Como Jogar</NavbarItem>
                        <NavbarItem to="/sobre" >Sobre</NavbarItem>
                        <NavbarItem to="/jogo" isLast>{btnText}</NavbarItem>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;

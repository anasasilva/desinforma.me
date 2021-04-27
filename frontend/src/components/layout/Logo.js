import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from '../../assets/logo.png';
import navbarBlueBackground from '../../assets/navbar-blue-background.png';
import navbarWhiteBackground from '../../assets/navbar-white-background.png';

const Logo = () => {

    return (
        <Link to="/" className="">
            <img src={navbarWhiteBackground} className="navbar-logo d-none d-md-flex" alt="navbar brand" />
            <img src={navbarBlueBackground} className="navbar-logo d-md-none" alt="navbar brand" />
        </Link>
    )
}

export default Logo;
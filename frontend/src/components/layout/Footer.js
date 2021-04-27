import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <nav className="navbar transparent navbar-light text-center">
            <small className="font-weight-light mx-auto mb-0">
                Em colaboração com o <a href="https://arquivo.pt/" className="d-inline" target="_blank">Arquivo.pt</a>. <br className="d-md-none" /> Made with <FontAwesomeIcon icon={faHeart} color="red" /> by <a href="https://github.com/anasasilva" className="d-inline" target="_blanck">Ana</a>
                , <a href="https://github.com/Erroler" className="d-inline" target="_blank">Fábio</a>
                , and <a href="https://github.com/RMoura98" className="d-inline" target="_blank">Ricardo</a>.
            </small>
        </nav>
    )
}

export default Footer;
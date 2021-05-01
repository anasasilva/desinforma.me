import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    let anaProfile = "https://www.linkedin.com/in/anasasilva/";
    let fabioProfile = "https://www.linkedin.com/in/fabio-vilela-oliveira/";
    let ricardoProfile = "https://www.linkedin.com/in/rmoura98/";

    return (
        <nav id="footer" className="navbar transparent navbar-light text-center d-none d-md-block">
            <small className="font-weight-light mx-auto mb-0">
                Em colaboração com o <a href="https://arquivo.pt/" className="d-inline" target="_blank" rel="noreferrer">Arquivo.pt</a>. <br className="d-md-none" /> Made with <FontAwesomeIcon icon={faHeart} color="red" /> by <a href={anaProfile} className="d-inline" target="_blanck">Ana</a>
                , <a href={fabioProfile} className="d-inline" target="_blank" rel="noreferrer">Fábio</a>
                , and <a href={ricardoProfile} className="d-inline" target="_blank" rel="noreferrer">Ricardo</a>.
            </small>
        </nav>
    )
}

export default Footer;
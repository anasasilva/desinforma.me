import React from "react";
import { Link } from 'react-router-dom';

const HeroText = () => {
    return (
        <div className="col-xl-7 col-12 w-100 m-0">
            <h1 className="my-3 text-md-left" id="landing-title">
                <span className="blue-secondary">Des</span>
                <span className="text-primary">informa</span>
                <span className="blue-secondary">.me</span>
            </h1>
            <p className="lead text-justify text-lg-left">
                Todos os dias milhares de notícias falsas espalham-se nas redes sociais como um vírus. Achas que as consegues identificar? Mete à prova o teu conhecimento num jogo divertido!                    </p>
            <div className="d-flex flex-column flex-md-row flex-md-row mt-md-0 mt-3">
                <Link to={'/jogo'} className="btn btn-primary col-md-5 col-lg mr-3 mt-3 mb-0 mb-md-3 py-3 py-md-2">
                    Novo Jogo
                </Link>
                <Link to={'/como-jogar'} className="btn btn-secondary col-md-5 col-lg my-3 py-3 py-md-2">
                    Como Jogar
                </Link>
            </div>
        </div>
    )
}

export default HeroText;
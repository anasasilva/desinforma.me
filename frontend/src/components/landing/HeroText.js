import React from "react";
import { Link } from 'react-router-dom';

const HeroText = () => {
    return (
        <div className="col-xl-7 col-12 w-100 m-0">
            <h1 className="my-3 text-md-left" style={{ fontSize: "3.6rem", textShadow: '1px 1px 0 #cccccc70, 2px 2px 0 #ccc, 3px 3px 0 #4444442e, 2px 2px 0 #44444452, 2px 2px 0 #4444441f' }}>
                <span className="blue-secondary">Des</span>
                <span className="text-primary">informa</span>
                <span className="blue-secondary">.me</span>
            </h1>
            <p className="lead text-justify text-lg-left">
                Todos os dias são milhares de notícias falsas espalham-se nas redes sociais como um virus. Achas que as consegues identificar? Mete à prova o teu conhecimento num jogo divertido!                    </p>
            <div className="d-inline flex-column flex-md-row mt-md-0 mt-5">
                <Link to={'/jogo'} className="btn btn-primary col-md-5 col-lg mr-3 my-3 py-3 py-md-2 w-50">
                    Novo Jogo
                </Link>
                {/* <Link to={'/jogo'} className="btn btn-secondary col-md-5 col-lg my-3 py-3 py-md-2 w-100">
                    Como Jogar
                </Link> */}
            </div>
        </div>
    )
}

export default HeroText;
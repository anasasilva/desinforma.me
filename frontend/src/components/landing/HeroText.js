import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import GameContext from "../../GameContext";

const HeroText = () => {

    const { getGameState } = useContext(GameContext);

    let btnText = '';
    if (getGameState() === 'INGAME') {
        btnText = 'Voltar ao Jogo';
    }
    else
        btnText = 'Novo Jogo';

    return (
        <div className="col-xl-7 col-12 w-100 m-0">
            <div className="d-xl-none w-100 nice-shadow mb-3" id="hero-img">
            </div>
            <h1 className="my-2 my-md-3 text-md-left" id="landing-title">
                <span className="blue-secondary">Des</span>
                <span className="text-primary">informa</span>
                <span className="blue-secondary">.me</span>
            </h1>
            {/* SHORT VERSION*/}
            <p className="lead text-justify text-lg-left mb-0 d-md-none">
                Descobre se consegues distinguir notícias falsas neste jogo divertido!
            </p>
            {/* LONG VERSION*/}
            <p className="lead text-justify text-lg-left mb-0 d-none d-md-inline">
                Todos os dias milhares de notícias falsas espalham-se nas redes sociais como um vírus. Achas que as consegues identificar? Mete à prova o teu conhecimento num jogo divertido!
            </p>
            <div className="d-flex flex-column flex-md-row flex-md-row mt-md-0 mt-2">
                <Link to={'/jogo'} className="btn btn-primary col-md-5 col-lg mr-3 mt-3 mb-0 mb-md-3 py-3 py-md-2">
                    {btnText}
                </Link>
                <Link to={'/como-jogar'} className="btn btn-secondary col-md-5 col-lg my-3 py-3 py-md-2">
                    Como Jogar
                </Link>
            </div>
        </div>
    )
}

export default HeroText;
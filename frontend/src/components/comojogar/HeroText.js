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
        <div className="col-lg-6 col-12  w-100 m-0 p-0">
            <h1 className="mt-2 mb-4 my-md-5 text-md-left" id="landing-title">
                <span className="blue-secondary">Como </span>
                <span className="text-primary">Jogar?</span>
            </h1>
            <p className="lead text-justify text-lg-left">
                Neste jogo tens de saber <strong>distinguir notícias verdadeiras das falsas</strong>. 
                O objetivo é conseguires classificar corretamente o <strong>maior número de notícias</strong>.
            </p>
            {/* SHORT VERSION*/}
            <p className="lead text-justify text-lg-left d-md-none">
                Arrasta uma notícia para a <strong>direita</strong> se achares que é <strong>verdadeira</strong> e para a <strong>esquerda</strong> se te parecer <strong>falsa</strong>.
            </p>
            {/* LONG VERSION*/}
            <p className="lead text-justify text-lg-left d-none d-md-block">
                Arrasta uma notícia para a <strong>direita</strong> se achares que é <strong>verdadeira</strong> e para a <strong>esquerda</strong> se te parecer <strong>falsa</strong>
                , ou carrega nos botões de baixo da notícia.            
            </p>
            <p className="lead text-justify text-lg-left">
                Se acertares, o jogo continua e a tua pontuação vai aumentando.
                Prova que consegues encontrar a verdade e vê em quantas notícias consegues acertar corretamente!
            </p>
            <div className="d-flex flex-column flex-md-row flex-md-row mt-md-0 mt-2">
                <Link to={'/jogo'} className="btn btn-primary col-md-5 col-lg mr-3 mt-3 mb-0 mb-md-3 py-3 py-md-2">
                    {btnText}
                </Link>
                <Link to={'/sobre'} className="btn btn-secondary col-md-5 col-lg my-3 py-3 py-md-2">
                    Sobre
                </Link>
            </div>
        </div>
    )
}

export default HeroText;
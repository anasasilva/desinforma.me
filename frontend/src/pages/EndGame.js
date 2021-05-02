import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import GameContext from "../GameContext";
import SmallCard from "../components/SmallCard"
import SocialButtons from "../components/SocialButtons";
import { FaTrophy, FaHourglass, GrPowerReset } from "react-icons/fa";
import ReactCanvasConfetti from 'react-canvas-confetti';
import { Link } from "react-router-dom";

const EndGame = () => {

    const { getGameState, getActiveNews, getGameDuration, isNewRecord } = useContext(GameContext);

    const answeredNews = getActiveNews().filter(_new => (_new.isOutOfScreen || _new.wasSwiped));
    const points = answeredNews.filter(_new => _new.wasAnsweredRight).length;

    const failedNews = answeredNews.filter(_new => !_new.wasAnsweredRight);
    const failedNew = failedNews[failedNews.length - 1];
    const rightNews = answeredNews.filter(_new => _new.wasAnsweredRight);

    const hours = Math.floor(getGameDuration() / 3600)
    const minutes = Math.floor((getGameDuration() - (hours * 3600)) / 60);
    const seconds = getGameDuration() - (hours * 3600) - (minutes * 60);
    let stringTime = "";
    if (hours > 0) stringTime = hours.toString().padStart(2, "0") + " h e " + minutes.toString().padStart(2, "0") + " min";
    else stringTime = minutes.toString().padStart(2, "0") + " min e " + seconds.toString().padStart(2, "0") + " seg";

    const refConfetti = React.createRef();

    useEffect(() => {
        if (isNewRecord()) {
            setTimeout(() => refConfetti?.current?.confetti(), 800);
        }
    }, []);

    if (getGameState() !== "GAME_OVER") {
        return <Redirect to='/' />
    }

    const infoSection = () => {
        return (
            <div id="end-game-info border">
                <h1 className="text-center mt-1 mt-md-3 mb-4 display-5 d-none">Estatísticas</h1>
                <div className="text-center my-4 my-md-5">
                    <h5 className="mx-auto pb-2">
                        <div className="badge badge-dark p-2 px-3 no-select">
                            <FaTrophy />&nbsp;&nbsp;Pontuação
                        </div>
                    </h5>
                    <h5 className="mx-auto pb-2">{points} pontos</h5>
                </div>
                <div className="text-center my-4 my-md-5">
                    <h5 className="mx-auto pb-2">
                        <div className="badge badge-dark p-2 px-3 no-select">
                            <FaHourglass />&nbsp;&nbsp;Tempo Gasto
                        </div>
                    </h5>
                    <h5 className="mx-auto pb-2">{stringTime} </h5>
                </div>
                <div className="text-center my-4 my-md-5">
                    <h5 className="mx-auto pb-2">Partilha a tua pontuação!</h5>
                    <SocialButtons text={
                        (isNewRecord() ? "Bati o meu record! " : "") +
                        (hours === 0 && minutes > 1 ?
                            "Consegui acertar " + points + " noticias em " + minutes + " minutos! " :
                            "Consegui acertar em " + points + " noticias! ") +
                        "Achas que consegues fazer melhor? "}
                        iconSize="45" />
                </div>
                <div className="text-center my-4 my-md-5">
                    <Link to={'/jogo'} className="btn btn-primary py-3 py-md-2 px-5">
                        Novo jogo
                    </Link>
                </div>
            </div>
        )
    }

    const newsSection = () => {
        return (
            <div id="accordion">
                <h2 className="text-center mt-3 mt-md-3 mb-4 display-5 d-none">Notícias</h2>
                <h5 className="my-2 mb-md-3">Resposta Errada</h5>
                <SmallCard news={failedNew} index={0} />
                <h5 className="my-2 mt-md-4 mb-md-3">Respostas Corretas</h5>
                {rightNews.length === 0 && <div className="text-muted small text-center mt-2 mb-3">Parece que não acertaste nenhuma...</div>}
                {rightNews.map((news, index) => {
                    return (
                        <SmallCard news={news} index={index + 1} key={index} />
                    )
                })}
            </div>
        )
    }


    return (
        <>
            <ReactCanvasConfetti
                className="no-pointer-events position-fixed w-100 h-100"
                ref={refConfetti}
                style={{ zIndex: 1000, top: '10em' }}
                origin={{ x: 0.5, y: 0.5 }}
                particleCount={100}
                startVelocity={60}
                gravity={1.2}
                angle={90}
                spread={360}
            />
            <div>
                <h1 className="mt-5 mb-4 my-md-5 text-center" id="landing-title">
                    <span className="blue-secondary">Fim de</span>
                    <span className="text-primary"> Jogo</span>
                </h1>
                <div className="row align-items-start mx-auto w-100">
                    <div className="col-md-5 col-12 border-right border-hide-phone">
                        {infoSection()}
                    </div>

                    <div className="offset-lg-1 col-md-6 col-12 px-0 px-md-3 px-lg-0">
                        {newsSection()}
                    </div>
                </div>
            </div>
        </>
    )

}

export default EndGame;
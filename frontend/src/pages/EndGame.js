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

    const hours = Math.floor(getGameDuration() / 3600)
    const minutes = Math.floor((getGameDuration() - (hours * 3600)) / 60);
    const seconds = getGameDuration() - (hours * 3600) - (minutes * 60);
    let stringTime = "";
    if (hours > 0) stringTime = hours.toString().padStart(2, "0") + " h e " + minutes.toString().padStart(2, "0") + " min";
    else stringTime = minutes.toString().padStart(2, "0") + " min e " + seconds.toString().padStart(2, "0") + " seg";

    const refConfetti = React.createRef();

    useEffect(() => {
        if (isNewRecord()) {
            console.log(refConfetti.current);
            setTimeout(() => refConfetti?.current?.confetti(), 800);
        }
    }, []);

    if (getGameState() !== "GAME_OVER") {
        return <Redirect to='/' />
    }

    const infoSection = () => {
        return (
            <div id="end-game-info">
                <h1 className="text-center  my-4 my-md-5 display-4">Fim do Jogo</h1>
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
                <h2 className="text-center my-4 my-md-5 h1 font-weight-light">Notícias</h2>
                {answeredNews.map((news, index) => {
                    return (
                        <SmallCard news={news} index={index} key={index} />
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
            <div className="row align-items-start mx-auto w-100">
                <div className="col-md-5 col-12">
                    {infoSection()}
                </div>

                <div className="col-md-7 col-12">
                    {newsSection()}
                </div>
            </div>
        </>
    )

}

export default EndGame;
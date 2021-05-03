import React, { useContext, useEffect, createRef } from "react";
import { Redirect } from "react-router";
import GameContext from "../GameContext";
import SmallCard from "../components/SmallCard"
import SocialButtons from "../components/SocialButtons";
import { FaTrophy, FaHourglass, FaEye, FaEyeSlash } from "react-icons/fa";
import ReactCanvasConfetti from 'react-canvas-confetti';
import { Link } from "react-router-dom";
import recordGif from '../assets/record.gif';


const EndGame = () => {


    const eyeRef = createRef()
    const eyeSlashRef = createRef()

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
    if (hours > 0) stringTime = hours.toString() + " hora" + (hours === 1 ? "" : "s");
    else if(minutes > 0) stringTime = minutes.toString() + " minuto" + (minutes === 1 ? "" : "s");
    else stringTime = seconds.toString() + " segundo" + (seconds === 1 ? "" : "s");

    const refConfetti = React.createRef();

    const getFireworkSettings = (minX, maxX) => {
        return {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 50,
            origin: {
                x: Math.random() * (maxX - minX) + minX,
                y: Math.random() * (0.9 - 0.1) + 0.1
            }
        }
    };

    useEffect(() => {
        if (isNewRecord()) {
            for (let i = 1; i <= 6; i++) {
                setTimeout(() => {
                    refConfetti?.current?.confetti(getFireworkSettings(0.2, 0.4))
                    refConfetti?.current?.confetti(getFireworkSettings(0.6, 0.9))
                }, i * 800);
            }
        }
    }, []);

    if (getGameState() !== "GAME_OVER") {
        return <Redirect to='/' />
    }

    const infoSection = () => {

        const showNewRecordSection = () => {
            if (isNewRecord()) {
                return (
                    <div className="d-flex align-items-center no-select justify-content-center row mx-lg-5">
                        <h4 className=" col-12 col-lg-7 mt-2 order-lg-12 text-center text-lg-left p-0 my-0">Novo Record!</h4>
                        <img className=" col-6 col-lg-4 order-lg-1 p-0" src={recordGif} alt="Novo recorde." style={{ width: '100px' }} />
                    </div>
                )
            }
            return (<></>)
        }

        return (
            <div id="end-game-info">
                <h1 className="text-center mt-1 mt-md-3 mb-4 display-5 d-none">Estatísticas</h1>
                {/* <div className="d-flex">

                    <div className="w-lg-50 w-75 d-bock mx-auto my-4 my-md-5" style={{display: 'grid'}}>
                        <div className="badge badge-dark p-2 px-3 no-select border-right" style={{borderRadius: '.25rem 0 0 0'}}>
                            <FaTrophy />&nbsp;&nbsp;Pontuação
                        </div>
                        <div className="text-center py-3 border h5"  style={{borderRadius: '0 0 0 .25rem'}}>
                            {points} pontos
                        </div>
                    </div>
                    <div className="w-lg-50 w-75 d-bock mx-auto my-4 my-md-5" style={{display: 'grid'}}>
                        <div className="badge badge-dark p-2 px-3 no-select" style={{borderRadius: '0 .25rem 0 0'}}>
                            <FaHourglass />&nbsp;&nbsp;Tempo Gasto
                        </div>
                        <div className="text-center py-3 border h5"  style={{borderRadius: '0 0 .25rem 0'}}>
                            {stringTime}
                        </div>
                        
                    </div>
                </div> */}
                { showNewRecordSection()}

                <div className="w-lg-50 w-75 d-bock mx-auto my-4 my-md-5 nice-shadow" style={{ display: 'grid' }}>
                    <div className="badge badge-dark p-2 px-3 no-select border-right" style={{ borderRadius: '.25rem .25rem 0 0' }}>
                        <FaTrophy />&nbsp;&nbsp;Pontuação
                        </div>
                    <div className="text-center py-3 border h5 mb-0" style={{ borderRadius: '0 0 .25rem .25rem' }}>
                        {points} pontos
                        </div>
                </div>
                <div className="w-lg-50 w-75 d-bock mx-auto mt-4 mb-5 my-md-5 nice-shadow" style={{ display: 'grid' }}>
                    <div className="badge badge-dark p-2 px-3 no-select" style={{ borderRadius: '.25rem .25rem 0 0' }}>
                        <FaHourglass />&nbsp;&nbsp;Tempo Gasto
                        </div>
                    <div className="text-center py-3 border h5 mb-0" style={{ borderRadius: '0 0 .25rem .25rem' }}>
                        {stringTime}
                    </div>

                </div>
                <div className="text-center my-4 my-md-5">
                    <h5 className="mx-auto pb-2">Partilha a tua pontuação!</h5>
                    <SocialButtons text={
                        (isNewRecord() ? "Bati o meu record! " : "") +
                        (hours === 0 && minutes > 1 ?
                            "Consegui acertar " + points + " notícias em " + minutes + " minutos! " :
                            "Consegui acertar em " + points + " notícias! ") +
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


    const phoneToggleFake = (e) => {
        eyeRef.current.classList.toggle('d-none');
        eyeSlashRef.current.classList.toggle('d-none');
        document.querySelectorAll('.hover-toggle').forEach(e => {
            e.classList.toggle('simulated-hover');
        })
    }


    return (
        <>
            <div className="no-underline create-ticket-button action-button" onClick={phoneToggleFake} style={{ zIndex: 100, opacity: .7 }}>
                <button className="btn btn-circle d-flex d-md-none  center" >
                    <div className="row mx-auto center">
                        <div ref={eyeSlashRef}>
                            <FaEyeSlash />
                        </div>
                        <div className="d-none" ref={eyeRef} >
                            <FaEye />
                        </div>
                    </div>
                </button>
            </div>
            <ReactCanvasConfetti
                className="no-pointer-events position-fixed w-100 h-100"
                ref={refConfetti}
                style={{ zIndex: 1000, top: '0em' }}
                origin={{ x: 0.5, y: 0.5 }}
                particleCount={100}
                startVelocity={60}
                gravity={1.2}
                angle={90}
                spread={360}
            />
            <div className="w-100">
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
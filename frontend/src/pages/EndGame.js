import React, { useContext, useEffect  } from "react";
import { Redirect } from "react-router";
import GameContext from "../GameContext";
import SmallCard from "../components/SmallCard"
import SocialButtons from "../components/SocialButtons";
import { FaTrophy, FaHourglass, GrPowerReset } from "react-icons/fa";
import ReactCanvasConfetti from 'react-canvas-confetti';

const EndGame = () => {

    const { getGameState, getActiveNews, getGameDuration } = useContext(GameContext);

    const answeredNews = getActiveNews().filter(_new => _new.isOutOfScreen || _new.wasSwiped);

    const points = answeredNews.length;
    const maxPoints = parseInt(localStorage.getItem('record-points')) || 0;

    const hours   = Math.floor(getGameDuration() / 3600)
    const minutes = Math.floor((getGameDuration() - (hours * 3600)) / 60);
    const seconds = getGameDuration() - (hours * 3600) - (minutes * 60);
    let stringTime = "";
    if (hours > 0) stringTime = hours.toString().padStart(2, "0") + " h e " + minutes.toString().padStart(2, "0") + " min";
    else stringTime = minutes.toString().padStart(2, "0") + " min e " + seconds.toString().padStart(2, "0") + " seg";

    const brokeRecord = points > maxPoints;

    if (brokeRecord) {
        localStorage.setItem('record-points', points);
    }


    let refConfetti = React.createRef()
    useEffect(() => {
        if (brokeRecord) {
            setTimeout(() => refConfetti?.current.confetti(), 800);
        }
    });

    if (getGameState() !== "GAME_OVER") {
        return <Redirect to='/' />
    }

    
        
    
    const infoSection = () => {
        return (
            <div>   
                <h1 className="text-center  my-4 my-md-5">Fim do Jogo</h1>
                <div className="text-center my-4 my-md-5">
                    <h5 className="mx-auto pb-2"><FaTrophy/> Pontuação</h5>
                    <h5 className="mx-auto pb-2">{points} certas</h5>
                </div>
                <div className="text-center my-4 my-md-5">
                    <h5 className="mx-auto pb-2"><FaHourglass/> Tempo Total</h5>
                    <h5 className="mx-auto pb-2">{ stringTime} </h5>
                </div>
                <div className="text-center my-4 my-md-5">
                    <h5 className="mx-auto pb-2">Partilha a tua pontuação</h5>
                    <SocialButtons text={
                        (brokeRecord ? "Bati o meu record! " : "") + 
                        (hours === 0 && minutes > 1 ?
                            "Consegui acertar " + points + " noticias em " + minutes + " minutos! ":
                            "Consegui acertar em " + points + " noticias! ") +
                        "Achas que consegues fazer melhor? " } 
                    iconSize="45"/>
                </div>
            </div>
        )
    }

    const newsSection = () => {
        return (
                <div id="accordion">
                {answeredNews.map((news, index) => {
                    return (
                        <SmallCard news={news} index={index}/>
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
            style={{ zIndex: 1000 }}
            origin={{ x: 0.5, y: 0.5 }}
            particleCount={100}
            startVelocity={60}
            gravity={1.2}
            angle={90}
            spread={360}
            />
            <div className="row align-items-center mx-auto w-100">
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
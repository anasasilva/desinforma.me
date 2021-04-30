import React, { useContext } from "react";
import { Redirect } from "react-router";
import SmallCard from '../components/SmallCard';
import { GiSandsOfTime, GiTrophyCup, GiCheckMark, GiCrossMark } from "react-icons/gi";
import GameContext from "../GameContext";

const EndGame = () => {

    const { getGameState, getGameDuration, getSwippedNews } = useContext(GameContext);

    if (getGameState() !== "GAME_OVER") {
        return <Redirect to='/' />
    }

    const answeredNews = getSwippedNews();
    const trueNews = answeredNews.filter(news => !news.isFake);
    const fakeNews = answeredNews.filter(news => news.isFake);

    const points = answeredNews.length;
    const maxPoints = parseInt(localStorage.getItem('record-points')) || 0;

    const minutes = Math.floor(getGameDuration() / 60);
    const seconds = getGameDuration() % 60;

    if (points > maxPoints) {
        localStorage.setItem('record-points', points);
    }

    let maxPointsMessage = "";
    if (points > maxPoints) {
        maxPointsMessage = "Novo Recorde!";
    } else {
        maxPointsMessage = "Recorde: " + maxPoints;
    }

    return (
        <div className="d-flex align-items-center flex-column justify-content-start h-end-game">

            <h1 id="landing-title">
                <span className="blue-secondary">{points}</span>
                <span className="text-primary"> acertadas</span>
                {/* <span className="blue-secondary">.me</span> */}
            </h1>
            <div className="d-flex justify-content-around w-75 mt-4 mb-2">
                <h5><GiSandsOfTime className="mr-2" />Tempo: {minutes}:{seconds}</h5>
                <h5><GiTrophyCup className="mr-2" /> {maxPointsMessage}</h5>
                <h5><GiCheckMark className="mr-2" />{trueNews.length} Notícias verídicas</h5>
                <h5><GiCrossMark className="mr-2" />{fakeNews.length} Notícias falsas</h5>
            </div>
            <div className="row w-100 mt-4">
                <div className="col-6" >
                    <div className="hover-show ready stamp sm-stamp" data-type="genuine" />
                    {trueNews.map((news, index) => {
                        return (
                            <SmallCard news={news} key={index} />
                        )
                    })}
                </div>
                <div className="col-6" >
                    <div className="hover-show ready stamp sm-stamp" data-type="fake" />
                    {fakeNews.map((news, index) => {
                        return (
                            <SmallCard news={news} key={index} />
                        )
                    })}
                </div>

            </div>
        </div>
    )

}

export default EndGame;
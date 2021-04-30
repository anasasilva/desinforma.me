import React, { useContext } from "react";
import { Redirect } from "react-router";
import SmallCard from '../components/SmallCard';
import { GiSandsOfTime, GiTrophyCup, GiCheckMark, GiCrossMark } from "react-icons/gi";
import GameContext from "../GameContext";
import SocialButtons from "../components/SocialButtons";

const EndGame = () => {

    const { getGameState, getActiveNews, getGameDuration } = useContext(GameContext);

    if (getGameState() !== "GAME_OVER") {
        return <Redirect to='/' />
    }

    const answeredNews = getActiveNews().filter(_new => _new.isOutOfScreen || _new.wasSwiped);
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
            <h1>Fim do Jogo</h1>
            <div className="row w-100 mt-3">
                {/* <div className="col-12 my-1">
                    <h5 className="text-center mx-auto"> 4 certas, {maxPointsMessage}</h5>
                </div> */}
                {/* <div className="col-12 my-1">
                    <h5 className="text-center mx-auto">
                        {minutes > 0 ? (minutes + " min " + seconds + " s") : ("Tempo gasto: " + seconds + " seg")}
                    </h5>
                </div> */}
                <div className="col-12 text-center mt-2 mb-5">
                    <h5 className="mx-auto pb-2">Partilha a tua pontuação:
                    </h5>
                    <SocialButtons />
                </div>
                {/* <div className="col-12 my-3 pb-5">
                    <div class="d-flex justify-content-between align-items-end">
                        <div className="w-podium d-flex flex-column align-items-baseline h-100">
                            <h4 className="text-center mx-auto"><GiSandsOfTime className="mr-2" />
                            { minutes > 0 ? (minutes + " min " + seconds + " s") : (seconds + " s")}</h4>
                            <div id="podium1" className="d-flex justify-content-center w-100">
                            </div>
                        </div>
                        <div className="w-podium d-flex flex-column align-items-baseline">
                            <h2 className="text-center mx-auto">4 certas</h2>
                            <div id="podium0" className="d-flex justify-content-center w-100">
                                <h5 className="text-white mt-3" ><GiTrophyCup className="mr-2 text-white" /> {maxPointsMessage}</h5>
                            </div>
                        </div>
                        <div className="w-podium d-flex flex-column align-items-baseline">
                            <h4 className="text-center mx-auto">Partilha o resultado</h4>
                            <div id="podium2" className="d-flex justify-content-center w-100">
                                <SocialButtons />
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="col-6 text-center">
                    <h1>
                        <span className="blue-secondary">Partilha</span>
                        <span className="text-primary"> o teu </span>
                        <span className="blue-secondary">resultado</span>
                    </h1>
                    <div className="my-3" >
                    </div>
                    <div className="d-flex justify-content-around mt-4 mb-2">
                        <h5><GiSandsOfTime className="mr-2" />Tempo: {minutes}:{seconds}</h5>
                        <h5><GiTrophyCup className="mr-2" /> {maxPointsMessage}</h5>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <h3>
                        <span className="blue-secondary">Partilha</span>
                        <span className="text-primary"> o teu </span>
                        <span className="blue-secondary">resultado</span>
                    </h3>
                    <div className="my-3" >
                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-2">
                        <SocialButtons />
                    </div>
                </div> */}
                <div className="col-6" >
                    <h4 className="text-center mb-4 pb-2">Notícias verdadeiras</h4>
                    {/* <div className="hover-show ready stamp sm-stamp" data-type="genuine" /> */}
                    {trueNews.map((news, index) => {
                        return (
                            <SmallCard news={news} key={index} />
                        )
                    })}
                </div>
                <div className="col-6" >
                    <h4 className="text-center mb-4 pb-2">Notícias falsas</h4>
                    {/* <div className="hover-show ready stamp sm-stamp" data-type="fake" /> */}
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
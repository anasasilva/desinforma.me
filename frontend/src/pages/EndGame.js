import React from "react";
import { Redirect } from "react-router";
import SmallCard from '../components/SmallCard';

const EndGame = (props) => {

    const history = props.history;

    if (!history || !props.history.location.state) {
        return <Redirect to={'/'} />
    }

    const data = props.history.location.state;
    const { allNewStr, removedStr } = data;
    const allNews = JSON.parse(allNewStr);
    const answeredNews = JSON.parse(removedStr);

    const newsToUse = allNews.filter(news => answeredNews.includes(news._id));

    const nrFake = newsToUse.filter(news => news.isFake).length;
    const nrTrue = newsToUse.length - nrFake;

    const points = answeredNews.length;
    const maxPoints = parseInt(localStorage.getItem('record-points')) || 0;

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
            <h1>{points} acertadas</h1>
            <div className="d-flex justify-content-around w-75 my-3">
                <p>Tempo: 4 minutos</p>
                <p>{maxPointsMessage}</p>
                <p>{nrTrue} Notícias verdadeiras</p>
                <p>{nrFake} Notícias falsas</p>
            </div>
            <div className="row w-100">
                    {newsToUse.map((news, index) => {
                    return (
                        <div className="col-6 my-2" key={index}>
                            <SmallCard news={news} />
                        </div>
                    )
                })}

            </div>
        </div>
    )

}

export default EndGame;
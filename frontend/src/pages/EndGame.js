import React from "react";
import { Redirect } from "react-router";
import SmallCard from '../components/SmallCard';
import { GiSandsOfTime, GiTrophyCup, GiCheckMark, GiCrossMark } from "react-icons/gi";

const EndGame = (props) => {

    const history = props.history;

    if (!history || !props.history.location.state) {
        return <Redirect to={'/'} />
    }

    const data = props.history.location.state;
    const { allNewStr, removedStr, duration } = data;
    const allNews = JSON.parse(allNewStr);
    const answeredNews = JSON.parse(removedStr);

    const trueNews = allNews.filter(news => answeredNews.includes(news._id) && !news.isFake);
    const fakeNews = allNews.filter(news => answeredNews.includes(news._id) && news.isFake);

    const nrFake = fakeNews.length;
    const nrTrue = trueNews.length;

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

            <h1 id="landing-title">
                <span className="blue-secondary">{points}</span>
                <span className="text-primary"> acertadas</span>
                {/* <span className="blue-secondary">.me</span> */}
            </h1>
            <div className="d-flex justify-content-around w-75 mt-4 mb-2">
                <h5><GiSandsOfTime className="mr-2"/>Tempo: {duration}</h5>
                <h5><GiTrophyCup className="mr-2" /> {maxPointsMessage}</h5>
                <h5><GiCheckMark className="mr-2" />{nrTrue} Notícias verídicas</h5>
                <h5><GiCrossMark className="mr-2" />{nrFake} Notícias falsas</h5>
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
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import TinderCard from 'react-tinder-card';
import '../styling/Game.css';
import EndGame from '../components/EndGame';
import CardContent from '../components/CardContent';
import NewsService from '../services/NewsService';


const alreadyRemoved = []
const debug = false;

const Game = () => {
  const [activeNews, setActiveNews] = useState([]);
  const [playing, setPlaying] = useState(true);
  const [maxPointsMsg, setMaxPointsMsg] = useState("");
  const history = useHistory();

  const fetchNews = async () => {
    const news = await NewsService.fetchNews();
    const newsWithChildRef = news.map(obj => ({ ...obj, childRef: React.createRef() }));
    setActiveNews([...activeNews, ...newsWithChildRef]);
    NewsService.setNewsAsSeen(news.map((seenNew) => seenNew._id));
  }

  const showEndGame = () => {

    const points = alreadyRemoved.length;

    let maxPoints = parseInt(localStorage.getItem('record-fake'));

    if (!maxPoints || (maxPoints && maxPoints < points)) {
      localStorage.setItem('record-fake', points);
      setMaxPointsMsg("Novo Recorde!");
    }
    else {
      setMaxPointsMsg("Recorde: " + maxPoints)
    }
    setPlaying(false);

  }

  const swiped = (dir, news) => {

    if (!alreadyRemoved.includes(news._id)) {
      alreadyRemoved.push(news._id)
    }

    // left = fake news; right = true news
    if (((dir === 'left' && !news.isFake) || (dir === 'right' && news.isFake)) && !debug) {
      showEndGame();
    }
  };

  const outOfFrame = () => {
    if (activeNews.length < alreadyRemoved.length + 6) {
      fetchNews();
    }
  }

  const swipe = (dir, isFake) => {
    const cardsLeft = activeNews.filter(news => !alreadyRemoved.includes(news._id))
    const toBeRemoved = cardsLeft[cardsLeft.length - 1]._id // Find the card object to be removed
    const index = activeNews.map(news => news._id).indexOf(toBeRemoved) // Find the index of which to make the reference to

    if (cardsLeft.length) {
      if (isFake != cardsLeft[cardsLeft.length - 1].isFake && !debug) {
        showEndGame();
      }
      else if (!alreadyRemoved.includes(toBeRemoved)) {
        alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
        activeNews[index].childRef.current.swipe(dir) // Swipe the card!
      }
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  if (activeNews.length === 0) {
    return (
      <div>Loading!</div>
    );
  }

  else {

    return (
      <div className="container d-block my-3">
        <div className="pt-md-4">
          <div className=" center">
            <div className={'cardContainer ' + (!playing ? " flipped" : "")}>
              <div className="front">
                <div className='card card-shadow p-2 position-absolute' />
                {playing ? activeNews.map((news, index) => {
                  if (!alreadyRemoved.includes(news._id)) {
                    return (
                      <TinderCard ref={news.childRef} className='position-absolute' preventSwipe={['up', 'down']} key={index} onSwipe={(dir) => swiped(dir, news)} onCardLeftScreen={() => outOfFrame()}>
                        <CardContent news={news} />
                      </TinderCard>
                    )
                  }
                }
                )
                  :
                  <></>
                }
              </div>
              <div className="back">
                {
                  !playing ? <EndGame points={alreadyRemoved.length} maxPointsMsg={maxPointsMsg} /> : <></>
                }
              </div>
            </div>
            {
              playing ?
                (
                  <div className='buttons d-none d-md-block'>
                    <button onClick={() => swipe('left', true)}>Falsa</button>
                    <button onClick={() => swipe('right', false)}>Verdadeira</button>
                  </div>
                )
                :
                (
                  <div className='buttons d-none d-md-block'>
                    <button onClick={() => history.goBack()}>Voltar</button>
                    <button onClick={() => history.go(0)}>Novo Jogo</button>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Game;

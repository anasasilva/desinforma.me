import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import TinderCard from 'react-tinder-card';
import axios from 'axios';
import '../styling/Game.css';
import EndGame from '../components/EndGame';
import CardContent from '../components/CardContent';


const alreadyRemoved = []
const debug = false;

function Game() {
  const [activeNews, setActiveNews] = useState([])
  const [playing, setPlaying] = useState(true)
  const [maxPointsMsg, setMaxPointsMsg] = useState("")
  const [loading, setLoading] = useState(true)

  const previousGameNews = JSON.parse(localStorage.getItem("previous-fake"));

  const history = useHistory();

  useEffect(() => {
    db_request();
  }, [])

  const db_request = () => {

    let excludeIds = activeNews.map(news => news._id);

    if (previousGameNews)
      excludeIds = [...excludeIds, ...previousGameNews]

    axios.post(`${process.env.REACT_APP_API_URL}/api/news`, {
      count_real: 5,
      count_fake: 5,
      exclude_news_with_ids: excludeIds
    })
      .then(function (response) {

        let newNews = response.data;
        newNews = newNews.map(obj => ({ ...obj, childRef: React.createRef() }));

        setActiveNews(oldActiveNews => [...newNews, ...oldActiveNews])
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const showEndGame = () => {

    const points = alreadyRemoved.length;

    if (previousGameNews)
      localStorage.setItem("previous-fake", JSON.stringify([...activeNews.map(news => news._id), ...previousGameNews]))
    else
      localStorage.setItem("previous-fake", JSON.stringify(activeNews.map(news => news._id)))

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
      db_request();
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

  if (loading) {

    return (
      <div>Hello world!</div>
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

import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import TinderCard from 'react-tinder-card';
import '../styling/Game.css';
import CardContent from '../components/CardContent';
import NewsService from '../services/NewsService';


const alreadyRemoved = []
const debug = false;

const Game = () => {
  const [activeNews, setActiveNews] = useState([]);
  const history = useHistory();

  const fetchNews = async () => {
    const news = await NewsService.fetchNews();
    const newsWithChildRef = news.map(obj => ({ ...obj, childRef: React.createRef() }));
    setActiveNews([...activeNews, ...newsWithChildRef]);
    NewsService.setNewsAsSeen(news.map((seenNew) => seenNew._id));
  }

  const gotoEndGame = () => {

    const points = alreadyRemoved.length;
    const maxPoints = parseInt(localStorage.getItem('record-points')) || 0;

    if (points > maxPoints) {
      localStorage.setItem('record-points', points);
    }

    history.push({
      pathname: '/fim-jogo',
      state: { points, maxPoints }
    });

  }

  const swiped = (dir, news) => {

    if (!alreadyRemoved.includes(news._id)) {
      alreadyRemoved.push(news._id)
    }

    // left = fake news; right = true news
    if (((dir === 'left' && !news.isFake) || (dir === 'right' && news.isFake)) && !debug) {
      gotoEndGame();
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
        gotoEndGame();
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
      <div className="container container-game d-block my-3">
        <div className="pt-md-4">
          <div className=" center">
            <div className='cardContainer'>
              <div className="front">
                <div className='card card-shadow p-2 position-absolute' />
                {activeNews.map((news, index) => {
                  if (!alreadyRemoved.includes(news._id)) {
                    return (
                      <TinderCard ref={news.childRef} className='position-absolute' preventSwipe={['up', 'down']} key={index} onSwipe={(dir) => swiped(dir, news)} onCardLeftScreen={() => outOfFrame()}>
                        <CardContent news={news} />
                      </TinderCard>
                    )
                  }
                })}
              </div>
            </div>
            <div className='buttons d-none d-md-block'>
              <button onClick={() => swipe('left', true)}>Falsa</button>
              <button onClick={() => swipe('right', false)}>Verdadeira</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;

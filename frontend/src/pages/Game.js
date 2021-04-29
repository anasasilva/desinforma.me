import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import '../styling/Game.css';
import CardContent from '../components/CardContent';
import NewsService from '../services/NewsService';


const alreadyRemoved = []
const debug = false;

const Game = () => {
  const [activeNews, setActiveNews] = useState([]);
  const [startTime, setStartTime] = useState(0);
  const history = useHistory();

  const fetchNews = () => {
    NewsService.fetchNews()
    .then((response) => {
        const news = response.data;
        if (news.length == 0) {
            NewsService.clearSeenNews()
            fetchNews();
        } else {        
            const newsWithChildRef = news.map(obj => ({ ...obj, childRef: React.createRef() }));
            setActiveNews(oldActiveNews => [...newsWithChildRef, ...oldActiveNews]);
            setStartTime(performance.now());
        }
     
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const gotoEndGame = () => {

    NewsService.setNewsAsSeen(alreadyRemoved);
    
    const allNewStr = JSON.stringify(activeNews);
    const removedStr = JSON.stringify(alreadyRemoved);
    const gameDuration = performance.now() - startTime;

    history.push({
      pathname: '/fim-jogo',
      state: { allNewStr, removedStr, gameDuration }
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

    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1]._id // Find the card object to be removed
      const index = activeNews.map(news => news._id).indexOf(toBeRemoved) // Find the index of which to make the reference to
  
      if (isFake != cardsLeft[cardsLeft.length - 1].isFake && !debug) {
        alreadyRemoved.push(toBeRemoved)
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
      /* PLACEHOLDER */
    return (
      <div className='container container-game d-block mb-3'>
        <div className='center'>
          <div className='cardContainer mt-2'>
          <div className="no-select"/>
                <div className="card p-0 h-100 overflow-hidden w-100 nice-shadow">
                    <div className="placeholder w-100 mb-4" style={{minHeight:"38%" }}/>{/* "208.531px" */}

                    <div className="mx-4 mb-4">
                        <div className="placeholder text-title-placeholder" />
                        <div className="placeholder w-50 text-title-placeholder" />
                    </div>

                    <div className="mx-4 mb-4">
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder" />
                        <div className="placeholder text-placeholder w-25" />
                    </div>
                </div>
                <div className='buttons d-none d-md-block'>
                    <button disabled>Falsa</button>
                    <button disabled>Verdadeira</button>
                </div>
          </div>
        </div>
      </div>
    );
  }

  else {

    return (
      <div className='container container-game d-block mb-3'>
        <div className=' center'>
          <div className='cardContainer mt-2'>
              <div className='tinder-card card-shadow p-2 position-absolute' />
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
          <div className='buttons d-none d-md-block'>
            <button onClick={() => swipe('left', true)}>Falsa</button>
            <button onClick={() => swipe('right', false)}>Verdadeira</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;

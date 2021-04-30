import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import '../styling/Game.css';
import CardContent from '../components/CardContent';
import GameContext from '../GameContext';

const debug = false;
const MAX_NEWS_TO_SHOW = 5;
let isFetching = false;

const Game = (props) => {
  const history = useHistory();

  const { getGameState,
    getNews,
    startGame,
    endGame,
    setActiveNews,
    getActiveNews
  } = useContext(GameContext);

  const updateActiveNews = () => {
    if (!isFetching) {
      isFetching = true;
      const news = getNews({ count: MAX_NEWS_TO_SHOW });
      const newsWithChildRef = news.map(obj => ({ ...obj, childRef: React.createRef(), wasSwiped: false, isOutOfScreen: false }));
      setActiveNews([...getActiveNews(), ...newsWithChildRef]);
      isFetching = false;
    }
  }

  useEffect(() => {
    if (getGameState() === "LOADING_DATA") {
      history.push('/');
    }
    else if (getGameState() !== "INGAME") {
      startGame();
      updateActiveNews();
    }
  }, []);

  const gotoEndGame = () => {
    endGame();
    history.push({
      pathname: '/fim-jogo',
    });
  }

  const swiped = (dir, _new) => {
    const index = getActiveNews().map(_newIter => _newIter.id).indexOf(_new.id);
    const activeNews = getActiveNews();
    activeNews[index].wasSwiped = true;
    setActiveNews(activeNews);
    // left = fake news; right = true news
    // LOSS
    if (((dir === 'left' && !_new.isFake) || (dir === 'right' && _new.isFake)) && !debug) {
      //setIsGoingToLose(true);
      setTimeout(() => {
        gotoEndGame();
      }, 250);
    }
    // RIGHT
  };

  const outOfFrame = (_new) => {
    const index = getActiveNews().map(_newIter => _newIter.id).indexOf(_new.id);
    const activeNews = getActiveNews();
    activeNews[index].isOutOfScreen = true;
    if (_.sum(activeNews.map(_new => Number(_new.isOutOfScreen))) === activeNews.length) {
      updateActiveNews();
    }
    else {
      setActiveNews(activeNews);
    }
  }

  const swipe = (dir) => {
    const _newsNotSwipped = getActiveNews().filter(_iterNew => !_iterNew.wasSwiped)
    if (_newsNotSwipped.length > 0)
      _newsNotSwipped[_newsNotSwipped.length - 1].childRef.current.swipe(dir)
  }

  if (getActiveNews().length === 0) {
    return (
      <div className='cardContainer mt-2'>
        <div className="no-select" />
        <div className="card p-0 h-100 overflow-hidden w-100 nice-shadow">
          <div className="placeholder w-100 mb-4" style={{ minHeight: "38%" }} />{/* "208.531px" */}

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
    );
  }

  else {
    return (
      <div>
        <div className='cardContainer mt-2'>
          {/* <div className='green-overlay' />
              <div className='red-overlay' /> */}
          <div className="card p-0 h-100 overflow-hidden w-100 nice-shadow position-absolute">
            <div className="placeholder w-100 mb-4" style={{ minHeight: "44%" }} />{/* "208.531px" */}

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
          {
            getActiveNews().filter(_new => !_new.isOutOfScreen).map(_new => (
              <TinderCard key={_new.id} ref={_new.childRef} className='position-absolute' preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, _new)} onCardLeftScreen={() => outOfFrame(_new)}>
                <CardContent news={_new} />
              </TinderCard>
            ))
          }
        </div>
        <div className='buttons d-none d-md-block text-center'>
          <button onClick={() => swipe('left')}>Falsa</button>
          <button onClick={() => swipe('right')}>Verdadeira</button>
        </div>
      </div>
    )
  }
}

export default Game;

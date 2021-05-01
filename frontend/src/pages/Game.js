import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import '../styling/Game.css';
import CardContent from '../components/CardContent';
import GameContext from '../GameContext';
import Score from '../components/game/Score';
import ReactCanvasConfetti from 'react-canvas-confetti';

const debug = false;
const MAX_NEWS_TO_SHOW = 5;
let isFetching = false;

const Game = (props) => {
  const history = useHistory();
  
  let refConfetti = React.createRef()

  const { getGameState,
    getNews,
    startGame,
    endGame,
    setActiveNews,
    getActiveNews
  } = useContext(GameContext);

  const [renderId, setRenderId] = useState(0);

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
    else if (getGameState() === "INGAME") {
      let activeNews = getActiveNews();
      for (const activeNew of activeNews) {
        if (activeNew.wasSwiped) {
          activeNew.isOutOfScreen = true;
        }
      }
      setActiveNews(activeNews);
      setRenderId(renderId + 1);
      if (_.sum(getActiveNews().map(_new => _new.isOutOfScreen)) === getActiveNews().length) {
        updateActiveNews();
      }
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
    } else {
        refConfetti.current.confetti()  
    }
    // RIGHT
  };

  const outOfFrame = (_new) => {
    const index = getActiveNews().map(_newIter => _newIter.id).indexOf(_new.id);
    if (index === -1)
      return;
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
        <div className="card p-0 h-100 overflow-hidden w-100 nice-shadow" style={{ height: '544px' }}>
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
        <>
            <ReactCanvasConfetti
                className="no-pointer-events position-fixed w-100 h-100"
                ref={refConfetti}
                style={{zIndex: 1000}}
                origin={{x: 0.5, y: 0.5}}
                particleCount={100}
                startVelocity={60}
                gravity={1.2}
                angle={90}
                spread={360}
            />
            <div>
                <div className='cardContainer mt-2'>
                    <Score />
                    {/* <div className='green-overlay' />
                        <div className='red-overlay' /> */}
                    <div className="card p-0 overflow-hidden w-100 nice-shadow position-absolute card-placeholder" style={{ height: '544px' }}>
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
      </>
    )
  }
}

export default Game;

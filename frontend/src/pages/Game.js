import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import '../styling/Game.css';
import CardContent from '../components/CardContent';
import GameContext from '../GameContext';

const debug = false;

const Game = () => {
  const history = useHistory();

  const { getGameState,
    getNews,
    startGame,
    endGame,
    addNewsToSwippedList,
    setActiveNews,
    getActiveNews } = useContext(GameContext);

  const [allowSwipping, setAllowSwipping] = useState(false)
  const [isGoingToLose, setIsGoingToLose] = useState(false)

  const updateActiveNew = () => {
    const _new = getNews({ count: 1 })[0];
    const _newWithChildRef = { ..._new, childRef: React.createRef() };
    setActiveNews(_newWithChildRef);
    setAllowSwipping(true);
  }

  useEffect(() => {
    if (getGameState() === "LOADING_DATA") {
      history.push('/');
    }
    else if (getGameState() !== "INGAME") {
      startGame();
      updateActiveNew();
    }
  }, []);

  const gotoEndGame = () => {
    endGame();
    history.push({
      pathname: '/fim-jogo',
    });

  }

  const swiped = (dir) => {
    const news = getActiveNews();
    addNewsToSwippedList(news);
    // left = fake news; right = true news
    if (((dir === 'left' && !news.isFake) || (dir === 'right' && news.isFake)) && !debug) {
      setIsGoingToLose(true);
    }
  };

  const outOfFrame = () => {
    if (isGoingToLose)
      gotoEndGame();
    else
      updateActiveNew();
  }

  const swipe = (dir) => {
    if (allowSwipping) {
      getActiveNews().childRef.current.swipe(dir)
      setAllowSwipping(false);
    }
  }

  if (!getActiveNews()) {
    return (
      <div className='container container-game d-block mb-3'>
        <div className='center'>
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
        </div>
      </div>
    );
  }

  else {
    return (
      <div className='container container-game d-block mb-3'>
        <div className=' center'>
          <div className='cardContainer mt-2'>
            {/* <div className='green-overlay' />
              <div className='red-overlay' /> */}
            <div className="card p-0 h-100 overflow-hidden w-100 nice-shadow position-absolute">
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
            <div key={getActiveNews().id}>
              <TinderCard ref={getActiveNews().childRef} className='position-absolute' preventSwipe={['up', 'down']} onSwipe={swiped} onCardLeftScreen={() => outOfFrame()}>
                <CardContent news={getActiveNews()} />
              </TinderCard>
            </div>
          </div>
          <div className='buttons d-none d-md-block'>
            <button onClick={() => swipe('left', true)}>Falsa</button>
            <button onClick={() => swipe('right', false)}>Verdadeira</button>
          </div>
        </div>
      </div >
    )
  }
}

export default Game;

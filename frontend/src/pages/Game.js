import React, { useState, useMemo} from 'react';
import { useHistory } from "react-router-dom";

import TinderCard from 'react-tinder-card';
import './Game.css';
import img from '../assets/news-img.jpeg';
import EndGame from '../components/EndGame';


const scnd_db = [
  {
    id: 13,
    title: '7Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
    text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
    url: img,
    real: true
  },
  {
    id: 14,
    title: '8Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
    text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
    url: img,
    real: false
  },
  {
    id: 15,
    title: '9Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
    text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
    url: img,
    real: true
  },
  {
    id: 16,
    title: '10Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
    text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
    url: img,
    real: false
  },
  {
    id: 17,
    title: '11Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
    text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
    url: img,
    real: true
  },
  {
    id: 18,
    title: '12Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
    text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
    url: img,
    real: false
  }
]

const db = [
    {
      id: 1,
      title: '1Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: true
    },
    {
      id: 2,
      title: '2Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: false
    },
    {
      id: 3,
      title: '3Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: true
    },
    {
      id: 4,
      title: '4Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: false
    },
    {
      id: 5,
      title: '5Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: true
    },
    {
      id: 6,
      title: '6Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: false
    },
    {
      id: 7,
      title: '1Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: true
    },
    {
      id: 8,
      title: '2Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: false
    },
    {
      id: 9,
      title: '3Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: true
    },
    {
      id: 10,
      title: '4Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: false
    },
    {
      id: 11,
      title: '5Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: true
    },
    {
      id: 12,
      title: '6Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres',
      text: 'Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.',
      url: img,
      real: false
    }
]

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.


function Game() {
  const [activeNews, setActiveNews] = useState(db)
  const [nrNews, setNrNews] = useState(db.length)
  const [points, setPoints] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [maxPointsMsg, setMaxPointsMsg] = useState("")

  let childRefs = useMemo(() => Array(nrNews).fill(0).map(i => React.createRef()), [nrNews])

  const history = useHistory();

  const swiped = (dir, news) => {

    alreadyRemoved.push(news.id)

    if ((dir === 'left' && !news.real) || (dir === 'right' && news.real)) {
      setPoints(prevPoints => prevPoints + 1);
    }
    else {
      let maxPoints = parseInt(localStorage.getItem('record-fake'));

      if (!maxPoints || (maxPoints && maxPoints < points)) {
        localStorage.setItem('record-fake', points);
        setMaxPointsMsg("Novo Recorde!");
      }
      else{
          setMaxPointsMsg("Recorde: " + maxPoints)
      }
      setPlaying(false);
    }
  }

  const outOfFrame = (id) => {
    charactersState = charactersState.filter(news => news.id !== id)

    if (charactersState.length < alreadyRemoved.length + 6) {
      setActiveNews([ ...scnd_db, ...charactersState])
      setNrNews(charactersState.length + scnd_db.length)
    }
    else
      setActiveNews(charactersState)
  }

  const swipe = (dir, real) => {
    const cardsLeft = activeNews.filter(news => !alreadyRemoved.includes(news.id))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id // Find the card object to be removed
      const index = activeNews.map(news => news.id).indexOf(toBeRemoved) // Find the index of which to make the reference to

      if (real == cardsLeft[cardsLeft.length - 1].real) {
        alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
        childRefs[index].current.swipe(dir) // Swipe the card!
      }
      else {
        let maxPoints = parseInt(localStorage.getItem('record-fake'));

        if (!maxPoints || (maxPoints && maxPoints < points)) {
          localStorage.setItem('record-fake', points);
          setMaxPointsMsg("Novo Recorde!");
        }
        else{
            setMaxPointsMsg("Recorde: " + maxPoints)
        }
        setPlaying(false);
      }
    }
  }

  return (
    <div>
      <div className={'cardContainer ' +  (!playing ? " flipped" : "")}>
        <div className="front">
        <div className='swipe card card-shadow p-2'/>
        
        {playing ? activeNews.map((news, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' preventSwipe={['up', 'down']} key={news.id} onSwipe={(dir) => swiped(dir, news)} onCardLeftScreen={() => outOfFrame(news.id)}>
            <div className='card p-2'>
              <img src={img} />
              <h4 className="my-4">{news.title}</h4>
              <p className="text-justify px-2">{news.text}</p>
            </div>
          </TinderCard>
          )
          :
          <></>
      }
        </div>
        <div className="back">
          {
            !playing ? <EndGame points={points} maxPointsMsg={maxPointsMsg} /> : <></>
          }
        </div>

      </div>
      {
        playing ? 
        (
          <div className='buttons d-none d-md-block'>
            <button onClick={() => swipe('left', false)}>Falsa</button>
            <button onClick={() => swipe('right', true)}>Verdadeira</button>
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
  )
  }

export default Game;
import React, { useState, useMemo, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
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
let cardsState = [] // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.


function Game() {
  const [activeNews, setActiveNews] = useState([])
  const [points, setPoints] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [maxPointsMsg, setMaxPointsMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const history = useHistory();

  useEffect(() => {
    db_request();
  }, [])

  const db_request = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/api/news`, {
      count_real: 10,
      count_fake: 10,
      exclude_news_with_ids: alreadyRemoved
    })
    .then(function (response) {

      let newNews = response.data;
      newNews = newNews.map(obj => ({ ...obj, childRef: React.createRef() }));

      setActiveNews(oldActiveNews => [ ...newNews, ...oldActiveNews])
      setLoading(false);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }


  const swiped = (dir, news) => {

    alreadyRemoved.push(news._id)

    if ((dir === 'left' && !news.real) || (dir === 'right' && news.real) || true) {
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

    if (activeNews.length < alreadyRemoved.length + 6) {
      db_request();
    }
    else 
      setActiveNews(oldNews => oldNews.filter(news => news._id  !== id))
  }

  const swipe = (dir, real) => {
    const cardsLeft = activeNews.filter(news => !alreadyRemoved.includes(news._id))

    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1]._id // Find the card object to be removed
      // const index = activeNews.map(news => news._id).indexOf(toBeRemoved) // Find the index of which to make the reference to

      if (real == cardsLeft[cardsLeft.length - 1].real || true) {
        alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
        cardsLeft[cardsLeft.length - 1].childRef.current.swipe(dir) // Swipe the card!
      }
      else {
        let maxPoints = parseInt(localStorage.getItem('record-fake'));

        if (maxPoints && maxPoints < points && points) {
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

  if (loading)
  {
    return (<>Hello world</>);
  }

  else{

  return (
    <div>
      <div className={'cardContainer ' +  (!playing ? " flipped" : "")}>
        <div className="front">
          <div className='swipe card card-shadow p-2'/>
          {playing ? activeNews.map((news, index) =>
            <TinderCard ref={news.childRef} className='swipe' preventSwipe={['up', 'down']} key={index} onSwipe={(dir) => swiped(dir, news)} onCardLeftScreen={() => outOfFrame(news._id)}>
              <div className='card p-2'>
                {/* <img className="game-img" src={img} /> */}
                <h4 className="my-4">{news.title}</h4>
                <p className="text-justify px-2">{news.textSummary}</p>
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
  }

export default Game;

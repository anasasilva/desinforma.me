import React, { useState, useMemo} from 'react';
import TinderCard from 'react-tinder-card';
import './Game.css';
import img from '../assets/news-img.jpeg';


const db = [
    {
      name: 'Richard Hendricks',
      url: img
    },
    {
      name: 'Erlich Bachman',
      url: img
    },
    {
      name: 'Monica Hall',
      url: img
    },
    {
      name: 'Jared Dunn',
      url: img
    },
    {
      name: 'Dinesh Chugtai',
      url: img
    }
  ]

  const alreadyRemoved = []
  let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.


function Game() {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' preventSwipe={['up', 'down']} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div className='card p-2'>
              <img src={img} />
              <h4 className="my-4">Vacina rejeitada pelos países ricos pode servir para contrariar “o desequilíbrio chocante” no abastecimento aos países pobres</h4>
              <p className="text-justify px-2">Os casos raros de coágulos causados pela vacina da AstraZeneca podem ser uma boa notícia para os países mais pobres, onde em média só uma pessoa em mais de 500 já foi vacinada.</p>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons d-none d-md-block'>
        <button onClick={() => swipe('left')}>Verdadeira</button>
        <button onClick={() => swipe('right')}>Falsa</button>
      </div>
      {/* {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>} */}
    </div>
  )
  }

export default Game;
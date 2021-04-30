import React, { useEffect, useState } from "react";
import _ from 'lodash';
import axios from "axios";
import GameContext from './GameContext';

const GameWrapper = ({ children }) => {

    // STATE HOOKS
    const [gameState, setGameState] = useState('LOADING_DATA'); // Posible game states: LOADING_DATA, IDLE, INGAME, GAME_OVER
    const [gameStartTime, setGameStartTime] = useState(0);
    const [gameDuration, setGameDuration] = useState(0);
    const [allNewsIDs, setAllNewsIDs] = useState([]);
    const [swipedNews, setSwipedNews] = useState([]);
    const [activeNews, setActiveNews] = useState(null);

    // RETRIEVE NEWS ON START.
    useEffect(() => {
        async function retrieveNews() {
            const lastNewsUpdateOn = localStorage.getItem('last_updated');
            const lastNewsUpdateOnAsDateOBject = lastNewsUpdateOn ? (new Date()) : (new Date(lastNewsUpdateOn));
            const minutesElapsedSinceLastNewsUpdate = ((new Date()) - lastNewsUpdateOnAsDateOBject) / 1000 / 60
            if (minutesElapsedSinceLastNewsUpdate > 1440 || !lastNewsUpdateOn) { // Refresh news for updates.
                try {
                    const updatedNews = (await axios.get('https://desinforma.me/news.json')).data;
                    const updatedNewsIDs = [...Array(updatedNews.length).keys()]; // Ids are in range [0, news.length[ 
                    updatedNews.forEach((newNew, index) => {
                        localStorage.setItem(`new_${index}`, JSON.stringify(newNew));
                    });
                    localStorage.setItem('news_ids', JSON.stringify(updatedNewsIDs));
                    localStorage.setItem('last_updated', (new Date()).toUTCString());
                    setAllNewsIDs(updatedNewsIDs);
                }
                catch (err) {
                    console.error('Failed to update news');
                    console.error(err);
                }
            } else {
                const newsIds = JSON.parse(localStorage.getItem('news_ids') || '[]');
                setAllNewsIDs(newsIds);
            }
            setGameState('IDLE')
        }
        retrieveNews();
    }, []);

    // EXPOSED INTERFACE
    const contextInterface = {
        getGameState: () => gameState,
        getGameDuration: () => gameDuration,
        getNews: ({ count = 1 } = {}) => {
            const previousGameNewsIds = JSON.parse(localStorage.getItem("previously-seen") || '[]');
            let newsIdsWithoutPreviousSeens = _.without(allNewsIDs, previousGameNewsIds);
            if (newsIdsWithoutPreviousSeens.length < count) {
                localStorage.setItem('previously-seen', '[]');
                newsIdsWithoutPreviousSeens = allNewsIDs;
            }
            const newsIds = _.sampleSize(newsIdsWithoutPreviousSeens, count);
            let news = [];
            for (const newsId of newsIds) {
                const _new = JSON.parse(localStorage.getItem(`new_${newsId}`));
                _new.isFake = _.sample([true, false]);
                _new.id = newsId;
                news.push(_new);
            }
            return news;
        },
        getSwippedNews: () => swipedNews,
        addNewsToSwippedList: (newsId) => {
            setSwipedNews([...swipedNews, newsId]);
        },
        getActiveNews: () => activeNews,
        setActiveNews: setActiveNews,
        startGame: () => {
            setGameState('INGAME');
            setGameStartTime(performance.now());
            setSwipedNews([]);
            setActiveNews({});
        },
        endGame: () => {
            setGameState('GAME_OVER');
            setGameDuration(Math.floor((performance.now() - gameStartTime) / 1000));
        }
    }

    return (
        <GameContext.Provider value={contextInterface}>
            {children}
        </GameContext.Provider>
    )
}

export default GameWrapper;
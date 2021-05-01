import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../GameContext";
import { FaTrophy, FaHourglass } from "react-icons/fa";

const Score = () => {

    const { getGameStartTime, getActiveNews } = useContext(GameContext);

    const [timeMsg, setTimeMsg] = useState('');
    const [pointsMsg, setPointsMsg] = useState('');

    useEffect(() => {
        const intervalID = window.setInterval(() => {
            const timeElapsedSec = Math.floor((performance.now() - getGameStartTime()) / 1000);
            const minutes = Math.floor(timeElapsedSec / 60);
            const seconds = timeElapsedSec % 60;
            const points = getActiveNews().filter(_new => _new.isOutOfScreen || _new.wasSwiped).length;
            setTimeMsg(`${minutes} min ${seconds} seg`)
            setPointsMsg(`${points} pontos`)
        }, 50);

        return () => window.clearInterval(intervalID);
    });


    return (
        <div class="game-score w-100 d-flex">
            <div className="badge badge-secondary p-2 mr-2">
                <FaTrophy /> &nbsp;{pointsMsg}
            </div>
            <div className="badge badge-secondary p-2">
                <FaHourglass /> &nbsp;{timeMsg}
            </div>
        </div>
    )
}

export default Score;
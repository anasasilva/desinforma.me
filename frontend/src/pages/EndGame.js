import React from "react";
import { Redirect } from "react-router";
import EndGameCard from "../components/game/EndGameCard";

const EndGame = (props) => {
    console.log("here");

    const history = props.history;

    if (!history || !props.history.location.state) {
        return <Redirect to={'/'} />
    }

    const data = props.history.location.state;
    const { points, maxPoints } = data;

    let maxPointsMessage = "";
    if (points > maxPoints) {
        maxPointsMessage = "Novo Recorde!";
    } else {
        maxPointsMessage = "Recorde: " + maxPoints;
    }

    return (
        <div className="container d-block my-3 pt-md-4">
            <div className=" center">
                <div className='cardContainer'>
                    <div className='card card-shadow p-2'>
                        <EndGameCard points={points} maxPointsMsg={maxPointsMessage} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EndGame;
import React, { useEffect, useState, useRef } from "react";
import comojogar from '../../assets/comojogar.mov'

const InstructionsCard = () => {

    return (
        <div className="col d-none d-lg-flex cardContainer ml-auto p-0">
            <div onContextMenu={e => e.preventDefault()} className="d-flex cardContainer p-0 position-absolute">
                <video className='videoTag' autoPlay loop muted>
                    <source src={comojogar} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default InstructionsCard;
import React from 'react';
import InstructionsCard from '../components/comojogar/InstructionsCard';
import HeroText from '../components/comojogar/HeroText';

const ComoJogar = () => {

    return (
        <div className="h-100 row align-items-center mx-auto">
            <HeroText />
            <InstructionsCard />
        </div>
    )
}

export default ComoJogar;
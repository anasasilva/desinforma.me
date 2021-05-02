import React from 'react';
import AuthorsCard from '../components/sobre/AuthorsCard';
import HeroText from '../components/sobre/HeroText';

const Sobre = () => {

    return (
        <div className="h-100 row mx-auto">
            <HeroText />
            <AuthorsCard />
        </div>
    )
}

export default Sobre;
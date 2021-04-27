import React, { useEffect } from 'react';
import HomeCard from '../components/landing/HomeCard';
import HeroText from '../components/landing/HeroText';


const Landing = () => {

    return (
        <div className="h-100 row align-items-center mx-auto">
            <HeroText />
            <HomeCard />
        </div>
    )
}

export default Landing;
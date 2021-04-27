import React, { useEffect } from 'react';
import HomeCard from '../components/landing/HomeCard';
import HeroText from '../components/landing/HeroText';


const Landing = () => {

    return (
        <div className="container d-block my-3 center" style={{ paddingBottom: "72px" }}>
            <div className="h-100 row align-items-center mx-auto">
                <HeroText />
                <HomeCard />
            </div>
        </div>
    )
}

export default Landing;
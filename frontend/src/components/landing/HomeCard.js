import React, { useEffect, useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import mrs from '../../assets/mrs.jpg';
import cr7 from '../../assets/cr7.jpg';
import ChangedEntity from '../ChangedEntity';
import catSleeping from '../../assets/cat-sleeping.gif'

const HomeCard = () => {

    const [showFakeStamp, setShowFakeStamp] = useState(false)
    const [marceloLoaded, setMarceloLoaded] = useState(false)
    const [ronaldoLoaded, setRonaldoLoaded] = useState(false)
    const cardRef = useRef();

    //const showFakeStamp = () => document.querySelector('.stamp[data-type="fake"]').classList.add('ready');
    //const shakeCard = () => document.querySelector('#home-card > div').classList.add('shake-image');
    useEffect(() => {
        setTimeout(() => setShowFakeStamp(true), 1000);
        //setTimeout(shakeCard, 3000);
    });

    const onCardLeftScreen = (myIdentifier) => {
        let homeCard = document.querySelector('#home-card > div');
        if (homeCard === null) return;
        setTimeout(() => {
            homeCard.style.transform = "scale(0)";
            homeCard.style.transitionDuration = ".4s";
            homeCard.style.display = "";
        }, 1400);
        setTimeout(() => {
            homeCard.style.transform = "";
        }, 1450);
        setTimeout(() => {
            homeCard.style.transition = "";
        }, 1850);
    }

    return (
        <div id="home-card" className="col-xl-4 offset-0 offset-xl-1 col-12 d-none d-xl-flex cardContainer hover-toggle p-0" style={{ height: '37em' }}>
            {/* https://www.pinterest.com/pin/740208888726895103/ */}
            <img className="img-fluid position-absolute w-50 fixed-bottom" src={catSleeping} style={{ zIndex: -1, left: "25%" }} alt="cat" />

            <TinderCard flickOnSwipe={true} onCardLeftScreen={onCardLeftScreen} ref={cardRef}
                className="no-select" style={{ zIndex: 1 }}>

                <div className={"hover-hide stamp " + (showFakeStamp ? "ready" : "")} data-type="fake" style={{ zIndex: 1 }} />
                <div className="hover-show ready stamp" data-type="genuine" style={{ zIndex: 1 }} />
                <div className="card p-0 h-100 overflow-hidden" style={{ zIndex: -1, boxShadow: '0 10px 50px -12px rgb(0 0 0 / 25%)' }}>
                    <img className={"hover-hide img-fluid w-100 " + ((marceloLoaded && ronaldoLoaded) ? "" : "d-none")} src={mrs} alt="Marcelo Rebelo de Sousa" onLoad={() => setMarceloLoaded(true)}/>
                    <div className={"placeholder w-100 " + (!(marceloLoaded && ronaldoLoaded) ? "" : "d-none")} style={{height: '35.5%'}}/>
                    <img className={"hover-show img-fluid w-100 " + ((marceloLoaded && ronaldoLoaded) ? "" : "d-none")} src={cr7} alt="Cristiano Ronaldo" onLoad={() =>  setRonaldoLoaded(true)}/>
                    <h5 className="text-left mt-4 mb-3 px-4 news-title serif-font">«<ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo" />? Se voltasse atrás no tempo faria a mesma coisa»</h5>
                    <p className="text-justify px-4 smallish">
                        Com a Juventus a protagonizar época aquém das expectativas, Andrea Agnelli, presidente do clube de Turim, veio a terreiro garantir que
                        nunca se arrependeu da aposta na contratação de <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo" /> ao Real Madrid, no verão de 2018,
                        por verba a rondar os €100 milhões. «Nunca me arrependi de contratar <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo" />. Se pudesse voltar atrás no tempo, voltaria a contratá-lo», afiançou o dirigente, em
                        entrevista aos jornais italianos ‘Corriere dello Sport’ e ‘La Repubblica’.
                    </p>
                    <div className="div-bottom w-100 pb-1" style={{ zIndex: 100 }}>
                        <small className="d-block text-center text-bottom" >Fonte: <a href="https://www.abola.pt/nnh/2021-04-21/juventus-ronaldo-se-voltasse-atras-no-tempo-faria-a-mesma-coisa/887380" rel="noreferrer" className="d-inline" target="_blank">Jornal Record</a> </small>
                    </div>
                </div>
            </TinderCard>
        </div>
    )
}

export default HomeCard;
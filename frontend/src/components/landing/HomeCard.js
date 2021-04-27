import React, { useEffect, useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import mrs from '../../assets/mrs.jpg';
import cr7 from '../../assets/cr7.jpg';
import ChangedEntity from '../ChangedEntity';

const HomeCard = () => {

    const [showFakeStamp, setShowFakeStamp] = useState(false)
    const cardRef = useRef();

    //const showFakeStamp = () => document.querySelector('.stamp[data-type="fake"]').classList.add('ready');
    //const shakeCard = () => document.querySelector('#home-card > div').classList.add('shake-image');
    useEffect(() => {
        setTimeout(() => setShowFakeStamp(true), 1000);
        //setTimeout(shakeCard, 3000);
    });

    const onCardLeftScreen = (myIdentifier) => {
        setTimeout(() => {
            let homeCard = document.querySelector('#home-card > div');
            homeCard.style.transform="";
            homeCard.style.display="";
        }, 500);
    }

    return (
        <div id="home-card" className="col-xl-4 offset-0 offset-xl-1 col-12 d-none d-xl-flex cardContainer hover-toggle p-0">
            <TinderCard flickOnSwipe={true} onCardLeftScreen={onCardLeftScreen} ref={cardRef}
                className="no-select" style={{ zIndex: 1 }}>

                <div className={"hover-hide stamp " + (showFakeStamp ? "ready" : "")} data-type="fake" style={{ zIndex: 1 }} />
                <div className="hover-show ready stamp" data-type="genuine" style={{ zIndex: 1 }} />
                <div  className="card p-0 h-100 overflow-hidden" style={{ zIndex: -1, boxShadow: '0 10px 50px -12px rgb(0 0 0 / 25%)' }}>
                    <img className="hover-hide img-fluid" src={mrs} />
                    <img className="hover-show img-fluid" src={cr7} />
                    <h5 className="text-left my-4 px-4">«<ChangedEntity created="MARCELO REBELO DE SOUSA" original="CRISTIANO RONALDO" />? SE VOLTASSE ATRÁS NO TEMPO FARIA A MESMA COISA»</h5>
                    <p className="text-justify px-4 ">
                        Com a Juventus a protagonizar época aquém das expectativas, Andrea Agnelli, presidente do clube de Turim, veio a terreiro garantir que
                                nunca se arrependeu da aposta na contratação de <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo" /> ao Real Madrid, no verão de 2018,
                                por verba a rondar os €100 milhões. «Nunca me arrependi de contratar <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo" />. Se pudesse voltar atrás no tempo, voltaria a contratá-lo», afiançou o dirigente, em
                                entrevista aos jornais italianos ‘Corriere dello Sport’ e ‘La Repubblica’.
                            </p>
                    <div className="div-bottom w-100" style={{ zIndex: 100 }}>
                        <small className="d-block text-center text-bottom" >Fonte: <a href="https://www.abola.pt/nnh/2021-04-21/juventus-ronaldo-se-voltasse-atras-no-tempo-faria-a-mesma-coisa/887380" className="d-inline" target="_blank">Jornal Record</a> </small>
                    </div>
                </div>
            </TinderCard>
        </div>
    )
}

export default HomeCard;
import React, { useState, useMemo, useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";

import logo_arquivo from "../assets/arquivo.png";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import TinderCard from 'react-tinder-card';
import mrs from '../assets/mrs.jpg';
import cr7 from '../assets/cr7.jpg';
import ChangedEntity from '../components/ChangedEntity';
import Navbar from '../components/Navbar';


function Landing() {
    const history = useHistory();
    const showFakeStamp = () => document.querySelector('.stamp[data-type="fake"]').classList.add('ready');
    const shakeCard = () => document.querySelector('#home-card > div').classList.add('shake-image');
    useEffect(() => {
        setTimeout(showFakeStamp, 1000);
        setTimeout(shakeCard, 3000);
    });
    
    return (
        <div className="container d-block my-3 center" style={{paddingBottom: "72px"}}>
            <Navbar />
            
            <div className="h-100 row align-items-center mx-auto">
                <div className="col-xl-6 col-12 w-100 m-0"> {/* mr-xl-5 em vez de w-100 m-0 */}
                    <h1 className="my-3 d-none d-md-block text-md-left" style={{fontSize: "4rem"}}>
                        <span className="font-weight-light">Des</span>
                        <strong className="text-success">informa</strong>.
                        <span className="">me</span>
                    </h1>
                    <h1 className="my-3 d-md-none text-md-left" style={{ fontSize: "9vw"}}>
                        <span className="font-weight-light">Des</span>
                        <strong className="text-success">informa</strong>.
                        <span className="">me</span>
                    </h1>

                    <p className="text-justify font-weight-light ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!  
                    </p>
                    <div className="row  justify-content-center mt-md-0 mt-5 row">
                        <button type="button" className="btn btn-primary col-md-5 col-lg mx-3 my-3 py-3 py-md-2 w-100 font-weight-bold" 
                            onClick={() => history.push("/game")}>Jogar</button>
                        <button type="button" className="btn btn-success col-md-5 col-lg mx-3 my-3 py-3 py-md-2 w-100 font-weight-bold"
                            onClick={() => history.push("/game")}>Pensa rápido</button>
                    </div>
                </div>
        
                
                <div id="home-card" className="col-xl-6 col-12 mx-auto d-none d-xl-flex cardContainer  hover-toggle">
                    <TinderCard preventSwipe={['up', 'down', 'left', 'right']}
                         className="no-select" style={{zIndex: 1}}>

                            <div className="hover-hide stamp" data-type="fake"   style={{zIndex: 1}}/>
                            <div className="hover-show ready stamp" data-type="genuine"   style={{zIndex: 1}}/>
                        
                        {/* <div className='card p-2 h-100'  style={{zIndex: 1}}>
                            <img className="hover-hide" src={mrs} />
                            <img className="hover-show" src={cr7} />
                            <h5 className="text-left my-4 px-2">«<ChangedEntity created="MARCELO REBELO DE SOUSA" original="CRISTIANO RONALDO"/>? SE VOLTASSE ATRÁS NO TEMPO FARIA A MESMA COISA»</h5>
                            <p className="text-justify px-2 ">
                                Com a Juventus a protagonizar época aquém das expectativas, Andrea Agnelli, presidente do clube de Turim, veio a terreiro garantir que 
                                nunca se arrependeu da aposta na contratação de <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo"/> ao Real Madrid, no verão de 2018, 
                                por verba a rondar os €100 milhões. «Nunca me arrependi de contratar <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo"/>. Se pudesse voltar atrás no tempo, voltaria a contratá-lo», afiançou o dirigente, em 
                                entrevista aos jornais italianos ‘Corriere dello Sport’ e ‘La Repubblica’.
                            </p>
                            <div className="hover-hide stamp" data-type="fake"/>
                            <div className="hover-show ready stamp" data-type="genuine"/>
                            <div className="div-bottom w-100" style={{zIndex: 100}}>
                                <small className="justify-content-center text-bottom" >Fonte: <a href="https://www.abola.pt/nnh/2021-04-21/juventus-ronaldo-se-voltasse-atras-no-tempo-faria-a-mesma-coisa/887380" className="d-inline" target="_blank">Jornal Record</a> </small>
                            </div>
                        </div> */}
                        <div className="card p-0 h-100 overflow-hidden"  style={{zIndex: -1}}>
                            <img className="hover-hide" src={mrs} />
                            <img className="hover-show" src={cr7} />
                            <h5 className="text-left my-4 px-4">«<ChangedEntity created="MARCELO REBELO DE SOUSA" original="CRISTIANO RONALDO"/>? SE VOLTASSE ATRÁS NO TEMPO FARIA A MESMA COISA»</h5>
                            <p className="text-justify px-4 ">
                                Com a Juventus a protagonizar época aquém das expectativas, Andrea Agnelli, presidente do clube de Turim, veio a terreiro garantir que 
                                nunca se arrependeu da aposta na contratação de <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo"/> ao Real Madrid, no verão de 2018, 
                                por verba a rondar os €100 milhões. «Nunca me arrependi de contratar <ChangedEntity created="Marcelo Rebelo de Sousa" original="Cristiano Ronaldo"/>. Se pudesse voltar atrás no tempo, voltaria a contratá-lo», afiançou o dirigente, em 
                                entrevista aos jornais italianos ‘Corriere dello Sport’ e ‘La Repubblica’.
                            </p>
                            <div className="div-bottom w-100" style={{zIndex: 100}}>
                                <small className="justify-content-center text-bottom" >Fonte: <a href="https://www.abola.pt/nnh/2021-04-21/juventus-ronaldo-se-voltasse-atras-no-tempo-faria-a-mesma-coisa/887380" className="d-inline" target="_blank">Jornal Record</a> </small>
                            </div>
                        </div>
                    </TinderCard>
                </div>
            </div>
            {/* <div className="m-5 p-5 d-flex flex-column justify-content-around h-100 h-lg-75 align-items-center">
                <img className="logo-size" src={logo} alt={"logo"} />
                <h1 className="text-dark">Desinforma.me</h1>
                <h5 className="px-5 mx-3 d-none d-md-block"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum!  
                </h5>
                <div className="row buttons w-100 px-lg-5 justify-content-center">
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => history.push("/game")}>Jogar</button>
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => history.push("/game")}>Pensa rápido</button>
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => history.push("/howtoplay")}>Como jogar</button>
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => history.push("/about")}>Sobre</button>
                </div>
            </div>*/}
            <nav className="navbar fixed-bottom transparent navbar-light">
                <small className="font-weight-light mx-auto mb-0">
                    Em colaboração com o <a href="https://arquivo.pt/" className="d-inline" target="_blank">Arquivo.pt</a>. <br className="d-md-none"/> Made with <FontAwesomeIcon icon={faHeart} color="red"/> by <a href="https://github.com/anasasilva" className="d-inline" target="_blanck">Ana</a>
                    , <a href="https://github.com/Erroler" className="d-inline" target="_blank">Fábio</a>
                    , and <a href="https://github.com/RMoura98" className="d-inline" target="_blank">Ricardo</a>.
                </small>
                
            </nav> 
        </div>

    )
}

export default Landing;
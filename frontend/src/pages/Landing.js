import React, { useState, useMemo} from 'react';
import { useHistory } from "react-router-dom";

import logo_arquivo from "../assets/arquivo.png";




function Landing() {
    const history = useHistory();

    return (
        <div>
            <div className="w-75 m-5 p-5 d-flex flex-column justify-content-around h-100 h-lg-75 align-items-center">
                <img className="logo-size" src={logo_arquivo} alt={"logo"} />
                <h1 className="text-dark">Nome Lindo</h1>
                <h5 className="px-5 mx-3 d-none d-md-block"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum!  
                </h5>
                <div className="row buttons w-100 px-lg-5 justify-content-center">
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => history.push("/game")}>Jogar</button>
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => console.log('left')}>Pensa rápido</button>
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => console.log('left')}>Como jogar</button>
                    <button className="col-md-5 col-lg my-3 w-100" onClick={() => console.log('right')}>Sobre</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;
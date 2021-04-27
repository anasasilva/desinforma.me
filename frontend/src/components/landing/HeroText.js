import React from "react";
import { Link } from 'react-router-dom';

const HeroText = () => {
    return (
        <div className="col-xl-6 col-12 w-100 m-0"> {/* mr-xl-5 em vez de w-100 m-0 */}
            <h1 className="my-3 d-none d-md-block text-md-left" style={{ fontSize: "4rem" }}>
                <span className="font-weight-light">Des</span>
                <strong className="text-success">informa</strong>.
                        <span className="">me</span>
            </h1>
            <h1 className="my-3 d-md-none text-md-left" style={{ fontSize: "9vw" }}>
                <span className="font-weight-light">Des</span>
                <strong className="text-success">informa</strong>.
                        <span className="">me</span>
            </h1>

            <p className="text-justify font-weight-light ">
            Vem descobrir se tens o que é preciso para não ser enganado por Fake News! <br/> Mete à prova o teu conhecimento!
                    </p>
            <div className="row justify-content-center mt-md-0 mt-5 row">
                <Link to={'/jogo'} className="btn btn-primary col-md-5 col-lg mx-3 my-3 py-3 py-md-2 w-100 font-weight-bold">
                    Jogar
                </Link>
                <Link to={'/jogo'} className="btn btn-success col-md-5 col-lg mx-3 my-3 py-3 py-md-2 w-100 font-weight-bold">
                    Pensa rápido
                </Link>
            </div>
        </div>
    )
}

export default HeroText;
import React from "react";
import { Redirect } from "react-router";

const EndGame = (props) => {

    const history = props.history;

    if (!history || !props.history.location.state) {
        return <Redirect to={'/'} />
    }

    const data = props.history.location.state;
    const { points, maxPoints } = data;

    let maxPointsMessage = "";
    if (points > maxPoints) {
        maxPointsMessage = "Novo Recorde!";
    } else {
        maxPointsMessage = "Recorde: " + maxPoints;
    }

    return (
        <div className="container container-game d-block my-3 pt-md-4">
            <div className=" center">
                <div className='cardContainer'>
                    <div className='tinder-card card-shadow p-2 bg-error'>
                        <h1 className="font-points mt-2">{points}</h1>
                        <h3>{maxPointsMessage}</h3>
                        <div>
                            <h5 className="text-left">Notícias Verdadeiras</h5>
                            <div className="news-box">
                                <a
                                    className="text-left white text-decoration-underline text-truncate"
                                    href="https://www.publico.pt/2021/04/20/local/noticia/pj-fez-buscas-camara-lisboa-causa-processos-urbanisticos-1959288">
                                    PJ faz buscas na Câmara de Lisboa por suspeitas de corrupção no Urbanismo
                  </a>
                            </div>
                            <h5 className="text-left">Notícias Falsas</h5>
                            <div className="news-box">
                                <a
                                    className="text-left white text-decoration-underline text-truncate"
                                    href="https://www.publico.pt/2021/04/20/local/noticia/pj-fez-buscas-camara-lisboa-causa-processos-urbanisticos-1959288">
                                    PJ faz buscas na Câmara de Lisboa por suspeitas de corrupção no Urbanismo
                  </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttons d-none d-md-block'>
                    <button onClick={() => history.push('/')}>Voltar</button>
                    <button onClick={() => history.push('/jogo')}>Novo Jogo</button>
                </div>
            </div>
        </div>
    )

}

export default EndGame;
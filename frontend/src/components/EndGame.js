import React, { useState, useEffect } from 'react';

function EndGame(props) {

  const { points, maxPointsMsg } = props;

  return (
    <>
      <div className='swipe card card-shadow p-2' />
      <div className='swipe card p-4 bg-error d-flex flex-column justify-content-around'>
        <h1 className="font-points mt-2">{points}</h1>
        <h3>{maxPointsMsg}</h3>
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
    </>
  )
}

export default EndGame;
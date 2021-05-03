import React from "react";

import ArquivoLink from "./ArquivoLink";

const HeroText = () => {

    return (
        <div className="col-lg-7 col-12 w-100 m-0 p-0">
                <h1 className="mt-2 mb-4 my-md-5 text-md-left" id="landing-title">
                    <span className="blue-secondary">Sobre</span>
                </h1>

                <p className="lead text-justify ">
                    Há cada vez mais informação disponível à velocidade de um clique e é imperativo educarmo-nos de forma a conseguirmos
                    distinguir a informação verídica da inventada.
                    O combate à desinformação tem de ser feito por cada um para que notícias falsas não ganhem vida.
                    Assim, apresentamos <strong className="blue-secondary d-inline">Desinforma.me</strong>, um jogo que alerta os utilizadores para a existência de notícias inventadas apresentadas de forma credível
                    e tenta incutir espírito e responsabilidade em cada um.
                </p>
                <h3 className="my-2 mb-md-4 mt-md-5 text-md-left">
                    <span className="text-primary">Arquivo.pt</span>
                </h3>
                <p className="lead text-justify ">
                    Este projeto foi desenvolvido no âmbito da <a className="d-inline" href="https://sobre.arquivo.pt/pt/colabore/premios-arquivo-pt/premio-arquivo-pt-2021/" target="_blank">Prémio Arquivo.pt 2021</a>. 
                    O <ArquivoLink /> é uma plataforma que permite pesquisar e aceder a conteúdos de websites antigos, desde 1996.
                    O sucesso deste trabalho deveu-se também à grande quantidade e variedade de informação, nomeadamente de notícias, centralizada no <ArquivoLink /> que permitiu
                    a inclusão de uma maior diversidade de fontes. De outro modo, seria necessário adaptar a extração a cada jornal e limitar a notícias que ainda estão disponíveis. 
                    Toda a informação usada neste projeto é extraída do  <ArquivoLink /> de forma a ter notícias de vários anos e fontes.
                </p>
                <h3 className="my-2 mb-md-4 mt-md-5 text-md-left">
                    <span className="text-primary">Desinforma.me</span>
                </h3>
                <p className="lead text-justify ">
                    Este projeto tem uma abordagem inovadora às notícias falsas, na medida em que não pretende identificá-las, como muitos projetos e estudos 
                    já o fizeram. Pretende gerá-las para que a distinção de notícias seja responsabilidade do utilizador.
                    As notícias falsas apresentadas foram geradas com base em notícias verdadeiras, sendo que cada notícia inventada tem como base uma notícia verdadeira que foi extraída do <ArquivoLink />.
                    O processo de geração das notícias pode ser resumido em três passos. Primeiro, extraiu-se entidades (pessoas, locais, organizações) de todas as notícias, obtendo-se um conjunto 
                    de entidades organizadas por tipo para serem usadas posteriormente. 
                    De seguida, para cada notícia procurou-se uma entidade presente nela. E finalmente trocou-se a entidade encontrada por outra extraída no primeiro passo.
                </p>
                <h3 className="my-2 mb-md-4 mt-md-5 text-md-left">
                    <span className="text-primary">Detetar notícias falsas</span>
                </h3>
                <p className="lead text-justify ">
                    
                </p>
            </div>
    )
}

export default HeroText;
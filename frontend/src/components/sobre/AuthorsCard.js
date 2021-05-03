import React from "react";

import AuthorsInfo from "./AuthorInfo";

import LogoImg from "../../assets/logo.png"

const AuthorsCard = () => {

    return (
        <div className="col-xl-4 offset-0 offset-xl-1 col-12 d-none d-xl-flex cardContainer p-0 mt-5" style={{ height: '37em' }}>
            <div>
                <div className="card p-0 pb-4 w-100" style={{  boxShadow: '0 10px 50px -12px rgb(0 0 0 / 25%)' }}>
                    <div className="d-flex justify-content-center w-100">
                        <img className={"w-75 px-4"} src={LogoImg} alt="Logo desinforma-me" />
                    </div>
                    <h5 className="text-center my-3 px-4 news-title serif-font mb-3">Autores</h5>
                    <AuthorsInfo name="Ricardo Moura" linkedin="rmoura98" mail="ricardo.sanfinsmoura@gmail.com" github="RMoura98" />
                    <AuthorsInfo name="Fábio Oliveira" linkedin="fabio-vilela-oliveira" mail="dev.foliveira@gmail.com" github="Erroler" />
                    <AuthorsInfo name="Ana Sá Silva" linkedin="anasasilva" mail="anasasousasilva@gmail.com" github="anasasilva" />
                    <small className="text-center px-4 mt-5 mb-2">Projeto disponível em </small>
                </div>
            </div>
        </div>
    )
}

export default AuthorsCard;
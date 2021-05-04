import React, { useState } from "react";

import AuthorsInfo from "./AuthorInfo";

import LogoImg from "../../assets/logo.png"

const AuthorsCard = () => {

    const [showDefaultImage, setShowDefaultImage] = useState(true)

    return (
        <div className="col-xl-4 offset-0 offset-xl-1 col-12 d-none d-xl-block cardContainer p-0 mt-5" style={{ height: '37em' }}>
            <div>
                <div className="card p-0 pb-4 w-100" style={{  boxShadow: '0 10px 50px -12px rgb(0 0 0 / 25%)' }}>
                    <div className="d-flex justify-content-center w-100">
                        <div className={"placeholder w-100 h-logo mb-4 " + (showDefaultImage ? "" : "d-none")} />
                        <img className={"w-75 px-4"} src={LogoImg} alt="Logo desinforma-me" onLoad={() => setShowDefaultImage(false)}/>
                    </div>
                    <h5 className="text-center my-3 px-4 news-title serif-font mb-3">Autores</h5>
                    <AuthorsInfo name="Ana Sá Silva" linkedin="anasasilva" mail="anasasousasilva@gmail.com" github="anasasilva" />
                    <AuthorsInfo name="Fábio Oliveira" linkedin="fabio-vilela-oliveira" mail="dev.foliveira@gmail.com" github="Erroler" />
                    <AuthorsInfo name="Ricardo Moura" linkedin="rmoura98" mail="ricardo.sanfinsmoura@gmail.com" github="RMoura98" />
                    <small className="text-center px-4 mt-5 mb-2">Projeto disponível em <a className="d-inline" href="https://github.com/anasasilva/desinforma.me" target="_blank">aqui</a></small>
                </div>
            </div>
        </div>
    )
}

export default AuthorsCard;
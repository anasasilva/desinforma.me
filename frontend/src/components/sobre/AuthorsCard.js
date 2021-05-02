import React from "react";
import {
    LinkedinIcon
} from "react-share";
import LogoImg from "../../assets/logo.png"

const AuthorsCard = () => {

    return (
        <div className="col-xl-4 offset-0 offset-xl-1 col-12 d-none d-xl-flex cardContainer p-0 mt-5" style={{ height: '37em' }}>
            <div>
                <div className="card p-0 pb-4 overflow-hidden " style={{ zIndex: -1, boxShadow: '0 10px 50px -12px rgb(0 0 0 / 25%)' }}>
                    <div className="d-flex justify-content-center w-100">
                        <img className={"w-75 px-4"} src={LogoImg} alt="Logo desinforma-me" />
                    </div>
                    <h5 className="text-center my-3 px-4 news-title serif-font mb-3">Autores</h5>
                    <div className="d-flex justify-content-between w-100 px-4 mt-2">
                        <p className="text-left mb-0">
                            Ricardo Moura
                            </p>
                        <div className="d-flex">
                            <a className="mx-2"><LinkedinIcon size={20} round={true} /></a>
                            <a><LinkedinIcon size={20} round={true} /></a>
                        </div>
                    </div>
                    <small className="text-left px-4 mt-1 mb-4">Querem escrever mais alguma coisa?</small>
                    <div className="d-flex justify-content-between w-100 px-4">
                        <p className="text-left mb-0">
                            Fábio Oliveira
                            </p>
                        <div className="d-flex">
                            <a className="mx-2"><LinkedinIcon size={20} round={true} /></a>
                            <a><LinkedinIcon size={20} round={true} /></a>
                        </div>
                    </div>
                    <small className="text-left px-4 mt-1 mb-4">Querem escrever mais alguma coisa?</small>
                    <div className="d-flex justify-content-between w-100 px-4">
                        <p className="text-left mb-0">
                            Ana Silva
                            </p>
                        <div className="d-flex">
                            <a className="mx-2"><LinkedinIcon size={20} round={true} /></a>
                            <a><LinkedinIcon size={20} round={true} /></a>
                        </div>
                    </div>
                    <small className="text-left px-4 mt-1 mb-4">Querem escrever mais alguma coisa?</small>
                </div>
            </div>
        </div>
    )
}

export default AuthorsCard;
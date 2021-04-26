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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!
                    </p>
            <div className="row justify-content-center mt-md-0 mt-5 row">
                <Link to={'/game'} className="btn btn-primary col-md-5 col-lg mx-3 my-3 py-3 py-md-2 w-100 font-weight-bold">
                    Jogar
                </Link>
                <Link to={'/game'} className="btn btn-success col-md-5 col-lg mx-3 my-3 py-3 py-md-2 w-100 font-weight-bold">
                    Pensa rápido
                </Link>
            </div>
        </div>
    )
}

export default HeroText;
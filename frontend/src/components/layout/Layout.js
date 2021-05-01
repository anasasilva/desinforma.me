
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Particles from 'react-particles-js';
import ParticlesConfig from './particles.json';


const Layout = (props) => {

    return (
        <div className="d-flex flex-column justify-content-start justify-content-md-between h-100">
            {/* <Particles className="position-absolute w-100 h-100 low-zindex" params={ParticlesConfig} /> */}
            <Navbar />
            <div className="container flex-grow-1 d-flex align-items-center justify-content-center mb-3">
                {props.children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout;
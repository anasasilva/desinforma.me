
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {

    return (
        <div className="d-flex flex-column justify-content-start justify-content-md-between h-100">
            <Navbar />
            <div className="container flex-grow-1 d-flex align-items-center justify-content-center mb-3">
                {props.children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout;
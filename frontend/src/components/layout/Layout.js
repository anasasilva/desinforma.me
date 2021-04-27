
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {

    return (
        <div className="d-flex flex-column justify-content-between h-100">
            <Navbar />
            <div className="container">
                {props.children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout;
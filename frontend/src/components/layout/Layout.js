
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
    
    return (
        <div className="container">
            <Navbar />
                {props.children}
            <Footer />
        </div>

    )
}

export default Layout;
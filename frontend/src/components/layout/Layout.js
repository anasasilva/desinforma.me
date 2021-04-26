import { Flex } from "@chakra-ui/layout";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
            {...props}
        >
            <Navbar />
            {props.children}
            <Footer />
        </Flex>
    )
}

export default Layout;
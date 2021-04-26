import { Image } from "@chakra-ui/image";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from '../../assets/logo.png';

const Logo = () => {
    return (
        <Link to="/" className="navbar-brand">
            <HStack align="center" spacing={[4, 4, 3]}>
                <Image src={LogoIcon} boxSize={["60px", "60px", "70px"]} alt={'logo'} />
                <Box fontSize="2xl" color={["whiteAlpha.900", "whiteAlpha.900", "blue.700"]} fontWeight={[null, null, "600"]}>
                    <Text display="inline">Des</Text>
                    <Text display="inline" color={["blue.50", "gray.50", "blue.400"]} fontWeight={["600", "600", null]}>informa</Text>
                    <Text display="inline">.me</Text>
                </Box>
            </HStack>
        </Link>
    )
}

export default Logo;
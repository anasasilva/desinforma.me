import React, { useState } from 'react';
import { Box, Flex, Button, Collapse, useBreakpointValue, Stack, Text, Link } from '@chakra-ui/react';
import Logo from './Logo';
import { Link as ReactLink, useLocation } from 'react-router-dom';

const CloseIcon = () => ( // Icone de fechar a navbar em telemovel (X).
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => ( // Icone de abrir a navbar em telemovel (hamburguer).
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const NavContents = ({ show = true }) => {

    const primaryBtnClass = useBreakpointValue({ base: "btn-dark", md: "btn-primary" });

    return (
        <Flex
            align="center"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 2, 2]}
            display={show ? "flex" : "none"}
        >
            <NavbarItem to="/como-jogar">Como Jogar</NavbarItem>
            <NavbarItem to="/sobre">Sobre</NavbarItem>
            <NavbarItem to="/novo-jogo" isLast>
                {/* <Button
                size="sm"
                rounded="md"
                color={['blue.600', 'blue.600', 'white', 'white']}
                bg={['white', 'white', 'blue.500', 'blue.500']}
                _hover={{
                    bg: ['blue.100', 'blue.100', 'blue.600', 'blue.600'],
                }}
            >
                Novo Jogo
                    </Button> */}
                <ReactLink className={"btn " + primaryBtnClass} to={'/jogo'}>Novo Jogo</ReactLink>
            </NavbarItem>
        </Flex>
    )
}

const NavbarItem = ({ children, isLast, to = '/' }) => {

    let currentPath = useLocation();
    let isActive = (to === currentPath.pathname && !isLast);

    return (
        <Stack
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : "42px" }}
            spacing="1">
            <Text
                display="block"
                fontSize="lg"
                mb={1}
            >
                <Link as={ReactLink} to={to} textDecoration="none !important" _focus={{ boxShadow: "none !important" }}>{children}</Link>
            </Text>
            <Box width="100%" height="2px" bg={isActive ? ["whiteAlpha.800", "whiteAlpha.800", "blue.500"] : "none"}></Box>
        </Stack>
    );
};

const Navbar = props => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    const displayCollapse = useBreakpointValue({ base: "block", md: "none" });

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={[4, 4, 6, 6]}
            px={8}
            py={[2, 3, 4]}
            bg={['blue.500', 'blue.500', 'transparent', 'transparent']}
            color={['white', 'white', 'blue.700', 'blue.700']}
            {...props}
        >
            <Logo />

            <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: 'block', md: 'block' }}
                flexBasis={{ base: '100%', md: 'auto' }}
            >
                <Collapse direction="bottom" in={show} display={displayCollapse}> {/* Telemovel */}
                    <NavContents show={displayCollapse === "block"} />
                </Collapse>
                <NavContents show={displayCollapse !== "block"} /> {/* PC */}
            </Box>
        </Flex>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import classnames from "classnames";

export default function IndexNavbar() {
    const [navbarColor, setNavbarColor] = useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {

                setNavbarColor("custom-sticky");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    return (
        <Navbar expand="lg" fixed="top" className={classnames("fixed-top", navbarColor)} >
            <Container className="font-weight-bold">
                <Navbar.Brand href="#header">Felipe Serafim</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-light">
                        <Nav.Link className="text-light" href="#header">Home</Nav.Link>
                        <Nav.Link className="text-light" href="#about">Sobre</Nav.Link>
                        <Nav.Link className="text-light" href="#services">Serviços</Nav.Link>
                        {/* <Nav.Link className="text-light" href="#portfolio">Portfólio</Nav.Link> */}
                        <Nav.Link className="text-light" href="#contact">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
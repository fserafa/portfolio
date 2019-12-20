import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import classnames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

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
                <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center flex-row m-0 text-light"><FontAwesomeIcon icon={faLaptopCode} size="2x" className="mr-2"/><span>Felipe Serafim</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-light">
                        <Nav.Link className="text-light" href="#home">Home</Nav.Link>
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
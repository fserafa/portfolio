import React, { Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import headerBg from '../assets/headerbg.jpg'
class Header extends Component {
    render() {
        return (
            <header id="header" style={{ background: `url(${headerBg}) center no-repeat`, backgroundSize: 'cover', height: '100vh' }}>
                <Navbar expand="lg" >
                    <Container className="font-weight-bold"> 
                        <Navbar.Brand href="#header" className="text-light">Felipe Serafim</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="text-light">
                                <Nav.Link className="text-light" href="#header">Home</Nav.Link>
                                {/* <Nav.Link className="text-light" href="#about">Sobre</Nav.Link>
                                <Nav.Link className="text-light" href="#services">Serviços</Nav.Link>
                                <Nav.Link className="text-light" href="#portfolio">Portfólio</Nav.Link> */}
                                <Nav.Link className="text-light" href="#contact">Contato</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="d-flex flex-column justify-content-center align-items-center h-100">

                    <h1 className="text-light font-weight-bolder display-1 text-center">Precisa de um site?</h1>
                    <div className="border border-light rounded w-25"></div>
                    <h2 className="text-light font-weight-bolder text-center p-3">
                        Sou desenvolvedor web e posso te ajudar, entre em contato.
                    </h2>
                    <Button variant="outline-light" size="lg" onClick={() => window.location.href='#contact'}>Vamos Conversar!</Button>

                </Container>
            </header>
        );
    }
} 

export default Header;
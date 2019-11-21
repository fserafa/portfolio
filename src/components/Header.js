import React, { Component } from 'react';
import { Navbar, Nav, Container, Jumbotron } from 'react-bootstrap'
import headerBg from '../assets/headerbg.jpg'
class Header extends Component {
    render() {
        return (
            <header style={{ background: `url(${headerBg}) center no-repeat`, backgroundSize: 'cover', height: '100vh' }}>
                <Navbar expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="d-flex flex-column justify-content-center align-items-center h-100">

                    <h1 >Hello, world!</h1>
                    <div className="border border-primary rounded w-25"></div>
                    <p> 
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                   

                </Container>
            </header>
        );
    }
}

export default Header;
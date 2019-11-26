import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component { 
    render() {
        return (
            <footer style={{ backgroundColor: '#303dc2', padding: 20 }} >
                <Container className="d-flex justify-content-end">
                    <a href="https://github.com/fserafa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" color="white" /></a>
                </Container>

            </footer>
        ); 
    }
}

export default Footer;
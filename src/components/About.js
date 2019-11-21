import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <section style={{ height: '100vh' }} className="bg-secondary">
                <Container className="d-flex flex-column justify-content-center align-items-center h-100">

                    <h1>About</h1>
                    <p>
                        This is a simple hero unit, a simple Container-style component for calling
                        extra attention to featured content or information.
  </p>
                    <p>
                    </p>
                </Container>
            </section>
        );
    }
}

export default About;
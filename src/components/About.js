import React from 'react';
import { Container } from 'react-bootstrap';

export default function About() {
    return (
        <section id="about" style={{ height: '100vh' }} >
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

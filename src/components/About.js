import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'
export default function About() {
    return (
        <section id="about" className="mh-100vh" >
            <Container className="d-flex flex-column justify-content-around align-items-center mh-100vh">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="font-weight-bolder display-3" style={{ color: '#2834a5' }}>Sobre</h1>
                    <div className="rounded" style={{ border: '1px solid #2834a5', width: '50px' }}></div>
                    <p>
                    This is a simple hero unit, a simple Container-style component for calling
                    extra attention to featured content or information.
  </p>
                </div>
               
                
                    <div style={{ color: '#2834a5' }}>
                        <FontAwesomeIcon icon={faHtml5} size="3x" className="m-2" />
                        <FontAwesomeIcon icon={faCss3} size="3x" className="m-2" />
                        <FontAwesomeIcon icon={faJs} size="3x" className="m-2" />
                        <FontAwesomeIcon icon={faReact} size="3x" className="m-2" />
                        <FontAwesomeIcon icon={faWordpress} size="3x" className="m-2" />
                    </div>
               
            </Container>
        </section>
    );
}

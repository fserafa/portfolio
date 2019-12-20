import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const services = [{
            title: 'Sites institucionais'
        },
        {
            title: 'Sites empresariais',
        },
        {
            title: 'Hotsites',
        },
        {
            title: 'Landing pages',
        }];

        setServices(services);
    }, []);

    return (
        <section id="services" className="mh-100vh" style={{ backgroundColor: '#e7e7e7' }}>
            <Container className="d-flex flex-column justify-content-around align-items-center mh-100vh">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="font-weight-bolder display-3" style={{ color: '#2834a5' }}>Serviços</h1>
                    <div className="rounded" style={{ border: '1px solid #2834a5', width: '50px' }}></div>
                </div>

                <Row className="services-boxes">
                    <Col>
                        <FontAwesomeIcon icon={faDesktop} style={{ fontSize: 450 }} />
                    </Col>
                    <Col lg={4} md={6} className="d-flex">
                    {services.map((service, index) => (
                       
                            <div key={index.toString()} className="media flex-column p-4 bg-light my-3 text-center" style={{ borderBottom: '3px solid #2834a5' }}>
                                <div className="media-icon m-auto">
                                    <div style={{ color: '#2834a5' }}>
                                        <FontAwesomeIcon icon={faHtml5} size="2x" className="m-2" />
                                        <FontAwesomeIcon icon={faCss3} size="2x" className="m-2" />
                                        <FontAwesomeIcon icon={faJs} size="2x" className="m-2" />
                                        <FontAwesomeIcon icon={faReact} size="2x" className="m-2" />
                                        <FontAwesomeIcon icon={faWordpress} size="2x" className="m-2" />
                                    </div>

                                </div>
                                <div className="media-body mt-4">
                                    <h5>{service.title}</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy nibh euismod tincidunt ut.</p>
                                </div>
                            </div>
                        

                    ))}
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
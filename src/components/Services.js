import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import placeholder from '../assets/placeholder.jpg'

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
        <section id="services" style={{ minHeight: '80vh', backgroundColor: '#e7e7e7' }}>
            <Container className="d-flex flex-column justify-content-around align-items-center" style={{ minHeight: '80vh' }}>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="font-weight-bolder display-3" style={{ color: '#2834a5' }}>Serviços</h1>
                    <div className="rounded" style={{ border: '1px solid #2834a5', width: '50%' }}></div>
                </div>
                <Row clasName="align-items-center">
                    <Col lg={5} className="text-center">
                        <img alt="" src={placeholder} className="img-fluid" />
                    </Col>

                    <Col lg={7}>
                        <Row>
                            {services.map((service, index) => (
                                <Col md={6} key={index.toString()}>
                                    <div class="media single-feature-item mb-3">
                                        <div class="feature-icon">
                                            <FontAwesomeIcon icon={faFileCode} size="4x" color="#4754d2" />

                                        </div>
                                        <div class="media-body">
                                            <h5>{service.title}</h5>
                                            <p>Lorem ipsum dolor sit amet, elita dolor sit amet Uniquely fashion.</p>
                                        </div>
                                    </div>
                                </Col>

                            ))}
                        </Row>
                    </Col>
                </Row>
                <Row className="services">
                    {services.map((service, index) => (
                        <Col lg={4} md={6} key={index.toString()}>
                            <div class="media flex-column p-4 bg-light my-3 text-center" style={{ borderBottom: '3px solid #2834a5'}}>
                                <div class="media-icon m-auto">
                                    <FontAwesomeIcon icon={faFileCode} size="4x" color="#4754d2" />

                                </div>
                                <div class="media-body mt-4">
                                    <h5>{service.title}</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy nibh euismod tincidunt ut.</p>
                                </div>
                            </div>
                        </Col>

                    ))}

                </Row>
            </Container>
        </section>
    )
}
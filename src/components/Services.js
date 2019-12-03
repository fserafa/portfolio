import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';


export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const services = [{
            title: 'Sites institucionais',
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
        <section id="services" style={{ minHeight: '80vh', backgroundColor: '#f4f4f4' }}>
            <Container className="d-flex flex-column justify-content-around align-items-center" style={{ minHeight: '80vh' }}>
                <h1 className="font-weight-bolder display-3" style={{ color: '#2834a5' }}>Serviços</h1>
                <Row>
                    {services.map((service, index) => (
                        <Col lg key={index.toString()} className="text-center p-2">
                            <FontAwesomeIcon icon={faFileCode} size="4x" color="#4754d2" />
                            <div className="p-3 w-100">
                                <h4>{service.title}</h4>

                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
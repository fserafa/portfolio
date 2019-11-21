import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

class Services extends Component {
    state = {
        services: []
    }

    componentDidMount() {
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

        this.setState({ services: services });
    }

    render() {
        const { services } = this.state;

        return (
            <section id="services" style={{ height: '80vh', backgroundColor: '#f4f4f4' }}>
                <Container className="d-flex flex-column justify-content-around align-items-center h-100">
 
                    <h1 className="font-weight-bolder display-1" style={{ color: '#2834a5' }}>Serviços</h1>
                    <div className="w-100 d-flex justify-content-around">
                         
                        <Row>
                            {services.map((service, index) => (
                               
                                    <Card key={index.toString()} style={{ width: '20%' }} className="shadow rounded p-3">
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                        </Card.Body>
                                    </Card> 
                               
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Services;
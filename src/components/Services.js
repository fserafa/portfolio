import React, { Component } from 'react';
import { Card, Button, Container } from 'react-bootstrap'

class Services extends Component {
    state = {
        services: []
    }

    componentDidMount() {
        const services = [{
            title: 'Dev Web',
            description: 'Lorem Ipsum'
        },
        {
            title: 'Dev Mobile',
            description: 'Lorem Ipsum'
        }];

        this.setState({ services: services });
    }

    render() {
        const { services } = this.state;

        return (
            <section style={{ height: '100vh' }}>
                <Container className="d-flex flex-row justify-content-around align-items-center h-100">
                    {services.map((service, index) => (
                        <Card key={index.toString()} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </section>
        );
    }
}

export default Services;
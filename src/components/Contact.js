import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <section style={{ height: '100vh' }}>
                <Container className="d-flex flex-column justify-content-center h-100">

                    <Row>
                        <Col>
                            <h1>Contato</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="tel" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-around">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Email</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Whatsapp</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Contact;
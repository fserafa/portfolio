import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    render() {
        return (
            <section id="contact" style={{ height: '100vh', backgroundColor: '#4754d2' }} >
                <Container className="d-flex flex-column justify-content-around h-100">
                    <h1 className="font-weight-bolder display-1 text-light text-center">Contato</h1>
                    <Row>
                        <Col className="text-light">
                            <h3 className="text-center">Envie uma mensagem!</h3>
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
                                <Form.Group>
                                    <Form.Label>Mensagem</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={1} className="d-flex flex-column align-items-center justify-content-around">
                            <h1 className="text-center text-light">Ou</h1>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <Card bg="light" style={{ width: '100%' }} className="p-3 rounded d-flex flex-row align-items-center">
                                <Card.Body className="p-0">
                                    <Card.Title>Whatsapp</Card.Title>
                                    <Card.Text>
                                        (27) 99864-5147
                                    </Card.Text>

                                </Card.Body>
                                <FontAwesomeIcon icon={faArrowRight} size="2x" />

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Contact;
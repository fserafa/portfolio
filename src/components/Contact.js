import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Axios from 'axios'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const data = new FormData(form);

        await Axios({
            url: "https://formspree.io/maynybzn",
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            data: data
        })
            .then(response => {
                form.reset();
                setShowSuccess(true);
                setLoading(false);
            })
            .catch(error => {
                setShowError(true);
                setLoading(false);
            });
    }

    function handleClick() {
        const number = '5527998645147';
        const text = 'Olá, estou precisando de um site'
        window.open(
            `https://wa.me/${number}?text=${text}`,
            '_blank'
        )
    }

    return (
        <section id="contact" style={{ minHeight: '100vh', backgroundColor: '#4754d2' }}>

            {showError ?
                <div className="d-flex justify-content-center">

                    <Alert variant="danger" style={{ position: 'fixed', top: 10, zIndex: 1, maxWidth: '100%', width: '50%' }}>
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
                        Opa! Aconteceu um erro.
                    </Alert>

                    {setTimeout(() => {
                        setShowError(false)
                    }, 3000)}
                </div>
                : showSuccess ?
                    <div className="d-flex justify-content-center">
                        <Alert variant="success" style={{ position: 'fixed', top: 10, zIndex: 1, maxWidth: '100%', width: '50%' }}>
                            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                            Mensagem enviada. Obrigado!
                    </Alert>

                        {setTimeout(() => {
                            setShowSuccess(false)
                        }, 3000)}
                    </div>
                    : null}

            <Container className="d-flex flex-column justify-content-around" style={{minHeight: '100vh'}}>
                <h1 className="font-weight-bolder display-3 text-light text-center">Contato</h1>
                <Row className="mb-3">
                    <Col className="text-light">
                        <h3 className="text-center">Envie uma mensagem!</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="tel"
                                    onChange={e => setTel(e.target.value)}
                                    value={tel}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="msg"
                                    rows="3"
                                    onChange={e => setMsg(e.target.value)}
                                    value={msg}
                                />
                            </Form.Group>

                            <Button className="d-flex align-items-center" variant="light" type="submit">
                                {loading ? (<Spinner className="mr-1" size="sm" animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>) : null}

                                Enviar
                                </Button>
                        </Form>
                    </Col>
                    <Col xs={12} xl={1} className="d-flex flex-column align-items-center justify-content-around">
                        <h1 className="text-center text-light">Ou</h1>
                    </Col>
                    <Col className="d-flex flex-column align-items-center justify-content-center">

                        <Button

                            onClick={handleClick}
                            variant="light"
                            style={{ width: '100%' }}
                            className="text-left p-3 rounded d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex align-items-center flex-row">
                                <FontAwesomeIcon icon={faWhatsapp} size="3x" className="mr-3" />

                                <div>
                                    <h5 className="card-title">
                                        Whatsapp
                                        </h5>
                                    <p className="card-text">
                                        (27) 99864-5147
                                        </p>
                                </div>
                            </div>

                            <FontAwesomeIcon icon={faArrowRight} size="2x" />

                        </Button>
                    </Col>
                </Row>



            </Container>
        </section >
    );

}

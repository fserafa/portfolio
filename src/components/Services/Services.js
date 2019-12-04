import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Services;
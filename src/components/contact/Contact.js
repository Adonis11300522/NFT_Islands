import React, {useState} from "react";
import {Container, Col, Form, Button, Row, Card, FloatingLabel} from 'react-bootstrap';
import './Contact.css';
import { FaTwitter, FaTelegramPlane, FaDiscord, FaInstagram } from "react-icons/fa";

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return ( 
        <div className="Contact">   
            <div className="Contact-main">
                <Container>
                    <h5>CONTACT US</h5>
                    <h3>CONTACT ONE OF <br/>OUR EXPERT TEAM</h3>
                </Container>  
                <Container className="Contact-body">
                    <Col md={7}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} className="mb-4" md="6" controlId="validationCustom03">
                                    <Form.Control type="text" placeholder="First name" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid First name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-4" md="6" controlId="validationCustom03">
                                    <Form.Control type="text" placeholder="Last name" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Last name
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-4" md="6" controlId="validationCustom03">
                                    <Form.Control type="email" placeholder="Email Address" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Email Address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-4" md="6" controlId="validationCustom03">
                                    <Form.Control type="text" placeholder="Phone Number" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Phone Number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-4" md="6" controlId="validationCustom03">
                                    <Form.Control type="text" placeholder="How can we help you?" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid feild.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-4" md="6" controlId="validationCustom03">
                                    <Form.Control type="text" placeholder="Country" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Country.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <FloatingLabel className="mb-4" controlId="floatingTextarea2" label="Your message">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '350px' }}
                                    />
                                </FloatingLabel>
                            </Row>
                            
                            <Button type="submit">SUBMIT</Button>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <Card  className="mb-4">
                            <Card.Body>
                                <Card.Title><span><FaTelegramPlane/></span></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">CHAT WITH US ON TELEGRAM</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card  className="mb-4">
                            <Card.Body>
                                <Card.Title><span><FaTwitter/></span></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">FOLLOW US ON TWITTER</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card  className="mb-4">
                            <Card.Body>
                                <Card.Title><span><FaDiscord/></span></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">JOIN OUR DISCORD SERVER</Card.Subtitle>
                            </Card.Body>
                        </Card> 
                        <Card  className="mb-4">
                            <Card.Body>
                                <Card.Title><span><FaInstagram/></span></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">FOLLOW US ON INSTAGRAM</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </div>               
        </div>
    );

}

export default Contact;
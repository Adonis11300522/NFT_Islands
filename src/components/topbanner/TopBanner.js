import React from "react";
import './TopBanner.css';
import {Container, Row, Form, Col,  Button } from 'react-bootstrap'
import bg_island from './assets/bg_island.png';
import topleft from './assets/bg_island1.png';
import bottomleft from './assets/bg_island2.png';
import topright from './assets/bg_island3.png';
import bottomright from './assets/monkey_island.png';

function TopBanner() {
    return ( 
        <div>
            <div className="TopBanner">   
                <Container className="text-slide pt-5">
                    <h1>WELCOME<br/>TO <span>NFT</span> ISLANDS</h1>
                    <p>Sed ut perspiciatis unde omnis natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                    <Form>
                        <h6>SUBSCRIBE FOR UPDATES</h6>
                        <Row className="align-items-center">
                            <Col sm={2} className="my-1">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Frist name" required />
                                    <Form.Control.Feedback type="invalid">
                                        You have successfully subscribed to our mailing list.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={2} className="my-1">
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email address" required />
                                    <Form.Control.Feedback type="invalid">
                                        Your email address has been inputted worng.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Button type="submit">SUBSCRIBE</Button>
                            </Col>
                        </Row>
                    </Form>
                    <div className="animate-image container">
                    <Row>
                        <Col sm={1} className="topleft"><img src={topleft} alt="topleft"/></Col>
                        <Col sm={5} className="topright"><img src={topright} alt="topright"/></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className="bottomleft"><img src={bottomleft} alt="bottomleft"/></Col>
                        <Col sm={4} className="bottomright"><img src={bottomright} alt="bottomright"/></Col>
                    </Row>
                </div>   
                </Container> 
                {/* <img src={bg_island} alt="topleft"/>      */}
                
                {/* <Container>
                    <h1>WELCOM<br/>TO <span>NFT</span> ISLANDS</h1>\
                    <p>Sed ut perspiciatis unde omnis natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                    <Form>
                        <h6>SUBSCRIBE FOR UPDATES</h6>
                        <Row className="align-items-center">
                            <Col sm={2} className="my-1">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Frist name" required />
                                    <Form.Control.Feedback type="invalid">
                                        You have successfully subscribed to our mailing list.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={2} className="my-1">
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email address" required />
                                    <Form.Control.Feedback type="invalid">
                                        Your email address has been inputted worng.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Button type="submit">SUBSCRIBE</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <div className="animate-image">
                    <Row>
                        <Col sm={2} className="topleft"><img src={topleft} alt="topleft"/></Col>
                        <Col sm={1} className="topright"><img src={topright} alt="topright"/></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className="bottomleft"><img src={bottomleft} alt="bottomleft"/></Col>
                        <Col sm={4} className="bottomright"><img src={bottomright} alt="bottomright"/></Col>
                    </Row>
                </div> */}
            </div>
            <div className="TopBanner-mobile">
                <Container>
                <h1>WELCOME<br/>TO <span>NFT</span> ISLANDS</h1>
                    <p>Sed ut perspiciatis unde omnis natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                    <Form>
                        <h6>SUBSCRIBE FOR UPDATES</h6>
                        <Row className="align-items-center">
                            <Col sm={2} className="my-1">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Frist name" required />
                                    <Form.Control.Feedback type="invalid">
                                        You have successfully subscribed to our mailing list.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={2} className="my-1">
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email address" required />
                                    <Form.Control.Feedback type="invalid">
                                        Your email address has been inputted worng.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Button type="submit">SUBSCRIBE</Button>
                            </Col>
                        </Row>
                    </Form>
                    <div>
                        <img src={bottomright} alt="bottomright"></img>
                    </div>                    
                </Container>
            </div>
        </div>
        
        
    );

}

export default TopBanner;
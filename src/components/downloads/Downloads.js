import Button from "@restart/ui/esm/Button";
import React from "react";
import {Container, Card, Col, Row} from 'react-bootstrap';
import './Downloads.css';
import Rules from './assets/rules.png';
import Vision from './assets/vision.png';
import Whitepaper from './assets/whitepaper.png';

function Downloads() {

    return ( 
        <div className="Downloads">   
            <div className="Downloads-main">
                <Container>
                    <div className="Downloads-main-title mb-5">
                        <h3>NFT ISLANDS DOWNLOADS</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem accusantium doloremque laudantium.</p>
                    </div> 
                    <Row className="mb-5">
                    <Col>
                        <Card>
                            <Card.Body>                            
                                <Card.Subtitle className="mb-2 text-muted"><img src={Whitepaper} alt="Whitepaper"/></Card.Subtitle>
                                <Card.Title>NFT LSLANDS<br/>WHITEPAPER</Card.Title>
                                <Card.Link href="#"><Button>DOWNLOAD</Button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>                            
                                <Card.Subtitle className="mb-2 text-muted"><img src={Vision} alt="Vision"/></Card.Subtitle>
                                <Card.Title>OUR VISION FOR<br/>THE METAVERS</Card.Title>
                                <Card.Link href="#"><Button>DOWNLOAD</Button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>                            
                                <Card.Subtitle className="mb-2 text-muted"><img src={Rules} alt="Rules"/></Card.Subtitle>
                                <Card.Title>NFT ISLANDS OFFICIAL<br/>TRADING CARD GAME RULES</Card.Title>
                                <Card.Link href="#"><Button>DOWNLOAD</Button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </div>   
            <div className="Downloads-mobile">
                <Container>
                    <div className="Downloads-main-title mb-5">
                        <h3>NFT ISLANDS<br/>DOWNLOADS</h3>
                    </div> 
                    <Col>
                        <Card>
                            <Card.Body>                            
                                <Card.Subtitle className="mb-2 text-muted"><img src={Whitepaper} alt="Whitepaper"/></Card.Subtitle>
                                <Card.Title>NFT LSLANDS<br/>WHITEPAPER</Card.Title>
                                <Card.Link href="#"><Button>DOWNLOAD</Button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>                            
                                <Card.Subtitle className="mb-2 text-muted"><img src={Vision} alt="Vision"/></Card.Subtitle>
                                <Card.Title>OUR VISION FOR<br/>THE METAVERS</Card.Title>
                                <Card.Link href="#"><Button>DOWNLOAD</Button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>                            
                                <Card.Subtitle className="mb-2 text-muted"><img src={Rules} alt="Rules"/></Card.Subtitle>
                                <Card.Title>NFT ISLANDS OFFICIAL<br/>TRADING CARD GAME RULES</Card.Title>
                                <Card.Link href="#"><Button>DOWNLOAD</Button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </div>              
        </div>
    );

}

export default Downloads;
import Button from "@restart/ui/esm/Button";
import React from "react";
import {Container, Card, ProgressBar} from 'react-bootstrap';
import Mintingwave from './assets/mintingwave.png';
import MinusBtn from './assets/icon_minus.png';
import PlusBtn from './assets/icon_plus.png';
import './Minting.css';

function Minting() {
    return ( 
        <div className="Minting">   
            <div className="Mintingwave"><img src={Mintingwave} alt="Mintingwave"/></div>  
            <div className="Minting-main">
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">PRESALE MINT BEGINS FEBRUARY 1ST 2022</Card.Subtitle>
                            <Card.Title>MINT ISLAND 1 NOW + WIN 10 PACKS <br/>OF EDITION 1 TRADING CARDS</Card.Title>                            
                            <Card.Text>
                            Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium
                            </Card.Text>
                            <ProgressBar now={100} label="0/100"/>
                            <div className="Minting-body">
                                <p className="Minting-stepper"><Button><img src={MinusBtn} alt="MinusBtn"/></Button><p>1</p><Button><img src={PlusBtn} alt="PlusBtn"/></Button></p>
                                <h5>5 Mint Max</h5>
                                <p>1 x Monkey = 0.08 ETH</p>
                            </div>
                            <div className="MintBtn">
                                <Button className="connect-metamask">CONNECT METAMASK</Button>
                                <Button className="mint-now">MINT NOW</Button>
                            </div>
                            <h5 className="bottom-label">VIEW ON <span>OPENSEA</span><br/>AFTER MINTING!</h5>
                        </Card.Body>
                    </Card>
                </Container>                  
            </div>     
            <div className="Minting-main-mobile">
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">PRESALE</Card.Subtitle>
                            <Card.Title>MINT ISLAND 1 NOW + WIN 10 PACKS OF EDITION 1 TRADING CARDS</Card.Title>                            
                            <Card.Text>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                            </Card.Text>
                            <ProgressBar now={100} label="0/100"/>
                            <div className="Minting-body">
                                <p className="Minting-stepper"><Button><img src={MinusBtn} alt="MinusBtn"/></Button><p>1</p><Button><img src={PlusBtn} alt="PlusBtn"/></Button></p>
                                <h5>5 Mint Max</h5>
                                <p>1 x Monkey = 0.08 ETH</p>
                            </div>
                            <div className="MintBtn">
                                <Button className="connect-metamask">CONNECT METAMASK</Button>
                                <Button className="mint-now">MINT NOW</Button>
                            </div>
                            <h5 className="bottom-label">VIEW ON <span>OPENSEA</span><br/>AFTER MINTING!</h5>
                        </Card.Body>
                    </Card>
                </Container>                  
            </div>                                
        </div>
    );

}

export default Minting;
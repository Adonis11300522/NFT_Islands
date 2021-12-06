import Button from "@restart/ui/esm/Button";
import React from "react";
import {Container, Card, Col, Table} from 'react-bootstrap';
import Raritywave from './assets/Raritywave.png';
import Avatar1 from './assets/1.png';
import Avatar2 from './assets/2.png';
import Avatar3 from './assets/3.png';
import Ratingempty1x from './assets/rating-empty-1x.png';
import Ratingfull1x from './assets/rating-full-1x.png';
import Ratingempty2x from './assets/rating-empty-2x.png';
import Ratingfull2x from './assets/rating-full-2x.png';
import Ratingemptymobile1x from './assets/rating-empty-mobile1x.png';
import Ratingfullmobile1x from './assets/rating-full-mobile1x.png';
import Ratingemptymobile2x from './assets/rating-empty-mobile2x.png';
import Ratingfullmobile2x from './assets/rating-full-mobile2x.png';
import Chartimage from './assets/chart.png';
import Chimpanze from './assets/Chimpanze.png';
import './Rarity.css';
import Rating from "react-rating";
import { FaHardHat, FaTshirt, FaSmile } from "react-icons/fa";

function Rarity() {
    return ( 
        <div className="Rarity" id="Rarity">   
            <div className="Raritywave"><img src={Raritywave} alt="Raritywave"/></div>  
            <div className="Rarity-main">
                <Container className="Section-title">
                    <h5>HOW RARE IS MY</h5>
                    <h3>HUMANIMAL</h3>
                    <p>Sed ut perspiciatis unde omnis natus errors sit<br/>voluptatem accusantium doloremque laudantium</p>
                </Container>   
                <Container className="Section-body">
                    <div className="Card-section">
                        <div className="Islandbtns">
                            <Button>SIMIA ISLAND</Button>
                            <Button>STRIPE ISLAND</Button>
                            <Button>YEEN ISLAND</Button>
                            <Button>ESCOBA ISLAND</Button>
                            <Button>PRIDE  ISLAND</Button>  
                        </div>
                        <div className="Islandbtns">
                            <Button>TUSK ISLAND</Button>
                            <Button>JIAO ISLAND</Button>
                            <Button>MBIO ISLAND</Button>
                            <Button>BAMBA ISLAND</Button>
                            <Button>DUBBLY ISLAND</Button>      
                        </div>
                        <div className="AvatarCards">
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingempty1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingempty1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingempty1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />} alt="Ratingfull1x"  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />} alt="Ratingfull1x"  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />} alt="Ratingfull1x"  fullSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar3} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar3} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="AvatarCards">
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar2} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar2} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull2x}  alt="Ratingfull1x"className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }} className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull1x} alt="Ratingfull1x" className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} alt="Ratingfull1x" className="icon" />} placeholderSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}  fullSymbol={<img src={Ratingfull2x} alt="Ratingfull1x" className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>     
                    </div><hr/>
                    <div className="Chart-section">
                        <img src={Chartimage} alt="Chartimage"/>
                        <div className="Chart-section-title">
                        <h3>HOW RARE<br/>IS MY MONKEY?</h3>
                        <p>The Koala Folk humanimals of Dubbly are a surprisingly effective military force, widely feared across the Metaverse. This image is widely disbelieved by those who have met them, but the veterans who have fought them know the truth. The DNA of  Lars Peeterson, bodyguard to Dr Morrow is a part of the Koala Folk now.</p>
                        </div>
                    </div><hr/>
                    <div className="Table-section">
                        <Card>
                            <div className="table-text">
                                <h3>MONKEY RARITY?</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium.</p>
                            </div>
                            <Card.Body>
                                <div className="table-inner-body">
                                    <div className="table-img"><img src={Chimpanze} alt="Chimpanze"/></div>
                                    <div className="table-body">
                                        <Table >
                                            <thead>
                                                <tr>
                                                    <th>STATS</th>
                                                    <th>TRAITS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td >
                                                        <tr>
                                                            <td>Total Monkeys</td>
                                                            <td>1,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mint Cost</td>
                                                            <td>0.08ETH</td>
                                                        </tr>
                                                    </td>
                                                    <td rowSpan="4" style={{borderstyle: 'hidden solid'}}>
                                                        <tr>
                                                            <td>Backgrounds</td>
                                                            <td>8</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fur</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mouth</td>
                                                            <td>7</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Clothes</td>
                                                            <td>30</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Headwear</td>
                                                            <td>20</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Eyes</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hair</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ears</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Accessories</td>
                                                            <td>30</td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>TYPE</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <tr>
                                                            <td>Total Monkeys</td>
                                                            <td>1,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mint Cost</td>
                                                            <td>0.08ETH</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total Monkeys</td>
                                                            <td>1,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mint Cost</td>
                                                            <td>0.08ETH</td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>    
            </div>     
            <div className="Rarity-mobile">
                <Container className="Section-title">
                    <h5>HOW RARE IS MY</h5>
                    <h3>HUMANIMAL</h3>
                    <p>Sed ut perspiciatis unde omnis natus errors sit<br/>voluptatem accusantium doloremque laudantium</p>
                </Container>   
                <Container className="Section-body">
                    <div className="Card-section">
                        <div className="Islandbtns">
                            <Button>SIMIA ISLAND</Button>
                            <Button>STRIPE ISLAND</Button>
                            <Button>YEEN ISLAND</Button>
                            <Button>ESCOBA ISLAND</Button>
                            <Button>PRIDE  ISLAND</Button>  
                            <Button>TUSK ISLAND</Button>
                            <Button>JIAO ISLAND</Button>
                            <Button>MBIO ISLAND</Button>
                            <Button>BAMBA ISLAND</Button>
                            <Button>DUBBLY ISLAND</Button>      
                        </div>
                        <div className="AvatarCards">
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div> 
                        <div className="AvatarCards">
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="AvatarCards">
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="AvatarCards">
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span className="reviews"><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingemptymobile1x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile1x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile1x} className="icon" />}/></span>
                                        <span className="reviews"><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingemptymobile2x} className="icon" />} placeholderSymbol={<img src={Ratingfullmobile2x} className="icon" />}  fullSymbol={<img src={Ratingfullmobile2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>
                        {/* <div className="AvatarCards">
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={6}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={6}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <Card className="AvatarCard">
                                <Card.Img variant="top" src={Avatar1} />
                                <Card.Body className="Avatarcard-body">
                                    <Col className="small-card" md={5}>
                                        <div className="card">
                                            <div className="card-body">3</div>
                                            <div className="card-footer">COMMON</div>
                                        </div>
                                    </Col>
                                    <Col className="avatar-property" md={7}>
                                        <h6>#1234</h6>
                                        <span><FaHardHat/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaTshirt/><Rating placeholderRating={1} stop={4} step={1} emptySymbol={<img src={Ratingempty1x} className="icon" />} placeholderSymbol={<img src={Ratingfull1x} className="icon" />}  fullSymbol={<img src={Ratingfull1x} className="icon" />}/></span>
                                        <span><FaSmile/><Rating placeholderRating={1} stop={2} step={1} emptySymbol={<img src={Ratingempty2x} className="icon" />} placeholderSymbol={<img src={Ratingfull2x} className="icon" />}  fullSymbol={<img src={Ratingfull2x} className="icon" />}/></span>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>  */}
                        
                    </div><hr/>
                    <div className="Chart-section">                    
                        <div className="Chart-section-title">
                            <h3>HOW RARE<br/>IS MY MONKEY?</h3>
                            <p>The Koala Folk humanimals of Dubbly are a surprisingly effective military force, widely feared across the Metaverse. This image is widely disbelieved by those who have met them, but the veterans who have fought them know the truth. The DNA of  Lars Peeterson, bodyguard to Dr Morrow is a part of the Koala Folk now.</p>
                        </div>
                        <img src={Chartimage} alt="Chartimage"/>
                    </div><hr/>
                    <div className="Table-section">
                        <Card>
                            <div className="table-text">
                                <h3>MONKEY<br/>RARITY?</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium.</p>
                            </div>
                            <Card.Body>
                                <div className="table-inner-body">
                                    <div className="table-body">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>STATS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <tr>
                                                            <td>
                                                                Total Monkeys
                                                            </td>
                                                            <td>
                                                                1,000
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Mint Cost
                                                            </td>
                                                            <td>
                                                                0.08ETH
                                                            </td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>TYPES</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <tr>
                                                            <td>
                                                                Common
                                                            </td>
                                                            <td>
                                                                1,000
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Wild
                                                            </td>
                                                            <td>
                                                                300
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Exotic
                                                            </td>
                                                            <td>
                                                                175
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Rare
                                                            </td>
                                                            <td>
                                                                75
                                                            </td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="table-body">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>TRAITS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <tr>
                                                            <td>
                                                                Backgrounds
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Fur
                                                            </td>
                                                            <td>
                                                                10
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Mouth
                                                            </td>
                                                            <td>
                                                                7
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Clothes
                                                            </td>
                                                            <td>
                                                                30
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Headwear
                                                            </td>
                                                            <td>
                                                                20
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Eyes
                                                            </td>
                                                            <td>
                                                                10
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Hair
                                                            </td>
                                                            <td>
                                                                10
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Ears
                                                            </td>
                                                            <td>
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Accessories
                                                            </td>
                                                            <td>
                                                                30
                                                            </td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                                       
                </Container>  
            </div>                                
        </div>
    );

}

export default Rarity;
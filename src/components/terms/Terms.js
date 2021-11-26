import React from "react";
import {Container, Col, Card} from 'react-bootstrap';
import './Terms.css';
import { FaTwitter, FaTelegramPlane, FaDiscord, FaInstagram } from "react-icons/fa";

function Terms() {
    return ( 
        <div className="Terms">   
            <div className="Terms-main">
                <Container>
                    <h3>CUSTOMISABLE AND FLEXIBLE <br/>FEATURES DESIGNED FOR AGENCIES <br/>AND BRANDS</h3>
                </Container>  
                <Container className="Terms-body">
                    <Col md={7}>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <h6><strong>Ut enim ad minima veniam</strong></h6>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                        <h6>Ut enim ad minima veniam</h6>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        <h6>Ut enim ad minima veniam</h6>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
                        <ul>
                            <li> Sed ut perspiciatis unde</li>
                            <li> Sed ut perspiciatis unde</li>
                            <li> Sed ut perspiciatis unde</li>
                        </ul>
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

export default Terms;
import React from "react";
import {Container, NavLink, Card} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Mediawave from './assets/mediawave.png';
import "react-multi-carousel/lib/styles.css";
import './Media.css';
import Yahoo from './assets/yahoo.png';
import Boston from './assets/boston.png';

function Media() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return ( 
        <div className="Media">   
            <div className="Mediawave"><img src={Mediawave} alt="Mediawave" className="Mediawave"/></div>  
            <div className="Media-main">
                <Container>
                    <h5>NFT ISLANDS</h5>
                    <h3>IN THE MEDIA</h3> 
                </Container>  
                <Container>
                    <Carousel responsive={responsive} autoPlay={true}>
                        <NavLink>
                            <Card style={{ width: '15rem', margin : 'auto' }}>
                                <Card.Body className="show-body">
                                    <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                    <Card.Text>
                                    SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <NavLink>
                            <Card style={{ width: '15rem', margin : 'auto' }}>
                                <Card.Body>
                                    <Card.Title><img src={Boston} alt="Boston"/></Card.Title>                             
                                    <Card.Text>
                                    SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <NavLink>
                            <Card style={{ width: '15rem', margin : 'auto' }}>
                                <Card.Body>
                                    <Card.Title><img src={Boston} alt="Boston"/></Card.Title>                             
                                    <Card.Text>
                                    SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <NavLink>
                            <Card style={{ width: '15rem', margin : 'auto' }}>
                                <Card.Body>
                                    <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                           
                                    <Card.Text>
                                    SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <NavLink>
                            <Card style={{ width: '15rem', margin : 'auto' }}>
                                <Card.Body>
                                    <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                              
                                    <Card.Text>
                                    SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <NavLink>
                            <Card style={{ width: '15rem', margin : 'auto' }}>
                                <Card.Body>
                                    <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                              
                                    <Card.Text>
                                    SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <NavLink>
                            <Card style={{ width: '15rem', margin : 'auto' }}>
                                <Card.Body>
                                    <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                              
                                    <Card.Text>
                                    SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </Carousel>;
                </Container>
            </div>               
        </div>
    );

}

export default Media;
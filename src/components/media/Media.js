import React, { useState } from "react";
import {Container, NavLink, Card} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Mediawave from './assets/mediawave.png';
import "react-multi-carousel/lib/styles.css";
import './Media.css';
import Yahoo from './assets/yahoo.png';
import Boston from './assets/boston.png';
import ItemsCarousel from 'react-items-carousel';
function Media() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return ( 
        <div className="Media">   
            <div className="Mediawave"><img src={Mediawave} alt="Mediawave" className="Mediawave"/></div>  
            <div className="Media-main">
                <Container>
                    <h5>NFT ISLANDS</h5>
                    <h3>IN THE MEDIA</h3> 
                </Container>  
                <Container className="Madia-main-desktop">
                    <div style={{ padding: `0 ${chevronWidth}px` }}>
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={4}
                            gutter={20}
                            leftChevron={<button>{'<'}</button>}
                            rightChevron={<button>{'>'}</button>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                        >
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Boston} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                        </ItemsCarousel>
                    </div>
                </Container>
                <Container className="Madia-main-mobile">
                    <div >
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={1}
                            gutter={20}
                            leftChevron={<button>{'<'}</button>}
                            rightChevron={<button>{'>'}</button>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                        >
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Boston} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                            <NavLink>
                                <Card style={{ width: '15rem', margin : 'auto' }}>
                                    <Card.Body className="show-body">
                                        <Card.Title><img src={Yahoo} alt="Yahoo"/></Card.Title>                               
                                        <Card.Text className="mt-4">
                                        SED UT PERSPICIATIS<br/>UNDE OMNIS ISTE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                        </ItemsCarousel>
                    </div>
                </Container>
            </div>               
        </div>
    );

}

export default Media;
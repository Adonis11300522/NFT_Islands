import React from "react";
import {Container, Card, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Storewave from './assets/storewave.png';
import "react-multi-carousel/lib/styles.css";
import './Store.css';
import Item1 from './assets/item1.png';
import Item2 from './assets/item2.png';
import Ebay from './assets/ebay.png';
import Etsy from './assets/etsy.png';
import Amazon from './assets/amazon.png';
import Facebook from './assets/fb.png';
import Button from "@restart/ui/esm/Button";

function Store() {

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
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return ( 
        <div className="Store">   
            <div className="Storewave"><img src={Storewave} alt="Storewave" className="Storewave"/></div>  
            <div className="Store-main">
                <Container>
                    <h5>OFFICAIL</h5>
                    <h3>Store</h3> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem accusantium doloremque laudantium</p>
                </Container>  
                <Container>
                    <Carousel responsive={responsive} autoPlay={true}>
                        <Card style={{ width: '18rem', margin : 'auto' }}>
                            <Card.Body className="show-body">
                                <Card.Title><img src={Item1} alt="Item1"/></Card.Title>  
                                <Card.Subtitle>10 X TRADING<br/>CARD PACKS</Card.Subtitle>                               
                                <Card.Text>Edition1</Card.Text>
                                <Card.Title>$29.99</Card.Title>
                                <Button>BUY NOW</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin : 'auto' }}>
                            <Card.Body className="show-body">
                                <Card.Title><img src={Item1} alt="Item1"/></Card.Title>  
                                <Card.Subtitle>10 X TRADING<br/>CARD PACKS</Card.Subtitle>                               
                                <Card.Text>Edition1</Card.Text>
                                <Card.Title>$29.99</Card.Title>
                                <Button>BUY NOW</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin : 'auto' }}>
                            <Card.Body className="show-body">
                                <Card.Title><img src={Item1} alt="Item1"/></Card.Title>  
                                <Card.Subtitle>10 X TRADING<br/>CARD PACKS</Card.Subtitle>                               
                                <Card.Text>Edition1</Card.Text>
                                <Card.Title>$29.99</Card.Title>
                                <Button>BUY NOW</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin : 'auto' }}>
                            <Card.Body className="show-body">
                                <Card.Title><img src={Item2} alt="Item1"/></Card.Title>  
                                <Card.Subtitle>10 X TRADING<br/>CARD PACKS</Card.Subtitle>                               
                                <Card.Text>Edition1</Card.Text>
                                <Card.Title>$29.99</Card.Title>
                                <Button>BUY NOW</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin : 'auto' }}>
                            <Card.Body className="show-body">
                                <Card.Title><img src={Item2} alt="Item1"/></Card.Title>  
                                <Card.Subtitle>10 X TRADING<br/>CARD PACKS</Card.Subtitle>                               
                                <Card.Text>Edition1</Card.Text>
                                <Card.Title>$29.99</Card.Title>
                                <Button>BUY NOW</Button>
                            </Card.Body>
                        </Card>
                    </Carousel>;
                    <h5 className="Social-title">AVALIABLE TO PURCHASE FORM</h5>
                    <div className="Social-banner">
                        <Col md={1}><img src={Ebay} alt="Ebay"/></Col>
                        <Col md={1}><img src={Etsy} alt="Etsy"/></Col>
                        <Col md={1}><img src={Amazon} alt="Amazon"/></Col>
                        <Col md={1}><img src={Facebook} alt="Facebook"/></Col>
                    </div>
                </Container>
            </div>               
        </div>
    );

}

export default Store;
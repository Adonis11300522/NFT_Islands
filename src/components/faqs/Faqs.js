import React from "react";
import {Container, Accordion} from 'react-bootstrap';
import Faqswave from './assets/Faqswave.png';
import "react-multi-carousel/lib/styles.css";
import './Faqs.css';

function Faqs() {
    return ( 
        <div className="Faqs">   
            <div className="Faqswave"><img src={Faqswave} alt="Faqswave" className="Faqswave"/></div>  
            <div className="Faqs-main">
                <Container>
                    <h5>FREQUENTLY ASKED</h5>
                    <h3>QUESTIONS</h3> 
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>WHAT ARE HUMANIMALS? </Accordion.Header>
                            <Accordion.Body>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>HOW TO OBTAIN A HUMANIMAL?</Accordion.Header>
                            <Accordion.Body>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>  
            </div>               
        </div>
    );

}

export default Faqs;
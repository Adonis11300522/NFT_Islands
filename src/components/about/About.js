import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Aboutwave from './assets/aboutwave.png';
import Aboutbanner from './assets/aboutbanner.png';
import './About.css';
import Opensea from './assets/opensea.png';
import Raritytools from './assets/rarity.png';

function About() {
    return ( 
        <div className="About" id="About">   
            <div className="Aboutwave"><img src={Aboutwave} alt="Aboutwave" className="Humanimalswave"/></div>  
            <div className="About-main">
                <Container>
                    <h5>ABOUT</h5>
                    <h3>NFT ISLANDS</h3> 
                </Container>  
                <Container>
                    <h4>WHAT IS THE NFT ISLANDS</h4>
                    <Row className="About-body">
                        <Col className="About-text mt-4">
                            <Row>
                                <Col>By the start of the 22nd Century, it was clear that many, if not most, of the rare and majestic animals on Earth were going extinct. A visionary scientist by the name of Dr Thomas Orion Morrow proposed a grand experiment to the United Nations, whereby transgenic coding would be taken from the human genome and applied across the animal kingdom to preserve and protect every species from extinction.

                                    Expecting a Nobel Prize, Dr Morrow was shocked instead to find himself subject to a public outcry 
                                    and an ethical investigation against him. With his reputation ruined, Dr Morrow swore that he would prove himself right and disappeared from public life, taking his research assistants and his personal 
                                    fortune with him.

                                    In secret, Dr Morrow acquired ten islands in an archipelago he called ‘The Newgenic Metaverse’ 
                                    or ‘The Metaverse’ for short. 

                                    From a secret lab, Dr Morrow created transgenic hybrids of his ten favourite species, one for each island, using the genetic material of his research </Col>
                                                                    <Col>assistants and captured samples of the animals. 
                                    One by one, his assistants left or ‘disappeared’ under mysterious circumstances, but by then, the work was done and ten newly minted species existed, spread across the ten islands.

                                    Little is known about what happened next. Some say a global pandemic swept the world, others claim it was a war, but the human world went silent. The fate of Dr Morrow remains unknown to this day – some say he died alone in his lab, others that he uploaded his brilliant but deranged mind into a computer. The animals of the Metaverse each have their own ideas and prophecies about the Dr, but none know for sure.

                                    The Islands of the Metaverse now stand alone, populated by groups of animal-human hybrids, they have become aware of one another and many have fallen into conflict with one another. 

                                    Who will rise to become the ruler 
                                    of the Metaverse?
                                    </Col>
                            </Row>
                        </Col>
                        <Col className="Aboutbanner"><img src={Aboutbanner} alt="Aboutbanner"/></Col>
                    </Row>
                    <h4 className="mt-4">VIEW OUR COLLECTION</h4>
                    <div className="AboutBtn mt-3">
                        <Button className="openseabtn"><img src={Opensea} alt="Opensea"/><span>OPENSEA.IO</span></Button>
                        <Button className="raritytoolsbtn"><img src={Raritytools} alt="Raritytools"/><span>RARITY TOOLS</span></Button>
                    </div>
                </Container>
            </div> 
            <div className="About-mobile">
                <Container>
                    <h5>ABOUT</h5>
                    <h3>NFT ISLANDS</h3> 
                </Container>  
                <Container>
                    <Row className="About-body">
                        <Col>By the start of the 22nd Century, it was clear that many, if not most, of the rare and majestic animals on Earth were going extinct. A visionary scientist by the name of Dr Thomas Orion Morrow proposed a grand experiment to the United Nations, whereby transgenic coding would be taken from the human genome and applied across the animal kingdom to preserve and protect every species from extinction. Expecting a Nobel Prize, Dr Morrow was shocked instead to find himself subject to a public outcry and an ethical investigation against him. With his reputation ruined, Dr Morrow swore that he would prove himself right and disappeared from public life, taking his research assistants and his personal fortune with him. In secret, Dr Morrow acquired ten islands in an archipelago he called ‘The Newgenic Metaverse’ or ‘The Metaverse’ for short. From a secret lab, Dr Morrow created transgenic hybrids of his ten favourite species, one for each island, using the genetic material of his research </Col>
                        <Col className="Aboutbanner"><img src={Aboutbanner} alt="Aboutbanner"/></Col>
                    </Row>
                    <h4 className="mt-4">VIEW OUR COLLECTION</h4>
                    <div className="AboutBtn mt-4">
                        <Button className="openseabtn"><img src={Opensea} alt="Opensea"/><span>OPENSEA.IO</span></Button>
                        <Button className="raritytoolsbtn"><img src={Raritytools} alt="Raritytools"/><span>RARITY TOOLS</span></Button>
                    </div>
                </Container>
            </div>                            
        </div>
    );

}

export default About;
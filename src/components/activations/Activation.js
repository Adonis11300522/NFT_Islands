import React from "react";
import {Container, Col} from 'react-bootstrap';
import Activationwave from './assets/activationwave.png';
import './Activation.css';
import Avatar from './assets/monkeyavatar.png';
import { FaCheckCircle } from "react-icons/fa";

function Activation() {

    return ( 
        <div className="Activation">   
            <div className="Activationwave"><img src={Activationwave} alt="Activationwave" className="Activationwave"/></div>  
            <div className="Activation-main">
                <Container>
                    <h5>NFT ISLANDS</h5>
                    <h3>ROADMAP ACTIVATIONS</h3> 
                </Container>  
                <Container className="Activation-body">
                   <Col className="Activation-body-text col-md-8">
                       <div>
                           <h6 className="col-md-2">10%</h6>
                           <p className="mr-1">We build our community <FaCheckCircle/></p>
                       </div>
                       <div>
                           <h6 className="col-md-2">20%</h6>
                           <p>Giveaways including cash and Edition 1 trading cards</p>
                       </div>
                       <div>
                           <h6 className="col-md-2">40%</h6>
                           <p>Community giveaways of up to Free 5 NFTs to our most loyal supporters each week</p>
                       </div>
                       <div>
                           <h6 className="col-md-2">60%</h6>
                           <p>Giveaway and competition to give away one Rare Monkey NFT, Edition 1 trading cards and official NFT Island trading card collectors album.</p>
                       </div>
                       <div>
                           <h6 className="col-md-2">80%</h6>
                           <p>We launch the pre-sale MINT to our loyal community who will be able to mint a limited amount of 150 Island NFTs.</p>
                       </div>
                       <div>
                           <h6 className="col-md-2">100%</h6>
                           <p>Official minting of Island 1 NFTs will start will all members of the community and general public allowed to mint the last 800 NFTs.</p>
                       </div>
                   </Col>
                   <Col className="Activation-body-img"><img src={Avatar} alt="Avatar"/></Col>
                </Container>
            </div>               
        </div>
    );

}

export default Activation;
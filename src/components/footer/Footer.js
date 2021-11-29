import React, {useState} from "react";
import {Container, Row, Col, NavLink} from 'react-bootstrap';
import Footerwave from './assets/Footerwave.png';
import Insta from './assets/logo_insta.png';
import Medium from './assets/logo_medium.png';
import Telegram from './assets/logo_telegram.png';
import Discord from './assets/logo_discord.png';
import Fb from './assets/logo_fb.png';
import Twitter from './assets/logo_twitter.png';
import Contactpage from '../../pages/Contactpage'

import './Footer.css';
import ReactFlagsSelect from 'react-flags-select';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Footer() {

    const [selected, setSelected] = useState('');

    return ( 
            <div className="Footer">   
                <div className="Footerwave"><img src={Footerwave} alt="Footerwave" className="Footerwave"/></div>  
                <div className="Footer-main">
                    <Container>
                        <Row>
                            <Col xs={1} md={4} className="Footer-left"><p>2021 NFT Islands (c)</p></Col>
                            <Col xs={10} md={4} className="Footer-main-center">
                                <h5>JOIN OUR COMMUNITY</h5>
                                <div className="Footer-main-center-community">
                                    <span><NavLink href="#"><img src={Insta} alt="logo_insta"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Twitter} alt="Twitter"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Fb} alt="Fb"/></NavLink></span>    
                                    <span><NavLink href="#"><img src={Discord} alt="Discord"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Telegram} alt="Telegram"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Medium} alt="Medium"/></NavLink></span>
                                </div>
                            </Col>
                            <Col xs={1} md={4} className="Footer-right">
                                <ul>
                                    <li><NavLink href="#">Verified smart contract</NavLink></li>
                                    <li><NavLink href="/Terms">Terms of sale</NavLink></li>
                                    <li><NavLink href="#">Privacy policy</NavLink></li>
                                    <li><NavLink href="/Contact">Contact Us</NavLink></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>  
                </div> 
                <div className="Footer-mobile">
                    <Container>
                        <Col sm={12} md={4} className="Footer-main-center">
                                <h5>JOIN OUR COMMUNITY</h5>
                                <div className="Footer-main-center-community">
                                    <span><NavLink href="#"><img src={Insta} alt="logo_insta"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Twitter} alt="Twitter"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Fb} alt="Fb"/></NavLink></span>                                
                                </div>
                                <div className="Footer-main-center-community">
                                    <span><NavLink href="#"><img src={Discord} alt="Discord"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Telegram} alt="Telegram"/></NavLink></span>
                                    <span><NavLink href="#"><img src={Medium} alt="Medium"/></NavLink></span>
                                </div>
                            </Col>
                            <Row>
                                <Col  className="Footer-left">
                                    <ReactFlagsSelect
                                        defaultCountry="US"
                                        countries={["US", "GB", "FR","DE","IT"]}
                                        selected={selected}
                                        onSelect={code => setSelected(code)}
                                        placeholder=" "
                                        showSelectedLabel={false}
                                        showOptionLabel={false}/>    
                                        <p>2021 NFT Islands (c)</p>
                                    </Col>                        
                                <Col  className="Footer-right">
                                    <ul>
                                        <li><NavLink href="#">Verified smart contract</NavLink></li>
                                        <li><NavLink href="/Terms">Terms of sale</NavLink></li>
                                        <li><NavLink href="#">Privacy policy</NavLink></li>
                                        <li><NavLink href="/Contact">Contact Us</NavLink></li>
                                    </ul>
                                </Col>
                            </Row>
                    </Container>  
                </div>                            
            </div>
           
    );

}

export default Footer;
import React from "react";
import {Container, NavLink} from 'react-bootstrap';
import Communitywave from './assets/communitywave.png';
import './Community.css';
import Insta from './assets/logo_insta.png';
import Medium from './assets/logo_medium.png';
import Telegram from './assets/logo_telegram.png';
import Discord from './assets/logo_discord.png';
import Fb from './assets/logo_fb.png';
import Twitter from './assets/logo_twitter.png';
import { FaInstagram, FaTwitter, FaFacebookF, FaDiscord, FaTelegramPlane} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

function Community() {
    return ( 
        <div className="Community">   
            <div className="Communitywave"><img src={Communitywave} alt="Communitywave"/></div>  
            <div className="Community-main">
                <Container>
                <h5>JOIN OUR</h5>
                <h3>JOIN OUR COMMUNITY</h3>                    
                </Container>  
                <Container className="community-link mb-5">
                    <NavLink href="#"><FaInstagram/></NavLink>
                    <NavLink href="#"><FaTwitter/></NavLink>
                    <NavLink href="#"><FaFacebookF/></NavLink>
                    <NavLink href="#"><FaDiscord/></NavLink>
                    <NavLink href="#"><FaTelegramPlane/></NavLink>
                    <NavLink href="#"><BsMedium/></NavLink>
                </Container>
            </div>     
            <div className="Community-main-mobile">
                <Container>
                <h5>JOIN OUR</h5>
                <h3>JOIN OUR COMMUNITY</h3>                    
                </Container>  
                <Container className="community-link">
                    <NavLink href="#"><FaInstagram/></NavLink>
                    <NavLink href="#"><FaTwitter/></NavLink>
                    <NavLink href="#"><FaFacebookF/></NavLink>
                </Container>
                <Container className="community-link">
                    <NavLink href="#"><FaDiscord/></NavLink>
                    <NavLink href="#"><FaTelegramPlane/></NavLink>
                    <NavLink href="#"><FaTelegramPlane/></NavLink>
                </Container>
            </div>                           
        </div>
    );

}

export default Community;
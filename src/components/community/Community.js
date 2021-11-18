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

function Community() {
    return ( 
        <div className="Community">   
            <div className="Communitywave"><img src={Communitywave} alt="Communitywave"/></div>  
            <div className="Community-main">
                <Container>
                <h5>JOIN OUR</h5>
                <h3>JOIN OUR COMMUNITY</h3>                    
                </Container>  
                <Container className="community-link">
                    <NavLink href="#"><img src={Insta} alt="logo_insta"/></NavLink>
                    <NavLink href="#"><img src={Twitter} alt="Twitter"/></NavLink>
                    <NavLink href="#"><img src={Fb} alt="Fb"/></NavLink>   
                    <NavLink href="#"><img src={Discord} alt="Discord"/></NavLink>
                    <NavLink href="#"><img src={Telegram} alt="Telegram"/></NavLink>
                    <NavLink href="#"><img src={Medium} alt="Medium"/></NavLink>
                </Container>
            </div>     
            <div className="Community-main-mobile">
                <Container>
                <h5>JOIN OUR</h5>
                <h3>JOIN OUR COMMUNITY</h3>                    
                </Container>  
                <Container className="community-link">
                    <NavLink href="#"><img src={Insta} alt="logo_insta"/></NavLink>
                    <NavLink href="#"><img src={Twitter} alt="Twitter"/></NavLink>
                    <NavLink href="#"><img src={Fb} alt="Fb"/></NavLink>  
                </Container>
                <Container className="community-link">                     
                    <NavLink href="#"><img src={Discord} alt="Discord"/></NavLink>
                    <NavLink href="#"><img src={Telegram} alt="Telegram"/></NavLink>
                    <NavLink href="#"><img src={Medium} alt="Medium"/></NavLink>
                </Container>
            </div>                           
        </div>
    );

}

export default Community;
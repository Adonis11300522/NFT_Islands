import React from "react";
import {Container, NavLink} from 'react-bootstrap';
import Teamwave from './assets/teamwave.png';
import "react-multi-carousel/lib/styles.css";
import './Team.css';
import DR from './assets/DR.png';
import { FaTwitter } from "react-icons/fa";
import Koala from './assets/Koala.png';
import Cheetah from './assets/Cheetah traits.png';
import Lion from './assets/Lion.png';
import Warthog from './assets/Warthog.png';
import Rhino from './assets/Rhino traits.png';
import Monkey from './assets/Monkey.png';
import Elephant from './assets/Elephant traits.png';
import Hyena from './assets/Hyena traits.png';
import Zebra from './assets/Zebra.png';
import Panda from './assets/Panda.png';

function Team() {

    return ( 
        <div className="Team" id="Team">   
            <div className="Teamwave"><img src={Teamwave} alt="Teamwave" className="Teamwave"/></div>  
            <div className="Team-main">
                <Container>
                    <div className="Team-main-title">
                        <h5>OUR FOUNDING</h5>
                        <h3>TEAM</h3> 
                        <p>Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem accusantium doloremque laudantium</p>
                    </div>
                    <div className="big-avatar">
                        <img src={DR} alt="DR"/>
                        <h5>DR.MORROW</h5>
                        <p>Head Scientist</p>
                        <NavLink><FaTwitter/>@DrMorrow</NavLink>
                    </div>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={Koala} alt="Koala"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Cheetah} alt="Cheetah"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Lion} alt="Lion"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Warthog} alt="Warthog"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Warthog} alt="Warthog"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                    </div>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={Monkey} alt="Monkey"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Elephant} alt="Elephant"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Hyena} alt="Hyena"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Zebra} alt="Zebra"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Panda} alt="Panda"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                    </div>
                </Container>  
            </div> 
            <div className="Team-main-mobile">
                <Container>
                    <div className="Team-main-title">
                        <h5>OUR FOUNDING</h5>
                        <h3>TEAM</h3> 
                        <p>Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem accusantium doloremque laudantium</p>
                    </div>
                    <div className="big-avatar">
                        <img src={DR} alt="DR"/>
                        <h5>DR.MORROW</h5>
                        <p>Head Scientist</p>
                        <NavLink><FaTwitter/>@DrMorrow</NavLink>
                    </div>
                    <div className="team-members container">
                        <div className="team-member" sm={6}>
                            <img src={Koala} alt="Koala"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member" sm={6}>
                            <img src={Cheetah} alt="Cheetah"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Lion} alt="Lion"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Warthog} alt="Warthog"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Rhino} alt="Rhino"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Monkey} alt="Monkey"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Elephant} alt="Elephant"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Hyena} alt="Hyena"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Zebra} alt="Zebra"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                        <div className="team-member">
                            <img src={Panda} alt="Panda"/>
                            <h5>DR.MORROW</h5>
                            <p>Head Scientist</p>
                            <NavLink><FaTwitter/>@DrMorrow</NavLink>
                        </div>
                    </div>
                </Container>  
            </div>               
        </div>
    );

}

export default Team;
import React from "react";
import {Container} from 'react-bootstrap';
import Teamwave from './assets/teamwave.png';
import "react-multi-carousel/lib/styles.css";
import './Team.css';

function Team() {

    return ( 
        <div className="Team">   
            <div className="Teamwave"><img src={Teamwave} alt="Teamwave" className="Teamwave"/></div>  
            <div className="Team-main">
                <Container>
                    <h5>OUR FOUNDING</h5>
                    <h3>TEAM</h3> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem accusantium doloremque laudantium</p>
                    <div className="big-avatar">
                        {/* <img src={} alt=""/> */}
                    </div>
                </Container>  
            </div>               
        </div>
    );

}

export default Team;
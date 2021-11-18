import React from "react";
import {Container, NavLink} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Humanimalswave from './assets/humanimalswave.png';
import "react-multi-carousel/lib/styles.css";
import './Humanimals.css';
import Cheetah from './assets/Cheetah.png';
import Elephant from './assets/Elephant.png';
import Koala from './assets/Koala.png';
import Lion from './assets/Lion.png';
import Panda from './assets/Panda.png';
import Rhino from './assets/Rhino.png';
import Warthog from './assets/Warthog.png';

function Humanimals() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return ( 
        <div className="Humanimals">   
            <div className="Humanimalswave"><img src={Humanimalswave} alt="Humanimalswave" className="Humanimalswave"/></div>  
            <div className="Humanimals-main">
                <Container>
                    <h5>SOME OF OUR</h5>
                    <h3>HUMANIMALS</h3> 
                </Container>  
                <Carousel responsive={responsive} autoPlay={true}>
                    <div><NavLink href="#"><img src={Cheetah} alt="Cheetah"/></NavLink></div>
                    <div><NavLink href="#"><img src={Elephant} alt="Elephant"/></NavLink></div>
                    <div><NavLink href="#"><img src={Koala} alt="Koala"/></NavLink></div>
                    <div><NavLink href="#"><img src={Lion} alt="Lion"/></NavLink></div>
                    <div><NavLink href="#"><img src={Panda} alt="Panda"/></NavLink></div>
                    <div><NavLink href="#"><img src={Rhino} alt="Rhino"/></NavLink></div>
                    <div><NavLink href="#"><img src={Warthog} alt="Warthog"/></NavLink></div>
                    <div><NavLink href="#"><img src={Cheetah} alt="Cheetah"/></NavLink></div>
                    <div><NavLink href="#"><img src={Elephant} alt="Elephant"/></NavLink></div>
                    <div><NavLink href="#"><img src={Koala} alt="Koala"/></NavLink></div>
                    <div><NavLink href="#"><img src={Lion} alt="Lion"/></NavLink></div>
                    <div><NavLink href="#"><img src={Panda} alt="Panda"/></NavLink></div>
                    <div><NavLink href="#"><img src={Rhino} alt="Rhino"/></NavLink></div>
                </Carousel>;
            </div> 
            <div className="Humanimals-mobile">
                <Container>
                   
                </Container>  
            </div>                            
        </div>
    );

}

export default Humanimals;
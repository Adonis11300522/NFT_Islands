import React from "react";
import {Container } from 'react-bootstrap';
import Roadmapwave from './assets/roadmapwave.png';
import './Roadmap.css';
import Avatar2 from './assets/avatar2.png';
import Avatar3 from './assets/avatar3.png';
import Avatar4 from './assets/avatar4.png';
import Avatar5 from './assets/avatar5.png';
import Avatar6 from './assets/avatar6.png';
import Avatar7 from './assets/avatar7.png';
import Avatar8 from './assets/avatar8.png';
import Avatar9 from './assets/avatar9.png';
import Avatar10 from './assets/avatar10.png';
import Avatar11 from './assets/avatar11.png';
import Avatar12 from './assets/avatar12.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Roadmap() {
    const myTheme = {
        // Theme object to extends default dark theme.
      };
    return ( 
        <div className="Roadmap" id="Roadmap">  
            <div className="Roadmapwave"><img src={Roadmapwave} alt="Roadmapwave" className="Roadmapwave"/></div>  
            <div className="Roadmap-main">
                <Container>
                    <h5>COMPANY</h5>
                    <h3>ROADMAP</h3> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                </Container>  
                <Container className="Roadmap-body">
                        <VerticalTimeline>
                            <VerticalTimelineElement className="vertical-timeline-element--work"></VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">February 2021</h3> 
                                    <p>Island 1 - <strong>Monkey Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">March 2021</h3> 
                                    <p>Island 2 - <strong>Zebra Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar2} alt="Avatar2"/>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work"> 
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar3} alt="Avatar3"/>
                                </div>
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">March 2021</h3> 
                                    <p>Island 3 - <strong>Hyena Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>                                
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">April 2021</h3> 
                                    <p>Island 4 - <strong>Hippo Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar4} alt="Avatar4"/>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar5} alt="Avatar5"/>
                                </div>
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">April 2021</h3> 
                                    <p>Island 5 - <strong>Lion Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>                                
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">May 2021</h3> 
                                    <p>Island 6 - <strong>Elephant Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar6} alt="Avatar6"/>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar7} alt="Avatar7"/>
                                </div>
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">May 2021</h3> 
                                    <p>Island 7 - <strong>Giraffe Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>                                
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">JUNE 2021</h3> 
                                    <p>Island 8 - <strong>Crocodile Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar8} alt="Avatar8"/>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar9} alt="Avatar9"/>
                                </div>
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">JUNE 2021</h3> 
                                    <p>Island 9 - <strong>Rhino Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>                                
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">JULY 2021</h3> 
                                    <p>Island 10 - <strong>Panda Island</strong></p><hr/>
                                    <p><strong>Pre-sale Mint</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Minting</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                    <p><strong>Launch of Island 1 map</strong></p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar10} alt="Avatar10"/>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar11} alt="Avatar11"/>
                                </div>
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">NOVEMBER 2021</h3> 
                                    <p>Official Trading card game launched</p><hr/>                                    
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p><br/><br/><br/><br/><br/><br/><br/>
                                </div>                                
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-text">
                                    <h3 className="vertical-timeline-element-title">JANUARY 2021</h3> 
                                    <p>Launch of official NFT Island merchandise</p><hr/>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                </div>
                                <div className="vertical-timeline-element-image">
                                    <img src={Avatar12} alt="Avatar12"/>
                                </div>
                            </VerticalTimelineElement>
                            
                        </VerticalTimeline>
                </Container>
            </div>   
            <div className="Roadmap-main-mobile">
                <Container>
                    <h5>COMPANY</h5>
                    <h3>ROADMAP</h3> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                </Container>  
                <Container>
                    <VerticalTimeline>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">FEBRUARY 2021</h3> 
                                <p>Island 1 - <strong>Monkey Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">March 2021</h3> 
                                <p>Island 2 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar2} alt="Avatar2"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">MARCH 2021</h3> 
                                <p>Island 3 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar3} alt="Avatar2"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">APRIL 2021</h3> 
                                <p>Island 4 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar4} alt="Avatar2"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">APRIL 2021</h3> 
                                <p>Island 5 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar5} alt="Avatar5"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">MAY 2021</h3> 
                                <p>Island 6 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar6} alt="Avatar6"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">MAY 2021</h3> 
                                <p>Island 7 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar7} alt="Avatar7"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">JUNE 2021</h3> 
                                <p>Island 8 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar8} alt="Avatar8"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">JUNE 2021</h3> 
                                <p>Island 9 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar9} alt="Avatar9"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">JULY 2021</h3> 
                                <p>Island 10 - <strong>Zebra Island</strong></p><hr/>
                                <p><strong>Pre-sale Mint</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Minting</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                                <p><strong>Launch of Island 1 map</strong></p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar10} alt="Avatar10"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">NOVEMBER 2021</h3>
                                <p>Official Trading card game launched</p><hr/>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar11} alt="Avatar11"/>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work">
                            <div className="vertical-timeline-element-text">
                                <h3 className="vertical-timeline-element-title">JANUARY 2021</h3> 
                                <p>Launch of official NFT Island merchandise</p><hr/>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptaem accusantium doloreque laudantiym</p>
                            </div>
                            <div className="vertical-timeline-element-image">
                                <img src={Avatar12} alt="Avatar12"/>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </Container>
            </div>            
        </div>
    );

}

export default Roadmap;
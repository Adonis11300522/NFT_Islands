import React, {useState} from "react";
import {Container, Navbar, Nav, Button, Modal} from 'react-bootstrap';
import './Header.css';
import Headerwave from './assets/Headerwave.png';
import Logo from './assets/logo.png';
import Menu from './assets/menu.png';
import Close from './assets/close.png';
import ReactFlagsSelect from 'react-flags-select';
import {Link, animateScroll as scroll} from 'react-scroll';
import Homepage from "../../pages/Homepage";

function Header() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const [selected, setSelected] = useState('');

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return ( 
        <div className="Header">  
        <div className="Header-main">
            <Container>
                <ReactFlagsSelect
                    defaultCountry="US"
                    countries={["US", "GB", "FR","DE","IT"]}
                    selected={selected}
                    onSelect={code => setSelected(code)}
                    placeholder=" "
                    showSelectedLabel={false}
                    showOptionLabel={false}/>         
            </Container>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar aria-controls="responsive-navbar-nav" className="me-2 responsive-navbar-nav" onClick={() => handleShow()}>
                        <img src={Menu} alt="Menu"/>
                    </Navbar>
                    <Navbar.Brand href="/"><img src={Logo} alt="Logo"/></Navbar.Brand>   
                    <Nav className="Navbar-menu">
                            <Link activeClass="active" to="Minting" >MINTING</Link>
                            <Link activeClass="active" to="About">ABOUT</Link>
                            <Link activeClass="active" to="Rarity">RARITY</Link>
                            <Link activeClass="active" to="Store">STORE</Link>
                            <Link activeClass="active" to="Roadmap">ROADMAP</Link>
                            <Link activeClass="active" to="Team">TEAM</Link>
                            <Link activeClass="active" to="Faqs">FAQS</Link>
                        </Nav>             
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header >
                            <Button onClick={()=>setShow(false)}><img src={Close} alt="Close"/></Button>
                            <img src={Logo} alt="Logo"/>
                            <ReactFlagsSelect defaultCountry="US" countries={["US", "GB", "FR","DE","IT"]} selected={selected} onSelect={code => setSelected(code)} placeholder=" " showSelectedLabel={false} showOptionLabel={false}/>  
                            
                        </Modal.Header>
                        <Modal.Body>
                        <Nav className="">
                            <Link activeClass="active" to="Minting" onClick={()=>setShow(false)}>MINTING</Link>
                            <Link activeClass="active" to="About" onClick={()=>setShow(false)}>ABOUT</Link>
                            <Link activeClass="active" to="Rarity" onClick={()=>setShow(false)}>RARITY</Link>
                            <Link activeClass="active" to="Store" onClick={()=>setShow(false)}>STORE</Link>
                            <Link activeClass="active" to="Roadmap" onClick={()=>setShow(false)}>ROADMAP</Link>
                            <Link activeClass="active" to="Team" onClick={()=>setShow(false)}>TEAM</Link>
                            <Link activeClass="active" to="Faqs" onClick={()=>setShow(false)}>FAQS</Link>
                            <Button className="connect_wallet" onClick={()=>setShow(false)}>CONNECT WALLET</Button>
                        </Nav>
                        </Modal.Body>
                    </Modal>
                    <Button className="connect_wallet">CONNECT WALLET</Button>
                </Container>
            </Navbar>
        </div>
        <div className="Headerwave"><img src={Headerwave} alt="Headerwave" className="Headerwave"/></div>  
            {/* <Container>
                <Navbar>
                    <Navbar.Brand href="#home"><img src={Logo} alt="Logo"/></Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#">MINTING</Nav.Link>
                        <Nav.Link href="#">ABOUT</Nav.Link>
                        <Nav.Link href="#">RARITY</Nav.Link>
                        <Nav.Link href="#">STORE</Nav.Link>
                        <Nav.Link href="#">ROADMAP</Nav.Link>
                        <Nav.Link href="#">TEAM</Nav.Link>
                        <Nav.Link href="#">FAQS</Nav.Link>
                        <Button className="connect_wallet">CONNECT WALLET</Button>
                    </Nav>
                </Navbar>
            </Container>             */}
        </div>
    );

}

export default Header;
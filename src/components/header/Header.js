import React, {useState} from "react";
import {Container, Navbar, Nav, Button, Modal} from 'react-bootstrap';
import './Header.css';
import Logo from './assets/logo.png';
import Menu from './assets/menu.png';
import Close from './assets/close.png';
import ReactFlagsSelect from 'react-flags-select';

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
                <Navbar.Brand href="#home"><img src={Logo} alt="Logo"/></Navbar.Brand>   
                <Nav className="Navbar-menu">
                        <Nav.Link href="#">MINTING</Nav.Link>
                        <Nav.Link href="#">ABOUT</Nav.Link>
                        <Nav.Link href="#">RARITY</Nav.Link>
                        <Nav.Link href="#">STORE</Nav.Link>
                        <Nav.Link href="#">ROADMAP</Nav.Link>
                        <Nav.Link href="#">TEAM</Nav.Link>
                        <Nav.Link href="#">FAQS</Nav.Link>
                    </Nav>             
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header >
                        <Button onClick={()=>setShow(false)}><img src={Close} alt="Close"/></Button>
                        <img src={Logo} alt="Logo"/>
                        <ReactFlagsSelect defaultCountry="US" countries={["US", "GB", "FR","DE","IT"]} selected={selected} onSelect={code => setSelected(code)} placeholder=" " showSelectedLabel={false} showOptionLabel={false}/>  
                        
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                </Modal>
                <Button className="connect_wallet">CONNECT WALLET</Button>
            </Container>
        </Navbar>

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
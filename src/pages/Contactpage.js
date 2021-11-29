import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';


function Contactpage() {
  return (
    <div className="Contactpage">
        <Header/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default Contactpage;

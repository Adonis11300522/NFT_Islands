import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Terms from '../components/terms/Terms';


function Termspage() {
  return (
    <div className="Termspage">
        <Header />
        <Terms/>
        <Footer />
    </div>
  );
}

export default Termspage;

import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Header from '../components/header/Header';
import TopBanner from '../components/topbanner/TopBanner';
import Community from '../components/community/Community';
import Minting from '../components/minting/Minting';
import Footer from '../components/footer/Footer';
import Humanimals from '../components/humanimals/Humanimals';
import About from '../components/about/About';
import Media from '../components/media/Media';
import Downloads from '../components/downloads/Downloads';
import Islands from '../components/islands/Islands';
import Rarity from '../components/rarity/Rarity';
import Store from '../components/store/Store';
import Activation from '../components/activations/Activation';
import Roadmap from '../components/roadmap/Roadmap';
import Team from '../components/team/Team';
import Faqs from '../components/faqs/Faqs';
import Contact from '../components/contact/Contact';
import Terms from '../components/terms/Terms';


function Homepage() {
  return (
    <div className="Homepage">
        <Header />
        <TopBanner />
        <Community />
        <Minting id="Minting"/>
        <Humanimals />
        <About id="About"/>
        <Media />
        <Downloads />
        <Islands />
        <Rarity id="Rarity"/>
        <Store id="Store"/>
        <Activation />
        <Roadmap id="Roadmap"/>
        <Team id="Team"/>
        <Faqs id="Faqs"/>
        <Footer />
    </div>
  );
}

export default Homepage;

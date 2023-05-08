import logo from './logo.svg';
import Hamburger from './compnents/Hamburger';
import Firstheader from './compnents/FirstHeader';
import SecondHeader from './compnents/SecondHeader';
import Hero from './compnents/Hero';
import WhoWeAre from './compnents/WhoWeAre';
import './App.css';
import WhatWeDo from './compnents/WhatWeDo';
import Online from './compnents/Online';
import HowWeDo from './compnents/HowWeDo';
import Company from './compnents/Company';
import Contact from './compnents/Contact';
import Footer from './compnents/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes> */}
    
    <div className='gen'>
      <Hamburger/>
      <Firstheader/>
      <SecondHeader/>
      <Hero/>
      <WhoWeAre/>
      <WhatWeDo />
      <Online />
      <HowWeDo />
      <Company />
      <Contact />
      <Footer />
      
    </div>
    </BrowserRouter>);
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Description from './components/Description';
import Download from './components/Download';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    document.title = 'ZeitPLan - Slicing Ui - Portfolio';
  });
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Description />
        <Feature />
        <Price />
        <Testimonials />
        <Download />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

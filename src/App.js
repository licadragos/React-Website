import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import SelectsImg from './components/SelectsImg/SelectsImg';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Destinations />
      <Search />
      <Selects />
      <SelectsImg />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;

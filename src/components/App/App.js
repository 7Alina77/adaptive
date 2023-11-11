import { useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Pricing from '../Pricing/Pricing';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
  const [isBurger, setIsBurger] = useState(false);

  const handleBurger = () => {
    setIsBurger(!isBurger);
  };

  return (
    <div className="app">
      <Header onClick={handleBurger} isBurger={isBurger}/>
      <BurgerMenu isBurger={isBurger} onClose={handleBurger}/>
      <Landing />
      <Skills />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

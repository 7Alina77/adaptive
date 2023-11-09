import { useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Pricing from '../Pricing/Pricing';
import Skills from '../Skills/Skills';

function App() {
  const [isBurger, setIsBurger] = useState(false);

  // const handleBurger = () => {
  //   setIsBurger(!isBurger);
  // };

  return (
    <div className="app">
      {/* <Header isBurger={isBurger}/> */}
      <Landing />
      <Skills />
      <Pricing />
      <About />
    </div>
  );
}

export default App;

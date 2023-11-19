import './Header.css';
import logo from '../../images/Britlex.png';
import burger from '../../images/burger.svg';
import { useEffect } from 'react';

function Header({onClick}) {
  const home = document.querySelector('#home');
  const skills = document.querySelector('#skills');
  const about = document.querySelector('#about');
  const pricing = document.querySelector('#pricing');
  const contacts = document.querySelector('#contacts');

  return (
    <section className='header'>
      <nav className='header__navigation'>
        <a className='header__logo link' href='#'><img src={logo} alt='logo' className='header__logo-img'/></a>
        <ul className='header__menu'>
          <li className='header__item'><a className="link" href='#' id='home'>Home</a></li>
          <li className='header__item'><a className="link" href='#' id='skills'>Skills</a></li>
          <li className='header__item'><a className="link" href='#' id='about'>About Us</a></li>
          <li className='header__item'><a className="link" href='#' id='pricing'>Pricing</a></li>
          <li className='header__item'><a className="link" href='#' id='contacts'>Contacts</a></li>
        </ul>
        <button onClick={onClick} className='header__burger link'><img className='header__burger-img' src={burger} alt='бургер меню'/></button>
        <button className='header__btn link'>Let's Talk!</button>
      </nav>
    </section>
  )
}

export default Header;
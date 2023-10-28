import './Header.css';
import logo from '../../images/Britlex.png';
import burger from '../../images/burger.svg';
import { useEffect } from 'react';

function Header({isBurger}) {
  return (
    <section className='header'>
      <nav className='header__navigation'>
        <a className='header__logo link' href='#'><img src={logo} alt='logo' className='header__logo-img'/></a>
        <ul className='header__menu'>
          <li className='header__item'><a className="link" href='#'>Home</a></li>
          <li className='header__item'><a className="link" href='#'>Skills</a></li>
          <li className='header__item'><a className="link" href='#'>About Us</a></li>
          <li className='header__item'><a className="link" href='#'>Pricing</a></li>
          <li className='header__item'><a className="link" href='#'>Contacts</a></li>
        </ul>
        <button className='header__burger link'><img className='header__burger-img' src={burger} alt='бургер меню'/></button>
        <button className='header__btn header__btn_type_burger link'>Let's Talk!</button>
      </nav>
    </section>
  )
}

export default Header;
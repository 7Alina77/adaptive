import '../Footer/Footer.css';
import logo from '../../images/Britlex.png';

function Footer() {
  return (
    <footer className="footer">
      <hr className='footer__line'></hr>
      <nav className='footer__navigation'>
        <a className='footer__logo link' href='#'><img src={logo} alt='logo' className='footer__logo-img'/></a>
        <ul className='footer__menu'>
          <li className='footer__item'><a className="link footer__link" href='#'>Terms and Conditions</a></li>
          <li className='footer__item'><a className="link footer__link" href='#'>Privacy Policy</a></li>
          <li className='footer__item'><a className="link footer__link" href='#'> Cookie Policy</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
import cross from '../../images/cross.svg';
import '../BurgerMenu/BurgerMenu.css';

function BurgerMenu({ isBurger, onClose }) {
  return (
    <section className={`burger ${isBurger && `burger-active`}`}>
        <div className={`burger__wrapper ${isBurger && `burger__wrapper_state_active`}`}>
          <nav className={`burger__menu ${isBurger && `burger__menu_state_active`}`}>
            <button onClick={onClose} className='burger__menu-btn link-hover'>
              <img className='burger__menu-img link' src={cross} alt='кнопка закрытия бокового меню' />
            </button>
            <ul className='burger__menu-items' >
              <li className='burger__menu-item link'><a className="link" href='#'>Home</a></li>
              <li className='burger__menu-item link'><a className="link" href='#'>Skills</a></li>
              <li className='burger__menu-item link'><a className="link" href='#'>About Us</a></li>
              <li className='burger__menu-item link'><a className="link" href='#'>Pricing</a></li>
              <li className='burger__menu-item link'><a className="link" href='#'>Contacts</a></li>
              <li className='burger__menu-item link'><a className="link" href='#'>Let's Talk!</a></li>
            </ul>
          </nav>
        </div>
    </section>
  )
}

export default BurgerMenu;
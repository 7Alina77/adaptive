import contact from '../../images/contact.svg';
import '../Contact/Contact.css';

function Contact() {
  return(
    <section className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <div className="contact__container">
        <p className="contact__text">Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources</p>
        <form className="contact__form">
          <label for='email' className='contact__label'>
            <input placeholder='email@example.com' type='email' name='email' className="contact__input"></input>
          </label>
          <button className="contact__btn link">Subscribe</button>
        </form>
      </div>
      <div className="contact__image">
        <img src={contact} alt="картинка в контактах" className="contact__img"></img>
      </div>
    </section>
  )
}

export default Contact;
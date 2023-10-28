import img from '../../images/Learning languages-bro.svg';
import bulb from '../../images/light-bulb-svgrepo-com.svg';
import '../Landing/Landing.css';

function Landing() {
  return (
    <section className="landing">
      <div className="landing__wrapper">
        <div className="landing__text">
          <h1 className="landing__title">Learn Any Foreign Language</h1>
          <img src={bulb} className='landing__bulb' alt='лампочка'></img>
          <p className="landing__subtitle">With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
          <button className="landing__btn link">Get started</button>
        </div>
        <div className="landing__image">
          <img src={img} className="landing__img" alt='картинка на лендинге'></img>
        </div>
      </div>
    </section>
  );
}

export default Landing;
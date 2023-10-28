import '../About/About.css';
import about from '../../images/Business competition-bro.svg'

function About() {
  return (
    <section className='about'>
      <div className='about__wrapper'>
        <div className='about__text'>
          <h2 className='about__title'>About Us</h2>
          <p className='about__subtitle'>The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.</p>
          <div className='about__columns'>
            <div className='about__card'>
              <h3 className='about__number'>800</h3>
              <p className='about__card-text'>Pupils</p>
            </div>
            <div className='about__card'>
              <h3 className='about__number'>18</h3>
              <p className='about__card-text'>Teachers</p>
            </div>
            <div className='about__card'>
              <h3 className='about__number'>6</h3>
              <p className='about__card-text'>Foreign languages</p>
            </div>
          </div>
        </div>
        <div className='about__image'>
          <img className='about__img' src={about} alt='картинка про нас'></img>
        </div>
      </div>
    </section>
  )
};

export default About;
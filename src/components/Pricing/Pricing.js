import '../Pricing/Pricing.css';
import test from '../../images/Online test-bro.svg';
import lesson from '../../images/Lesson-bro.svg';
import webinar from '../../images/Webinar-bro.svg';

function Pricing() {
  return (
    <section className='pricing'>
      <h2 className='pricing__title'>Pricing</h2>
      <div className='pricing__cards'>
        <div className='pricing__card'>
          <div className='pricing__image'>
            <img src={test} className='pricing__img' alt='картинка в карточке'></img>
          </div>
          <h3 className='pricing__card-title'>Self-study online course</h3>
          <p className='pricing__card-subtitle'>Start learning English online in live classes
with qualified EC teachers and students 
from all over the world.</p>
          <div className='pricing__cost'>
            <h4 className='pricing__cost-number'>£5.99</h4>
            <p className='pricing__cost-text'>per month</p>
          </div>
        </div>
        <div className='pricing__card'>
          <div className='pricing__image'>
            <img src={lesson} className='pricing__img' alt='картинка в карточке'></img>
          </div>
          <h3 className='pricing__card-title'>Live online classes</h3>
          <p className='pricing__card-subtitle'>Interactive group classes with expert
teachers. Free 7-day trial</p>
          <div className='pricing__cost'>
            <h4 className='pricing__cost-number'>£12.99</h4>
            <p className='pricing__cost-text'>per month</p>
          </div>
        </div>
        <div className='pricing__card'>
          <div className='pricing__image'>
            <img src={webinar} className='pricing__img' alt='картинка в карточке'></img>
          </div>
          <h3 className='pricing__card-title'>Personal Tuition</h3>
          <p className='pricing__card-subtitle'>Online one-to-one English tutoring – enjoy
our first session for only $1</p>
          <div className='pricing__cost'>
            <h4 className='pricing__cost-number'>£20.99</h4>
            <p className='pricing__cost-text'>per month</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Pricing;
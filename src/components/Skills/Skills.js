import speaking from '../../images/speaking.svg';
import listening from '../../images/listening.svg';
import reading from '../../images/reading.svg';
import writing from '../../images/writing.svg';
import '../Skills/Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__grid">
        <div className="skills__card first">
          <div className='skills__image'>
            <img src={speaking} className='skills__img' alt='картинка в карточке'></img>
          </div>
          <div className='skills__card-wrapper'>
            <h3 className='skills__card-title'>Speaking</h3>
            <p className='skills__card-text'>Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only</p>
            <p className='skills__card-text'>Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
            <button className='skills__card-btn link'>Learn more</button>
          </div>
        </div>
        <div className="skills__card second">
          <div className='skills__image'>
            <img src={writing} className='skills__img' alt='картинка в карточке'></img>
          </div>
          <div className='skills__card-wrapper'>
            <h3 className='skills__card-title'>Writing</h3>
            <p className='skills__card-text'>One of the most important and extensive areas of natural science, the science that studies substances, also their composition </p>
            <button className='skills__card-btn link'>Learn more</button>
          </div>
        </div>
        <div className="skills__card third">
          <div className='skills__image'>
            <img src={reading} className='skills__img' alt='картинка в карточке'></img>
          </div>
          <div className='skills__card-wrapper'>
            <h3 className='skills__card-title'>Reading</h3>
            <p className='skills__card-text'>perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service</p>
            <button className='skills__card-btn link'>Learn more</button>
          </div>
        </div>
        <div className="skills__card forth">
          <div className='skills__image'>
            <img src={listening} className='skills__img' alt='картинка в карточке'></img>
          </div>
          <div className='skills__card-wrapper'>
            <h3 className='skills__card-title'>Listening</h3>
            <p className='skills__card-text'>Here you can find activities to practise your listening skills. Listening will help you to improve your understanding </p>
            <button className='skills__card-btn link'>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
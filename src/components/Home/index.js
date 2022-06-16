import './home.scss';
import Button from '../Button';

const Home = () => {

  return (
    <div className="home" id='home'>
        <div className='home__text-container'>
            <div className='home__text-container__title'>
              Hi,<br/>
              I'm <strong className='highlight-text'>Romain</strong>,<br/>
              web developer
            </div>
            <p className='home__text-container__tech'>Front End developer / React expert</p>
        </div>
        <div className='home__button'>
          <Button name='Contact me' size={'large'} link='/contact' />
        </div>
    </div>
  );
}

export default Home;
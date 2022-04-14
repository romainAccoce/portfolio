import './home.scss';
import { useSelector } from 'react-redux';
import Button from '../Button';

const Home = () => {

  return (
    <div className="home">
        <div className='home__text-container'>
            <p className='home__text-container__line'>Hi,</p>
            <p className='home__text-container__line'>I'm <strong className='highlight-text'>Romain</strong>,</p> 
            <p className='home__text-container__line'>Web developer</p>
            <p className='home__text-container__tech'>Front End developer / React expert</p>
        </div>
        <div className='home__button'>
          <Button name='Contact me!' size={'large'}/>
        </div>
    </div>
  );
}

export default Home;
import './home.scss';
import { useSelector } from 'react-redux';
import Button from '../Button';

const Home = () => {

  return (
    <div className="home">
        <div className='home__text-container'>
            <p className='home__text-container__text'>Hi,</p>
            <p className='home__text-container__text'>I'm <strong className='highlight-text'>Romain</strong>,</p> 
            <p className='home__text-container__text'>Front End web developer</p>
        </div>
        <p className='home__tech-specification'>#ReactDeveloper</p>
        <Button className='home__button' name='Contact me!' size={'large'}/>
    </div>
  );
}

export default Home;
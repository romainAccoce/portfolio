import './home.scss';
import { useSelector } from 'react-redux';
import picture from '../../assets/images/photo3.png';

const Home = () => {

  const { language } = useSelector((state) => state.displayOptions);

  return (
    <div className="home">
        <div className='home__text-container'>
            <p className='home__text-container__text'>Hi,</p>
            <p className='home__text-container__text'>I'm <strong className='highlight-text'>Romain</strong>,</p> 
            <p className='home__text-container__text'>Front End web developer</p>
        </div>
        <div className='home__techs-container'>
            <p className='home__techs-container__tech highlight-text'>#ReactDeveloper</p>
        </div>
    </div>
  );
}

export default Home;
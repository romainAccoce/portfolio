import './home.scss';

import picture from '../../assets/images/photo3.png';

const Home = () => {
  return (
    <div className="home">
        <img className='home__image' src={picture}/>
        <div className='home__text-container'>
            <p className='home__text-container__text'>Hi,</p>
            <p className='home__text-container__text'>I'm <strong className='highlight-text'>Romain</strong>,</p> 
            <p className='home__text-container__text'>Front End web developer</p>
        </div>
    </div>
  );
}

export default Home;
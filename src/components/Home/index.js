import './home.scss';

import picture from '../../assets/images/photo1.png';

const Home = () => {
  return (
    <div className="home">
        <div className='homme__image-container'>
            <img className='home__image-container__image' src={picture}/>
        </div>
        <p className='home__catch-phrase'>Hi, I'm Romain, Front-End web developer</p>
        <div className='home__contact-button'>contact me</div>
    </div>
  );
}

export default Home;
import './home.scss';
import { Link } from 'react-scroll';

const Home = () => {

  return (
    <div className="home" id='home'>
      <div className='home__content'>
        <div className='home__content__title'>
          Hi,<br/>
          I'm <strong className='highlight-text'>Romain</strong>,<br/>
          web developer
        </div>
        <p className='home__content__tech'>Front End developer / React expert</p>
        {/* Due to the presence of the Link component I cannot use the generic button component, the classname 'button' apply the generic component style anyway*/}
        <div className='home__content__button button'>
          <Link
              to="contact"
              smooth={true}
              duration={500}
          >Contact me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
import './header.scss';
import { Link } from 'react-router-dom';

import {
  faLinkedinIn, faInstagram, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import frenchFlag from '../../assets/images/Flag_of_France.png';
import ukFlag from '../../assets/images/Flag_of_Great_Britain.png';

const Header = () => {
  return (
    <div className="header">
        <nav className='header__nav'>
            <Link to='/' className='header__nav__logo highlight-text'>RA</Link>
            <div className='header__nav__languages-container'>
                <img className='header__nav__languages-container__flag' src={ukFlag} />
                <img className='header__nav__languages-container__flag' src={frenchFlag} />
            </div>
            <ul className='header__nav__list'>
                <Link to='/about' className='header__nav__list__item'>About</Link>
                <Link to='/skills' className='header__nav__list__item'>Skills</Link>
                <Link to='/projects' className='header__nav__list__item'>Projects</Link>
                <Link to='/contact' className='header__nav__list__item'>Contact</Link>
            </ul>
            <div className='header__nav__icons-container'>
                <a className='header__nav__icons-container__icon' href="https://github.com/romainAccoce/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className='header__nav__icons-container__icon' href="https://www.linkedin.com/in/romain-accoce/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className='header__nav__icons-container__icon' href="https://twitter.com/romanocrew/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
        </nav>
    </div>
  );
}

export default Header;
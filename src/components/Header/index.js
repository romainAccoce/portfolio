import './header.scss';

import {
  faLinkedinIn, faInstagram, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  return (
    <div className="header">
        <nav className='header__nav'>
            <div className='header__nav__logo'>RA</div>
            <ul className='header__nav__list'>
                <li className='header__nav__list__item'>About</li>
                <li className='header__nav__list__item'>Skills</li>
                <li className='header__nav__list__item'>Projects</li>
                <li className='header__nav__list__item'>Contact</li>
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
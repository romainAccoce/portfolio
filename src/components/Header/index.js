import './header.scss';
import Burger from '../Burger';
import { setDisplayMenu, setDarkMode } from '../../actions/displayOptions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-scroll";
import {
  faLinkedinIn, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleButton from '../ToggleButton';

const Header = () => {
    const dispatch = useDispatch();
    const { displayMenu, darkMode } = useSelector((state) => state.displayOptions);

    return (
        <div className="header">
            <nav className={ displayMenu ? 'header__nav header__nav--active' : 'header__nav'} >
                <div className={ displayMenu ? 'header__nav__close-button header__nav__close-button--active' : 'header__nav__close-button'}   onClick={() => dispatch(setDisplayMenu())}>+</div>
                <div className='header__nav__burger-button'>
                    <Burger />
                </div>
                <div className={ displayMenu ? 'header__nav__darkmode-toggle header__nav__darkmode-toggle--active' : 'header__nav__darkmode-toggle' } >
                    <ToggleButton isOn={darkMode} handleToggle={ ()=> dispatch(setDarkMode())} role={'set-darkmode'} />
                </div>
                <ul className='header__nav__list'>
                    <li className='header__nav__list__item'>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item__link header__nav__list__item__link--home-active' : 'header__nav__list__item__link' }
                            activeClass="active-link"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Home</Link>
                    </li>
                    <li className='header__nav__list__item'>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item__link header__nav__list__item__link--projects-active' : 'header__nav__list__item__link' }
                            activeClass="active-link"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Projets</Link>
                    </li>
                    <li className='header__nav__list__item'>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item__link header__nav__list__item__link--about-active' : 'header__nav__list__item__link' }
                            activeClass="active-link"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >About</Link>
                    </li>

                    <li className='header__nav__list__item'>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item__link header__nav__list__item__link--contact-active' : 'header__nav__list__item__link' }
                            activeClass="active-link"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Contact</Link>
                    </li>
                </ul>
                <div className={displayMenu ? 'header__nav__icons-container header__nav__icons-container--active' : 'header__nav__icons-container'}>
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
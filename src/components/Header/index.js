import './header.scss';
import Burger from '../Burger';
import { selectLanguage, setDisplayMenu } from '../../actions/displayOptions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-scroll";
import {
  faLinkedinIn, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import frenchFlag from '../../assets/images/Flag_of_France.png';
import ukFlag from '../../assets/images/Flag_of_Great_Britain.png';

const Header = () => {
    const dispatch = useDispatch();
    const { language, displayMenu } = useSelector((state) => state.displayOptions);

    return (
        <div className="header">
            <nav className={ displayMenu ? 'header__nav header__nav--active' : 'header__nav'} >
                <div className={ displayMenu ? 'header__nav__close-button header__nav__close-button--active' : 'header__nav__close-button'}   onClick={() => dispatch(setDisplayMenu())}>+</div>
                <div className='header__nav__burger-button'>
                    <Burger />
                </div>
                {/* <div className='header__nav__languages-container'>
                    <img className='header__nav__languages-container__flag' src={ukFlag} onClick={() => dispatch(selectLanguage('english'))}/>
                    <img className='header__nav__languages-container__flag' src={frenchFlag} onClick={() => dispatch(selectLanguage('french'))} />
                </div> */}
                <ul className='header__nav__list'>
                    <li>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item header__nav__list__item--home-active' : 'header__nav__list__item' }
                            activeClass="active-link"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >{language==='english' ? 'Home' : 'Accueil'}</Link>
                    </li>
                    <li>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item header__nav__list__item--projects-active' : 'header__nav__list__item' }
                            activeClass="active-link"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >{language==='english' ? 'Projects' : 'Projets'}</Link>
                    </li>
                    <li>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item header__nav__list__item--about-active' : 'header__nav__list__item' }
                            activeClass="active-link"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >{language==='english' ? 'About' : 'A propos'}</Link>
                    </li>

                    <li>
                        <Link
                            className={ displayMenu ? 'header__nav__list__item header__nav__list__item--contact-active' : 'header__nav__list__item' }
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
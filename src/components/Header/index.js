import './header.scss';
import Burger from '../Burger';
import { Link } from 'react-router-dom';
import { selectLanguage } from '../../actions/displayOptions';
import { useDispatch, useSelector } from 'react-redux';

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
                <div className='header__nav__burger-button'>
                    <Burger />
                </div>
                <Link to='/' className='header__logo highlight-text'>RAC</Link>
                <div className='header__nav__languages-container'>
                    <img className='header__nav__languages-container__flag' src={ukFlag} onClick={() => dispatch(selectLanguage('english'))}/>
                    <img className='header__nav__languages-container__flag' src={frenchFlag} onClick={() => dispatch(selectLanguage('french'))} />
                </div>
                <ul className='header__nav__list'>
                    <Link to='/about' className='header__nav__list__item__about'>{language==='english' ? 'About' : 'A propos'}</Link>
                    <Link to='/skills' className='header__nav__list__item__skills'>{language==='english' ? 'Skills' : 'Compétences'}</Link>
                    <Link to='/projects' className='header__nav__list__item__projects'>{language==='english' ? 'Projects' : 'Projets'}</Link>
                    <Link to='/contact' className='header__nav__list__item__contact'>Contact</Link>
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
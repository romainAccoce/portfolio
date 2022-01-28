import './header.scss';

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
            <div className='header__nav__icons-container'>Social media icons</div>
        </nav>
    </div>
  );
}

export default Header;
import './header.scss';

const Header = () => {
  return (
    <div className="header">
        <div className='header__logo'>RA</div>
        <nav className='header__nav'>
            <ul className='header__nav__list'>
                <li className='header__nav__list__item'>About</li>
                <li className='header__nav__list__item'>Skills</li>
                <li className='header__nav__list__item'>Projects</li>
                <li className='header__nav__list__item'>Contact</li>
            </ul>
        </nav>
        <div className='header__icons-container'>Social media icons</div>
    </div>
  );
}

export default Header;
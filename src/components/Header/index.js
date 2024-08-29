import "./header.scss";
import { setDisplayMenu, setDarkMode } from "../../actions/displayOptions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-scroll";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronCircleRight,
  faHome,
  faCode,
  faInfoCircle,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleButton from "../ToggleButton";

const Header = () => {
  const dispatch = useDispatch();
  const { displayMenu, darkMode } = useSelector(
    (state) => state.displayOptions
  );

  useEffect(() => {
    const getDarkModeSetting = localStorage.getItem("darkModeLS");

    if (getDarkModeSetting === "true" || !getDarkModeSetting) {
      dispatch(setDarkMode(true));
    } else {
      dispatch(setDarkMode(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("darkModeLS", darkMode);
  }, [darkMode]);

  return (
    <div className={displayMenu ? "header header--active" : "header"}>
      <nav className="header__nav">
        <div
          className={
            displayMenu
              ? "header__nav__close-button header__nav__close-button--active"
              : "header__nav__close-button"
          }
          onClick={() => dispatch(setDisplayMenu())}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} size="lg" />
        </div>
        <div
          className={
            displayMenu
              ? "header__nav__darkmode-toggle header__nav__darkmode-toggle--active"
              : "header__nav__darkmode-toggle"
          }
        >
          <p>{darkMode ? "Light" : "Dark"}</p>
          <ToggleButton
            isOn={darkMode}
            handleToggle={() => dispatch(setDarkMode(!darkMode))}
            role={"set-darkmode"}
          />
        </div>
        <ul
          className={
            displayMenu
              ? "header__nav__list header__nav__list--active"
              : "header__nav__list"
          }
        >
          <li className="header__nav__list__item">
            <Link
              className={
                displayMenu
                  ? "header__nav__list__item__link header__nav__list__item__link--home-active"
                  : "header__nav__list__item__link"
              }
              activeClass="active-link"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FontAwesomeIcon
                className={
                  displayMenu
                    ? "header__nav__list__item__link_icon header__nav__list__item__link_icon--home-active"
                    : "header__nav__list__item__link_icon"
                }
                icon={faHome}
                size="lg"
              />
              <p
                className={
                  displayMenu
                    ? "header__nav__list__item__link_text header__nav__list__item__link_text--home-active"
                    : "header__nav__list__item__link_text"
                }
              >
                Home
              </p>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link
              className={
                displayMenu
                  ? "header__nav__list__item__link header__nav__list__item__link--projects-active"
                  : "header__nav__list__item__link"
              }
              activeClass="active-link"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FontAwesomeIcon
                className={
                  displayMenu
                    ? "header__nav__list__item__link_icon header__nav__list__item__link_icon--projects-active"
                    : "header__nav__list__item__link_icon"
                }
                icon={faCode}
                size="lg"
              />
              <p
                className={
                  displayMenu
                    ? "header__nav__list__item__link_text header__nav__list__item__link_text--projects-active"
                    : "header__nav__list__item__link_text"
                }
              >
                Projects
              </p>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link
              className={
                displayMenu
                  ? "header__nav__list__item__link header__nav__list__item__link--about-active"
                  : "header__nav__list__item__link"
              }
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FontAwesomeIcon
                className={
                  displayMenu
                    ? "header__nav__list__item__link_icon header__nav__list__item__link_icon--about-active"
                    : "header__nav__list__item__link_icon"
                }
                icon={faInfoCircle}
                size="lg"
              />
              <p
                className={
                  displayMenu
                    ? "header__nav__list__item__link_text header__nav__list__item__link_text--about-active"
                    : "header__nav__list__item__link_text"
                }
              >
                About
              </p>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link
              className={
                displayMenu
                  ? "header__nav__list__item__link header__nav__list__item__link--contact-active"
                  : "header__nav__list__item__link"
              }
              activeClass="active-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FontAwesomeIcon
                className={
                  displayMenu
                    ? "header__nav__list__item__link_icon header__nav__list__item__link_icon--contact-active"
                    : "header__nav__list__item__link_icon"
                }
                icon={faAddressCard}
                size="lg"
              />
              <p
                className={
                  displayMenu
                    ? "header__nav__list__item__link_text header__nav__list__item__link_text--contact-active"
                    : "header__nav__list__item__link_text"
                }
              >
                Contact
              </p>
            </Link>
          </li>
        </ul>
        <div
          className={
            displayMenu
              ? "header__nav__icons-container header__nav__icons-container--active"
              : "header__nav__icons-container"
          }
        >
          <a
            className="header__nav__icons-container__icon"
            href="https://github.com/romainAccoce/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="header__nav__icons-container__icon"
            href="https://www.linkedin.com/in/romain-accoce/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className="header__nav__icons-container__icon"
            href="https://twitter.com/romanocrew/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

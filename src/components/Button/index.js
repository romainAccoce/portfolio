import './button.scss';

import PropTypes from 'prop-types';

const Button = ({name, link, dark}) => {

    return (
        <div className={dark ? 'button button--dark' : 'button'}>
            <a className='button__link' href={link}>{name}</a>
        </div>
    );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  dark: PropTypes.bool,
};

Button.defaultProps = {
    link: "",
    dark: false,
};

export default Button;
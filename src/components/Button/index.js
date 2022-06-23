import './button.scss';

import PropTypes from 'prop-types';

/*
Generic button params: 
- name: define text content
- link: define button action
- dark: define button background
- size: define text size (small, medium or large)
*/

const Button = ({name, link, size}) => {

    return (
        <div className='button'>
            <a className={`button__link button__link--${size}`} href={link}>{name}</a>
        </div>
    );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
    link: '',
    size: 'medium',
};

export default Button;
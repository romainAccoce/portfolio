import PropTypes from 'prop-types';
import { IoMdSunny } from 'react-icons/io';
import { BsMoon } from 'react-icons/bs';
import { GB, FR } from 'country-flag-icons/react/3x2'

import './toggle-button.scss';

const ToggleButton = ({ isOn, handleToggle, role }) => (
  <div className="react-switch-checkbox__container">
    <input
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      id="react-switch-new"
      type="checkbox"
    />
    <label
      className="react-switch-label"
      htmlFor="react-switch-new"
    >
        { role === 'set-darkmode' && <span className="react-switch-button">{isOn ? <BsMoon /> : <IoMdSunny />}</span>}
        { role === 'set-language' && <span className="react-switch-button">{isOn ? <FR /> : <GB />}</span>}
    </label>
  </div>
);

ToggleButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleButton;
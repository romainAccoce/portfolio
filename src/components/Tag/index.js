import './tag.scss';

import PropTypes from 'prop-types';

const Tag = ({tech}) => {

    return (
        <div className='tag'>#{tech}</div>
    );
};

Tag.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default Tag;
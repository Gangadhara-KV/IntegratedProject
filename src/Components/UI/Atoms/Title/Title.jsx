import React      from 'react';
import PropTypes  from 'prop-types';

require('./_style.scss');

const Title = props => (
  <h5 className="a__title">{props.text}</h5>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;

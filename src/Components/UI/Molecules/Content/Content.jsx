import React      from 'react';
import PropTypes  from 'prop-types';

import Title      from '../../Atoms/Title/Title';
import Paragraph  from '../../Atoms/Paragraph/Paragraph';

require('./_style.scss');

const Content = props => (
  <div className="m__content">
    <Title text={props.title} />
    <Paragraph text={props.text} />
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Content;

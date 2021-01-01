import React from 'react';
import PropTypes from 'prop-types';
import LogoImage from './Welcomely-logo.png';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <img className={className} src={LogoImage} alt="Welcomely" {...rest} />
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;

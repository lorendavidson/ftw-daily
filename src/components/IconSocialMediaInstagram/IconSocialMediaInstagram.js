import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './IconSocialMediaInstagram.module.css';

const IconSocialMediaInstagram = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <svg version="1.1" className={classes} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 34 34">
    <path d="M16.9,11.7c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1c2.8,0,5.1-2.3,5.1-5.1C21.9,14,19.7,11.7,16.9,11.7z M16.9,20.4
    c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6C20.5,18.8,18.9,20.4,16.9,20.4z"/>
    <path d="M22.1,10.2c-0.7,0-1.2,0.6-1.2,1.2c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2C23.4,10.7,22.8,10.2,22.1,10.2z"/>
    <path d="M21.8,7.1h-10c-2.6,0-4.7,2.1-4.7,4.7v10c0,2.6,2.1,4.7,4.7,4.7h10c2.6,0,4.7-2.1,4.7-4.7v-10C26.5,9.2,24.4,7.1,21.8,7.1z
    M25.2,21.1c0,2.2-1.8,4-4,4h-8.6c-2.2,0-4-1.8-4-4v-8.6c0-2.2,1.8-4,4-4h8.6c2.2,0,4,1.8,4,4V21.1z"/>
    </svg>   
  );
};

IconSocialMediaInstagram.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

IconSocialMediaInstagram.propTypes = { rootClassName: string, className: string };

export default IconSocialMediaInstagram;

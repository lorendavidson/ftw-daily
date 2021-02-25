import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './IconSocialMediaLinkedin.module.css';

const IconSocialMediaLinkedin = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <svg version="1.1" className={classes} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 34 34">
    <path d="M9.2,5.7c1.3,0,2.4,1.1,2.4,2.4c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4
    C6.9,6.7,7.9,5.7,9.2,5.7L9.2,5.7z M7.2,25.3h4.1V12.2H7.2V25.3z"/>
    <path d="M13.8,12.2h3.9V14h0.1c0.5-1,1.9-2.1,3.8-2.1c4.1,0,4.9,2.7,4.9,6.2v7.2h-4.1v-6.4
    c0-1.5,0-3.5-2.1-3.5c-2.1,0-2.4,1.7-2.4,3.4v6.5h-4.1V12.2z"/>
    </svg>   
  );
};

IconSocialMediaLinkedin.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

IconSocialMediaLinkedin.propTypes = { rootClassName: string, className: string };

export default IconSocialMediaLinkedin;

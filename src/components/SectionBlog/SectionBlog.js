import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './SectionBlog.module.css';

var script = document.createElement('script');
script.src = "https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js";
document.getElementsByTagName('body')[0].appendChild(script);

const SectionBlog = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <h3 className={css.title}>Blog</h3>
      <div id="retainable-rss-embed" 
        data-rss="https://medium.com/feed/@meltem.algan"
        data-maxcols="3" 
        data-layout="grid" 
        data-poststyle="inline" 
        data-readmore="Read the rest" 
        data-buttonclass="btn btn-primary" 
        data-offset="-100">
      </div>
    </div>
  );
};

SectionBlog.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionBlog.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionBlog;
